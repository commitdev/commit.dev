import { Video } from './video'

function BackgroundVideo(props) {
  return <Video muted data-autoplay="" loop playsinline {...props} />
}

export { BackgroundVideo }
