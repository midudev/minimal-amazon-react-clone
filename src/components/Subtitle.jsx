import React from 'react'

export default function Subtitle ({ as: As = 'h2', children }) {
  return <As className='Subtitle'>{children}</As>
}
