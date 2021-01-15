const staging = process.env.NODE_ENV === 'production'
module.exports = {
  assetPrefix: staging ? '/commit.dev-proto/' : '',
}
