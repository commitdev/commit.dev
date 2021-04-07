import { getStaticImage } from './get-static-image'

const staticVideoContext = require.context(
  'static/videos?resize',
  true,
  /\.(mp4|webm)$/,
)

const getStaticVideo = (name) => {
  const poster = getStaticImage(`videos/${name}.jpg`)
  const mp4 = staticVideoContext(`./${name}.mp4`)
  const webm = staticVideoContext(`./${name}.webm`)
  return {
    poster,
    mp4,
    webm,
  }
}

export { getStaticVideo }
