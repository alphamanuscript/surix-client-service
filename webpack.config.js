const path = require('path');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');

module.exports = {
    entry: {
      'surix-tools': './index.ts',
      'surix-tools.min': './index.ts'
    },
    output: {
      path: path.resolve(__dirname, 'dist'),
      filename: '[name].js',
      libraryTarget: 'umd',
      library: 'Surix',
      umdNamedDefine: true
    },
    resolve: {
      extensions: ['.ts', '.tsx', '.js']
    },
    devtool: 'source-map',
    optimization: {
      minimize: true,
      minimizer: [
        new UglifyJsPlugin({
          include: /\.min\.js$/
        })
      ]
    },
    module: {
      rules: [{
        test: /\.tsx?$/,
        loader: 'awesome-typescript-loader',
        exclude: /node_modules/,
        query: {
          declaration: false,
        }
      }]
    }
  }
  
  