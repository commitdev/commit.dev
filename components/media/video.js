import cx from 'classnames'
import { object, string } from 'prop-types'
import styled from 'styled-components'

const Container = styled.div`
  display: block;
  position: relative;
  width: 100%;
  height: 0;
  padding-bottom: 56.25%; // default aspect ratio 16:9
`

const StyledVideo = styled.video`
  display: block;
  width: 100%;
  position: absolute;
  top: 0;
  bottom: 0;
`

const Video = ({ poster, mp4, webm, className, ...otherProps }) => (
  <Container
    style={{ paddingBottom: `${(poster.height / poster.width) * 100}%` }}
  >
    <StyledVideo
      data-poster={poster.src}
      preload="none"
      {...otherProps}
      className={cx('lazyload', className)}
    >
      <source src={webm} type="video/webm; codecs=vp9,vorbis" />
      <source src={mp4} type="video/mp4" />
    </StyledVideo>
  </Container>
)

Video.propTypes = {
  poster: object,
  mp4: string,
  webm: string,
  className: string,
}

export { Video }
