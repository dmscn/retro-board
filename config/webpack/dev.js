const merge = require('webpack-merge')
const baseConfig = require('./base')

module.exports = merge(baseConfig, {
  mode: 'development',
  devtool: 'source-map',
  devServer: {
    contentBase: './dist',
    port: 3000,
    historyApiFallback: {
      index: '/retro-board/',
    },
  },
})
