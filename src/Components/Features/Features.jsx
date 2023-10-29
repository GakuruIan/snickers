import React from 'react'
import Icecream from '../../assets/icecream.png'
import Icebar from '../../assets/ice-bar.png'
import Icecream5 from '../../assets/ice-cream5.png'
import Icecream6 from '../../assets/ice-cream6.png'

const Features = () => {
  return (
    <>
    <div className='mt-6 py-4 max-w-6xl mx-auto'>
        <h1 className="text-xl mb-4 text-center text-[#410C00]">Lets chill.</h1>
        <h1 className="text-4xl md:text-7xl text-center my-8 text-[#410C00]">SNICKERS, MEET ICE CREAM.</h1>

        <div className="md:px-0 px-2">
           <div className="grid grid-cols-2 md:grid-cols-4 gap-4">

               <div className="h-72 rounded-md px-4 md:px-0 py-4 bg-[#410C00] group  transition ease-in-out duration-500 hover:bg-[#545399] hover:cursor-pointer flex items-center justify-center flex-col gap-y-2">
                  <img src={Icecream} alt="" className='h-36 md:h-44 w-44 object-cover transition ease-in-out duration-500 group-hover:translate-y-[-8px]' />
                  <p className='mt-4 text-xl text-white text-center font-medium'>SNICKERS Ice Cream Pint</p>
               </div>
              
               <div className="h-72 rounded-md px-4 md:px-0 py-4 bg-[#410C00] group  transition ease-in-out duration-500 hover:bg-[#545399] hover:cursor-pointer flex items-center justify-center flex-col gap-y-2">
                  <img src={Icebar} alt="" className='h-36 md:h-44 w-44 object-cover transition ease-in-out duration-500 group-hover:translate-y-[-8px]' />
                  <p className='mt-4 text-xl text-white text-center font-medium'>SNICKERS Ice Cream Bars, 10 oz (5-Count Box)</p>
               </div>

               <div className="h-72 rounded-md px-4 md:px-0 py-4 bg-[#410C00] group  transition ease-in-out duration-500 hover:bg-[#545399] hover:cursor-pointer flex items-center justify-center flex-col gap-y-2">
                  <img src={Icecream5} alt="" className='h-36 md:h-44 w-44 object-cover transition ease-in-out duration-500 group-hover:translate-y-[-8px]' />
                  <p className='mt-4 text-xl text-white text-center font-medium'>SNICKERS Ice Cream Bars, 2 oz (6-Count Box)</p>
               </div>

               <div className="h-72 rounded-md px-4 md:px-0 py-4 bg-[#410C00] group  transition ease-in-out duration-500 hover:bg-[#545399] hover:cursor-pointer flex items-center justify-center flex-col gap-y-2">
                  <img src={Icecream6} alt="" className='h-36 md:h-44 w-44 object-cover transition ease-in-out duration-500 group-hover:translate-y-[-8px]' />
                  <p className='mt-4 text-xl text-white text-center font-medium'>SNICKERS Ice Cream Bar, 2.0 oz</p>
               </div>
    
           </div>
        </div>

    </div>
    </>
  )
}

export default Features