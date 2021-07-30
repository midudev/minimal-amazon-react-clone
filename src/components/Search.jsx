import React from 'react'
import Icon from '@/components/Icon.jsx'
import SearchResults from './SearchResults.jsx'
import useSearch from '../hooks/useSearch.js'

export default function Search () {
  const { results, performSearch } = useSearch({ allowEmpty: false })

  const handleChange = async (evt) => {
    const { value } = evt.target
    performSearch({ allowEmpty: false, query: value })
  }

  return (
    <form className='Search'>
      <input
        className='Search-input'
        placeholder='Buscar  Miduzon.es'
        data-aria-clear-label='Borrar palabras de búsqueda'
        name='k'
        autoComplete='off'
        autoCorrect='off'
        autoCapitalize='off' dir='auto'
        onChange={handleChange}
      />
      <a
        tabIndex='0'
        href='#'
        aria-label='Borrar palabras de búsqueda'
      >
        <Icon name='clear' />
      </a>
      <button
        className='Search-submit'
        aria-label='Search'
      >
        <Icon name='search' />
      </button>
      <SearchResults results={results} />
    </form>
  )
}
