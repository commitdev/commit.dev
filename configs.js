const { COMMIT_DEV_HOST } = process.env

export default {
  e2e: {
    host: COMMIT_DEV_HOST || 'http://127.0.0.1:3000',
    puppeteer: {
      args: [
        '--incognito',
        '--user-agent=Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/61.0.3163.100 Safari/537.36',
      ],
      defaultViewport: { width: 960, height: 768 },
      headless: process.env.HEADLESS !== 'false',
    },
    screenshotDir: '.screenshots',
  },
}
