const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const Dotenv = require('dotenv-webpack');

const dotenvPlugin = new Dotenv();
const htmlWebpackPlugin = new HtmlWebpackPlugin({
  template: 'src/index.html',
});

const config = {
  entry: [
    'react-hot-loader/patch',
    'webpack-dev-server/client?http://localhost:9000',
    'webpack/hot/only-dev-server',
    './src/entry.jsx',
  ],
  output: {
    publicPath: '/',
    path: path.resolve(__dirname, 'build'),
    filename: 'app.js',
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
      },
      {
        test: /\.css$/,
        use: [
          {
            loader: 'style-loader',
          },
          {
            loader: 'css-loader',
          },
        ],
      },
      {
        test: /\.scss$/,
        use: [
          {
            loader: 'style-loader',
          },
          {
            loader: 'css-loader',
          },
          {
            loader: 'sass-loader',
          },
        ],
      },
      {
        test: /\.png|jpg|gif$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: 'assets/images/[name].[hash:6].[ext]',
            },
          },
        ],
      },
    ],
  },
  plugins: [
    dotenvPlugin,
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NamedModulesPlugin(),
    htmlWebpackPlugin,
  ],
  resolve: {
    extensions: ['.js', '.jsx', '.json'],
  },
  devtool: 'cheap-eval-source-map',
  devServer: {
    contentBase: path.resolve(__dirname, 'build'),
    compress: true,
    port: 9000,
    historyApiFallback: true,
    hot: true,
  },
};

if (process.env.NODE_ENV === 'production') {
  config.entry = './src/entry.jsx';
  config.devtool = false;
  config.plugins = [
    dotenvPlugin,
    htmlWebpackPlugin,
  ];
}

module.exports = config;
