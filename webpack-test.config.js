const webpack = require('webpack');
const nodeExternals = require('webpack-node-externals');
const WebpackShellPlugin = require('webpack-shell-plugin');

const config = {
  entry: './tests-all.js',
  output: {
    filename: 'test-bundle.js',
  },
  target: 'node',
  externals: [nodeExternals()],
  node: {
    fs: 'empty',
  },
  module: {
    rules: [
      { test: /\.(js|jsx)$/, use: 'babel-loader', exclude: /node_modules/ },
    ],
  },
  plugins: [
    new WebpackShellPlugin({
      onBuildExit: './node_modules/mocha/bin/mocha test-bundle.js',
    }),
  ],
};

module.exports = config;
