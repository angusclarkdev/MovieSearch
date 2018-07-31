const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const autoprefixer = require('autoprefixer')

const baseLoaders = [
  {
    loader: 'css-loader',
    options: {
      modules: true,
      importLoaders: 1,
      localIdentName: 'mmt-[name]__[local]',
      sourceMap: true
    }
  },
  {
    loader: 'postcss-loader',
    options: {
      ident: 'postcss',
      parser: 'postcss-scss',
      plugins: [
        autoprefixer({
          browsers: [
            'last 2 versions',
            'IE >= 11',
            'safari >= 10'
          ]
        })
      ]
    }
  },
  {
    loader: 'sass-loader',
    options: {
      outputStyle: 'expanded'
    }
  }
]

const entryLoader = {
  test: /\.(css|scss)(\?.+)?$/,
  use: [
    MiniCssExtractPlugin.loader,
    ...baseLoaders
  ]
}

module.exports = {
  entryLoader,
  baseLoaders
}
