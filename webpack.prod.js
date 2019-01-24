const merge = require('webpack-merge');
const common = require('./webpack.common.js');
//const path = require("path");
//const webpack = require('webpack');





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


