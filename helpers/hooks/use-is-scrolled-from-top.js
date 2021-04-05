import { useRef, useState } from 'react'

import { useScrollPosition } from './use-scroll-position'

function useIsScrolledFromTop(offset = 0, throttleDelay, onlyOnce = false) {
  const isScrolledFromTopRef = useRef(false)
  const isScrolledOnce = useRef(false)
  const [isScrolledFromTopState, setIsScrolledFromTop] = useState(false)

  useScrollPosition(
    ({ y }) => {
      const isScrolledFromTop = y > offset

      if (
        (!onlyOnce || !isScrolledOnce.current) &&
        isScrolledFromTop !== isScrolledFromTopRef.current
      ) {
        isScrolledFromTopRef.current = isScrolledFromTop
        setIsScrolledFromTop(isScrolledFromTop)
        isScrolledOnce.current = true
      }
    },
    [],
    throttleDelay,
  )

  return isScrolledFromTopState
}

export default useIsScrolledFromTop
