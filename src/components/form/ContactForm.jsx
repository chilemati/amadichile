import React, { useRef, useState } from "react";
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";
import useToastify from "../customHooks/useToastify";
import axios from "axios";
const TO = import.meta.env.VITE_TO;
const SUBJECT = import.meta.env.VITE_SUBJECT;
const EMAIL_URL = import.meta.env.VITE_EMAIL_URL;

const SignupSchema = Yup.object().shape({
  fullName: Yup.string()
    .min(2, "Too Short!")
    .max(50, "Too Long!")
    .required("Required"),
  message: Yup.string()
    .min(2, "Too Short!")
    .max(50, "Too Long!")
    .required("Required"),
  email: Yup.string().email("Invalid email").required("Required"),
});

const ContactForm = () => {
  const { toastContainer, success, dismissAll, info, error, warning } =
    useToastify();
  const form = useRef();
  const [disabled, setDisabled] = useState(false);

  const sendEmail = (resetForm, upd) => {
    info("Sending...");
    setDisabled(true);
    axios
      .post(
        EMAIL_URL,
        {
          from: upd.email,
          to: TO,
          subject: SUBJECT,
          html: `
          <div> 
          <p> Name: ${upd.fullName} </p>
          <p> Email: ${upd.email} </p> 
          </div>
          <p> ${upd.message} </p>
        `,
        },
        {
          headers: {
            "Access-Control-Allow-Origin": "*",
            "Content-Type": "application/json",
          },
        }
      )
      .then((resp) => {
        if (resp.data.status) {
          dismissAll();
          success("Email Sent!");
          setTimeout(() => {
            dismissAll();
            setDisabled(false);
            resetForm();
          }, 5000);
        } else {
          dismissAll();
        }
      })
      .catch((err) => {
        error("Unable to send email");
      });
  };
  return (
    <div className="flexCol gap-1 place-items-center w-full ">
      <Formik
        initialValues={{
          fullName: "",
          message: "",
          email: "",
        }}
        validationSchema={SignupSchema}
        onSubmit={(values, { resetForm }) => {
          // same shape as initial values
          warning("Please Wait...");

          let upd = { ...values };
          sendEmail(resetForm, upd);
        }}
      >
        {({ errors, touched }) => (
          <Form
            ref={form}
            className="flex items-start justify-start flex-col gap-[34px] relative z-0 w-[90%] md:w-[60%] lg:w-[40%]  "
          >
            <fieldset className="flexCol w-full justify-start items-start relative  ">
              <label className="font-bold font-Inter text-co4 text-base mb-4 absolute left-4 top-[-20px] w-fit px-2 bg-white " htmlFor="fullName">
                Full Name
              </label>
              <Field
                className=" h-[56px] w-full py-3 px-4 rounded-[4px] border-[3px] border-co3 "
                placeholder="Your fullname"
                name="fullName"
              />
              {errors.fullName && touched.fullName ? (
                <div className="text-[10px] text-red-700 ">
                  {errors.fullName}
                </div>
              ) : null}
            </fieldset>
            <fieldset className="flexCol w-full justify-start items-start relative  ">
              <label className="font-bold font-Inter text-co4 text-base mb-4 absolute left-4 top-[-20px] w-fit px-2 bg-white" htmlFor="email">
                Email
              </label>
              <Field
                className=" h-[56px] w-full py-3 px-4 rounded-[4px] border-[3px] border-co3"
                placeholder="Your email"
                name="email"
                type="email"
              />
              {errors.email && touched.email ? (
                <div className="text-[10px] text-red-700 ">{errors.email}</div>
              ) : null}
            </fieldset>

            <fieldset className="flexCol w-full justify-start items-start relative ">
              <label className="font-bold font-Inter text-co4 text-base mb-4 absolute left-4 top-[-20px] w-fit px-2 bg-white" htmlFor="message">
                Message
              </label>
              <Field
                as="textarea"
                className=" h-[131px] w-full py-3 px-4 rounded-[4px] border-[3px] border-co3"
                placeholder="Your message"
                name="message"
              />
              {errors.message && touched.message ? (
                <div className="text-[10px] text-red-700 ">
                  {errors.message}
                </div>
              ) : null}
            </fieldset>

           <fieldset className="flex items-center justify-end mt-[24px] w-full " >
           <button
              disabled={disabled}
              className="flexCenter gap-[5px] py-[7px] px-2 my-4 border-b-[2px] border-b-co1  "
              type="submit"
            >
                <img loading="lazy" src="/send.svg" alt="send icon" />
              <span className="font-Inter font-bold text-base text-co2 ">Send</span>
            </button>
           </fieldset>
          </Form>
        )}
      </Formik>
      {toastContainer}
    </div>
  );
};

export default React.memo(ContactForm);
