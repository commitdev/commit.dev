module.exports = {
  // assetPrefix can differ based on NODE_ENV in case its not served from domain root
  assetPrefix: '',
  trailingSlash: true,
  webpack: (config) => {
    config.module.rules.push({
      test: /\.svg$/,
      use: ['@svgr/webpack'],
    })

    return config
  },
}
