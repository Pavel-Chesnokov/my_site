const path = require('path');
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
       {
        test: /\.pug$/,
        loader: 'pug-loader',
        options: {
          pretty: true
        }

      }, 
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

    new HtmlWebpackPlugin({
      title: "Documents",
      template: "./src/index.pug"
    }),
  ],


};