import React from 'react'
import {motion} from 'framer-motion'

const AnimatedText = ({text,color,classes}) => {
    const words = text.split(" ")

    const container = {
        hidden:{opacity:0},
        visible:(i=1)=>({
            opacity:1,
            transition:{
                staggerChildren:0.12,
                delayChildren:0.04 * i
            }
        })
    }

    const child = {
       hidden :{
        opacity:0,
        y:30,
        transition:{
            type: "spring",
            damping: 9,
            stiffness: 100,
            staggerChildren:0.20,
        }
       },
       visible:{
        opacity:1,
        y:0,
        transition:{
            type: "spring",
            damping: 9,
            stiffness: 100,
            staggerChildren:0.20,
        }
       }
    }

  return (
    <motion.div variants={container} initial="hidden" animate="visible" className='overflow-hidden flex'>
       {words.map((word,index)=>{
         return <motion.span key={index} variants={child}  className={`text-xl md:text-3xl text-white  mt-2 mx-1 ${classes} `}>{word}</motion.span>
       })}
    </motion.div>
  )
}

export default AnimatedText