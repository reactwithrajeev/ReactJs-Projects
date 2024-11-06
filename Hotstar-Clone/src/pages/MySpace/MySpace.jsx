import React from 'react'
import "./MySpace.css"
import { FaRegCircleQuestion } from "react-icons/fa6";
import { NavLink } from "react-router-dom";


function MySpace() {
  return (
    <div className='w-full h-screen flex flex-col items-center justify-center gap-4 relative'>
        <img src="https://img10.hotstar.com/image/upload/f_auto,q_90,w_384/feature/myspace/my_space_login_in.png" alt="MySpace" />
        <h1 className='text-3xl font-bold'>Login To Disney+ Hotstar</h1>
        <p className='text-lg text-gray-500'>Start Watching Where You Left Off, Personlize For Your Kids And More</p>
        <NavLink to="/login"><button className='text-white px-8 py-4 rounded-md loginButton w-[250px]'>Login</button></NavLink>
        <button className='text-white bg-gray-800 px-8 py-4 rounded-md w-[250px] font-bold justify-center flex items-center gap-2 text-xl absolute top-8 right-10'><FaRegCircleQuestion /> Help & Support</button>
    </div>
  )
}

export default MySpace