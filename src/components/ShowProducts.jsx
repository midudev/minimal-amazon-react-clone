import React from 'react'
import Card from './Card.jsx'

export default function ShowProducts ({ showAsGrid = true, products }) {
  if (!products || products.length === 0) return null

  return (
    <div className='ShowProducts'>
      {products.map(product => (
        <Card key={product.objectID} {...product} />
      ))}
    </div>
  )
}
