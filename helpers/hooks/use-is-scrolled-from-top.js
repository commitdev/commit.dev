import { useRef, useState } from 'react'

import { useScrollPosition } from './use-scroll-position'

function useIsScrolledFromTop(offset = 0, throttleDelay) {
  const isScrolledFromTopRef = useRef(false)
  const [isScrolledFromTopState, setIsScrolledFromTop] = useState(false)

  useScrollPosition(
    ({ y }) => {
      const isScrolledFromTop = y > offset

      if (isScrolledFromTop !== isScrolledFromTopRef.current) {
        isScrolledFromTopRef.current = isScrolledFromTop
        setIsScrolledFromTop(isScrolledFromTop)
      }
    },
    [],
    throttleDelay,
  )

  return isScrolledFromTopState
}

export default useIsScrolledFromTop
