import React, { useState, useCallback, useEffect, useRef } from 'react';
import { FaEye, FaEyeSlash } from 'react-icons/fa';

function App() {
  const passwordRef = useRef(null);
  const [password, setPassword] = useState("");
  const [length, setLength] = useState(8);
  const [numbers, setNumbers] = useState(false);
  const [characters, setCharacters] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  const generatePassword = useCallback(() => {
    let generatedPassword = "";
    let str = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
    if (numbers) str += "0123456789";
    if (characters) str += "!@#$%^&*()_+{}[]:;<>,.?/~";

    for (let i = 0; i < length; i++) {
      const charIndex = Math.floor(Math.random() * str.length);
      generatedPassword += str.charAt(charIndex);
    }
    setPassword(generatedPassword);
  }, [length, numbers, characters]);

  useEffect(() => {
    generatePassword();
  }, [generatePassword]);

  const copyPassword = async () => {
    try {
      await passwordRef.current.select();
      await navigator.clipboard.writeText(password);
      // alert("Password copied to clipboard!");
    } catch (err) {
      console.error("Failed to copy: ", err);
    }
  };

  const togglePasswordVisibility = () => {
    setShowPassword(prev => !prev);
  };

  return (
    <div className='w-full h-screen flex flex-col items-center justify-center bg-gray-900'>
      <h1 className='text-4xl font-bold text-white'>Password Generator App</h1>
      <div className='flex items-center gap-2 w-[60%] justify-center'>
        <input
          type={showPassword ? "text" : "password"}
          placeholder='Generated Password'
          className='p-2 rounded-md text-black mt-5 mb-5 w-[80%]'
          value={password}
          ref={passwordRef}
          readOnly
        />
        <button
          className='w-[20%] text-center text-lg bg-yellow-500 text-black p-2 rounded-md cursor-pointer active:bg-yellow-600'
          onClick={copyPassword}
        >
          Copy
        </button>
      </div>
      <div className='flex items-center gap-5'>
        <input
          type="range"
          min="4"
          max="32"
          value={length}
          onChange={(e) => setLength(Number(e.target.value))}
        />
        <label className='text-white'>Length: {length}</label>
        <div>
          <input
            type="checkbox"
            id="numbers"
            checked={numbers}
            onChange={() => setNumbers(prev => !prev)}
          />
          <label className='text-white ml-2'>Add Numbers</label>
        </div>
        <div>
          <input
            type="checkbox"
            id="characters"
            checked={characters}
            onChange={() => setCharacters(prev => !prev)}
          />
          <label className='text-white ml-2'>Add Characters</label>
        </div>
        <button
          className='flex items-center gap-2 bg-yellow-500 text-black p-2 rounded-md cursor-pointer active:bg-yellow-600'
          onClick={togglePasswordVisibility}
        >
          {showPassword ? "Hide Password" : "Show Password"}
          {showPassword ? <FaEye /> : <FaEyeSlash />}
        </button>
      </div>
    </div>
  );
}

export default App;
