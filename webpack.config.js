const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin')
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const CopyPlugin = require('copy-webpack-plugin')


module.exports = {
  entry: {
    popup: './src/popup.jsx',
  },
  output: {
    filename: 'popup.js',
    path: path.resolve(__dirname, 'dist'),
  },
  resolve: {
    extensions: ['.js', '.jsx']
  },
  plugins: [
    new CleanWebpackPlugin({cleanStaleWebpackAssets: false}),
    new HtmlWebpackPlugin({
      template: 'src/popup.html',
      inject: true,
      filename: 'popup.html',
      chunks: ["popup"]
    }),
    new CopyPlugin([{from: './src/manifest.json', to: '.'}]),
  ],
  module: {
    rules: [
      {
        test: /\.m?jsx$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: 'babel-loader'
        }
      },
      {
        test: /\.css$/,
        use: [
          'style-loader', 
          'css-loader'
        ]
      }
    ]
  }
};