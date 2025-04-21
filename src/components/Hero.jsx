import Image from 'next/image'
import React from 'react'

function Hero() {
  return (
    <div className='min-w-full min-h-screen bg-primary flex flex-col p-4 justify-center rounded-b-4xl' id='home'>
      <div><Image src="/images/picture.png" width={1080} height={1080} alt='MasoudSR Picture' /></div>
      <div className='-translate-y-[50%] drop-shadow-sm'>
        <div><Image src="/images/logo.png" width={972} height={239} alt='MASOUD S.R' /></div>
        <h2 className='text-primary px-4 py-2 rounded-4xl bg-white mt-2 text-xl text-center'>Front-End Web Developer</h2>
      </div>
    </div>
  )
}

export default Hero