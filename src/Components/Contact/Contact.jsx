import React from 'react'

import { AiOutlineSend } from "react-icons/ai";



const Contact = () => {
  return (
    <div className="h-[calc(100vh-128px)] w-full flex items-center justify-center">
       <div className="w-96">
             <h1 className="text-2xl md:text-5xl text-[#410C00] mb-6">Contact us</h1>
             <div class="mb-6">
                <label for="base-input" className="block mb-2 text-base font-medium text-gray-900">Fullname</label>
                <input type="text" id="base-input" placeholder='John Doe' className="w-full border border-gray-300 text-gray-900 text-sm rounded-sm focus:ring-[#410C00] focus:border-[#410C00] block w-full p-2.5"/>
            </div>
            <div class="mb-6">
                <label for="email" className="block mb-2 text-base font-medium text-gray-900">Email</label>
                <input type="email" id="email" placeholder='Doe@gmail.com' className="w-full border border-gray-300 text-gray-900 text-sm rounded-sm focus:ring-[#410C00] focus:border-[#410C00] block w-full p-2.5"/>
            </div>
            <div className="mb-6">
                <label for="message" class="block mb-2 text-sm font-medium text-gray-900">Your message</label>
                <textarea id="message" rows="4" class="block p-2.5 w-full text-sm text-gray-900 rounded-sm border border-gray-300 focus:ring-[#410C00] focus:border-[#410C00] " placeholder="Leave a comment..."></textarea>
            </div>

            <button className="mt-2 w-full flex justify-center items-center gap-4 px-4 py-2 w-48  text-base border-2 font-semibold border-[#410C00]  bg-inherit group hover:bg-[#410C00] duration-300 hover:text-white">
                Submit message
                <AiOutlineSend/>
            </button>
       </div>
    </div>
  )
}

export default Contact