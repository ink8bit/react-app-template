const path = require('path');

const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = {
  /**
   * @see {@link https://webpack.js.org/configuration/mode/}
   */
  mode: 'production',

  /**
   * @see {@link https://webpack.js.org/configuration/entry-context/#context}
   */
  context: __dirname,

  /**
   * @see {@link https://webpack.js.org/configuration/entry-context/}
   */
  entry: './src/App.js',

  /**
   * @see {@link https://webpack.js.org/configuration/output/}
   */
  output: {
    path: path.join(__dirname, 'build'),
    filename: 'bundle.js',
  },

  resolve: {
    extensions: ['.js', '.jsx', '.json', '.css'],
  },

  /**
   * @see {@link https://webpack.js.org/configuration/module/}
   */
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
      },

      {
        test: /\.css$/i,
        use: [
          'style-loader',
          {
            /**
             * @see {@link https://github.com/webpack-contrib/css-loader}
             */
            loader: 'css-loader',
            options: {
              modules: true,
            },
          },
          'postcss-loader',
        ],
      },

      {
        test: /\.(png|jpg|svg)$/i,
        use: [
          {
            loader: 'url-loader',
            options: {
              limit: 8192,
            },
          },
        ],
      },
    ],
  },

  /**
   * @see {@link https://webpack.js.org/configuration/plugins/}
   */
  plugins: [
    /**
     * @see {@link https://webpack.js.org/guides/output-management/#cleaning-up-the-dist-folder}
     */
    new CleanWebpackPlugin(),

    /**
     * @see {@link https://webpack.js.org/plugins/html-webpack-plugin/}
     */
    new HtmlWebpackPlugin({
      template: './src/index.ejs',
    }),
  ],

  /**
   * @see {@link https://webpack.js.org/configuration/optimization/}
   */
  optimization: {
    splitChunks: {
      chunks: 'all',
      maxSize: 250000,
      minSize: 0,
    },
  },
};
