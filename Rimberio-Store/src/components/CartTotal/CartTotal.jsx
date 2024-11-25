import React, { useContext } from 'react'
import { ShopContext } from '../../store/shopContext'
import Title from '../Title/Title'

const CartTotal = () => {
  let {currency, delivery_Fee, getCartAmount, cartItems} = useContext(ShopContext)
  const [subtotal, setSubtotal] = React.useState(0)
  const [total, setTotal] = React.useState(0)
  
  React.useEffect(() => {
    const updateTotals = async () => {
      try {
        const amount = await getCartAmount()
        console.log('New amount calculated:', amount)
        setSubtotal(amount)
        setTotal(amount + delivery_Fee)
      } catch (error) {
        console.error('Error updating totals:', error)
      }
    }
    
    updateTotals()
  }, [cartItems, delivery_Fee])

  return (
    <div className='w-full'>
      <div className='text-2xl'>
        <Title text1={'CART'} text2={'VALUE'}/>
      </div>
      <div className='flex flex-col gap-2 mt-2 text-sm'>
          <div className='flex justify-between'>
              <p>SUBTOTAL</p>
              <p>{currency}{subtotal.toFixed(2)}</p>
          </div>
          <div className='flex justify-between'>
            <p>SHIPPING FEE</p>
            <p>{currency}{delivery_Fee.toFixed(2)}</p>
          </div>
          <hr />
          <div className='flex justify-between'>
              <b>Total</b>
              <b>{currency}{total.toFixed(2)}</b>
          </div>
      </div>
    </div>
  )
}

export default CartTotal