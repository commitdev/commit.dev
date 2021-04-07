import 'styles/_vendors/reset.css'
import 'styles/globals.css'
import 'pretty-scatter/pretty-scatter.css'

import { func, object } from 'prop-types'

import { GlobalMediaStyles } from '../components/media'

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Component {...pageProps} />
      <GlobalMediaStyles />
    </>
  )
}

MyApp.propTypes = {
  Component: func,
  pageProps: object,
}

export default MyApp
