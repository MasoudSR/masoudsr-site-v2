import React from 'react'
import Skill from './modules/Skill'

function Skills() {
    return (
        <div className='p-4'>
            <h1 className='text-5xl text-center mt-16'>Skills</h1>
            <div className='flex flex-wrap gap-4 justify-center py-24'>
                <Skill skillName="HTML5" fileName="html5.svg" />
                <Skill skillName="CSS3" fileName="css3.svg" />
                <Skill skillName="JavaScript" fileName="javascript.svg" />
                <Skill skillName="TypeScript" fileName="typescript.svg" />
                <Skill skillName="React.js" fileName="react.svg" />
                <Skill skillName="Next.js" fileName="nextjs.svg" />
                <Skill skillName="Sass" fileName="sass.png" />
                <Skill skillName="Material UI" fileName="mui.png" />
                <Skill skillName="Tailwind" fileName="tailwind.svg" />
                <Skill skillName="Redux" fileName="redux.svg" />
                <Skill skillName="GraphQL" fileName="graphql.svg" />
            </div>
        </div>
    )
}

export default Skills