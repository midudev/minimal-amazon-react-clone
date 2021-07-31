import React from 'react'

export default function Price ({ price, currency = '€' }) {
  const [whole, fraction] = price.toString().split('.')

  return (
    <span className='Price'>
      <span className='Price-symbol'>{currency}</span>
      <span className='Price-whole'>{whole}</span>
      <span className='Price-fraction'>{fraction}</span>
    </span>
  )
}
