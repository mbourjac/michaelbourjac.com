const path = require('path');

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
    filename: "[name].bundle.js",
    path: path.resolve(__dirname, "dist")
  }
};