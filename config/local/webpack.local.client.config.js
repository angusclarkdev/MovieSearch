const StyleLintPlugin = require('stylelint-webpack-plugin')
const CopyPlugin = require('copy-webpack-plugin')
const WriteFilePlugin = require('write-file-webpack-plugin')

module.exports = {
  mode: 'development',

  devtool: 'cheap-module-eval-source-map',

  plugins: [
    new StyleLintPlugin(),
    new CopyPlugin([
      'src/index.html'
    ]),
    new WriteFilePlugin()
  ]
}
