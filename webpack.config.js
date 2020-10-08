const path = require('path');
var SRC_DIR = path.join(__dirname, '/public/spa/app.jsx');
var DIST_DIR = path.join(__dirname, '/public');

module.exports = {
    entry: SRC_DIR,
    output: {
      filename: 'main.js',
      path: DIST_DIR
    },
    module: {
        rules: [
            {
              test: /\.(js|jsx)$/,
              exclude: /node_modules/,
              loader: 'babel-loader',
            }
          ]
          
      }
  };
  