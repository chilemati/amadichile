import React from 'react'
import {portfolio} from '../../../data.json'
import AllProjects from '../paginate/AllProjects'
import { useMediaQuery } from 'react-responsive'


const Myportfolio = () => {
    const isLarge = useMediaQuery({
        query: '(min-width: 1176px)'
      })
  return (
    <div id='MyPortfolio' className='min-h-[100vh] pt-[70px] '>
        <h2 className="font-Inter font-bold text-[30px] md:text-[48px] text-co1 ms-[15px] md:ms-[205px] "> {portfolio.h2} </h2>
       <AllProjects items={portfolio.projects} itemsPerPage={isLarge?2:1} />
    </div>
  )
}

export default React.memo(Myportfolio)