import React, { useContext, useState,useEffect} from 'react'
import { ShopContext } from '../../store/shopContext'
import Products from '../Products/Products'
import Title from '../Title/Title'

const BestSeller = () => {
    let {products} = useContext(ShopContext)
    const [bestSeller, setBestSeller] = useState([])
    useEffect(()=>{
      setBestSeller(products
        .filter((product) => product.bestseller === true)
        .slice(0,5));
    },[])
  return (
    <div className='flex flex-col items-center justify-center gap-2 mt-10'>
      <Title text1={'BEST'} text2={'SELLERS'}/>
      <p className='text-2xl text-gray-700'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat ea quis praesentium suscipit.</p>
      <div className='w-[90%] flex flex-wrap items-start justify-center gap-5 mt-11'>
      
      {bestSeller
        .map((product) => <Products key={product._id} id={product._id} name={product.name} price={product.price} image={product.image} />)}
      </div>
    </div>
  )
}

export default BestSeller