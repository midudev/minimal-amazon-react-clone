import React from 'react'

export default function Button ({ children, ...props }) {
  return (
    <button className='Button' {...props}>
      {children}
    </button>
  )
}
