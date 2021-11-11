const HtmlWebPackPlugin = require('html-webpack-plugin');
const path = require('path');

module.exports = {
  module: {
    rules: [
      {
        test: /\.(ts|tsx)$/,
        exclude: [/node_modules/],
        use: 'ts-loader'
      },
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader'
        }
      },
      {
        test: /\.html$/,
        use: [
          {
            loader: 'html-loader'
          }
        ]
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader']
      }
    ]
  },
  resolve: {
    // alias allows you to resolve absolute paths to folders so instead of doing
    // ../components/component you can do Components/component magic
    alias: {
      Components: path.resolve(__dirname, 'src/Components/'),
      Styles: path.resolve(__dirname, 'src/Styles'),
      Assets: path.resolve(__dirname, 'src/Assets')
    },
    // this allows you to leave off the file extension.
    extensions: ['.jsx', '.js', '.ts', '.tsx']
  },
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist')
  },
  plugins: [
    new HtmlWebPackPlugin({
      template: './src/index.html',
      filename: './index.html'
    })
  ]
};
