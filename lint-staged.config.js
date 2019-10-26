/**
 * @see {@link https://github.com/okonet/lint-staged#configuration}
 */
module.exports = {
  '**/*.css': ['npm run format', 'npm run lint:css', 'git add'],
  '**/*.js?(x)': ['npm run format', 'npm run lint', 'git add', 'npm t'],
};
