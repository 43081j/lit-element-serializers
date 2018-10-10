module.exports = {
  clearMocks: true,

  collectCoverage: true,
  collectCoverageFrom: ['src/**/*.ts'],
  coveragePathIgnorePatterns: ['<rootDir>/src/test/'],
  coverageDirectory: 'coverage',

  moduleFileExtensions: ['ts', 'js'],

  testEnvironment: 'jest-environment-jsdom',

  testMatch: [
    '**/src/test/**/*.test.ts'
  ],

  transform: {
    '.(ts|js)$': 'ts-jest'
  }
};
