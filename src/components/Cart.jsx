import React from 'react'
import Icon from './Icon.jsx'
import useCart from '@/hooks/useCart.js'

export default function Cart () {
  const { getCartSize } = useCart()

  return (
    <div className='Cart'>
      <span className='Cart-items'>{getCartSize()}</span>
      <Icon name='cart' />
    </div>
  )
}
