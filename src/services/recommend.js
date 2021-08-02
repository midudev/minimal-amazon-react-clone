import recommend from '@algolia/recommend'

const {
  VITE_ALGOLIA_APP_ID,
  VITE_ALGOLIA_API_KEY,
  VITE_ALGOLIA_INDEX_NAME
} = import.meta.env

const recommendClient = recommend(VITE_ALGOLIA_APP_ID, VITE_ALGOLIA_API_KEY)
const indexName = VITE_ALGOLIA_INDEX_NAME

export async function getRelatedProducts (productId) {
  const { results } = await recommendClient.getRelatedProducts([{
    indexName,
    maxRecommendations: 5,
    objectID: productId
  }])

  return results?.[0].hits
}

export async function getFrequentlyBoughtTogether (productId) {
  const { results } = await recommendClient.getFrequentlyBoughtTogether([{
    indexName,
    maxRecommendations: 5,
    objectID: productId
  }])

  return results?.[0].hits
}
