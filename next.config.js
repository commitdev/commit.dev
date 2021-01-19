const staging = process.env.NODE_ENV === 'production'
module.exports = {
  // staging: with github pages CNAME pointed to landing.commit-staging.dev assets should be root as well
  assetPrefix: staging ? '' : '',
}
