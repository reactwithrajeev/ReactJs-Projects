import React, { useState } from "react";
import SignUpPage from "./components/SignUpPage";
import Button from "./components/Button";
import LoginPage from "./components/LoginPage";



function App() {
  let [action , setAction]= useState("Sign Up")
  
  return (
    <div className="w-full h-[100vh] flex items-center justify-center p-32 bg-slate-900">
      <div className="w-1/2 bg-white rounded h-full flex flex-col items-center justify-start p-10">
      {action === "Sign Up"?<SignUpPage/>:<LoginPage/>}
      <Button setAction = {setAction} action = {action}/>
      </div>
    </div>
  );
}

export default App;
