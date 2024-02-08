import React from 'react'
import about from '../../assets/about.jpg'
import {motion} from 'framer-motion'

const About = () => {

  const slider ={
    initial:{
      y:0,
      transition:{
        duration:1.4,
      }
    },
    animate:{
      y:1000,
      transition:{
        duration:1.6,
        delay:1,
        ease:[0.12,0,0.39,0]
      }
    }
  }

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
       damping: 12,
       stiffness: 100,
       duration:0.8,
       delay:0.09 * index,
       ease:[0.36, 0, 0.66, -0.56]
      }
    })
 }

  return (
    <div className='py-4 md:py-0 w-full'>
            <div className="md:mt-0 mt-6 md:h-[calc(100vh-128px)] px-4 md:px-0 max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 place-content-center gap-y-2 md:gap-4">
                    <motion.div   className="relative h-96 w-96 overflow-hidden">
                        <motion.div variants={slider} initial="initial" animate="animate" className="absolute h-full w-full left-0 right-0 top-0 bottom-0 bg-white"></motion.div>
                        <img src={about} className='h-full w-full object-fit' />
                    </motion.div>
                    <div className="">
                      <div className="overflow-hidden">
                         <motion.h6 variants={FadeInAnimations} custom={1} initial="initial" animate="animate" className="text-base font-semibold mb-4">About the snickers</motion.h6>
                      </div>
                      <div className="overflow-hidden">
                         <motion.h1 variants={FadeInAnimations} custom={2} initial="initial" animate="animate" className="text-4xl md:text-7xl mb-4">BEHIND THE BAR.</motion.h1>
                      </div>
                      <div className="overflow-hidden">
                        <motion.p variants={FadeInAnimations} custom={4} initial="initial" animate="animate" className="text-sm">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Error aspernatur, consectetur officia incidunt amet quidem esse adipisci labore eligendi sit enim at tempora. Veritatis animi alias, numquam quod soluta officia quis provident harum minus ratione eligendi quisquam laboriosam est cupiditate temporibus sed? Necessitatibus in quod sunt quos. Iusto ipsa tenetur alias maxime sunt dolores eveniet. Praesentium officiis facere saepe placeat, voluptates eos itaque minima molestiae repudiandae ipsam eaque sed accusamus nesciunt labore. Magnam consequuntur, veniam alias corrupti eaque voluptatibus dolorum aliquam deleniti blanditiis, quisquam, incidunt animi quaerat! Maxime minima aut explicabo quidem sit alias incidunt sapiente modi dolores ducimus porro ad, provident quisquam voluptate ea recusandae possimus beatae facere nostrum est pariatur quasi illum hic rem. Magnam amet nulla atque maiores aspernatur ullam perferendis eos sed molestias aliquam unde aperiam suscipit cumque ut natus nihil itaque, reprehenderit eius nemo quisquam.</motion.p>
                      </div>  
                    </div>
            </div>
    </div>
  )
}

export default About