import React from 'react'
import Project from './modules/Project'

function Projects() {
    return (
        <div className='p-4'>
            <h1 className='text-5xl text-center mt-16'>Projects</h1>
            <div className='flex flex-wrap gap-4 justify-center py-24'>
                <Project />
                <Project />
                <Project />
            </div>
        </div>
    )
}

export default Projects