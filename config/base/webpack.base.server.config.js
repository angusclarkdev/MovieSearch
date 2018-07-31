const { resolve } = require('path')
const image = require('../loader-configs/image')
const font = require('../loader-configs/font')
const absolute = file => resolve(__dirname, '../../../', file)

module.exports = {
  entry: {
    index: [
      absolute('src/shared/server')
    ]
  },

  output: {
    path: resolve(process.cwd(), 'build/server'),
    filename: 'index.js'
  },

  target: 'node',

  node: {
    console: 'mock',
    net: 'mock',
    tls: 'mock'
  },

  module: {
    rules: [font.server, image.server]
  },

  plugins: [

  ]
}
