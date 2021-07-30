import React from 'react'
import useCart from '../hooks/useCart.js'
import Title from '@/components/Title'
import EmptyCart from '../animations/EmptyCart.jsx'
import Container from '@/components/Container.jsx'

export default function CartPage () {
  const { cart, getCartSize } = useCart()

  const numOfProductsInCart = getCartSize()

  if (numOfProductsInCart === 0) {
    return (
      <Container>
        <div className='CartPage--empty'>
          <EmptyCart />
          <Title as='h2'>Tu cesta de Amazon está vacía
          </Title>
        </div>
      </Container>
    )
  }

  return (
    <Container>
      <Title as='h1'>Cesta</Title>
      {Object.values(cart).map(product => (
        <div className='CartPage-item' key={product.id}>
          <img className='CartPage-itemImage' src={product.image} alt={product.title} />
          <div>
            <Title as='h2'>{product.title}</Title>
            <p>{product.price} €</p>
            <p>Cantidad: {product.quantity}</p>
          </div>
        </div>
      ))}
    </Container>
  )
}
