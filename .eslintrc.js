/**
 * Configuring ESLint
 * @see {@link https://eslint.org/docs/user-guide/configuring}
 */
module.exports = {
  /**
   * @see {@link https://eslint.org/docs/user-guide/configuring#extending-configuration-files}
   */
  extends: [
    'eslint:recommended',
    'plugin:import/errors',
    'plugin:react/recommended',
    'plugin:jsx-a11y/recommended',
    'prettier',
    'prettier/react',
  ],

  /**
   * @see {@link https://eslint.org/docs/user-guide/configuring#specifying-globals}
   */
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly',
  },

  /**
   * @see {@link https://eslint.org/docs/user-guide/configuring#specifying-parser}
   */
  parser: 'babel-eslint',

  /**
   * @see {@link https://eslint.org/docs/user-guide/configuring#specifying-parser-options}
   */
  parserOptions: {
    ecmaVersion: 2018,
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true,
    },
  },

  /**
   * @see {@link https://eslint.org/docs/user-guide/configuring#specifying-environments}
   */
  env: {
    es6: true,
    browser: true,
    node: true,
    jest: true,
  },

  /**
   * @see {@link https://eslint.org/docs/user-guide/configuring#configuring-plugins}
   */
  plugins: ['prettier', 'react', 'import', 'jsx-a11y'],

  /**
   * @see {@link https://github.com/benmosher/eslint-plugin-import#importextensions}
   */
  settings: {
    /**
     * @see {@link https://github.com/yannickcr/eslint-plugin-react#configuration}
     */
    react: {
      version: 'detect',
    },
  },

  /**
   * @see {@link https://eslint.org/docs/user-guide/configuring#configuring-rules}
   */
  rules: {},
};
