import React from 'react'
import Project from './modules/Project'
import projectsData from "@/data/projects.json"

function Projects() {
    return (
        <div className='p-4'>
            <h1 className='text-5xl text-center mt-16 drop-shadow-2xl text-primary drop-shadow-primary'>Projects</h1>
            <div className='flex flex-wrap gap-6 justify-center mt-8'>
                {projectsData.map(project => <Project key={project.title} data={project} />)}
            </div>
        </div>
    )
}

export default Projects