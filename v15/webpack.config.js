const path = require('path');
const webpack = require('webpack');

module.exports = {
  entry: './src/index.js',
  plugins: [
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify('production')
    })
  ],
  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: path.join(process.cwd(), 'node_modules'),
        include: path.join(process.cwd(), 'src/'),
        loaders: [
          {
            loader: 'babel-loader'
          }
        ]
      }
    ]
  },
  output: {
    path: path.resolve(process.cwd(), 'build'),
    filename: 'application.js'
  },
  devtool: 'eval-source-map',
  devServer: {
    host: '0.0.0.0',
    port: 3000,
    stats: {
      colors: true
    },
    historyApiFallback: true,
    inline: true,
    hot: true
  }
};
