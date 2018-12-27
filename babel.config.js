module.exports = {
  presets: [
    '@babel/preset-react',
    [
      '@babel/preset-env',
      {
        targets: {
          browsers: ['>0.3%', 'not ie 10', 'not ie 11', 'not op_mini all'],
        },
      },
    ],
  ],
  plugins: ['@babel/plugin-proposal-class-properties'],
};
