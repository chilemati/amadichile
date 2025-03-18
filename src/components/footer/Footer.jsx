import React from 'react'

const Footer = () => {
  return (
    <footer className='mt-[169px] mb-4 text-center ' >
        <p style={{fontFamily: "Helvetica serif"}} className="font-normal text-base text-co2  ">Made with ❤️ by Freddy Montes</p>
        <p style={{fontFamily: "Helvetica serif"}} className="font-normal text-base text-co2  "> &copy; Amadi Chile, {new Date().getFullYear()}. </p>
    </footer>
  )
}

export default React.memo(Footer)