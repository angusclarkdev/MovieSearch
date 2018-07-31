const path = require('path')
const merge = require('webpack-merge')

const client = {
  test: /\.(woff|woff2|ttf|eot|svg)(\?v=\d+\.\d+\.\d+)?$/,
  use: {
    loader: 'file-loader',
    options: {
      publicPath: '/assets/',
      name: 'fonts/[name].[ext]?[hash]'
    }
  }
}

let server = merge(client, {
  use: {
    options: {
      emitFile: false
    }
  }
})

module.exports = {
  server,
  client
}
