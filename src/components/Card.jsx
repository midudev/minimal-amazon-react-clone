import React from 'react'
import { Link } from 'wouter'

export default function Card ({ objectID, image, title, price }) {
  return (
    <div className='Card'>
      <Link href={`/dp/${objectID}`}>
        <a className='Card-anchor'>
          <img className='Card-image' src={image} alt={title} loading='lazy' />
          <span className='Card-text'>{title}</span>
          <span className='Card-text'>{price} €</span>
        </a>
      </Link>
    </div>
  )
}
