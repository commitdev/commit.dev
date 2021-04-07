const staticImageContext = require.context(
  'static?resize',
  true,
  /\.(jpeg|jpg|png|webp|gif)$/,
)

const staticImageWebpContext = require.context(
  'static?resize&format=webp',
  true,
  /\.(jpeg|jpg|png|webp|gif)$/,
)

const pickImageProps = ({ src, srcSet, width, height }) => ({
  src,
  srcSet,
  width,
  height,
})

const getStaticImage = (name) => {
  const staticImage = pickImageProps(staticImageContext(`./${name}`))
  const staticImageWebp = pickImageProps(staticImageWebpContext(`./${name}`))
  return {
    ...staticImage,
    webp: staticImageWebp,
  }
}

export { getStaticImage }
