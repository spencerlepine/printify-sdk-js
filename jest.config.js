/** @type {import('ts-jest').JestConfigWithTsJest} **/
module.exports = {
  testEnvironment: 'node',
  setupFilesAfterEnv: ['<rootDir>/tests/jest.setup.ts'],
  transform: {
    '^.+.tsx?$': ['ts-jest', {}],
  },
};
