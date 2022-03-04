module.exports = {
  preset: 'react-native',
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node'],
  transformIgnorePatterns: ['node_modules/(?!(jest-)?react-native|@?react-navigation|@react-native|native-base)'],
  testMatch: ['**/__tests__/unit/**/*.(js|jsx|ts|tsx)|**/__tests__/*.(js|jsx|ts|tsx)'],
  setupFilesAfterEnv: ['<rootDir>setup-test.js'],
  collectCoverageFrom: ['src/**/*.{ts,tsx}'],
  coverageDirectory: 'test-results',
  coverageReporters: ['cobertura'],
  coveragePathIgnorePatterns: ['/__tests__/', '/utils/', '/models/']
};
