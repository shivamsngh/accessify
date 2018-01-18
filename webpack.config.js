const path = require('path');

module.exports = {
  entry: './lib/index.js',
  output: {
    filename: './dist/bundle.js',
    path: path.resolve(__dirname, 'dist')
  }
};