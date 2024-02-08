import React from 'react'
import {motion } from 'framer-motion'

const AnimatedCharacters = ({text}) => {
    const letters = Array.from(text)
    
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
        y:20,
        transition:{
            staggerChildren:0.20,
        }
       },
       visible:{
        opacity:1,
        y:0,
        transition:{
            staggerChildren:0.20,
        }
       }
    }
  return (
    <motion.div variants={container} initial="hidden" animate="visible">
             <motion.h1 variants={child} className='text-7xl md:text-9xl text-white inline-flex'>{text}</motion.h1>
    </motion.div>
  )
}

export default AnimatedCharacters