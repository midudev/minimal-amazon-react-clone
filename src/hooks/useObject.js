import { useEffect, useState } from 'react'
import { getObject as getObjectService } from '../services/performSearch.jsx'

export default function useObject (objectID) {
  const [object, setObject] = useState(null)

  useEffect(() => {
    getObjectService(objectID).then(setObject)
  }, [objectID])

  return {
    object
  }
}
