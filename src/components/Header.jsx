import React from 'react'
import Search from './Search.jsx'
import Cart from './Cart.jsx'
import { Link } from 'wouter'
import logoUrl from '../../assets/miduzon.png'

export default function Header () {
  return (
    <header className='Header'>
      <div className='Header-top'>
        <Link href='/'>
          <a>
            <img className='Header-logo' src={logoUrl} alt='logo miduzon' />
          </a>
        </Link>
        <Link href='/cart'>
          <a>
            <Cart />
          </a>
        </Link>
      </div>
      <Search />
    </header>
  )
}
