const HTMLWebpackPlugin = require('html-webpack-plugin')
const path = require('path')

const srcPath = path.resolve(__dirname, '..', '..', 'src')

module.exports = {
  entry: path.join(srcPath, 'App.js'),
  output: {
    path: path.resolve(srcPath, 'dist'),
    filename: 'bundle.js',
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
        },
      },
    ],
  },
  resolve: {
    alias: {
      '@components': path.join(srcPath, 'components'),
      '@pages': path.join(srcPath, 'pages'),
      '@utils': path.join(srcPath, 'utils'),
      '@helpers': path.join(srcPath, 'helpers'),
      '@hooks': path.join(srcPath, 'hooks'),
    },
    extensions: ['.js', '.jsx'],
  },
  plugins: [
    new HTMLWebpackPlugin({ template: path.join(srcPath, 'index.html') }),
  ],
}
