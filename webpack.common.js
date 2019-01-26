const path = require('path');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
//const webpack = require('webpack');

module.exports = {
  entry: {
    app: './src/index.ts'
  },

  output: {
    filename: "[name].bundle.js",
    path: path.resolve(__dirname, "dist"),
    //publicPath: '/'
  },

  module: {
    rules: [
/*       {
        test: /\.pug$/,
        loader: 'pug-loader',
        options: {
          pretty: true
        }

      }, */
      {
        test: /\.tsx?$/,
        use: "ts-loader",
        exclude: /node_modules/
      },

      {
        test: /\.(jpg|png|svg|gif)$/,
        use: [
          {
            loader: "file-loader",
            options: {
              name: "[name].[ext]",
              outputPath: "./img",
              useRelativePath: true
            }
          },
          {
            loader: "image-webpack-loader",
            options: {
              mozjpeg: {
                progressive: true,
                quality: 70
              }
            }
          }
        ]
      }
    ]
  },

  plugins: [

    new CleanWebpackPlugin(["dist"]),
    new HtmlWebpackPlugin({
      title: "Documents",
      template: "./src/index.html"
    }),
  ],


};