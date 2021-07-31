import React from 'react'
import useCart from '../hooks/useCart.js'
import Title from '@/components/Title'
import Subtitle from '@/components/Subtitle'
import EmptyCart from '../animations/EmptyCart.jsx'
import Container from '@/components/Container.jsx'
import Price from '@/components/Price.jsx'
import Button from '@/components/Button.jsx'

export default function CartPage () {
  const { cart, getCartSize, getCartSubtotal, removeFromCart } = useCart()

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
      <Subtitle as='h2'>Subtotal <strong>{getCartSubtotal()}€</strong></Subtitle>
      {Object.values(cart).map(product => (
        <div className='CartPage-item' key={product.objectID}>
          <div className='CartPage-itemInfo'>
            <img className='CartPage-itemImage' src={product.image} alt={product.title} />
            <div>
              <h4 className='CartPage-itemTitle'>{product.title}</h4>
              <Price price={product.price} />
              <p className='CartPage-itemStock'>En stock</p>
              <p>Cantidad: {product.quantity}</p>
            </div>
          </div>
          <Button onClick={() => removeFromCart(product.objectID)}>Eliminar</Button>
        </div>
      ))}
    </Container>
  )
}
