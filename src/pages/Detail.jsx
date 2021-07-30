import React from 'react'
import useSearch from '@/hooks/useSearch'
import Container from '@/components/Container.jsx'
import useCart from '@/hooks/useCart.js'

export default function Detail ({ params }) {
  const { id } = params

  const { results } = useSearch({ query: id, limit: 1, restrictToId: true })
  const { addToCart } = useCart()

  if (results === null) return null

  const [product] = results
  const { title, description, image, price } = product

  const handleAddToCartClick = () => {
    addToCart(product)
  }

  return (
    <div className='Detail'>
      <Container>
        <p className='Detail-description'>{description}</p>
        <img className='Detail-image' src={image} alt={title} />
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
