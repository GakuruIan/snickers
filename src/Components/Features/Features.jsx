import React,{useRef} from 'react'
import {motion} from 'framer-motion'

import Icecream from '../../assets/Icecream.png'
import Icebar from '../../assets/ice-bar.png'
import Icecream5 from '../../assets/ice-cream5.png'
import Icecream6 from '../../assets/ice-cream6.png'


const Features = () => {
   const scrollRef = useRef(null)

   const data = [
      {
         image:Icecream,
         text:"SNICKERS Ice Cream Pint"
      },
      {
         image:Icebar,
         text:"SNICKERS Ice Cream Bars, 10 oz (5-Count Box)"
      },
      {
         image:Icecream5,
         text:"SNICKERS Ice Cream Bars, 2 oz (6-Count Box)"
      },
      {
         image:Icecream6,
         text:"SNICKERS Ice Cream Bar, 2.0 oz"
      },
   ]
   

  return (
    <>
    <div className='mt-6 py-4 max-w-6xl mx-auto'>
        <h1 className="text-xl mb-4 text-center text-[#410C00]">Lets chill.</h1>
        <h1 className="text-4xl md:text-7xl text-center my-8 text-[#410C00]">SNICKERS, MEET ICE CREAM.</h1>

        <div className="md:px-0 px-2">
           <div ref={scrollRef} className="grid grid-cols-2 md:grid-cols-4 gap-4 overflow-hidden">
               
               {
                  data.map((info)=>{
                     return <div  className="h-72 rounded-md px-4 md:px-0 py-4 bg-[#410C00] group  transition ease-in-out duration-500 hover:bg-[#545399] hover:cursor-pointer flex items-center justify-center flex-col gap-y-2">
                     <img src={info.image} alt="" className='h-36 md:h-44 w-44 object-cover transition ease-in-out duration-500 group-hover:translate-y-[-8px]' />
                     <p className='mt-4 text-xl text-white text-center font-medium'>{info.text}</p>
                  </div>
                  })
               }
              
           </div>
        </div>

    </div>
    </>
  )
}

export default Features