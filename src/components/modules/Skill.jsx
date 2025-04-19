import Image from 'next/image'
import React from 'react'

function Skill({ title, imgURL }) {
    return (
        <div className='w-16 h-16 p-2 rounded-xl shadow-2xl shadow-primary flex justify-center items-center'>
            <Image src={imgURL} width={40} height={40} alt={title} className='drop-shadow-2xl' />
        </div>
    )
}

export default Skill