import React from 'react'
import {about} from '../../../data.json';
import html from 'html-react-parser'

const About = () => {
  return (
    <div id='About' className='min-h-[100vh] pt-[120px] mx-[15px] md:mx-[205px]  ' >
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-[56px] ">
            <div className="w-full lg:w-[360px] h-[220px] lg:h-[440px]  rounded-[20px] ">
                <img loading='lazy' src={about.boxa.img} alt="my picture" className=' rounded-[20px] h-[220px]  lg:h-[440px] w-[180px] mx-auto  lg:w-full ' />
            </div>
            <div className="w-full lg:w-[454px] h-fit ">
                <h3 className="font-Inter font-bold text-2xl text-co2 "> {about.boxb.h3} </h3>
                <h2 className="font-Inter font-bold text-[32px] text-co1 mt-1 "> {about.boxb.h2} </h2>
                <p className="font-Inter font-normal text-[16px] text-co2 mt-4 "> {about.boxb.p2} </p>
                <h4 className="font-Inter font-normal text-[24px] text-co1 mt-4 "> {about.boxb.h4} </h4>
                <p className="font-Inter font-normal text-[16px] text-co2 mt-4 ">{html(about.boxb.p4)}</p>
            </div>
        </div>
        <div className="mt-[40px] ">
            <h3 className="font-Inter font-bold text-2xl text-co2 "> {about.boxc.h3} </h3>
            <div className="flexStart flex-wrap gap-3 mt-[13px] ">
                    {
                        about.boxc.experience.map((lang,i)=> (
                            <span key={i} className="w-fit px-2 py-[5px] border-[1px] border-co1 rounded font-Inter font-normal text-[12px] "> {lang} </span>
                        ))
                    }
                </div>
            <h4 className="font-Inter font-bold text-2xl text-co2 mt-[20px] "> {about.boxc.h4} </h4>
            <div className="flexStart flex-wrap gap-3 mt-[13px] ">
                    {
                        about.boxc.learning.map((lang,i)=> (
                            <span key={i} className="w-fit px-2 py-[5px] border-[1px] border-co1 rounded font-Inter font-normal text-[12px] "> {lang} </span>
                        ))
                    }
                </div>
        </div>
    </div>
  )
}

export default React.memo(About)