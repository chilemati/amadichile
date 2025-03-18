import React from 'react'
import {contact}  from '../../../data.json'
import ContactForm from '../form/ContactForm'

const Contact = () => {
  return (
    <div id='Contact' className='min-h-[100vh] pt-[70px]'>
        <h3 className="font-Inter font-bold text-[32px] text-co2 text-center mb-4 "> {contact.title} </h3>
        <ContactForm />
    </div>
  )
}

export default React.memo(Contact)