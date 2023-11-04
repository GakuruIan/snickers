import React from 'react'

import favorite1 from '../../assets/favorite1.jpg'
import favorite2 from '../../assets/favorite2.jpg'
import favorite3 from '../../assets/favorite3.jpg'

const Favorites = () => {
  return (
    <div className='mt-6'>
        <div className="max-w-6xl mx-auto py-4 ">
            <h1 className="text-4xl md:text-7xl  mb-6 text-center text-[#410C00]">TIME TO PLAY FAVORITES.</h1>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-y-4 md:gap-2 py-2 md:px-0 px-4">

                <div className="place-self-center h-full mb-4">
                    <img src={favorite1} alt="" className='h-auto w-72 md:h-64 md:w-64 object-fit hover:cursor-pointer duration-500 hover:scale-105'/>
                    <a href="" className="text-xl  block my-4 text-center">SNICKERS ORIGINALS</a>
                    <a href='' className='px-6 block rounded-md py-3 text-center font-semibold tracking-wide text-base text-white bg-[#3D4BD0] hover:bg-[#5463ec] duration-300'> pick me</a>
                </div>

                <div className="place-self-center h-full">
                    <img src={favorite2} alt="" className='h-auto w-72 md:h-64 md:w-64 object-fit hover:cursor-pointer duration-500 hover:scale-105'/>
                    <a href="" className="text-xl  block my-4 text-center">SNICKERS ALMOND</a>
                    <a href='' className='px-6 block rounded-md py-3 text-center font-semibold tracking-wide text-base text-white bg-[#3D4BD0] hover:bg-[#5463ec] duration-300'> pick me</a>
                </div>

                <div className="place-self-center h-full">
                    <img src={favorite3} alt="" className='h-auto w-72 md:h-64 md:w-64 object-fit hover:cursor-pointer duration-500 hover:scale-105'/>
                    <a href="" className="text-xl  block my-4 text-center">SNICKERS ICE CREAM</a>
                    <a href='' className='px-6 block rounded-md py-3 text-center font-semibold tracking-wide text-base text-white bg-[#3D4BD0] hover:bg-[#5463ec] duration-300'> pick me</a>
                </div>


            </div>
         </div>
    </div>
  )
}

export default Favorites