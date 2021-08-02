import React from 'react'
import { Link } from 'wouter'

export default function SearchResults ({ results }) {
  if (!results || !results.length > 0) return null

  const renderHighlightResult = result => {
    const { _highlightResult: { name } } = result
    return <span className='SearchResults-match' dangerouslySetInnerHTML={{ __html: name.value }} />
  }

  return (
    <div className='SearchResults'>
      {
        results.map(result => (
          <li key={result.objectID} className='SearchResults-item'>
            <Link href={`/dp/${result.objectID}`}>
              <a className='SearchResults-anchor'>
                {renderHighlightResult(result)}
              </a>
            </Link>
          </li>
        ))
      }
    </div>
  )
}
