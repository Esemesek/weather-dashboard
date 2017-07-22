const path = require('path');
const webpack = require('webpack');

module.exports = {
  entry: ['babel-polyfill', './src'],
  output: {
    path: path.resolve(__dirname, 'www/build'),
    filename: 'bundle.js',
    publicPath: '/www/build/',
  },
  resolve: {
    extensions: ['.js', '.jsx'],
  },
  plugins: [
    new webpack.ProgressPlugin({
      'Promise': 'es6-promise',
      'fetch': 'exports?self.fetch!whatwg-fetch',
    }),
  ],
  module: {
    rules: [
      {
        test: /\.js(x?)$/,
        use: [
          'babel-loader',
        ],
        exclude: [
          '/node_modules/',
        ]
      },
      {
        test: /\.scss$/,
        use: [
          'style-loader',
          'css-loader',
          'sass-loader',
        ]
      }
    ]
  }
}
