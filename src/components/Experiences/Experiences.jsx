import React from 'react'
import Work from './Work'
import { exp } from '../../data/config'
const Experiences = () => {
  return (
    <div className="container mx-auto bg-[#A5C9CA] text-center rounded-lg p-12 text-black font-Poppins" id='exp'>
    <p className="text-3xl p-4">Experiences</p>
    <div className="grid grid-rows-2 sm:grid-rows-1 grid-flow-col gap-12 justify-around p-8 text-slate-100">
      {exp.map((work, i)=>{
        return (
          <div>
          <Work 
            key={work.company}
            company={work.company}
            clogo={work.logo}
            title={work.title}
            type={work.type}
            start={work.startDate}
            end={work.endDate}
            duration={work.duration}
            location={work.location}
          />
          </div>
        )
      })}
    </div>
    </div>
    
  )
}

export default Experiences