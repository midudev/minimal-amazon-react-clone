import React from 'react'
import useCart from '../hooks/useCart.js'
import SubTitle from '@/components/SubTitle'

export default function CartPage () {
  const { getCartSize } = useCart()

  const numOfProductsInCart = getCartSize()

  if (numOfProductsInCart === 0) {
    return (
      <SubTitle as='h2'>Tu cesta de Amazon está vacía
      </SubTitle>
    )
  }

  return (
    <SubTitle as='h2'>Tu cesta de Amazon está vacía
    </SubTitle>
  )
}
