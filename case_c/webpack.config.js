const path = require('path');
const webpack = require('webpack');
const CleanWebpackPlugin = require('clean-webpack-plugin');

module.exports = {
  entry: "./src/index.js",
  devtool: "source-map",
  plugins: [
    new CleanWebpackPlugin(["build"]),
    new webpack.DefinePlugin({
      "process.env.NODE_ENV": JSON.stringify("development")
    })
  ],

  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: path.join(process.cwd(), "node_modules"),
        include: path.join(process.cwd(), "src/"),
        loaders: [
          {
            loader: "babel-loader"
          }
        ]
      }
    ]
  },
  output: {
    path: path.resolve(process.cwd(), "build"),
    filename: "application.js"
  }
};
