const path = require('path');

module.exports = {
  module: {
    rules: [
      {
        test: /\.(png|jpe?g|gif)$/i,
        loader: 'file-loader',
        options: {
          outputPath: path.resolve(__dirname, 'src', 'assets', 'images')
        },
      },
    ],
  },
};