import React, { useContext, useEffect, useState } from 'react'
import { ShopContext } from '../../store/shopContext'
import Products from '../Products/Products'
import Title from '../Title/Title'

const LatestCollection = () => {
    const {products} = useContext(ShopContext)
    const [letestProd, setLatestProd] = useState([])
    useEffect(()=>{
      setLatestProd(products
        .filter((product) => product.bestseller === false)
        .slice(0,10));
    },[])
  return (
    <div className='flex flex-col items-center justify-center gap-2 mt-10'>
    <Title text1={'LETEST'} text2={'COLLECTIONS'}/>
    <p className='text-2xl text-gray-700'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat ea quis praesentium suscipit.</p>
    <div className='w-[90%] flex flex-wrap items-center justify-center gap-5 mt-11'>
    
    {letestProd
      .map((product) => <Products key={product._id} id={product._id} name={product.name} price={product.price} image={product.image}/>)}
    </div>
  </div>
  )
}

export default LatestCollection