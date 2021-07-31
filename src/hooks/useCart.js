import { useAtom } from 'jotai'
import { cartAtom } from '@/state/cart'

export default function useCart () {
  const [cart, setCart] = useAtom(cartAtom)

  const addToCart = (product) => {
    const { objectID } = product
    const productInCart = cart[objectID]

    if (productInCart) {
      return changeQuantityProductCart({ objectID, quantity: productInCart.quantity + 1 })
    }

    setCart(cart => ({
      ...cart,
      [objectID]: {
        ...product,
        quantity: 1
      }
    }))
  }

  const changeQuantityProductCart = ({ objectID, quantity }) => {
    const productInCart = cart[objectID]
    console.log({ quantity, productInCart })

    if (quantity === 0) {
      return removeFromCart({ objectID })
    }

    setCart(cart => ({
      ...cart,
      [objectID]: {
        ...productInCart,
        quantity
      }
    }))
  }

  const removeFromCart = (objectID) => {
    const { [objectID]: productToRemove, ...restOfCart } = cart
    setCart(restOfCart)
  }

  const getCartSize = () => {
    let quantity = 0

    Object.values(cart)
      .forEach(({ quantity: productQuantity }) => (quantity += productQuantity))

    return quantity
  }

  const getCartSubtotal = () => {
    let subtotal = 0

    Object.values(cart)
      .forEach(({ quantity, price }) => {
        subtotal += quantity * price
      })

    return subtotal
  }

  return {
    addToCart,
    changeQuantityProductCart,
    cart,
    getCartSize,
    getCartSubtotal,
    removeFromCart
  }
}
