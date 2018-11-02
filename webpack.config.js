/** 
 * @file webpack.config.js
*/

const path = require('path');

module.exports = {
  mode: none,
  entry: "./src/index.js",
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "bundle.js",
  },
  modules: {
    rules: [
      {
        test: /\.js$/,
        include: [
          path.resolve(__dirname, "src")
        ],
        loader: "babel-loader"
      }
    ]
  }
}
