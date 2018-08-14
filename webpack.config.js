const path = require('path');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');

module.exports = {
    entry: {
      'surix-service': './index.ts',
      'surix-service.min': './index.ts'
    },
    output: {
      path: path.resolve(__dirname, 'lib'),
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
  
  