import React from 'react'
import { Link } from 'react-router-dom';

const ProjectCards = ({data,show}) => {
  return (
    <div className="md:mx-[205px] grid grid-cols-1 lg:grid-cols-2 gap-[72px] pb-[5vh] mx-[15px] ">
    {
      data &&  data.filter((j, i) => {
            if(show) {
                return i <= show;
            }else{
                return j
            }
          }).map(each=> (
            <div key={each.id} className="w-full md:w-[399px] mx-auto ">
                <img className='w-full h-[189px] object-contain ' loading='lazy' src={each.img} alt={each.title} />
                <h4 className="mt-4 font-Inter font-bold text-co1 text-[24px] "> {each.title} </h4>
                <div className="flexStart gap-1 mt-2 ">
                    {
                        each.languages.map((lang,i)=> (
                            <span key={i} className="w-fit px-2 py-[5px] border-[1px] border-co1 rounded font-Inter font-normal text-[12px] "> {lang} </span>
                        ))
                    }
                </div>
                <p className="w-full pb-2 mb-2 h-[82px] font-Inter font-normal text-base text-co2 mt-4 bre "> {String(each.dis).slice(0,109)}{String(each.dis).length > 109?"...":""} </p>
                <div className="flexStart gap-[15px] ">
                    <Link className='flexCenter gap-1 w-fit px-4 py-[7px] border-b-[2px] border-b-co1  ' target={String(each.code.url).includes('isPrivate')?"": "_blank"} to={each.code.url} > <img src="/code.svg" alt="view code" /> <span className="font-Inter font-bold text-base  ">{each.code.text}</span>  </Link>
                    <Link className='flexCenter gap-1 w-fit px-4 py-[7px] border-b-[2px] border-b-co1  ' target={String(each.demo.url).includes('isPrivate')?"": "_blank"} to={each.demo.url} > <img src="/check.svg" alt="view demo" /> <span className="font-Inter font-bold text-base     ">{each.demo.text}</span>  </Link>
                </div>
            </div>
        ))
    }

</div>
  )
}

export default React.memo(ProjectCards)