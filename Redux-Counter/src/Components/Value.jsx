import React from 'react'
import { useSelector } from 'react-redux'

const Value = () => {
    const counter = useSelector(state => state.counter);
  return (
    <div className='flex items-center justify-center mt-8 mb-4'>
        <p className='text-4xl font-bold'>Counter Value: {counter}</p>
    </div>
  )
}

export default Value