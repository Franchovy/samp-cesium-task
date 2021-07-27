
const jestConfig = {
    clearMocks: true,
    verbose: true,
    coverageDirectory: "coverage",
    testEnvironment: "node",
    transform: {
        "\\.[jt]sx?$": "babel-jest"
    },
    testMatch: ['**/__tests__/*.js?(x)'],
    setupFilesAfterEnv: ['./rtl.setup.js']
  }
  
  module.exports = jestConfig