'use strict';

let path = require('path');
let webpack = require('webpack');
let baseConfig = require('./base');
let defaultSettings = require('./defaults');


// Add needed plugins here

let config = Object.assign({}, baseConfig, {
  entry: [
    'webpack-dev-server/client?http://' + defaultSettings.host+ ':' + defaultSettings.port,
    'webpack/hot/only-dev-server',
    './src/components/Run'
  ],
  cache: true,
  devtool: 'eval-source-map',
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin(),
    new webpack.ProvidePlugin({
     // $: "jquery",
     // jQuery: "jquery",
     // "window.jQuery": "jquery"
     'Promise': 'imports?this=>global!exports?global.Promise!es6-promise',
     'fetch': 'imports?this=>global!exports?global.fetch!whatwg-fetch'
    }),
  ],
  module: defaultSettings.getDefaultModules()
});

// Add needed loaders to the defaults here
config.module.loaders.push({
  test: /\.(js|jsx)$/,
  loader: 'react-hot!babel-loader',
  include: [].concat(
    config.additionalPaths,
    [ path.join(__dirname, '/../src') ]
  ),
  exclude: [
    path.resolve(__dirname, "/../node_modules")
  ]
});

module.exports = config;
