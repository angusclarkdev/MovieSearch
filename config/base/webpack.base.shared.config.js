const { resolve, join } = require('path')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const sass = require('../loader-configs/sass')
const javascript = require('../loader-configs/javascript')
const svg = require('../loader-configs/svg')
const json = require('../loader-configs/JSON')
const html = require('../loader-configs/html')
const pdf = require('../loader-configs/pdf')
const md = require('../loader-configs/md')
const video = require('../loader-configs/video')

module.exports = {
  stats: 'none',

  resolve: {
    modules: [
      'node_modules',
      resolve(__dirname, '../../src/styles')
    ],

    extensions: [
      '.js',
      '.jsx',
      '.json',
      '.scss'
    ]
  },

  module: {
    rules: [
      sass.entryLoader,
      javascript.base,
      svg,
      json,
      html,
      pdf,
      md,
      video.client
    ]
  },

  plugins: [
    new MiniCssExtractPlugin({
      filename: '../../build/assets/styles.css'
    })
  ]
}
