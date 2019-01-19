 const merge = require('webpack-merge');
 const common = require('./webpack.common.js');

 module.exports = merge(common, {
   mode: 'production',
 });




 'use strict';

const NODE_ENV = process.env.NODE_ENV || 'development';
const path = require("path");
const BrowserSyncPlugin = require("browser-sync-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const OptimizeCssAssetsPlugin = require("optimize-css-assets-webpack-plugin");
const CleanWebpackPlugin = require("clean-webpack-plugin");
const webpack = require('webpack');


module.exports = {
 // mode: "development", 
  entry: "./src/index.ts",
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "bundle.js"
    // library: "index"
  },
  /*   devServer: {
    contentBase: path.join(__dirname, "src"),
    compress: true,
    port: 9000
  }, */
  watch: NODE_ENV == 'development',
  watchOptions: {
    aggregateTimeout: 150,
    ignored: /node_modules/
  },
  devtool: NODE_ENV == 'development' ? "inline-cheap-module-source-map": '(none)',

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
        test: /\.scss$/,
        use: [

          MiniCssExtractPlugin.loader,
         //'style-loader',

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

          /*           MiniCssExtractPlugin.loader,
                    "css-loader",
                    "sass-loader" */
        ]
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

  resolve: {
    extensions: [".tsx", ".ts", ".js"]
  },

  plugins: [
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify('NODE_ENV')}),
        new CleanWebpackPlugin(["./dist/**/*"]),
    new HtmlWebpackPlugin({
      title: "Documents",
      template: "./src/index.pug",

    }),

    new BrowserSyncPlugin({
      host: "localhost",
      port: 3000,
      server: { baseDir: ["dist"] },
      files: ["./dist/*.*"]
      // proxy: '' скопировать путь из адресной строки для запуска на апач
    }),

    new MiniCssExtractPlugin({
      filename: "[name].css"
    }),

    new OptimizeCssAssetsPlugin({
      assetNameRegExp: /\.css$/g,
      cssProcessor: require("cssnano"),
      cssProcessorPluginOptions: {
        preset: [
          "default",
          {
            discardComments: {
              removeAll: true
            }
          }
        ]
      },
      canPrint: true
    })
  ]
  
};


