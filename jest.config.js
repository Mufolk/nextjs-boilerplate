const nextJest = require('next/jest')
const createJestConfig = nextJest({
    dir: './',
})

const customJestConfig = {
    setupFilesAfterEnv: ['./jest.setup.js'],
    testEnvironment: 'jest-environment-jsdom',
    collectCoverage: true,
    collectCoverageFrom: [
        'components/**/*.{ts,tsx}',
        'hooks/**/*.{ts,tsx}',
        'pages/**/*.{ts,tsx}',
        'utils/**/*.{ts,tsx}',
    ],
    coverageDirectory: 'coverage',
}

module.exports = createJestConfig(customJestConfig)
