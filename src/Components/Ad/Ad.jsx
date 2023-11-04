import React from 'react'
import caramel from '../../assets/snickers-caramel.png'

const Ad = () => {
  return (
    <div className=' w-full bg-[#E5AC49] mt-4'>
        <div className="py-4 max-w-6xl mx-auto flex flex-col md:flex-row items-center md:justify-between h-full md:h-[60vh] gap-2 md:gap-4">
            <div className="">
                <img src={caramel} alt="" className='animate-up h-72 md:h-96 md:w-96 w-full object-fit'/>
            </div>
            <div className="px-4 md:px-0">
                <h6 className="text-3xl md:text-2xl mb-2 text-white">Hello,</h6>
                <h1 className="text-6xl  md:text-7xl text-white max-w-xl">I’M SNICKERS ALMOND. HAVE WE MET?</h1>
            </div>
        </div>
    </div>
  )
}

export default Ad