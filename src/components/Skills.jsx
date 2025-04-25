import React from 'react'
import Skill from './modules/Skill'
import skillsData from "@/data/skills.json"

function Skills() {
    return (
        <div className='p-4'>
            <h1 className='text-5xl text-center drop-shadow-2xl text-primary drop-shadow-primary'>Skills</h1>
            <div className='flex flex-wrap gap-4 justify-center mt-8'>
                {skillsData.map(skill => <Skill key={skill.title} title={skill.title} imgURL={skill.imgURL} />)}
            </div>
        </div>
    )
}

export default Skills