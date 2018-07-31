const webpack = require('webpack')
const FriendlyErrorsWebpackPlugin = require('friendly-errors-webpack-plugin')
const messages = require('./dev-messages')
const path = require('path')

module.exports = {
  watch: true,

  devServer: {
    contentBase: path.resolve(process.cwd(), 'build/assets'),
    publicPath: '/assets/',
    stats: {
      colors: true,
      hash: false,
      version: false,
      timings: false,
      assets: false,
      chunks: false,
      modules: false,
      reasons: false,
      children: false,
      source: false,
      errors: false,
      errorDetails: false,
      warnings: false,
      publicPath: false
    }
  },

  plugins: [
    new webpack.NamedModulesPlugin(),

    new FriendlyErrorsWebpackPlugin({
      compilationSuccessInfo: {
        messages: [
          messages[Math.floor(Math.random() * messages.length)]
        ]
      }
    })
  ]
}
