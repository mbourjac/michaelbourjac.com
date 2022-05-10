const path = require('path');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  mode: "production",
  entry: {
    index: "./js/index.js",
    projectOne: "./js/projet-1.js",
    projectOneInfo: "./js/projet-1-info.js",
    projectOneRandom: "./js/projet-1-random.js",
    projectTwo: "./js/projet-2.js",
    projectTwoThumbnails: "./js/projet-2-thumbnails.js",
    projectThree: "./js/projet-3.js",
    projectThreeInfo: "./js/projet-3-info.js",
    projectFour: "./js/projet-4.js"
  },
  output: {
    filename: "js/[name].[hash].bundle.js",
    path: path.resolve(__dirname, "dist")
  },
  plugins: [
    new CleanWebpackPlugin({
      cleanOnceBeforeBuildPatterns: ["**/*"]
    }),
    new HtmlWebpackPlugin({
      filename: "index.html",
      template: "./src/template-index.html",
      chunks: ["index"],
      cache: true,
      inject: "body"
    }),
    new HtmlWebpackPlugin({
      filename: "index-2.html",
      template: "./src/template-index-2.html",
      chunks: ["index"],
      cache: true,
      inject: "body"
    }),
    new HtmlWebpackPlugin({
      filename: "projet-1.html",
      template: "./src/template-1.html",
      chunks: ["projectOne"],
      cache: true,
      inject: "body"
    }),
    new HtmlWebpackPlugin({
      filename: "projet-1-2.html",
      template: "./src/template-1-2.html",
      chunks: ["projectOne"],
      cache: true,
      inject: "body"
    }),
    new HtmlWebpackPlugin({
      filename: "projet-1-info.html",
      template: "./src/template-1-info.html",
      chunks: ["projectOneInfo"],
      cache: true
    }),new HtmlWebpackPlugin({
      filename: "projet-1-info-2.html",
      template: "./src/template-1-info-2.html",
      chunks: ["projectOneInfo"],
      cache: true
    }),
    new HtmlWebpackPlugin({
      filename: "projet-1-random.html",
      template: "./src/template-1-random.html",
      chunks: ["projectOneRandom"],
      cache: true,
      inject: "body"
    }),
    new HtmlWebpackPlugin({
      filename: "projet-1-random-2.html",
      template: "./src/template-1-random-2.html",
      chunks: ["projectOneRandom"],
      cache: true,
      inject: "body"
    }),
    new HtmlWebpackPlugin({
      filename: "projet-2.html",
      template: "./src/template-2.html",
      chunks: ["projectTwo"],
      cache: true,
      inject: "body"
    }),
    new HtmlWebpackPlugin({
      filename: "projet-2-2.html",
      template: "./src/template-2-2.html",
      chunks: ["projectTwo"],
      cache: true,
      inject: "body"
    }),
    new HtmlWebpackPlugin({
      filename: "projet-2-thumbnails.html",
      template: "./src/template-2-thumbnails.html",
      chunks: ["projectTwoThumbnails"],
      cache: true,
      inject: "body"
    }),
    new HtmlWebpackPlugin({
      filename: "projet-2-thumbnails-2.html",
      template: "./src/template-2-thumbnails-2.html",
      chunks: ["projectTwoThumbnails"],
      cache: true,
      inject: "body"
    }),
    new HtmlWebpackPlugin({
      filename: "projet-3.html",
      template: "./src/template-3.html",
      chunks: ["projectThree"],
      cache: true,
      inject: "body"
    }),
    new HtmlWebpackPlugin({
      filename: "projet-3-2.html",
      template: "./src/template-3-2.html",
      chunks: ["projectThree"],
      cache: true,
      inject: "body"
    }),
    new HtmlWebpackPlugin({
      filename: "projet-3-info.html",
      template: "./src/template-3-info.html",
      chunks: ["projectThreeInfo"],
      cache: true,
      inject: "body"
    }),
    new HtmlWebpackPlugin({
      filename: "projet-3-info-2.html",
      template: "./src/template-3-info-2.html",
      chunks: ["projectThreeInfo"],
      cache: true,
      inject: "body"
    }),
    new HtmlWebpackPlugin({
      filename: "projet-4.html",
      template: "./src/template-4.html",
      chunks: ["projectFour"],
      cache: true,
      inject: "body"
    }),
    new HtmlWebpackPlugin({
      filename: "projet-4-2.html",
      template: "./src/template-4-2.html",
      chunks: ["projectFour"],
      cache: true,
      inject: "body"
    })
  ]
};