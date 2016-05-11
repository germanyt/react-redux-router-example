/*eslint-disable no-var */
var fs = require('fs')
var path = require('path')
var webpack = require('webpack')

console.log(__dirname);

module.exports = {

  // devtool: 'inline-source-map',

  entry: path.join(__dirname, 'app', 'js', 'app.js'),

  output: {
    path: __dirname + '/__build__/',
    filename: 'app.js',
    chunkFilename: '[id].chunk.js',
    publicPath: '/__build__/'
  },

  module: {
    loaders: [
      { test: /\.(js|jsx)$/, exclude: /node_modules/, loader: 'babel', query: {
          presets: ['es2015','react']
        }
      },
      { test: /\.css$/, loader: 'style!css' },
      { test: /\.(woff2?|svg)$/, loader: 'url?limit=100000' },
      { test: /\.(ttf|eot)$/, loader: 'file' },
    ]
  },

  resolve: {
    extensions: ['', '.js', '.jsx']
    // alias: {
    //   'react-router': path.join(__dirname, '..', 'modules')
    // }
  },

  plugins: [
    // new webpack.optimize.CommonsChunkPlugin('shared.js'),
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV || 'development'),
      __DEV__: JSON.stringify(JSON.parse(process.env.DEBUG || 'false'))
    }),
    new webpack.optimize.UglifyJsPlugin({
        mangle: {
            // except: ['$super', '$', 'exports', 'require']
        },
        compress: {
            warnings: false
        }
    })
  ]

}
