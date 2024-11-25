import React, { useContext, useState } from 'react'
import Title from '../components/Title/Title'
import { assets } from '../assets/frontend_assets/assets'
import CartTotal from '../components/CartTotal/CartTotal'
import { ShopContext } from '../store/shopContext'

const PlaceOrder = () => {
  const [method,setMethod] = useState('cod')
  const {navigate} = useContext(ShopContext)
  return (
    <div className='flex items-center justify-between px-20'>
      <div className=' p-5'>
        <Title text1={'DELIVERY'} text2={"INFORMATION"}/>
        <form action="">
          <div className='mt-4'>
            <input required className='border border-gray-500 p-3 mr-2 rounded-lg' type="text" name="firstName"  placeholder='First Name'/>
            <input required className='border border-gray-500 p-3 mr-2 rounded-lg' type="text" name="lastName"  placeholder='Last Name'/>
          </div>
          <div className='mt-4'>
            <input required className='border border-gray-500 p-3 mr-2 rounded-lg w-full' type="email" name='email' placeholder='Email address'/>
          </div>
          <div className='mt-4'>
            <input required className='border border-gray-500 p-3 mr-2 rounded-lg w-full' type="text" name="street" placeholder='street'/>
          </div>
          <div className='mt-4'>
            <input required className='border border-gray-500 p-3 mr-2 rounded-lg' type="text" name="city" placeholder='city' />
            <input required className='border border-gray-500 p-3 mr-2 rounded-lg' type="text" name="state" placeholder='state' />
          </div>
          <div className='mt-4'>
            <input required className='border border-gray-500 p-3 mr-2 rounded-lg' type="text" name="zipcode" placeholder='Zipcode' />
            <input required className='border border-gray-500 p-3 mr-2 rounded-lg' type="text" name="country" placeholder='Cuntry' />
          </div>
          <div className='mt-4'>
            <input required className='border border-gray-500 p-3 mr-2 rounded-lg w-full' type="tel" name="phone" placeholder='Phone' />
          </div>
        </form>
      </div>
      <div className='border p-5'>
        <div>
          <CartTotal/>
        </div>
        <div className='mt-3'>
          <Title text1={"PAYMENT"} text2={"METHOD"}/>
          <div className='mt-3 flex items-center justify-between gap-3'>
            <div onClick={()=> setMethod('stripe')} className={`flex items-center gap-2 p-4 ${method==='stripe'?'border border-gray-600':''}`}>
              <p className={`w-[15px] h-[15px] rounded-full border ${method==='stripe'?'bg-green-500':''}`}></p>
              <img className='w-20' src={assets.stripe_logo} alt="" />
            </div>
            <div onClick={()=> setMethod('razorpay')} className={`flex items-center gap-2 p-4 ${method==='razorpay'?'border border-gray-600':''}`}>
              <p className={`w-[15px] h-[15px] rounded-full border ${method==='razorpay'?'bg-green-500':''}`}></p>
              <img className='w-20' src={assets.razorpay_logo} alt="" />
            </div>
            <div onClick={()=> setMethod('cod')} className={`flex items-center gap-2 p-4  ${method==='cod'?'border border-gray-600':''}`}>
              <p className={`w-[15px] h-[15px] rounded-full border ${method==='cod'?'bg-green-500':''}`}></p>
              <p>CASH ON DELIVERY</p>
            </div>
            </div>
          <button onClick={()=> navigate('/orders')} className='bg-black text-white p-4  px-10 mt-10 active:bg-gray-800'>PLACE ORDER</button>
        </div>
      </div>
    </div>
  )
}

export default PlaceOrder