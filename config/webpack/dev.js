const merge = require('webpack-merge')
const baseConfig = require('./base')

module.exports = merge(baseConfig, {
  mode: 'development',
  devtool: 'source-map',
  devServer: {
    port: 8008,
  },
})
