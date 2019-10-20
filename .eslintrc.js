module.exports = {
  extends: [
    'eslint:recommended',
    'plugin:import/errors',
    'plugin:react/recommended',
    'plugin:jsx-a11y/recommended',
    'prettier',
    'prettier/react',
  ],
  parser: 'babel-eslint',
  parserOptions: {
    ecmaVersion: 2018,
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true,
    },
  },
  env: {
    es6: true,
    browser: true,
    node: true,
    jest: true,
  },
  rules: {
    'react/prop-types': 0,
    'jsx-a11y/label-has-for': 0,
    'comma-dangle': ['error', 'always-multiline'],
  },
  plugins: ['react', 'import', 'jsx-a11y'],
  settings: {
    react: {
      // https://github.com/yannickcr/eslint-plugin-react/issues/1955
      version: require('react/package.json').version,
    },
  },
};
