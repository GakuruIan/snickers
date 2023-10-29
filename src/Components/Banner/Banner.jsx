import React from 'react'
import banner from '../../assets/banner-pic.jpg'

const Banner = () => {
  return (
    <div className='h-[60vh] relative w-full'>
        <img src={banner} className='h-full w-full object-cover'/>
        <div className="absolute top-14 md:top-20 left-4 md:left-16 max-w-6xl mx-auto">
          <h1 className="text-7xl md:text-9xl text-white">SNICKERS</h1>
          <h3 className="text-2xl md:text-4xl text-white mt-2">MAYBE YOU JUST NEED A SNICKERS.</h3>
        </div>
    </div>
  )
}

export default Banner