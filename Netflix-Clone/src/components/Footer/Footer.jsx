import React from 'react'
import './Footer.css';
import instagram_icon from '../../assets/instagram_icon.png'
import twitter_icon from '../../assets/twitter_icon.png'
import youtube_icon from '../../assets/youtube_icon.png'
import facebook_icon from '../../assets/facebook_icon.png'

function Footer() {
  return (
    <div className='w-full p-10'>
      <div className='flex items-start gap-5  px-12'>
        <img className='w-9 hover:-translate-y-1 hover:scale-90 transition ease-in-out cursor-pointer' src={instagram_icon} alt="" />
        <img className='w-9 hover:-translate-y-1 hover:scale-90 transition ease-in-out cursor-pointer' src={twitter_icon} alt="" />
        <img className='w-9 hover:-translate-y-1 hover:scale-90 transition ease-in-out cursor-pointer' src={youtube_icon} alt="" />
        <img className='w-9 hover:-translate-y-1 hover:scale-90 transition ease-in-out cursor-pointer' src={facebook_icon} alt="" />
      </div>
      <div className='grid grid-cols-4 gap-10 p-10'>
        <ul>
          <li className='text-gray-300 cursor-pointer hover:underline transition ease-in-out hover:scale-90'>Audio Discription</li>
          <li className='text-gray-300 cursor-pointer hover:underline transition ease-in-out hover:scale-90'>Investor Relations</li>
          <li className='text-gray-300 cursor-pointer hover:underline transition ease-in-out hover:scale-90'>Legal Notices</li>
        </ul>
        <ul>
          <li className='text-gray-300 cursor-pointer hover:underline transition ease-in-out hover:scale-90'>Help Centre</li>
          <li className='text-gray-300 cursor-pointer hover:underline transition ease-in-out hover:scale-90'>Jobs</li>
          <li className='text-gray-300 cursor-pointer hover:underline transition ease-in-out hover:scale-90'>Cookies Preferences</li>
        </ul>
        <ul>
          <li className='text-gray-300 cursor-pointer hover:underline transition ease-in-out hover:scale-90'>Gift Cards</li>
          <li className='text-gray-300 cursor-pointer hover:underline transition ease-in-out hover:scale-90'>Terms of Use</li>
          <li className='text-gray-300 cursor-pointer hover:underline transition ease-in-out hover:scale-90'>Corporate Information</li>
        </ul>
        <ul>
          <li className='text-gray-300 cursor-pointer hover:underline transition ease-in-out hover:scale-90'>Media Centre</li>
          <li className='text-gray-300 cursor-pointer hover:underline transition ease-in-out hover:scale-90'>Privacy</li>
          <li className='text-gray-300 cursor-pointer hover:underline transition ease-in-out hover:scale-90'>Contact Us</li>
        </ul>
      </div>
      <p className='w-full text-center border-t-2 border-gray-900 py-10 text-gray-600'>Copyright © 2024 Netflix. All rights reserved.</p>
    </div>
  )
}

export default Footer