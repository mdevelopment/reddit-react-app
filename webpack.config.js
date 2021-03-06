module.exports = {
  entry: [
    './src/index.js'
  ],
  output: {
    path: __dirname +  '/build/js',
    //publicPath: __dirname +  '/build/js',
    filename: 'bundle.js'
  },
  module: {
    loaders: [{
      exclude: /node_modules/,
      loader: 'babel',
      query: {
        presets: ['react', 'es2015', 'stage-1']
      }
    },
    {
                    test: /\.css$/,
                    loader: 'style-loader!css-loader'
                }

  ]
  },
  resolve: {
    extensions: ['', '.js', '.jsx']
  },
  devServer: {
    historyApiFallback: true,
    contentBase: './'
  }
};
