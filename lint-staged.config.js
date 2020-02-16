/**
 * @see {@link https://github.com/okonet/lint-staged#configuration}
 */
module.exports = {
  '**/*.css': ['prettier --write', 'stylelint --fix'],
  '**/*.js?(x)': ['prettier --write', 'eslint --fix'],
  '**/*.json': ['prettier --write'],
};
