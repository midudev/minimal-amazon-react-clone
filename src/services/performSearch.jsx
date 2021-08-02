import algoliasearch from 'algoliasearch'

const {
  VITE_ALGOLIA_APP_ID,
  VITE_ALGOLIA_API_KEY,
  VITE_ALGOLIA_INDEX_NAME
} = import.meta.env

const client = algoliasearch(VITE_ALGOLIA_APP_ID, VITE_ALGOLIA_API_KEY)
const index = client.initIndex(VITE_ALGOLIA_INDEX_NAME)

export async function performSearch ({ query = '', limit = 5 }) {
  const options = {
    hitsPerPage: limit,
    clickAnalytics: true
  }

  const { hits, queryID } = await index.search(query, options)
  return { hits, queryID }
}

export async function getObject (objectID) {
  return await index.getObject(objectID)
}
