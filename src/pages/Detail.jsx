import React, { useEffect } from 'react'
import useObject from '@/hooks/useObject'
import Container from '@/components/Container.jsx'
import useCart from '@/hooks/useCart.js'
import useAlgoliaInsights from '../hooks/useAlgoliaInsights.js'
import useGetFrequentlyBoughtTogether from '../hooks/useGetFrequentlyBoughtTogether.js'
import useRelatedProducts from '../hooks/useRelatedProducts.js'

export default function Detail ({ params }) {
  const { id } = params
  const { object } = useObject(id)
  const { addToCart } = useCart()
  const { sendProductAddedToCart, sendProductView } = useAlgoliaInsights()

  const { recommendations: relatedProducts } = useRelatedProducts(object?.objectID)
  const { recommendations: frequentlyBoughtTogether } = useGetFrequentlyBoughtTogether(object?.objectID)

  useEffect(() => {
    const objectID = object?.objectID
    if (objectID) {
      sendProductView(objectID)
    }
  }, [object, id])

  if (object === null) return null
  const { name, description, image_link: image, price } = object

  const handleAddToCartClick = () => {
    addToCart(object)
    sendProductAddedToCart(object.objectID)
  }

  return (
    <div className='Detail'>
      <Container>
        <p className='Detail-description'>{description}</p>
        <img className='Detail-image' src={image} alt={name} />
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
      <Container>
        <h4>Relacionado con artículos que has visto</h4>
        <div className='Recommendations'>
          {relatedProducts && relatedProducts.map(({ objectID, name, image_link: image }) => {
            return (
              <a key={objectID} href={`/dp/${objectID}`}>
                <img src={image} alt={name} />
              </a>
            )
          })}
        </div>
      </Container>

      <Container>
        <h4>Puesto que has comprado artículos similares...</h4>
        <div className='Recommendations'>
          {frequentlyBoughtTogether && frequentlyBoughtTogether.map(({ objectID, name, image_link: image }) => {
            return (
              <a key={objectID} href={`/dp/${objectID}`}>
                <img src={image} alt={name} />
              </a>
            )
          })}
        </div>
      </Container>
    </div>
  )
}
