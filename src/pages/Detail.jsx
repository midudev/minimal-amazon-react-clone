import React from 'react'
import useObject from '@/hooks/useObject'
import Container from '@/components/Container.jsx'
import useCart from '@/hooks/useCart.js'

export default function Detail ({ params }) {
  const { id } = params
  const { object } = useObject(id)
  const { addToCart } = useCart()

  if (object === null) return null
  const { name, description, image_link: image, price } = object

  const handleAddToCartClick = () => {
    addToCart(object)
  }

  return (
    <div className='Detail'>
      <Container>
        <p className='Detail-description'>{description}</p>
        <img className='Detail-image' src={image} alt={name} />
        <div className='Detail-priceContainer'>
          <div>
            Precio:
          </div>
          <span className='Detail-price'>
            {price} €
          </span>
        </div>
        <button className='Detail-addToCart' onClick={handleAddToCartClick}>
          Añadir a la cesta
        </button>
      </Container>
    </div>
  )
}
