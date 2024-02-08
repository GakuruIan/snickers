import React,{useState,useEffect} from 'react'

import { BiMenuAltRight } from "react-icons/bi";
import { FiShoppingBag } from "react-icons/fi";
import { FiX } from "react-icons/fi"
import {motion,AnimatePresence} from 'framer-motion'

const Navbar = () => {
  const [isopen,setIsOpen] =  useState(false);
  const [isSmall,setIsSmall] = useState(false);

  const links = [
    {
      name:"Home",
      link:'/'
    },
    {
      name:"About",
      link:'/about'
    },
    {
      name:"Contact us",
      link:'/contact'
    },
    {
      name:"Our Products",
      link:'/product'
    }
  ]
  
  useEffect(()=>{
    const mediaQuery = window.matchMedia('(max-width: 600px)');

    const handleMediaQueryChange = (e) => {
      setIsSmall(e.matches);
    };

    mediaQuery.addEventListener('change', handleMediaQueryChange);

    // Initial check for the media query match
    setIsSmall(mediaQuery.matches);

    // Cleanup function to remove event listener
    return () => {
      mediaQuery.removeEventListener('change', handleMediaQueryChange);
    };
  },[])
  
  const handleClick =()=>{
    if(isSmall){
      setIsOpen(!isopen)
    }
  }

  const MenuVariants ={
    initial :{
      scaleY:0,
    },

    animate:(index=1)=>({
      scaleY:1,
      transition:{
        duration:0.9,
        ease:[0.12,0,0.39,0],
        staggerChildren:0.3,
        delayChildren:1 * index ,
      }
    }),

    exit:{
      scaleY:0,
      transition:{
        delay:1,
        duration:0.9,
        ease:[0.22,1,0.36,1]
      }
    }
  }

  const LinksVariants = {
   initial:{
     opacity:0,
     y:"20px",
     transition:{
      duration:0.5,
      ease:[0.12,0,0.39,0],
      staggerChildren:0.20,
    }
   },
   animate:(index=1)=>({
    y:0,
    opacity:1,
    transition:{
      duration:0.6,
      staggerChildren:0.2,
      delayChildren:0.04 * index
     }
   }),
   exit:(index=1)=>({
     y:"20px",
     opacity:0,
      transition:{
        duration:0.9,
        ease:[0.12,0,0.39,0],
        staggerChildren:0.20,
        delayChildren:0.04 * index
      }
   })
  }

  const iconVariant = {
    initial :{
      opacity:0
    },
    animate:{
        opacity:1,
        transition:{
          duration:1,
          delay:1
        }
    }
  }

  return (
    <div className='relative h-32 bg-[#410C00] flex items-center'>
        <div className=" flex items-center justify-between w-full max-w-6xl mx-auto px-4 md:px-2">
            <h1 className="text-3xl text-white">Snickers</h1>

            <AnimatePresence> 
              {
                (isSmall && isopen) && 

                <motion.div variants={MenuVariants} initial="initial" animate="animate" exit="exit" className={`fixed overflow-hidden h-screen z-50  right-0 left-0 bottom-0 bg-[#410C00] md:bg-transparent   md:relative md:h-full flex items-center flex-col  md:flex-row justify-center gap-y-8 md:gap-4 origin-top`}>
                     
                     
                      {
                        links.map((link,index)=>{
                           return <motion.div variants={LinksVariants} custom={index} className="overflow-hidden "> 
                             <a   href={`${link.link}`} key={index} className=' text-2xl mb-4 md:mb-0 md:text-xl hover:text-gray-300 hover:cursor-pointer text-white mx-6'>{link.name}</a>
                           </motion.div>
                        })
                      }


                      <motion.span variants={iconVariant} initial="initial" animate="animate"  className="absolute top-[50px] right-[20px] md:hidden  p-2 flex items-center justify-center" onClick={handleClick}>
                        <FiX className='h-5 w-5 text-white hover:cursor-pointer'/>
                      </motion.span>

                  </motion.div>
              }
            </AnimatePresence>


            <div  className={`fixed  h-screen z-50  right-0 left-0 bottom-0 bg-[#410C00] md:bg-transparent  md:relative md:h-full flex items-center flex-col  md:flex-row justify-center gap-y-8 md:gap-4 transition delay-700 ease-in duration-700  ${isSmall && isopen ? 'top-0' :'top-[-100vh]' } md:top-0`}>
                  
                <a href="/" className='text-2xl mb-4 md:mb-0 md:text-xl hover:text-gray-300 hover:cursor-pointer text-white mx-6'>Home</a>
                <a href="/about" className='text-2xl mb-4 md:mb-0 md:text-xl hover:text-gray-300 hover:cursor-pointer text-white mx-6'>About</a>
                <a href="/contact" className='text-2xl mb-4 md:mb-0 md:text-xl hover:text-gray-300 hover:cursor-pointer text-white mx-6'>Contact Us</a>
                <a href="/product" className='text-2xl mb-4 md:mb-0 md:text-xl hover:text-gray-300 hover:cursor-pointer text-white mx-6'>Our Products</a>
                
                <span className="absolute top-[50px] right-[20px] md:hidden  p-2 flex items-center justify-center" onClick={handleClick}>
                  <FiX className='h-5 w-5 text-white hover:cursor-pointer'/>
                </span>
             </div>
             

            <div className="flex items-center gap-4">
                  <FiShoppingBag className='h-6 w-6 text-white hover:cursor-pointer'/>
                  <BiMenuAltRight className='h-8 w-8 text-white hover:cursor-pointer' onClick={handleClick}/>
            </div>
        </div>
    </div>
  )
}

export default Navbar