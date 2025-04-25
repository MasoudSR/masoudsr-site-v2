import Image from 'next/image'
import React from 'react'

function ContactCard({ contact: { title, description, imgURL, link } }) {
    return (
        <a href={link} className='bg-white flex justify-between p-1 pl-6 rounded-full shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:shadow-xl active:translate-y-0.5 active:inset-shadow-sm'>
            <div>
                <h5 className='text-xl'>{title}</h5>
                <p className='text-sm text-gray-600'>{description}</p>
            </div>
            <div>
                <Image src={imgURL} alt="" width={50} height={50} />
            </div>
        </a>
    )
}

export default ContactCard