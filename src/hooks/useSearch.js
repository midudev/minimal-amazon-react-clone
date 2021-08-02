import { useEffect, useState } from 'react'
import { performSearch as performSearchService } from '../services/performSearch.jsx'

export default function useSearch (params = {}) {
  const [results, setResults] = useState({ hits: null, queryID: null })

  const performSearch = (params) => {
    const { allowEmpty, query } = params

    if (allowEmpty === false && (query === '' || query === undefined)) {
      return setResults({ hits: null, queryID: null })
    }

    performSearchService(params).then(setResults)
  }

  useEffect(() => {
    performSearch(params)
  }, [])

  return {
    performSearch,
    results: results.hits,
    queryID: results.queryID
  }
}
