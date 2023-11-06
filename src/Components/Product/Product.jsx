import React from 'react'
import Caramel from '../../assets/snickers-caramel.png'

const Product = () => {
  return (
    <div className='min-h-[calc(100vh-128px)]'>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="bg-[#F1E3BC] flex items-center h-96 justify-center md:h-[calc(100vh-100px)] w-full">
                <img src={Caramel} alt="" className='h-64 w-64 md:h-96 md:w-96 object-fit '/>
            </div>
            <div className="w-full  md:h-[calc(100vh-100px)] flex items-center justify-center">
                <div className="max-w-6xl mx-auto px-4 py-2">
                   <div className="flex items-center justify-between  mb-6 py-2 md:py-4">
                         <h6 className="text-base font-semibold">Product</h6>
                         <span className='flex items-center gap-x-2'>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18" />
                            </svg>
                           <a href="/" className='text-sm underline'>back to home</a>
                         </span>
                   </div>
                    <h1 className="text-3xl md:text-4xl text-[#410C00] mb-4 py-2 md:py-4">SNICKERS Almond Singles Chocolate Candy Bars, 1.76 oz</h1>
                    <div className="flex items-center gap-x-6 mb-4">
                        <h6 className="text-base font-semibold">Avaliable size </h6>
                        <span className='text-sm'>1.76 oz</span>
                    </div>
                    <p className='text-base py-2'>Satisfaction, but with more crunch. Almond crunch, to be specific. SNICKERS Almond Full Size Candy Bars are the perfect combination of almonds, caramel, nougat and milk chocolate to both satisfy and conquer hunger.</p>

                    <button className="mt-6 flex justify-center items-center gap-4 px-4 py-2 w-48  text-base border-2 font-semibold border-[#410C00]  bg-inherit group hover:bg-[#410C00] duration-300 hover:text-white">
                        Add to cart
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 10.5V6a3.75 3.75 0 10-7.5 0v4.5m11.356-1.993l1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 01-1.12-1.243l1.264-12A1.125 1.125 0 015.513 7.5h12.974c.576 0 1.059.435 1.119 1.007zM8.625 10.5a.375.375 0 11-.75 0 .375.375 0 01.75 0zm7.5 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z" />
                        </svg>
                    </button>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Product