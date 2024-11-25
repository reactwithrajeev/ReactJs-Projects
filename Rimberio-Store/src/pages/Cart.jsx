import React, { useContext, useEffect, useState } from 'react'
import { ShopContext } from '../store/shopContext'
import Title from '../components/Title/Title';
import { assets } from '../assets/frontend_assets/assets';
import CartTotal from '../components/CartTotal/CartTotal';

const Cart = () => {
  const {currency,products,cartItems,updateQuantity,navigate} = useContext(ShopContext);
  let [cartData,setCartData] = useState([]);
  useEffect(()=>{
    let tempData = [];
    for(let items in cartItems){
      for(let item in cartItems[items]){
        if(cartItems[items][item]>0){
          tempData.push({
            _id:items,
            size:item,
            quantity:cartItems[items][item]
          })
        }
      }
    }
    setCartData(tempData)
  },[cartItems])
  return (
    <div className='border-t pt-14 px-10'>
      <div className='text-2xl mb-3'>
        <Title text1={"Your"} text2={"Cart"}/>
      </div>
      <div>
        {
          cartData.map((data,index)=>{
            const productData = products.find((product)=> product._id=== data._id);
            return (
              <div key={index} className='py-4 border-t border-b text-gray-700 grid grid-cols-[4fr_0.5fr_0.5fr] sm:grid-cols-[4fr_2fr_0.5fr] items-center gap-4'>
                <div className='flex items-start gap-6'>
                <img src={productData.image[0]} alt="" className='w-16 sm:w-20'/>
                <div>
                  <p className='text-xs sm:text-lg font-medium'>{productData.name}</p>
                  <div className='flex items-center gap-5 mt-2'>
                    <p>{currency}{productData.price}</p>
                    <p className='px-2 sm:px-3 sm:py-1 border bg-slate-50 '>{data.size}</p>
                  </div>
                </div>
                </div>
                <input onChange={(e)=> e.target.value === ''|| e.target.value==='0'?null:updateQuantity(data._id,data.size,Number(e.target.value))} className='border max-w-10 sm:max-w-20 px-1 sm:px-2 py-1' type="number" min={1} defaultValue={data.quantity} />
                <img onClick={()=> updateQuantity(data._id,data.size,0)} src={assets.bin_icon} alt="" className='w-4 mr-4 sm:w-5 cursor-pointer'/>
              </div>
            )
          })
        }
      </div>
      <div className='flex justify-end my-20'>
              <div className='w-full sm:w-[450px]'>
                  <CartTotal/>
                  <div className='w-full text-end'>
                <button onClick={()=>navigate('place-order')} className='bg-black text-white text-sm my-8 py-3 px-2'>PROCEED TO CHECKOUT</button>
              </div>
              </div>

          </div>
      
    </div>
  )
}

export default Cart