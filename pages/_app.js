import 'styles/_vendors/reset.css'
import 'styles/globals.css'
import { func, object } from 'prop-types'

function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />
}

MyApp.propTypes = {
  Component: func,
  pageProps: object,
}

export default MyApp
