import { Video } from './video'

const backgroundVideoProps = {
  muted: true,
  'data-autoplay': '',
  loop: true,
  playsInline: true,
}

function BackgroundVideo(props) {
  return <Video {...backgroundVideoProps} {...props} />
}

export { BackgroundVideo, backgroundVideoProps }
