import React from 'react'

const Row = ({Image,heading,text}) => {

  return (
    <div className='min-h-96 w-full mt-4 py-4'>
       <img src={Image} alt="" className='h-full w-full object-cover' />
       {heading && <h1 className='text-6xl text-center my-4'>{heading}</h1>}
       <p className="text-base">{text}</p>
    </div>
  )
}

export default Row