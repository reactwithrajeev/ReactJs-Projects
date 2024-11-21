import React, { useContext } from 'react'
import CartBox from '../components/CartBox/CartBox'
import { CartContext } from '../store/cartContext'


const Cart = () => {
  let {cart} = useContext(CartContext)

  return (
    <>
    <div className='w-full p-10   '>
      <h1 className='p-5 text-3xl text-gray-800'>YOUR CART ____</h1>
      {console.log(cart)}
      {cart.map((cartItems)=>{
        <CartBox cartItems={cartItems}/>
        console.log(cartItems.image)
      })}
    </div>
    <div className='w-full border p-5 flex items-center justify-end'>
      <div className='border w-[30%] p-7' >
        <h1 className='text-3xl font-semibold'>CART TOTALS____</h1>
        <div className='flex items-center justify-between w-[80%] mt-4'>
          <p>Subtotal</p>
          <p>₹ 90.00</p>
        </div>
        <div className='flex items-center justify-between w-[80%] mt-4'>
          <p>Shipping Fee</p>
          <p>₹ 10.00</p>
        </div>
        <div className='flex items-center justify-between w-[80%] mt-4'>
          <p>Total</p>
          <p>₹ 100.00</p>
        </div>
        <button className='p-5 border mt-5  bg-black text-white cursor-pointer rounded-md'>PROCEED TO CHECKOUT</button>
      </div>
    </div>
    </>
  )
}

export default Cart