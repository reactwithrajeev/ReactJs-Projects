import React from 'react'
import { assets } from '../../assets/frontend_assets/assets'

const Footer = () => {
  return (
    <div className='w-full h-[350px] mt-10 p-10 flex items-center justify-center flex-col'>
        <div className='flex items-center justify-between px-16'>
            <div className='w-[35%]'>
                <img src={assets.LOGO} alt="logo" />
                <p className='text-sm'>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Est deserunt recusandae rem quam corporis delectus molestias? Deleniti, voluptatem ipsa? Tenetur vel quos saepe delectus dicta laborum, numquam iste esse autem aperiam debitis, animi similique sed nisi accusantium architecto temporibus tempora. Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                </p>
            </div>
            <ul>
                <h1 className='font-bold text-lg mb-4'>COMPANY</h1>
                <li className='p-2 cursor-pointer hover:-translate-y-1 transition ease-in-out hover:text-red-700'>Home</li>
                <li className='p-2 cursor-pointer hover:-translate-y-1 transition ease-in-out hover:text-red-700'>About Us</li>
                <li className='p-2 cursor-pointer hover:-translate-y-1 transition ease-in-out hover:text-red-700'>Delivery</li>
                <li className='p-2 cursor-pointer hover:-translate-y-1 transition ease-in-out hover:text-red-700'>Privacy Policy</li>
            </ul>
            <ul>
                <h1 className='font-bold text-lg mb-4'>GET IN TOUCH</h1>
                <li className='p-2 cursor-pointer hover:-translate-y-1 transition ease-in-out hover:text-red-700'>+9100000000</li>
                <li className='p-2 cursor-pointer hover:-translate-y-1 transition ease-in-out hover:text-red-700'>rwr@gmail.com</li>
                <li className='p-2 cursor-pointer hover:-translate-y-1 transition ease-in-out hover:text-red-700'>Facebook</li>
            </ul>
        </div>
        <div className='p-6 border-t-2 w-full flex items-center justify-center mt-6'>Copyright 2024@ reactwithrajeev - All Right Reserved.</div>
    </div>
  )
}

export default Footer