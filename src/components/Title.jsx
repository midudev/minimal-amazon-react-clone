import React from 'react'

export default function Title ({ as: As = 'h2', children }) {
  return <As className='Title'>{children}</As>
}
