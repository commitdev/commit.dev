import 'lazysizes'
import 'lazysizes/plugins/parent-fit/ls.parent-fit'
import 'lazysizes/plugins/respimg/ls.respimg'
import { createGlobalStyle } from 'styled-components'

import { lazyStyles } from './lazy-styles'

if (process.browser && !('object-fit' in document.createElement('a').style)) {
  import('lazysizes/plugins/object-fit/ls.object-fit')
}

if (process.browser) {
  import('lazysizes/plugins/unveilhooks/ls.unveilhooks')
}

const GlobalMediaStyles = createGlobalStyle`
  ${lazyStyles}
`

export { Image } from './image'
export { StaticImage } from './static-image'
export { Video } from './video'
export { StaticVideo } from './static-video'
export { BackgroundVideo } from './background-video'
export { StaticBackgroundVideo } from './static-background-video'
export { GlobalMediaStyles }
