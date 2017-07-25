const webpackConfig = require('./webpack.config.js');

module.exports = function (config) {
  config.set({
    basePath: '',
    frameworks: ['mocha'],
    files: [
      'src/**/*.spec.+(js|jsx)',
    ],
    preprocessors: {
      'src/**/*.+(js|jsx)': ['webpack'],
    },
    webpack: {
      module: webpackConfig.module,
      resolve: webpackConfig.resolve,
      externals: {
        'react/addons': true,
        'react/lib/ExecutionEnvironment': true,
        'react/lib/ReactContext': true,
        fs: '{}',
      },
    },
    webpackServer: {
      noInfo: true
    },
    reporters: ['nyan'],
    port: 9876,
    colors: true,
    autoWatch: true,
    browsers: ['Chrome'],
    singleRun: false
  });
}
