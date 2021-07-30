import { useEffect, useState } from 'react'
import { performSearch as performSearchService } from '../services/performSearch.jsx'

export default function useSearch (params = {}) {
  const [results, setResults] = useState(null)

  const performSearch = (params) => {
    const { allowEmpty, query } = params

    if (allowEmpty === false && (query === '' || query === undefined)) {
      return setResults(null)
    }

    performSearchService(params).then(setResults)
  }

  useEffect(() => {
    performSearch(params)
  }, [])

  return {
    performSearch,
    results
  }
}
