import si from 'search-insights'

const {
  VITE_ALGOLIA_APP_ID,
  VITE_ALGOLIA_API_KEY,
  VITE_ALGOLIA_INDEX_NAME
} = import.meta.env

si('init', {
  appId: VITE_ALGOLIA_APP_ID,
  apiKey: VITE_ALGOLIA_API_KEY,
  useCookie: true
})

export default function useAlgoliaInsights () {
  const sendProductAddedToCart = objectID => {
    si('convertedObjectIDs', {
      index: VITE_ALGOLIA_INDEX_NAME,
      eventName: 'Product Added to Cart',
      objectIDs: [objectID]
    })
  }

  const sendProductView = objectID => {
    si('viewedObjectIDs', {
      index: VITE_ALGOLIA_INDEX_NAME,
      eventName: 'Product Viewed',
      objectIDs: [objectID]
    })
  }

  return {
    sendProductAddedToCart,
    sendProductView
  }
}
