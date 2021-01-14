import { useEffect, useState } from 'react'

export const useIsMac = (): boolean => {
  const [isMac, setIsMac] = useState(false)

  useEffect(() => {
    if (typeof navigator !== 'undefined') {
      setIsMac(navigator.platform.toUpperCase().indexOf('MAC') >= 0)
    }
  }, [])

  return isMac
}
