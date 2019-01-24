const merge = require('webpack-merge');
const common = require('./webpack.common.js');
const BrowserSyncPlugin = require("browser-sync-webpack-plugin");
//const path = require("path");
//const webpack = require('webpack');


module.exports = merge(common, {
  mode: 'development',
  devtool: 'inline-source-map',
  watch: true,
  watchOptions: {
    aggregateTimeout: 150,
    ignored: /node_modules/
  },
/*   devServer: {
    contentBase: './dist'
  }, */

  plugins: [
    new BrowserSyncPlugin({
      host: "localhost",
      port: 3000,
//    proxy: 'http://localhost:8080/' включить для совместного использования
//    },
//      { reload: false }
      server: { baseDir: ["dist"] },
      files: ["./dist/*.*"]
    })]
});