const webpack = require('webpack');
const webpackDevServer = require('webpack-dev-server');

const config = require('./webpack/webpack.dev.js');
const options = {``
  contentBase: './dist',
  hot: true,
  host: 'localhost'
};

webpackDevServer.addDevServerEntrypoints(config, options);
const compiler = webpack(config);
const server = new webpackDevServer(compiler, options);

server.listen(5000, 'localhost', () => {
  console.log('dev server listening on port 5000');
});

// const express = require('express');
// const webpack = require('webpack');
// const webpackDevMiddleware = require('webpack-dev-middleware');

// const app = express();
// const config = require('./webpack/webpack.dev');
// const compiler = webpack(config);
// console.log('compiler')
// // 告诉 express 使用 webpack-dev-middleware，
// // 以及将 webpack.config.js 配置文件作为基础配置
// app.use(webpackDevMiddleware(compiler, {
//   publicPath: config.output.publicPath
// }));
// console.log('app.use')
// // 将文件 serve 到 port 3000。
// app.listen(3000, function () {
//   console.log('Example app listening on port 3000!\n');
// });
