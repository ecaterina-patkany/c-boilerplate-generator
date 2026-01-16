export default {
  preset: 'ts-jest',
  testEnvironment: 'node',
  roots: ['<rootDir>/tests'],   // only look in tests/
  moduleFileExtensions: ['ts', 'js'],
  testMatch: ['**/*.test.ts']
};