const path = require('path');

module.exports = {
  devtool: 'eval',
  mode: 'development',
  entry: './src/index.js',
  output: {
    path: __dirname + '/dist',
    publicPath: '/',
    filename: 'bundle.js'
  },
  devServer: {
    contentBase: './',
    publicPath: '/dist/',
		historyApiFallback: true,
		hot: true
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /(node_modules|bower_components)/,
        use: ['babel-loader']
			},
			{
        test: /\.css$/i,
        use: ["style-loader", "css-loader"],
      },
    ],
	},
}
