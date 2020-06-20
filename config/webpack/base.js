const HTMLWebpackPlugin = require('html-webpack-plugin')
const path = require('path')

const rootPath = path.resolve(__dirname, '..', '..')
const srcPath = path.resolve(rootPath, 'src')

module.exports = {
  entry: path.join(srcPath, 'App.js'),
  output: {
    path: path.resolve(rootPath, 'dist'),
    filename: 'bundle.js',
    publicPath: '/retro-board/',
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
      {
        test: /\.svg$/,
        use: ['@svgr/webpack'],
      },
      {
        test: /\.(png|jp(e*)g|gif)$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: 'images/[hash]-[name].[ext]',
            },
          },
        ],
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
      '@services': path.join(srcPath, 'services'),
      '@assets': path.join(srcPath, 'assets'),
      '@contexts': path.join(srcPath, 'contexts'),
    },
    extensions: ['.js', '.jsx'],
  },
  plugins: [
    new HTMLWebpackPlugin({ template: path.join(srcPath, 'index.html') }),
  ],
}
