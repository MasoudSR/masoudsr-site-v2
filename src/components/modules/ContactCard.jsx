import Image from 'next/image'
import React from 'react'

function ContactCard({ contact: { title, description, imgURL } }) {
    return (
        <div className='bg-white flex justify-between p-1 pl-6 rounded-full'>
            <div>
                <h5 className='text-xl'>{title}</h5>
                <p className='text-sm text-gray-600'>{description}</p>
            </div>
            <div>
                <Image src={imgURL} alt="" width={50} height={50} />
            </div>
        </div>
    )
}

export default ContactCard