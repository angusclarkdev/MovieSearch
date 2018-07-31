const base = {
  test: /\.js$/,
  exclude: /(node_modules|bower_components)/,
  rules: [
    { use: 'babel-loader' }
  ]
}

const linter = {
  test: /\.jsx?$/,
  exclude: /(node_modules|bower_components)/,
  rules: [{
    enforce: 'pre',
    options: {
      error: false,
      snazzy: true
    },
    use: {
      loader: 'standard-loader',
      options: { parser: 'babel-eslint' }
    }
  }
  ]
}

module.exports = {
  base,
  linter
}
