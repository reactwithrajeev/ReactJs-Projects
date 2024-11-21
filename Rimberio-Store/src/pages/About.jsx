import React from 'react'
import { assets } from '../assets/frontend_assets/assets'

const About = () => {
  return (
    <div className='flex flex-col w-full p-14 items-center justify-center gap-4'>
      <h1 className='text-2xl text-gray-900 font-bold'>ABOUT US ___</h1>
      <div className='w-full  border flex items-center justify-center gap-10'>
        <div className='w-[30%]'>
          <img src={assets.about_img} alt="about image" />
        </div>
        <div className='w-[70%]'>
          <p className='py-4 w-[80%] text-gray-600'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quae, pariatur iure deserunt, impedit saepe tempore mollitia tenetur culpa eligendi sunt explicabo reiciendis repellat id unde facere voluptate nisi ipsam necessitatibus deleniti non sint et optio! Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum, quos!</p>
          <p className='py-4 w-[80%] text-gray-600'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Incidunt itaque qui delectus eos, a, corporis, dolores accusamus et earum beatae molestias libero magni non error animi. Facere, iure? Quam rem corrupti repellendus eum aspernatur delectus iure quod modi ullam id, inventore iste molestiae unde iusto. Nobis, debitis fuga. Illum, id.</p>
          <h1 className='text-3xl font-serif font-semibold text-gray-800'>Our Mission</h1>
          <p className='py-4 w-[80%] text-gray-600'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim cum id explicabo, distinctio aperiam cumque, soluta quos debitis at non eius sunt possimus? Molestias totam tempore voluptas cum voluptatem facere commodi alias eos. Excepturi eius cum doloribus delectus repellendus nam architecto numquam nisi voluptatem labore. Ut fugiat, assumenda quis impedit atque aliquid sed quo officiis.</p>
        </div>
      </div>
    </div>
  )
}

export default About