import cx from 'classnames'
import { object, string } from 'prop-types'
import styled from 'styled-components'

const StyledImage = styled.img`
  display: block;
  width: 100%;

  :not([src]) {
    visibility: hidden;
  }
`

const imageMimeTypeDict = {
  jpg: 'image/jpeg',
  jpeg: 'image/jpeg',
  png: 'image/png',
  ico: 'image/ico',
  gif: 'image/gif',
  webp: 'image/webp',
}

const getMimeType = (src) => {
  const srcSplit = src.split('.')
  const ext = srcSplit[srcSplit.length - 1]
  return imageMimeTypeDict[ext]
}

const Source = ({ src, srcSet, ...otherProps }) => (
  <source data-srcset={srcSet} {...otherProps} type={getMimeType(src)} />
)

Source.propTypes = {
  src: string,
  srcSet: string,
}

const Image = ({ src, srcSet, className, webp, ...otherProps }) => (
  <picture>
    {!!webp && webp.src && <Source src={webp.src} data-srcset={webp.srcSet} />}
    <Source src={src} data-srcset={srcSet} />
    <StyledImage
      {...otherProps}
      data-src={src}
      data-srcset={srcSet}
      data-sizes="auto"
      className={cx('lazyload', className)}
    />
  </picture>
)

Image.propTypes = {
  src: string,
  srcSet: string,
  webp: object,
  className: string,
}

export { Image }
