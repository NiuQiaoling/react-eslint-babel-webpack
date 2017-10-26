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
  new webpack.HotModuleReplacementPlugin(),
  new webpack.ProvidePlugin({$: 'jquery', jQuery: 'jquery', 'window.jQuery': 'jquery'}),
];

const config = {
  entry: {
    app: path.join(paths.appSrc, 'app'),
  },
  output: {
    path: paths.appDist,
    filename: 'dist/test.js',
  },
  resolve: {
      extensions: ['.js', '.jsx'],
  },
  plugins,
  devServer: {
    contentBase: paths.appDist,
    compress: true,
  },
};

module.exports = config;
