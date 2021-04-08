/* eslint-disable import/no-extraneous-dependencies */

const path = require('path')

const withPlugins = require('next-compose-plugins')
const withOptimizedImages = require('next-optimized-images')
const withVideos = require('next-videos')
const sharp = require('responsive-loader/sharp')

const nextConfig = {
  // assetPrefix can differ based on NODE_ENV in case its not served from domain root
  assetPrefix: '',
  webpack: (config) => {
    const enrichedConfig = config
    enrichedConfig.resolve.alias.static = path.join(__dirname, 'static')
    enrichedConfig.module.rules.push({
      test: /\.svg$/,
      use: ['@svgr/webpack'],
    })

    return enrichedConfig
  },
}

const optimizedImagesConfig = {
  inlineImageLimit: 0,
  handleImages: ['jpeg', 'png', 'webp', 'gif'],
  responsive: {
    adapter: sharp,
    sizes: [400, 800, 1200, 1440],
  },
  removeOriginalExtension: false,
  optimizeImages: true,
  optimizeImagesInDev: false,
  mozjpeg: {
    quality: 80,
  },
  optipng: {
    optimizationLevel: 3,
  },
  pngquant: false,
  gifsicle: {
    interlaced: true,
    optimizationLevel: 3,
  },
  webp: {
    preset: 'default',
    quality: 75,
  },
}

module.exports = withPlugins(
  [[withOptimizedImages, optimizedImagesConfig], withVideos],
  nextConfig,
)
