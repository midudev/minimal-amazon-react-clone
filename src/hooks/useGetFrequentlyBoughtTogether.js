import { useEffect, useState } from 'react'
import { getFrequentlyBoughtTogether } from '../services/recommend.js'

export default function useGetFrequentlyBoughtTogether (productId) {
  const [recommendations, setRecommendations] = useState([])

  useEffect(() => {
    if (productId) {
      getFrequentlyBoughtTogether(productId).then(setRecommendations)
    }
  }, [productId])

  return {
    recommendations
  }
}
