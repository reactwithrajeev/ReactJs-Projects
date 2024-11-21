import React from 'react';

function Button({ setAction, action }) {
  return (
    <div className="w-full p-10 flex justify-center items-center gap-10">
      <button
        className={`p-4 px-8 rounded-xl cursor-pointer font-semibold ${action === "Sign Up" ? "bg-purple-700 text-white" : "bg-white text-purple-700 border border-slate-600"}`}
        onClick={() => { setAction("Sign Up"); }}
      >
        Sign Up
      </button>
      <button
        className={`p-4 px-8 rounded-xl cursor-pointer font-semibold ${action === "Login" ? "bg-purple-700 text-white" : "bg-white text-purple-700 border border-slate-600"}`}
        onClick={() => { setAction("Login"); }}
      >
        Login
      </button>
    </div>
  );
}

export default Button;
