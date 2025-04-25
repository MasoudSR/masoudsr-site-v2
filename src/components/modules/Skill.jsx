import Image from 'next/image'
import React from 'react'

function Skill({ title, imgURL }) {
    return (
        <div className='w-16 h-16 p-2 rounded-xl shadow-lg shadow-primary/30 bg-white flex justify-center items-center'>
            {/* <Image src={imgURL} width={40} height={40} alt={title} className='drop-shadow-2xl' /> */}
            <img src={imgURL} alt={title} className='w-10 h-10' />
        </div>
    )
}

export default Skill