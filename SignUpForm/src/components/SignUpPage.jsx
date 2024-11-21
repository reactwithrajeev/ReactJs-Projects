import React from 'react'
import Header from './Header'

function SignUpPage() {
  return (
        <>
        <Header innerText = "Sign Up"/>
        <div className="flex flex-col w-full gap-5 mt-2">
        <input placeholder="Name" type="text" name="Name" className="w-full bg-slate-700 p-4 rounded-xl text-white"/>
        <input placeholder="Email Id" type="email" name="email" id="" className="w-full bg-slate-700 p-4 rounded-xl text-white"/>
        <input type="password" name="password" placeholder="Password" className="w-full bg-slate-700 p-4 rounded-xl text-white"/>
       </div>
        </>
  )
}

export default SignUpPage