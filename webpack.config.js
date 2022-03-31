const path = require('path');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  mode: "production",
  entry: {
    projectone: "./js/projet-1.js",
    projectonerandom: "./js/projet-1-random.js",
    projecttwo: "./js/projet-2.js",
    projecttwothumbnails: "./js/projet-2-thumbnails.js",
    projectthree: "./js/projet-3.js",
    projectthreeinfo: "./js/projet-3-info.js"
  },
  output: {
    filename: "[name].[hash].bundle.js",
    path: path.resolve(__dirname, "dist")
  },
  plugins: [
    new CleanWebpackPlugin({
      cleanOnceBeforeBuildPatterns: ["**/*", "!main.min.css", "!dragscroll.js"]
    }),
    new HtmlWebpackPlugin({
      filename: "index.html",
      template: "./src/template-index.html",
      chunks: [],
      cache: true
    }),
    new HtmlWebpackPlugin({
      filename: "projet-1.html",
      template: "./src/template-1.html",
      chunks: ["projectone"],
      cache: true
    }),
    new HtmlWebpackPlugin({
      filename: "projet-1-info.html",
      template: "./src/template-1-info.html",
      chunks: [],
      cache: true
    }),
    new HtmlWebpackPlugin({
      filename: "projet-1-random.html",
      template: "./src/template-1-random.html",
      chunks: ["projectonerandom"],
      cache: true
    }),
    new HtmlWebpackPlugin({
      filename: "projet-2.html",
      template: "./src/template-2.html",
      chunks: ["projecttwo"],
      cache: true
    }),
    new HtmlWebpackPlugin({
      filename: "projet-2-thumbnails.html",
      template: "./src/template-2-thumbnails.html",
      chunks: ["projecttwothumbnails"],
      cache: true
    }),
    new HtmlWebpackPlugin({
      filename: "projet-3.html",
      template: "./src/template-3.html",
      chunks: ["projectthree"],
      cache: true
    }),
    new HtmlWebpackPlugin({
      filename: "projet-3-info.html",
      template: "./src/template-3-info.html",
      chunks: ["projectthreeinfo"],
      cache: true
    }),
    new HtmlWebpackPlugin({
      filename: "projet-4.html",
      template: "./src/template-4.html",
      chunks: [],
      cache: true
    }),
  ]
};