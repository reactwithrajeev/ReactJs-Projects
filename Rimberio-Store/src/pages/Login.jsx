import React, { useState } from "react";
import Title from "../components/Title/Title";

const Login = () => {
  let [currentState, setCurrentState] = useState('login');
  let onSubmitHandler = async (e)=>{
    e.preventDefault();
  }
  return (
    <div className="flex items-center justify-center w-full h-[80vh]">
      <div className="border p-10 rounded w-[500px]">
        <Title text1={currentState==='signUp'?'Sign-Up':'Login'} />
        <form action="" onSubmit={onSubmitHandler}>
            <div className="w-full flex flex-col">
              {currentState==='signUp'?<input required className="border border-gray-500 p-3 mt-3 rounded-md" type="text" name="name" placeholder="Name" />:'' }
            <input required className="border border-gray-500 p-3 mt-3 rounded-md" type="email" name="email" placeholder="Email" />
            <input required className="border border-gray-500 p-3 mt-3 rounded-md" type="password" name="password" placeholder="Password" />
            </div>
          <div className="flex justify-between item-center mt-3 ">
            <p className="text-sm text-red-600 cursor-pointer">Forgot Your Password ?</p>
            <p onClick={()=> setCurrentState(currentState==='login'?'signUp':'login')} className="text-sm text-red-600 cursor-pointer">{currentState==='signUp'?'Create a Account':'Login Here'}</p>
          </div>
          <button  className="mt-5 bg-black text-white p-2 px-10" type="submit">{currentState==='signUp'?'Sign Up':'Sign In'}</button>
        </form>
      </div>
    </div>
  );
};

export default Login;
