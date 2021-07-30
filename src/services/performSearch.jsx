import algoliasearch from 'algoliasearch'

const client = algoliasearch('35T510Q9UB', '7845d79ac90abdc02889c9fcde6efb95')
const index = client.initIndex('miduzon')

export async function performSearch ({ query = '', limit = 5, restrictToId = false }) {
  const options = {
    hitsPerPage: limit,
    ...(
      restrictToId
        ? { restrictSearchableAttributes: ['objectID'] }
        : false
    )
  }

  const { hits } = await index.search(query, options)
  return hits
}
