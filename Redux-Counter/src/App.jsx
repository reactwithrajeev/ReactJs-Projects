import React from 'react'
import Header from './Components/Header'
import Buttons from './Components/Buttons'
import Value from './Components/Value'
const App = () => {
  return (
    <div className='flex flex-col items-center justify-center h-screen'>
      <Header />
      <Value />
      <Buttons />
    </div>
  )
}

export default App