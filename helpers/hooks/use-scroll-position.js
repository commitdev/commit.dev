import { useEffect } from 'react'

const SCROLL_EVENT_TYPE = 'scroll'

function getScrollPosition() {
  if (!process.browser) {
    return { x: 0, y: 0 }
  }

  return { x: window.scrollX, y: window.scrollY }
}

export function useScrollPosition(effect, deps, throttleDelay) {
  let throttleTimeout = null

  const callBack = () => {
    effect(getScrollPosition())
    throttleTimeout = null
  }

  useEffect(() => {
    const handleScroll = () => {
      if (throttleDelay) {
        if (throttleTimeout === null) {
          throttleTimeout = setTimeout(callBack, throttleDelay)
        }
      } else {
        callBack()
      }
    }

    window.addEventListener(SCROLL_EVENT_TYPE, handleScroll)

    return () => window.removeEventListener(SCROLL_EVENT_TYPE, handleScroll)
  }, deps)
}
