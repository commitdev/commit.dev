import cx from 'classnames'
import { object, string } from 'prop-types'
import styled from 'styled-components'

import { MediaContainer } from './media-container'

const Container = styled(MediaContainer)`
  height: 0;
  padding-bottom: 56.25%; // default aspect ratio 16:9
`

const Video = ({ poster, mp4, webm, className, ...otherProps }) => (
  <Container
    style={{ paddingBottom: `${(poster.height / poster.width) * 100}%` }}
  >
    <video
      {...otherProps}
      data-poster={poster.src}
      preload="none"
      className={cx('lazyload', className)}
      muted
    >
      <source src={webm} type="video/webm; codecs=vp9,vorbis" />
      <source src={mp4} type="video/mp4" />
    </video>
  </Container>
)

Video.propTypes = {
  poster: object,
  mp4: string,
  webm: string,
  className: string,
}

export { Video }
