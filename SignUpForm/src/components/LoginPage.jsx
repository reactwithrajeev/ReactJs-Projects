import React from 'react'
import Header from './Header'

function LoginPage() {
  return (
        <>
        <Header innerText = "Login"/>
        <div className="flex flex-col w-full gap-5 mt-2">
        <input placeholder="Email Id" type="email" name="email" id="" className="w-full bg-slate-700 p-4 rounded-xl text-white"/>
        <input type="password" name="password" placeholder="Password" className="w-full bg-slate-700 p-4 rounded-xl text-white"/>
        <p>Lost Password ?<a href="#" className='text-purple-700'>Click Here !</a></p>
       </div>
        </>
  )
}

export default LoginPage