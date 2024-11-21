import React from 'react'
import { RiDeleteBin6Line } from "react-icons/ri";

function CartBox({cartItems}) {
  console.log(cartItems)
  return (
    <div className='flex items-center border-t-2 border-gray-500 mt-5 p-2 w-full'>
        <img src={cartItems.image} alt="" className='w-[100px]' />
        <div className='flex items-center justify-between w-full'> 
          <div className='flex flex-col w-[50%] px-3'>
            <h2 className='text-xl font-semibold text-gray-800'>{cartItems.name}</h2>
              <div className='flex items-center gap-4 mt-4'>
              <p className='my-2 text-2xl'>₹ {cartItems.price}</p>
              <h3 className='p-1 border border-gray-800 w-10 rounded-md flex items-center justify-center text-xl'>S</h3>
              </div>
          </div>
          <input type="number" name="number" placeholder='0' className='border border-gray-500 p-3 w-36 outline-none'/>
          <RiDeleteBin6Line className='text-3xl cursor-pointer' />
        </div>
      </div>
  )
}

export default CartBox