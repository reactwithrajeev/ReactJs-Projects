import React from 'react'
import {assets} from '../../src/assets/frontend_assets/assets'

const Contact = () => {
  return (
    <div className='w-full flex items-center justify-center gap-5 p-10 flex-col '>
      <h1 className='text-3xl text-gray-800 font-semibold'>CONTACT US ____</h1>
      <div className='flex items-center justify-center gap-5 w-full '>
        <div className='w-[30%]'>
          <img src={assets.contact_img} alt="contact image" />
        </div>
        <div className='w-[40%]'>
          <h1 className='text-2xl text-gray-900 '>Our Store</h1>
          <p className='text-gray-600 mt-4'>457 los angels newYork USA</p>
          <p className='text-gray-600 mt-4 '>Tel: (895) 55565044</p>
          <p className='text-gray-600'>Email: admin@yahoo.com</p>
          <h1 className='text-2xl text-gray-900 mt-5 '>Careers at Rimberio</h1>
          <p className='text-gray-600 mt-4'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Tenetur, cupiditate.</p>
          <button className='p-4 border-2 border-black mt-5 hover:bg-black hover:text-white transition ease-in-out'>Explore Jobs</button>
        </div>
      </div>
    </div>
  )
}

export default Contact