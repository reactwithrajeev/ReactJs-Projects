import React from 'react'

const Support = ({img,title,disc}) => {
  return (
    <div className=' flex flex-col items-center justify-center gap-2'>
        <img src={img} alt="" className='w-[50px]' />
        <h1 className='text-lg font-semibold'>{title}</h1>
        <p className='text-gray-500'>{disc}</p>
    </div>
  )
}

export default Support