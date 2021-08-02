import React from 'react'
import { Link } from 'wouter'

export default function Card ({ objectID, image_link: image, name, price }) {
  return (
    <div className='Card'>
      <Link href={`/dp/${objectID}`}>
        <a className='Card-anchor'>
          <img className='Card-image' src={image} alt={name} loading='lazy' />
          <span className='Card-text'>{name}</span>
          <span className='Card-text'>{price} €</span>
        </a>
      </Link>
    </div>
  )
}
