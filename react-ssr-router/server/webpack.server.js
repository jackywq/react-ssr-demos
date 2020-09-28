const path = require('path');
const merge = require('webpack-merge');
const baseConfig = require('./webpack.base.js');
const webpackNodeExternals = require('webpack-node-externals');

const config = {
  // 需要引入node的一些核心模块, 所以服务端运行需要设置target: node
  target: 'node',
  entry: './src/index.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'build')
  },
  // 服务端渲染代码，第三方模块直接通过script引入，不需要打包到bundle中, 所以排除
  externals: [webpackNodeExternals()]
};

module.exports = merge(baseConfig, config);
