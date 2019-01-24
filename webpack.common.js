const path = require('path');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require("path");
//const webpack = require('webpack');

module.exports = {
  entry: {
    app: './src/index.ts'
  },
  plugins: [
    new CleanWebpackPlugin(["./dist/**/*"]),
    new HtmlWebpackPlugin({
      title: "Documents",
      template: "./src/index.pug"
    })
  ],

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

    /*     new BrowserSyncPlugin({
          host: "localhost",
          port: 3000,
          server: { baseDir: ["dist"] },
          files: ["./dist/*.*"]лл
        }), */

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
  ],

  output: {
    filename: "[name].bundle.js",
    path: path.resolve(__dirname, "dist")
  },
};