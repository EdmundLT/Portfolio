import React from 'react'
import ProjectCard from './Card'
import { project } from '../../data/config'
const Projects = () => {
  return (
    <div className='p-12 bg-slate-100 font-Poppins text-center' id='projects'>
    
    <p className="p-4 text-3xl">Project</p>
    <div className="grid grid-rows-2 sm:grid-rows-1 grid-flow-col gap-12 justify-around p-8 text-slate-100">
    {project.map((pj, index)=>{
      return(
        <ProjectCard 
          key={pj.projectTitle}
          title={pj.projectTitle}
          img={pj.projectImg}
          description={pj.projectDescription}
          repo={pj.projectRepo}
        />
      )
    })}

      </div>
    </div>
  )
}

export default Projects