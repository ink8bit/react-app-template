/**
 * @see {@link https://prettier.io/docs/en/configuration.html}
 */
module.exports = {
  singleQuote: true,
  tabWidth: 2,
  useTabs: false,
  printWidth: 100,

  overrides: [
    {
      files: '*.css',
      options: {
        parser: 'css',
      },
    },

    {
      files: '*.js',
      options: {
        trailingComma: 'all',
        bracketSpacing: true,
        jsxBracketSameLine: false,
        arrowParens: 'avoid',
      },
    },
  ],
};
