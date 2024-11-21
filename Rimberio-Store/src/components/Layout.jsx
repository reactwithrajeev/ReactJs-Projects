import React from 'react'
import Navbar from '../components/Header/Navbar'
import Support from '../components/Support/Support'
import Subscribe from '../components/Subscribe/Subscribe'
import Footer from '../components/Footer/Footer'
import { Outlet } from 'react-router-dom'
import { assets } from '../assets/frontend_assets/assets'

const Layout = () => {
  return (
    <>
    <Navbar/>
    <Outlet/>
    <div className='w-[100%] flex items-center justify-center gap-x-20 mt-10'>
      <Support img={assets.exchange_icon} title="Easy Exchange Policy"  disc="We offer hassle free exchange policy" />
      <Support img={assets.quality_icon} title="7 Days Return Policy"  disc="We provide 7 days free return policy" />
      <Support img={assets.support_img} title="Best customer support" disc="we provide 24/7 customer support"  />
    </div>
    <div className='w-full flex items-center justify-center'>
    <Subscribe/>
    </div>
    <Footer/>
    </>
  )
}

export default Layout