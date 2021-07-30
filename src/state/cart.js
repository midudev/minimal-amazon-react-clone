import { atom } from 'jotai'

const atomWithLocalStorage = (key, initialValue) => {
  const getInitialValue = () => {
    const item = window.localStorage.getItem(key)
    if (item !== null) {
      return JSON.parse(item)
    }
    return initialValue
  }

  const baseAtom = atom(getInitialValue())

  const derivedAtom = atom(
    (get) => get(baseAtom),
    (get, set, update) => {
      const nextValue = typeof update === 'function' ? update(get(baseAtom)) : update
      set(baseAtom, nextValue)
      window.localStorage.setItem(key, JSON.stringify(nextValue))
    }
  )
  return derivedAtom
}

export const cartAtom = atomWithLocalStorage('cart', {})
