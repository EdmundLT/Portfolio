import React from 'react'
import ProjectCard from './Card'
import { project } from '../../data/config'
const Projects = () => {
  return (
    <div className='container mx-auto p-12 bg-[#F9F7F7] rounded-lg font-Poppins text-center' id='projects'>
    
    <p className="p-4 text-3xl">Project</p>
    <div className="grid grid-rows-1 gap-6 md:grid-cols-2 lg:grid-cols-3 text-slate-100 xl:grid-cols-3 justify-center">
    {project.map((pj, index)=>{
      return(
        <ProjectCard 
          key={pj.projectTitle}
          title={pj.projectTitle}
          img={pj.projectImg}
          description={pj.projectDescription}
          repo={pj.projectRepo}
          livedemo={pj.livedemo}
        />
      )
    })}

      </div>
    </div>
  )
}

export default Projects