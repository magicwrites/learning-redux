var path = require('path')

module.exports = {
  entry: './source',
  output: {
    path: 'builds',
    filename: 'bundle.js'
  },
  eslint: {
    configFile: path.resolve(__dirname, '.eslintrc.json')
  },
  module: {
    preLoaders: [{
      test: /\.jsx?$/,
      loader: 'eslint-loader',
      include: path.resolve(__dirname, 'source')
    }, {
      test: /\.scss/,
      loaders: ['style', 'css', 'sass'],
      include: path.resolve(__dirname, 'source')
    }],
    loaders: [{
      test: /\.jsx?$/,
      loader: 'babel',
      include: path.resolve(__dirname, 'source'),
      query: {
        presets: ['es2015']
      }
    }, {
      test: /\.scss/,
      loaders: ['style', 'css', 'sass'],
      include: path.resolve(__dirname, 'source')
    }, {
      test: /\.html/,
      loader: 'html',
      include: path.resolve(__dirname, 'source')
    }]
  }
}
