const path = require('path');

module.exports = {
  entry: './src/index.js',
  output: {
    filename: 'index.js',
    path: path.resolve(__dirname, './mystera/dist'),
    libraryTarget: 'var',
    library: 'entry'
    },
  mode: 'production'
};