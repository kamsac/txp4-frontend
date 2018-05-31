const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const StyleLintPlugin = require('stylelint-webpack-plugin');
const Dotenv = require('dotenv-webpack');

const isProduction = process.env.NODE_ENV === 'production';

const dotenvPlugin = new Dotenv();
const htmlWebpackPlugin = new HtmlWebpackPlugin({
  template: 'src/index.html',
});
const extractTextPlugin = new ExtractTextPlugin('styles-[contenthash:6].css');
const styleLintPlugin = new StyleLintPlugin({
  emitErrors: isProduction, // errors block HMR!
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
        enforce: 'pre',
        test: /\.jsx?$/,
        exclude: /node_modules/,
        loader: 'eslint-loader',
        options: {
          emitWarning: !isProduction, // errors block HMR!
        },
      },
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
          {
            loader: 'postcss-loader',
          },
        ],
      },
      {
        test: /\.scss$/,
        use: isProduction ?
          ExtractTextPlugin.extract({
            fallback: 'style-loader',
            use: [
              {
                loader: 'css-loader',
              },
              {
                loader: 'postcss-loader',
                options: {
                  importLoaders: 1,
                },
              },
              {
                loader: 'sass-loader',
              },
            ],
          })
          :
          [
            {
              loader: 'style-loader',
            },
            {
              loader: 'css-loader',
            },
            {
              loader: 'postcss-loader',
              options: {
                importLoaders: 1,
              },
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
    extractTextPlugin,
    styleLintPlugin,
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

if (isProduction) {
  config.entry = './src/entry.jsx';
  config.devtool = false;
  config.plugins = [
    dotenvPlugin,
    htmlWebpackPlugin,
    extractTextPlugin,
    styleLintPlugin,
  ];
}

module.exports = config;
