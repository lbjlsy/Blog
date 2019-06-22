const path = require('path');
const webpack = require('webpack');
const CleanWebpackPlugin = require('clean-webpack-plugin'); // 每次构建前清理 /dist 文件夹
const HtmlWebpackPlugin = require('html-webpack-plugin'); // 自动将html文件注入打包后的文件名称
const MiniCssExtractPlugin = require('mini-css-extract-plugin'); // 在生产环境下将style行内标签转换为link标签
const cssRegex = /\.css$/;
const cssModuleRegex = /\.module\.css$/;
const lessRegex = /\.less$/;
const lessModuleRegex = /\.module\.less$/;

function basicConfig(env) {
  const nodeEnv = env !== 'production';
  return {
    entry: {
      app: './src/index.js'
    },
    resolve: {
      alias: {
        '@': path.resolve(__dirname, '../src'),
      }
    },
    module: {
      rules: [
        {
          test: /\.js$/,
          exclude: /node_modules/,
          use: {
            loader: 'babel-loader'
          }
        },
        {
          test: /\.(png|svg|jpg|jpeg|gif)$/,
          loader: 'file-loader',
          options: {
            limit: 10000,
            name: nodeEnv ? '[name].[ext]' : 'static/images/[name].[hash].[ext]'
          }
        },
        {
          test: cssRegex,
          exclude: cssModuleRegex,
          use: [
            nodeEnv ? 'style-loader' : MiniCssExtractPlugin.loader,
            'css-loader',
            {
              loader: 'postcss-loader',
              options: {
                plugins: [require('autoprefixer')]
              }
            },
          ]
        },
        {
          test: lessRegex,
          exclude: lessModuleRegex,
          use: [
            nodeEnv ? 'style-loader' : MiniCssExtractPlugin.loader,
            'css-loader',
            {
              loader: 'postcss-loader',
              options: {
                plugins: [require('autoprefixer')]
              }
            },
            'less-loader'
          ]
        },
        {
          test: lessModuleRegex,
          use: [
            nodeEnv ? 'style-loader' : MiniCssExtractPlugin.loader,
            {
              loader: 'css-loader',
              options: {
                modules: true
              },
            },
            {
              loader: 'postcss-loader',
              options: {
                plugins: [require('autoprefixer') /*在这里添加*/]
              }
            },
            'less-loader'
          ]
        },
        {
          test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/,
          loader: 'url-loader',
          options: {
            limit: 10000,
            name: nodeEnv ? '[name].[ext]' : 'static/font/[name].[hash].[ext]'
          }
        }
      ]
    },
    plugins: [
      new CleanWebpackPlugin(),
      new HtmlWebpackPlugin({
        title: 'react',
        template: path.resolve(__dirname, '../index.html')
      }),
      new MiniCssExtractPlugin({
        // Options similar to the same options in webpackOptions.output
        // both options are optional
        filename: nodeEnv ? '[name].css' : 'static/css/[name].[hash].css',
        chunkFilename: nodeEnv ? '[name].css' : 'static/css/[name].[hash].css'
      })
    ],
    optimization: {
      splitChunks: {
        chunks: 'all'
      }
    },
    output: {
      filename: nodeEnv ? '[name].js' : 'static/js/[name].[hash].js',
      chunkFilename: nodeEnv ? '[name].js' : 'static/js/[name].[hash].js',
      publicPath: '/',
      path: path.resolve(__dirname, '../dist')
    }
  };
}

module.exports = basicConfig;
