import { StaticVideo } from './static-video'

function StaticBackgroundVideo(props) {
  return <StaticVideo muted data-autoplay="" loop playsinline {...props} />
}

export { StaticBackgroundVideo }
