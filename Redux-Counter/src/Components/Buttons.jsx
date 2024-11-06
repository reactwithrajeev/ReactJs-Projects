import React from 'react'
import { useDispatch } from 'react-redux'
const Buttons = () => {
  const dispatch = useDispatch();
  const increment = () => {
    dispatch({ type: 'INCREMENT' });
  }
  const decrement = () => {
    dispatch({ type: 'DECREMENT' });
  }
  return (
    <div className='flex gap-4'>
      <button onClick={increment} className='bg-blue-500 text-white px-4 py-2 rounded-md'>Increment</button>
      <button onClick={decrement} className='bg-red-500 text-white px-4 py-2 rounded-md'>Decrement</button>
    </div>
  )
}

export default Buttons