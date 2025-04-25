import Image from 'next/image'
import React from 'react'

function Hero() {
  return (
    <div className='min-w-full min-h-screen bg-primary flex justify-center items-center' id='home'>
      <div className='w-full h-full max-w-screen-lg flex flex-col gap-12 p-4 justify-center rounded-b-4xl lg:flex-row-reverse lg:items-center lg:p-16'>
        <div className='max-w-lg'>
          <Image src="/images/picture.png" width={1080} height={1080} alt='MasoudSR Picture' />
        </div>
        <div className='-translate-y-[50%] lg:translate-0 drop-shadow-sm max-w-lg'>
          <div>
            <Image src="/images/logo.png" width={972} height={239} alt='MASOUD S.R' />
          </div>
          <h2 className='text-primary px-4 py-2 rounded-4xl bg-white mt-2 text-xl text-center'>
            Front-End Web Developer
          </h2>
        </div>
      </div>
    </div>
  )
}

export default Hero