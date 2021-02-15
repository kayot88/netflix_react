import '@testing-library/jest-dom/extend-expect';
module.exports = {
  moduleDirectories: ['node_modules', 'src'],
  testRegex: 'tests/.*\\.test\\.js$',
  setupFilesAfterEnv: ['<rootDir>/src/setupTests.js'],
};
