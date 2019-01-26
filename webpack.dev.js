const merge = require('webpack-merge');
const common = require('./webpack.common.js');
const BrowserSyncPlugin = require("browser-sync-webpack-plugin");
//const path = require("path");
const webpack = require('webpack');


module.exports = merge(common, {
  mode: 'development',
  optimization: {usedExports: true},
  devtool: 'inline-source-map',
  watch: true,
  watchOptions: {
    aggregateTimeout: 150,
    ignored: /node_modules/
  },
/*      devServer: {
      contentBase: './dist',
      hot: true //включение горячей замены модулей
    },  */
  module: {
    rules: [
      {
        test: /\.scss$/,
        use: [
          'style-loader',

          {
            loader: "css-loader",
            options: {
              sourceMap: true
            }
          },
          {
            loader: "sass-loader",
            options: {
              sourceMap: true
            }
          }
        ]
      }]
  },
  plugins: [
     new webpack.HotModuleReplacementPlugin(), //горячая замена модулей
     new BrowserSyncPlugin({
      host: "localhost",
      port: 3000,
          //proxy: 'http://localhost:8080/' //включить для совместного использования
//           },
//            { reload: false }
      server: { baseDir: ["dist"] },
      files: ["./dist/*.*"]
    } )]
});