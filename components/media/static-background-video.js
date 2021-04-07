import { backgroundVideoProps } from './background-video'
import { StaticVideo } from './static-video'

function StaticBackgroundVideo(props) {
  return <StaticVideo {...backgroundVideoProps} {...props} />
}

export { StaticBackgroundVideo }
