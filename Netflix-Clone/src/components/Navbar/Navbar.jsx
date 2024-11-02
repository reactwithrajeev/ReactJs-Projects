import React from 'react'
import './Navbar.css'
import logo from '../../assets/logo.png'
import search_icon from '../../assets/search_icon.svg'
import bell_icon from '../../assets/bell_icon.svg'
import profile_img from '../../assets/profile_img.png'
import caret_icon from '../../assets/caret_icon.svg'
import { NavLink } from 'react-router-dom'
import { useRef,useEffect } from 'react'
import { logout } from '../../Firebase'

function Navbar() {
  

  const navRef = useRef()
  let changeNavBarBGC = ()=>{
    if(window.scrollY >= 80){
      navRef.current.style.backgroundColor = "black"
    }else{
      navRef.current.style.backgroundColor = "transparent"
    }
  }
  useEffect(()=>{
    window.addEventListener("scroll",changeNavBarBGC)
    return ()=>{
      window.removeEventListener("scroll",changeNavBarBGC)
    }
  },[])

  return (
    <div className='w-full py-5 px-12 flex items-center justify-between fixed top-0 z-10' ref={navRef}>
      <div className='flex items-center gap-10 '>
        <div>
          <img className='w-28' src={logo} alt="logo" />
        </div>
        <div>
          <ul className='flex items-center justify-center gap-5'>
            <li className='text-gray-300 cursor-pointer transition ease-in-out hover:-translate-y-1 hover:scale-90 hover:text-white'>Home</li>
            <li className='text-gray-300 cursor-pointer transition ease-in-out hover:-translate-y-1 hover:scale-90 hover:text-white'>TV Shows</li>
            <li className='text-gray-300 cursor-pointer transition ease-in-out hover:-translate-y-1 hover:scale-90 hover:text-white'>Movies</li>
            <li className='text-gray-300 cursor-pointer transition ease-in-out hover:-translate-y-1 hover:scale-90 hover:text-white'>New & Popular</li>
            <li className='text-gray-300 cursor-pointer transition ease-in-out hover:-translate-y-1 hover:scale-90 hover:text-white'>My List</li>
            <li className='text-gray-300 cursor-pointer transition ease-in-out hover:-translate-y-1 hover:scale-90 hover:text-white'>Browse by Language</li>
          </ul>
        </div>
      </div>
      <div className='flex items-center justify-center gap-5'>
        <img src={search_icon} alt="search Icon" />
        <p>Children</p>
        <img src={bell_icon} alt="bell Icon" />
        <div className='flex items-center justify-center gap-1 relative' id="dropDownBtn">
        <img src={profile_img} alt="Profile Image" className='' />
        <img src={caret_icon} alt="drop Down"  className='cursor-pointer' />
        <div className='w-[180px] bg-slate-800 p-2  absolute bottom-[-45px] right-[-15px]' id="signOutBtn">
            <NavLink onClick={logout}><p className='underline text-gray-200 rounded-lg text-center'>Sign Out Of Netflix</p></NavLink>
        </div>
        </div>
      </div>
    </div>
  )
}

export default Navbar