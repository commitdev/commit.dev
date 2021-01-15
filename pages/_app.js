import 'styles/globals.css'
import 'styles/flexbox.css'
import { func, object } from 'prop-types'

function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />
}

MyApp.propTypes = {
  Component: func,
  pageProps: object,
}

export default MyApp
