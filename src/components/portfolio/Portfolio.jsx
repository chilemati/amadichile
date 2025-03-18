import React from 'react'
import Home from './Home'
import Myportfolio from './Myportfolio'
import About from './About'
import Contact from './Contact'

const Portfolio = () => {
  return (
    <div className='Portfolio min-h-[2510px] '  >
        <Home />
        <Myportfolio />
        <About />
        <Contact />
    </div>
  )
}

export default React.memo(Portfolio)