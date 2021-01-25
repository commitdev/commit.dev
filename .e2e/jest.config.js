module.exports = {
  preset: 'jest-puppeteer',
  roots: ['<rootDir>', '<rootDir>/../'],
  testMatch: ['**/?(*.)+(e2e).js'],
  testTimeout: 180000,
  transform: {
    '\\.js$': [
      'babel-jest',
      {
        configFile: './babel.config.test.js',
      },
    ],
  },
  verbose: true,
}
