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
    /**
     * @see {@link https://jestjs.io/docs/en/webpack.html#handling-static-assets}
     */
    '\\.(png|svg|jpeg|jpg)$': require.resolve('./__mocks__/pictures.js'),

    /**
     * @see {@link https://jestjs.io/docs/en/webpack.html#mocking-css-modules}
     */
    '\\.css$': 'identity-obj-proxy',
  },
  transform: {
    '^.+\\.[t|j]sx?$': 'babel-jest',
  },
};
