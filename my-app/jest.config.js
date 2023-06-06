module.exports = {
  clearMocks: true,
  collectCoverage: false,
  moduleDirectories: ['node_modules'],
  coverageProvider: 'v8',
  collectCoverageFrom: [
    '<rootDir>/app/**/*.{js,jsx,ts,tsx}',
    '!<rootDir>/app/__mocks__/*.{js,jsx,ts,tsx}',
    '!<rootDir>/app/**/*Tests.{js,jsx,ts,tsx}',
    '!<rootDir>/app/**/Test*.{js,jsx,ts,tsx}',
    '!<rootDir>/app/@types/*.{js,jsx,ts,tsx}',
    '!<rootDir>/app/data/core/@types/*.{js,jsx,ts,tsx}',
    '!<rootDir>/app/data/domain/entities/*.{js,jsx,ts,tsx}',
    '!<rootDir>/app/data/domain/repositories/*.{js,jsx,ts,tsx}',
    '!<rootDir>/app/data/infra/datasources/*.{js,jsx,ts,tsx}',
    '!<rootDir>/app/data/infra/dtos/*.{js,jsx,ts,tsx}',
    '!**/*.stories.{js,jsx,ts,tsx}',
    '!**/entry.*.{js,jsx,ts,tsx}',
    '!**/root.{js,jsx,ts,tsx}',
    '!**/*.d.ts',
    '!**/node_modules/**'
  ],
  moduleNameMapper: {
    // Handle absolute imports in Remix
    '~/(.*)': '<rootDir>/app/$1',
    '^@remix-run/web-blob$': require.resolve('@remix-run/web-blob'),
    '^@remix-run/web-fetch$': require.resolve('@remix-run/web-fetch'),
    '^@remix-run/web-form-data$': require.resolve('@remix-run/web-form-data'),
    '^@remix-run/web-stream$': require.resolve('@remix-run/web-stream'),
    '^@remix-run/web-file$': require.resolve('@remix-run/web-file'),
    '^@web3-storage/multipart-parser$': require.resolve(
      '@web3-storage/multipart-parser'
    ),
    '\\.(scss|sass|css)$': 'identity-obj-proxy'
  },
  setupFilesAfterEnv: ['<rootDir>/jest.setup.js'],
  testPathIgnorePatterns: [
    '<rootDir>/node_modules/',
    '<rootDir>/.cache/',
    '<rootDir>/build/'
  ],
  testEnvironment: 'jsdom',
  transform: {
    '^.+\\.(js|jsx|ts|tsx)$': '@swc/jest'
  },
  transformIgnorePatterns: ['/node_modules/'],
  extensionsToTreatAsEsm: ['.ts', '.tsx']
}