const merge = require('webpack-merge');
const common = require('./webpack.common.js');
//const path = require("path");
//const webpack = require('webpack');
//const BrowserSyncPlugin = require("browser-sync-webpack-plugin");
//const MiniCssExtractPlugin = require("mini-css-extract-plugin");
//const OptimizeCssAssetsPlugin = require("optimize-css-assets-webpack-plugin");



module.exports = merge(common, {
  mode: "production",
  devtool: "source-map",

  module: {
    rules: [
      
  
    ]
  },

  resolve: {
    extensions: [".tsx", ".ts", ".js"]
  },

  plugins: [

  ]

});


