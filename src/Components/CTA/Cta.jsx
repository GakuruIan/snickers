import React from 'react'

import home from '../../assets/home.jpg'
import snickers from '../../assets/Snickers-Butterscotch.png'

const Cta = () => {
  return (
    <div className="relative bg-cover h-[75vh] w-full bg-[#303030]"
    >
      <img src={home} className='bg-center bg-no-repeat h-full w-full object-cover mix-blend-overlay'/>
      <div className="absolute  inset-y-1/2  w-full flex gap-y-4 md:gap-4 md:flex-row flex-col justify-center items-center">
        <div className="flex items-center flex-col gap-y-4">
            <h1 className="max-w-xl text-center text-4xl  md:text-7xl text-white  tracking-wider ">SWEET AND SALTY SNICKERS POPCORN.</h1>
            <button className="flex justify-center items-center gap-4 px-4 py-2 w-48 text-white text-base border  bg-inherit group hover:bg-[#fff] hover:text-gray-900">
                Recipe
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-5 h-5 group-hover:text-gray-900">
                <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                </svg>
            </button>
        </div>
        <div className="mt-6 md:mt-0">
               <div className="h-72 w-54 md:w-64 rounded-md px-4 md:px-0 py-4 bg-[#410C00] group  transition ease-in-out duration-500 hover:bg-[#545399] hover:cursor-pointer flex items-center justify-center flex-col gap-y-2">
                  <h1 className="text-xl text-white">Made with</h1>
                  <img src={snickers} alt="" className='h-36 md:h-44 w-full object-cover transition ease-in-out duration-500 group-hover:translate-y-[-8px]' />
                  <p className='mt-4 text-xl text-white text-center font-medium'>SNICKERS Ice Cream Pint</p>
               </div>
        </div>
      </div>
    </div>
  )
}

export default Cta