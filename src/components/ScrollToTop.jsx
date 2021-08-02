import { useEffect } from 'react'
import { useLocation } from 'wouter'

export default function ScrollToTop () {
  const [pathname] = useLocation()

  useEffect(() => {
    document.querySelector('.App').scrollTo({ top: 0, behavior: 'smooth' })
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }, [pathname])

  return null
}
