import 'styles/globals.css'
import 'styles/flexbox.css'
import { node, object } from 'prop-types'

function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />
}

MyApp.propTypes = {
  Component: node,
  pageProps: object,
}

export default MyApp
