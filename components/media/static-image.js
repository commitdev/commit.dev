import { string } from 'prop-types'

import { getStaticImage } from './get-static-image'
import { Image } from './image'

function StaticImage({ name, ...otherProps }) {
  return <Image {...getStaticImage(name)} {...otherProps} />
}

StaticImage.propTypes = {
  name: string,
}

export { StaticImage }
