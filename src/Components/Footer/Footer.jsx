import React from 'react'
import logo from '../../assets/logo.png'

const Footer = () => {
  return (
    <div className=''>
      <div className="bg-[#E5AC49] h-full md:h-24 py-4">
         <div className="max-w-6xl h-full mx-auto flex md:items-center flex-col md:flex-row gap-y-4 md:gap-4 md:px-0 px-4">
                 <img src={logo} alt="" className='h-auto w-44 object-fit'/>
                 <div className="grid grid-cols-2 md:grid-cols-3 gap-2 md:gap-4">
                    <a href="" className='text-xl font-semibold text-[#410C00] hover:text-white'>Contact & Help</a>
                    <a href="" className='text-xl font-semibold text-[#410C00] hover:text-white'>About</a>
                    <a href="" className='text-xl font-semibold text-[#410C00] hover:text-white'>Where to buy</a>
                 </div>
         </div>
      </div>
      <div className="bg-[#410C00] py-4">
        <div className="max-w-6xl mx-auto md:px-0 px-4">

            <div className="grid grid-cols-1 md:grid-cols-12 gap-2 border-b border-gray-400 py-1">
                <div className="col-span-4">
                    <h3 className="text-xl text-white mb-2">Follow us</h3>
                    {/* icons */}
                </div>
                <div className="col-span-8">
                    {/* links */}
                    <div className="grid grid-cols-2 md:grid-cols-3 gap-2 md:gap-3">
                        <div className="">
                            <a href="" className='text-base  text-white hover:text-gray-300 block mb-2 md:mb-4'>Link One</a>
                            <a href="" className='text-base  text-white hover:text-gray-300 block mb-2 md:mb-4'>Link Two</a>
                            <a href="" className='text-base  text-white hover:text-gray-300 block mb-2 md:mb-4'>Link Three</a>
                            <a href="" className='text-base  text-white hover:text-gray-300 block mb-2 md:mb-4'>Link Four</a>
                        </div>
                        <div className="">
                            <a href="" className='text-base  text-white hover:text-gray-300 block mb-2 md:mb-4'>Someother Link </a>
                            <a href="" className='text-base  text-white hover:text-gray-300 block mb-2 md:mb-4'>Someother Link </a>
                            <a href="" className='text-base  text-white hover:text-gray-300 block mb-2 md:mb-4'>Someother Link </a>
                            <a href="" className='text-base  text-white hover:text-gray-300 block mb-2 md:mb-4'>Someother Link </a>
                        </div>
                        <div className="">
                            <a href="" className='text-base  text-white hover:text-gray-300 block mb-2 md:mb-4'>Link One</a>
                            <a href="" className='text-base  text-white hover:text-gray-300 block mb-2 md:mb-4'>Link Two</a>
                            <a href="" className='text-base  text-white hover:text-gray-300 block mb-2 md:mb-4'>Link Three</a>
                            <a href="" className='text-base  text-white hover:text-gray-300 block mb-2 md:mb-4'>Link Four</a>
                        </div>
                    </div>
                </div>
            </div>

            {/* selection  */}
            <div className="py-2 mt-4">
                <h1 className="text-4xl md:text-4xl text-white ">LOVE SNICKERS? CHECK OUT MORE BRANDS FROM MARS WRIGLEY.</h1>

                <button className="mt-4 flex justify-center items-center gap-4 px-4 py-2 w-48 text-white text-base border  bg-inherit group hover:bg-[#fff] hover:text-gray-900">
                    See more
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-5 h-5 group-hover:text-gray-900">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                    </svg>
                 </button>
            </div>
            <p className="text-base text-white text-center my-4 py-1">Please note this is a clone , created by an aspiring developer @GakuruCodes</p>
        </div>
      </div>
    </div>
  )
}

export default Footer