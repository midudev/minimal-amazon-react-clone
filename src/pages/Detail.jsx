import React from 'react'
import useSearch from '@/hooks/useSearch'
import Container from '@/components/Container.jsx'

export default function Detail ({ params }) {
  const { id } = params
  const { results } = useSearch({ query: id, limit: 1, restrictToId: true })
  if (results === null) return null

  const [{ title, description, image, price }] = results

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
        <button className='Detail-addToCart'>
          Añadir a la cesta
        </button>
      </Container>
    </div>
  )
}
