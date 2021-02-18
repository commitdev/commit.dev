import { useEffect, useState } from 'react'

// setup listener for screen size changes
const useIsCompactScreen = () => {
  const [isCompactScreen, setIsCompactScreen] = useState(false)
  useEffect(() => {
    const mediaWatcher = window.matchMedia('(max-width: 575px)')
    setIsCompactScreen(mediaWatcher.matches)

    const handleSizeChange = (e) => {
      setIsCompactScreen(e.matches)
    }

    if (mediaWatcher.addEventListener) {
      mediaWatcher.addEventListener('change', handleSizeChange)
      return function cleanup() {
        mediaWatcher.removeEventListener('change', handleSizeChange)
      }
    }

    // Backwards compatibility for Safari versions prior to 14. See
    // https://developer.mozilla.org/en-US/docs/Web/API/MediaQueryList/addListener#browser_compatibility for details
    mediaWatcher.addListener(handleSizeChange)
    return function cleanup() {
      mediaWatcher.removeListener(handleSizeChange)
    }
  }, [])

  return isCompactScreen
}

export default useIsCompactScreen
