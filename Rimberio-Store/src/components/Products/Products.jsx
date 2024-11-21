import React, { useContext } from 'react'
import { NavLink } from 'react-router-dom'
import { ShopContext } from '../../store/shopContext'

const Product = ({id,image,name,price}) => {
  let {currency} = useContext(ShopContext)
 
  return (
   <NavLink to={`/product/${id}`}>
     <div className='w-[250px] h-[350px] cursor-pointer'>
      <div className='overflow-hidden'>
      <img src={image[0]} alt="image"  className='cursor-pointer hover:scale-110 transition ease-in-out' />
      </div>
      <p className='text-[13px] mb-1 mt-1'>{name}</p>
      <h2>{currency} {price}</h2>
    </div>
   </NavLink>
  )
}

export default Product