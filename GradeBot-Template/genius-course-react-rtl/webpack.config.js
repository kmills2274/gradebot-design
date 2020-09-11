const HtmlWebPackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const webpack = require('webpack');
// const outputPath = path.join(__dirname, "dist");
const extractSass = new ExtractTextPlugin({
  filename: '[name].[hash].css',
  disable: process.env.NODE_ENV === 'development',
});
module.exports = {
  // mode: 'production',
  entry: { app: './src/index.js' },
  output: {
    filename: '[name].[hash].js',
    // publicPath: '/html/reactjs/genius/RTL' //directory path 
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
        test: /\.(png|jpg|gif)$/,
        // exclude: /node_modules/,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: "[path]/[name].[ext]",
              outputPath: './assets/img/',
              context: 'src/assets/img/',
              esModule: false,
            },
          },
        ],
      },
      {
        test: /\.(woff|woff2|eot|ttf|svg)$/,
        loader: 'file-loader',
        options: {
          name: "./[name].[ext]",
          outputPath: './assets/fonts/'
        },
      },
      {
        test: /\.html$/,
        exclude: /node_modules/,
        use: [
          {
            loader: 'html-loader',
            options: { minimize: true },
          },
        ],
      },
      {
        test: /\.scss$/,
        exclude: /node_modules/,
        use: extractSass.extract({
          use: [
            {
              loader: 'css-loader',
            },
            {
              loader: 'sass-loader',
            },
          ],
          // use style-loader in development
          fallback: 'style-loader',
        }),
      },
      {
        test: /\.css$/,
        use: extractSass.extract({
          fallback: 'style-loader',
          use: 'css-loader',
        }),
      },
    ],
  },
  devServer: {
    contentBase: './dist',
    historyApiFallback: true,
    hot: true
  },
  plugins: [
    extractSass,
    // new ExtractTextPlugin('[name].[hash].css'),
    new HtmlWebPackPlugin({
      template: './src/index.html',
      filename: './index.html',
      "files": {
        "css": ["main.css"],
        "js": ["assets/head_bundle.js", "assets/main_bundle.js"],
        "chunks": {
          "head": {
            "entry": "assets/head_bundle.js",
            "css": ["main.css"]
          },
          "main": {
            "entry": "assets/main_bundle.js",
            "css": []
          },
        }
      }
    }),
    new CleanWebpackPlugin(),
    new webpack.NamedModulesPlugin(),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.ProvidePlugin({
      $: "jquery",
      jQuery: "jquery",
      "window.jQuery": "jquery"
    })
  ],
  optimization: {
    splitChunks: {
      cacheGroups: {
        commons: {
          test: /[\\/]node_modules[\\/]/,
          name: 'vendor',
          chunks: 'all',
        },
      },
    },
  },
};
