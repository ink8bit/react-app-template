/**
 * Configuration
 * @see {@link https://jestjs.io/docs/en/configuration}
 */
module.exports = {
  bail: true,
  notify: true,
  collectCoverageFrom: ['src/**/*.{js,jsx,mjs}'],
  testPathIgnorePatterns: ['/node_modules/'],
  moduleNameMapper: {
    '\\.css$': require.resolve('./__mocks__/styles.js'),
  },
  transform: {
    '^.+\\.[t|j]sx?$': 'babel-jest',
  },
};
