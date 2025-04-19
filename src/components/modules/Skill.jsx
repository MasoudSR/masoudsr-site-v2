import Image from 'next/image'
import React from 'react'

function Skill({ skillName , fileName }) {
    return (
        <div className='w-16 h-16 p-2 rounded-xl shadow-2xl shadow-primary flex justify-center items-center'>
            <Image src={`/images/skills/${fileName}`} width={40} height={40} alt={skillName} className='drop-shadow-2xl'/>
        </div>
    )
}

export default Skill