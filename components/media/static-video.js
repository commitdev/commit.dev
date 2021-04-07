import { string } from 'prop-types'

import { getStaticVideo } from './get-static-video'
import { Video } from './video'

function StaticVideo({ name, ...otherProps }) {
  return <Video {...getStaticVideo(name)} {...otherProps} />
}

StaticVideo.propTypes = {
  name: string,
}

export { StaticVideo }
