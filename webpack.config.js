const path = require('path');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  mode: "production",
  entry: {
    index: "./js/index.js",
    projectone: "./js/projet-1.js",
    projectonerandom: "./js/projet-1-random.js",
    projecttwo: "./js/projet-2.js",
    projecttwothumbnails: "./js/projet-2-thumbnails.js",
    projectthree: "./js/projet-3.js",
    projectthreeinfo: "./js/projet-3-info.js",
    projectfourone: "./js/projet-4-1.js",
    projectfourtwo: "./js/projet-4-2.js",
    projectfourthree: "./js/projet-4-3.js",
    projectfourfour: "./js/projet-4-4.js",
    projectfourfive: "./js/projet-4-5.js",
    projectfoursix: "./js/projet-4-6.js"
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
      filename: "projet-1.html",
      template: "./src/template-1.html",
      chunks: ["projectone"],
      cache: true,
      inject: "body"
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
      cache: true,
      inject: "body"
    }),
    new HtmlWebpackPlugin({
      filename: "projet-2.html",
      template: "./src/template-2.html",
      chunks: ["projecttwo"],
      cache: true,
      inject: "body"
    }),
    new HtmlWebpackPlugin({
      filename: "projet-2-thumbnails.html",
      template: "./src/template-2-thumbnails.html",
      chunks: ["projecttwothumbnails"],
      cache: true,
      inject: "body"
    }),
    new HtmlWebpackPlugin({
      filename: "projet-3.html",
      template: "./src/template-3.html",
      chunks: ["projectthree"],
      cache: true,
      inject: "body"
    }),
    new HtmlWebpackPlugin({
      filename: "projet-3-info.html",
      template: "./src/template-3-info.html",
      chunks: ["projectthreeinfo"],
      cache: true,
      inject: "body"
    }),
    new HtmlWebpackPlugin({
      filename: "projet-4-1.html",
      template: "./src/template-4-1.html",
      chunks: ["projectfourone"],
      cache: true,
      inject: "body"
    }),
    new HtmlWebpackPlugin({
      filename: "projet-4-2.html",
      template: "./src/template-4-2.html",
      chunks: ["projectfourtwo"],
      cache: true,
      inject: "body"
    }),
    new HtmlWebpackPlugin({
      filename: "projet-4-3.html",
      template: "./src/template-4-3.html",
      chunks: ["projectfourthree"],
      cache: true,
      inject: "body"
    }),
    new HtmlWebpackPlugin({
      filename: "projet-4-4.html",
      template: "./src/template-4-4.html",
      chunks: ["projectfourfour"],
      cache: true,
      inject: "body"
    }),
    new HtmlWebpackPlugin({
      filename: "projet-4-5.html",
      template: "./src/template-4-5.html",
      chunks: ["projectfourfive"],
      cache: true,
      inject: "body"
    }),
    new HtmlWebpackPlugin({
      filename: "projet-4-6.html",
      template: "./src/template-4-6.html",
      chunks: ["projectfoursix"],
      cache: true,
      inject: "body"
    })
  ]
};