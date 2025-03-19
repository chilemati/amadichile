import { Link } from 'react-router-dom'
import {home} from '../../../data.json'
import parse from 'html-react-parser'
import React from 'react'

const Home = () => {
  return (
    <div id='Home' className=' w-[90%] md:w-[510px] mx-auto pt-[70px]'>
        <h2 className="font-Inter font-bold text-[30px] md:text-[48px] text-co2 "> {home.line1} </h2>
        <p className="font-Inter font-bold text-[24px] mt-2 text-co2">
            {parse(home.line2)}
        </p>
        <div className="mt-[32px] flexBetween ">
            <div className="flexStart gap-2 ">
                {
                    home.line3.boxa.map(each=> (
                        <Link className='w-fit' target='_blank'  key={each.name} to={each.url} > <img className='w-[24px] h-[24px] ' src={each.icon} alt={each.name} loading='lazy' /> </Link>
                    ))
                }
            </div>
            <div className="flexCenter gap-2 h-[40px] w-[160px] border-b-[2px] border-b-co1 ">
                <img className='w-[24px] h-[24px] ' src={home.line3.boxb.icon} alt={home.line3.boxb.name} />
                <a className='font-Inter font-bold text-[16px]' href={home.line3.boxb.url} download >Download CV</a>
            </div>
        </div>
    </div>
  )
}

export default React.memo(Home)