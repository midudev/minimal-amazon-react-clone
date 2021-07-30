import React from 'react'
import useSearch from '@/hooks/useSearch'
import Subtitle from '@/components/Subtitle'
import Container from '@/components/Container.jsx'
import ShowProducts from '@/components/ShowProducts.jsx'

export default function Home () {
  const { results } = useSearch({ limit: 20 })

  return (
    <div className='Home'>
      <Container>
        <Subtitle>Artículos por descubrir</Subtitle>
        <ShowProducts products={results} />
      </Container>
    </div>
  )
}
