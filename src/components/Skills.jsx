import React from 'react'
import Skill from './modules/Skill'
import skillsData from "@/data/skills.json"

function Skills() {
    return (
        <div className='p-4' id='skills'>
            <h1 className='text-5xl text-center mt-16'>Skills</h1>
            <div className='flex flex-wrap gap-4 justify-center py-24'>
                {skillsData.map(skill => <Skill key={skill.title} title={skill.title} imgURL={skill.imgURL} />)}
            </div>
        </div>
    )
}

export default Skills