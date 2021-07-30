import React from 'react'

export default function SearchResults ({ results }) {
  if (!results || !results.length > 0) return null

  const renderHighlightResult = result => {
    const { _highlightResult: { title } } = result
    return <span className='SearchResults-match' dangerouslySetInnerHTML={{ __html: title.value }} />
  }

  return (
    <div className='SearchResults'>
      {
        results.map(result => (
          <li key={result.objectID} className='SearchResults-item'>
            <a className='SearchResults-anchor' href={`/dp/${result.objectID}`}>
              {renderHighlightResult(result)}
            </a>
          </li>
        ))
      }
    </div>
  )
}
