import { useEffect, useState } from 'react'
import { getRelatedProducts } from '../services/recommend.js'

export default function useRelatedProducts (productId) {
  const [recommendations, setRecommendations] = useState([])

  useEffect(() => {
    if (productId) {
      getRelatedProducts(productId).then(setRecommendations)
    }
  }, [productId])

  return {
    recommendations
  }
}
