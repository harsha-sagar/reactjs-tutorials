module.exports = {
  entry: './main.js',
  output: {
    filename: 'index.js'
  },
  devServer: {
      inline: true,
      port: 3333
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['react']
          }
        }
      }
    ]
  },
  resolve: {
    extensions: ['.js', '.jsx']
  }  
}
