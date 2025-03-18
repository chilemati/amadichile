import React, { useEffect, useRef, useState } from 'react'
import {nav} from '../../../data.json'
import classNames from 'classnames';
import { useActiveNav } from '../cusomHooks/useActiveNav';

const Nav = () => {
  const [data,setData] = useState(nav);
  const navRef = useRef();
  const {isInView} = useActiveNav();
  const [view,setView] = useState(null);
  const [loaded,setLooaded] = useState(null)
  useEffect(()=> {
    setLooaded(true)
  },[])
  if(loaded) {
    setInterval(() => {
      if(isInView('Home'))  {
        setView('Home')
        

      }
      if(isInView('MyPortfolio')) {
        setView('MyPortfolio')
        
      }
      if(isInView('About')) {
        setView('About')
        
      }
      if(isInView('Contact')) {
        setView('Contact')
  
      }
    }, 1000);
  }
  
  return (
    <nav ref={navRef} className='sticky z-50 top-[0px] bg-white h-fit pb-1 pt-[40px]   me-4 md:me-[204px] flex justify-end   ' >
      <div className="flexBetween  w-fit gap-[24px]  ">
      {
       loaded && data.map(each=> (
          <a className={classNames('text-co1 text-base font-Inter ',{
            "font-bold": each.id === view,
            "font-normal": each.id !== view
          })} key={each.id} href={`#${each.id}`} > {each.name} </a>
        ))
      }
      </div>
      
    </nav>
  )
}

export default Nav