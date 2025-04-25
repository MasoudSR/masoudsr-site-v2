import Image from 'next/image'
import React from 'react'

function Project({ data: { title, subtitle, description, imgURL, link } }) {
  return (
    <div className='bg-gray-50 shadow-sm shadow-gray-300 rounded-xl w-full flex flex-col justify-between p-2'>
      <div>
        <div className='border rounded-lg border-gray-200 flex justify-center bg-white p-2'>
          <img src={imgURL} alt={title} className='h-52' />
        </div>
        <div className='p-3'>
          <div className='flex items-baseline gap-1'>
            <h4 className='text-xl'>{title}</h4>
            <h5 className='text-gray-800'>{subtitle}</h5>
          </div>
          <p className='text-sm mt-4'>{description}</p>
        </div>
      </div>
      <div className='border-t border-gray-300 pt-2'>
        <a href={link} className='px-4 py-2 text-center bg-primary drop-shadow-sm drop-shadow-primary block text-white rounded-lg'>Open</a>
      </div>
    </div>
  )
}

export default Project