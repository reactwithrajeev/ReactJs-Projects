import React, { useContext, useState } from 'react'
import {assets} from '../../assets/frontend_assets/assets'
import { NavLink,Link } from 'react-router-dom'
import {ShopContext} from '../../store/shopContext'

const Navbar = () => {
  const [visible,setVisible] = useState(false)
  const {setShowSearchBar, getCartCount} = useContext(ShopContext)
  const handleSearchToggle = () => {
    console.log("click search")
    setShowSearchBar(true); // Toggle search bar visibility.
  };
  return (

    <>
      <div className='flex items-center justify-between py-2 font-medium px-5 border-b-2'>
        <img src={assets.LOGO} alt="logo" className='w-[140px] sm:w-[200px]' />
        <ul className='hidden sm:flex items-center gap-5 text-sm text-gray-700'>
            <NavLink to='/' className="flex flex-col items-center gap-1 p-2">
                <p>Home</p>
            </NavLink>
            <NavLink to='/collection' className="flex flex-col items-center gap-1 p-2">
                <p>Collections</p>
            </NavLink>
            <NavLink to='/about' className="flex flex-col items-center gap-1 p-2">
                <p>About us</p>
            </NavLink>
            <NavLink to='/contact' className="flex flex-col items-center gap-1 p-2">
                <p>Contact</p>
            </NavLink>
        </ul>
        <div  className='flex items-center gap-6'>
            <img onClick={handleSearchToggle} src={assets.search_icon} alt="" className='w-5 cursor-pointer' />
            <div className='group relative'>
                <Link to={'/login'}><img src={assets.profile_icon} alt="" className='w-5 cursor-pointer'/></Link>
                <div className='group-hover:block hidden absolute dropdown-menu right-0 pt-4'>
                  <div className='flex flex-col gap-2 w-36 py-3 px-5 bg-black text-white rounded'>
                  <p className='cursor-pointer hover:text-yellow-200'>My Profile</p>
                  <p className='cursor-pointer hover:text-yellow-200'>Orders</p>
                  <p className='cursor-pointer hover:text-yellow-200'>Logout</p>
                  </div>

                </div>
            </div>
            <Link to="/cart" className='relative'>
              <img src={assets.cart_icon} alt="" className='w-5 min-w-5' />
              <p className='absolute rigth-[-5px] bottom-[-5px] w-4 text-center leading-4 bg-red-700 text-white aspect-square rounded-[50%] text-[8px]'>{getCartCount()}</p>
            </Link>
            <img onClick={()=>setVisible(true)} src={assets.menu_icon} alt="" className='w-5 cursor-pointer sm:hidden '/>
        </div>
        <div className={`absolute top-0 right-0 bottom-0 overflow-hidden bg-white transition-all ${visible?'w-full':'w-0'}`}>
          <div className='flex flex-col text-gray-600 '>
              <div onClick={()=> setVisible(false)} className='flex items-center gap-4  p3 cursor-pointer'>
                <img src={assets.dropdown_icon} alt=""  className='h-4 rotate-180'/>
                <p>Back</p>
              </div>
              <NavLink onClick={()=>setVisible(false)} className="py-5 px-3" to="/">Home</NavLink>
              <NavLink onClick={()=>setVisible(false)} className="py-5 px-3" to="/collection">Collection</NavLink>
              <NavLink onClick={()=>setVisible(false)} className="py-5 px-3" to="/about">About Us</NavLink>
              <NavLink onClick={()=>setVisible(false)} className="py-5 px-3" to="/contact">Contact Us</NavLink>
          </div>
        </div>
      </div>
    </>
  )
}

export default Navbar