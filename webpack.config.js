const CleanWebpackPlugin = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');
const ForkTsCheckerWebpackPlugin = require('fork-ts-checker-webpack-plugin');

const babelLoader = {
  loader: 'babel-loader',
  options:{
    cacheDirectory: true,
    presets: [
      '@babel/react',
      [
        '@babel/preset-env',
        {
          modules: false
        }
      ]
    ]
  }
}

// const fs = require('fs');
// const nodeModules = {};
// fs.readdirSync('node_modules')
//   .filter(function(x) {
//     return ['.bin'].indexOf(x) === -1;
//   })
//   .forEach(function(mod) {
//     nodeModules[mod] = 'commonjs ' + mod;
//   });

module.exports = {
  cache: true,
  // entry: {
  //   server: './src/server/app.ts',
  //   main: './src/client/components/home.tsx'
  // },
  entry: ['./src/client/components/home.tsx'],
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, 'dist'),
    publicPath: '/'

  },
  mode: "development",
  devtool: "inline-source-map",
  devServer: {
    contentBase: './dist'
  },
  resolve: {
    extensions: [".ts", ".tsx", ".js", ".json"]
  },
  plugins: [
    new ForkTsCheckerWebpackPlugin(),
    new CleanWebpackPlugin(['dist']),
    new HtmlWebpackPlugin({
      chunks: 'main',
      template: 'src/client/index.html'
    })
  ],
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        exclude: [/node_modules/],
        use: [
          babelLoader,
          {
            loader: 'ts-loader',
            options: {
              transpileOnly: true
            }
          }
        ]
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: [
          babelLoader
        ]
      },
      {
        test: /\.css$/,
        use: [ 'style-loader', 'css-loader' ]
      }
    ]
  },
  // node: {
  //   fs: 'empty'
  // },
  // externals: nodeModules
};