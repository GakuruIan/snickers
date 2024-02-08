import React,{useRef} from 'react'
import caramel from '../../assets/snickers-caramel.png'
import {motion} from 'framer-motion'

const Ad = () => {
  const scrollRef = useRef(null)

  const FadeInAnimations = {
     initial:{
      opacity:0,
      y:80
     },
     animate:(index)=>({
       opacity:1,
       y:0,
       transition:{
        type:"spring",
        damping: 9,
        stiffness: 100,
        duration:0.4,
        delay:0.09,
        ease:[0.36, 0, 0.66, -0.56]
       }
     })
  }
  return (
    <div className=' w-full bg-[#E5AC49] mt-4'>
        <div className="py-4 max-w-6xl mx-auto flex flex-col md:flex-row items-center md:justify-between h-full md:h-[60vh] gap-2 md:gap-4">
            <div className="">
                <img src={caramel} alt="" className='animate-up h-72 md:h-96 md:w-96 w-full object-fit'/>
            </div>
            <div className="px-4 md:px-0" ref={scrollRef}>
                <motion.h6 className="text-3xl md:text-2xl mb-3 text-white">Hello,</motion.h6>
                <motion.h1 variants={FadeInAnimations} initial="initial" whileInView="animate" custom={2} viewport={{once:true,amount:0.8}} className="text-6xl  md:text-7xl text-white max-w-xl">I’M SNICKERS ALMOND. HAVE WE MET?</motion.h1>
            </div>
        </div>
    </div>
  )
}

export default Ad