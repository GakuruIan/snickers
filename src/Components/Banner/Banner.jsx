import React from 'react'
import banner from '../../assets/banner-pic.jpg'
import AnimatedCharacters from '../AnimatedCharacters/AnimatedCharacters'
import AnimatedText from '../AnimatedText/AnimatedText'
const Banner = () => {
  return (
    <div className='h-[60vh] relative w-full'>
        <img src={banner} className='bg-center h-full w-full object-cover'/>
        <div className="absolute top-14 md:top-20 left-4 md:left-16 max-w-6xl mx-auto">
          {/* <h1 className="text-7xl md:text-9xl text-white">SNICKERS</h1> */}
          <AnimatedCharacters text="SNICKERS"/>
          <AnimatedText text="MAYBE YOU JUST NEED A SNICKERS."/>
        </div>
    </div>
  )
}

export default Banner