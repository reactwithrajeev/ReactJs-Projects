import React from 'react'

const Subscribe = () => {

  const onSubmitHandler = (event)=>{
    event.preventDefault();
  }
  return (
    <div className='w-[80%] m-10 flex flex-col items-center justify-center h-[250px]'>
        <h1 className='text-3xl mb-4'>Subscribe now & get 25% off</h1>
        <p className='text-1xl'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sit nobis, vitae sint ipsam blanditiis ea.</p>
        <form action="" className='mt-8'>
            <input className="p-4 w-[500px] border outline-none" type="email" name="email" id="" required placeholder='Enter Your Email'/>
            <button onClick={onSubmitHandler} className='p-4 cursor-pointer active:scale-50 transition ease-in-out bg-black text-white' type="submit">SUBSCRIBE</button>
        </form>
    </div>
  )
}

export default Subscribe