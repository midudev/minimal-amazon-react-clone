import { useAtom } from 'jotai'
import { useCallback } from 'react'
import { cartAtom } from '@/state/cart'

export default function useCart () {
  const [cart, setCart] = useAtom(cartAtom)

  const addToCart = useCallback((product) => {
    const productInCart = cart.get(product.objectID)

    const quantity = productInCart
      ? productInCart.quantity + 1
      : 1

    cart.set(product.objectID, {
      ...product,
      quantity
    })

    setCart(cart)
  }, [])

  const changeQuantityProductCart = useCallback(({ objectID, quantity }) => {
    const productInCart = cart.get(objectID)
    cart.set(objectID, {
      ...productInCart,
      quantity
    })
  }, [])

  const removeFromCart = useCallback((objectID) => {
    cart.delete(objectID)
  }, [])

  const getCartSize = useCallback(() => cart.size, [])

  return {
    cart,
    addToCart,
    changeQuantityProductCart,
    getCartSize,
    removeFromCart
  }
}
