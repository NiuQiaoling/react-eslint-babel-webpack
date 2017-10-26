const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const baiseConfig = require('./config');

const plugins = [
  new HtmlWebpackPlugin({
      title: 'webpack babel react revisited',
      filename: path.join(baiseConfig.appDist, 'index.html'),
  }),
  new ExtractTextPlugin({
      filename: "[name].css"
  }),
  new webpack.optimize.UglifyJsPlugin({minimize: true}),
  new webpack.ProvidePlugin({$: 'jquery', jQuery: 'jquery', 'window.jQuery': 'jquery'}),
];


module.exports = config;
