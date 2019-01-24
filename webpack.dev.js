const merge = require('webpack-merge');
const common = require('./webpack.common.js');
//const path = require("path");
//const webpack = require('webpack');


module.exports = merge(common, {
  mode: 'development',
  devtool: 'inline-source-map',
  watch: 'true',
  watchOptions: {
    aggregateTimeout: 150,
    ignored: /node_modules/
  },
  devServer: {
    contentBase: './dist'
  }
});