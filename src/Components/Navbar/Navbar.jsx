import React from 'react'
import { BiMenuAltRight } from "react-icons/bi";
import { FiShoppingBag } from "react-icons/fi";

const Navbar = () => {
  return (
    <div className='h-32 bg-[#410C00] flex items-center'>
        <div className="flex items-center justify-between w-full max-w-6xl mx-auto px-4 md:px-2">
            <h1 className="text-3xl text-white">Snickers</h1>
             <div className="flex items-center gap-4 hidden md:block">
                <a href="" className='text-xl hover:text-gray-300 hover:cursor-pointer text-white mx-6'>Home</a>
                <a href="" className='text-xl hover:text-gray-300 hover:cursor-pointer text-white mx-6'>About</a>
                <a href="" className='text-xl hover:text-gray-300 hover:cursor-pointer text-white mx-6'>Contact Us</a>
                <a href="" className='text-xl hover:text-gray-300 hover:cursor-pointer text-white mx-6'>Our Products</a>
             </div>
            <div className="flex items-center gap-4">
                  <FiShoppingBag className='h-6 w-6 text-white hover:cursor-pointer'/>
                  <BiMenuAltRight className='h-8 w-8 text-white hover:cursor-pointer'/>
            </div>
        </div>
    </div>
  )
}

export default Navbar