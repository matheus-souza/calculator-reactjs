module.exports = {
  entry: {
    app: __dirname + '/src',
    components: [__dirname + '/src/components/Calculator.js']
  },
  output: {
    path: 'bundles',
    filename: '[name].js',
    publicPath: '/bundles/'
  },
  module: {
    loaders: [
      {
        test: /.js/,
        loader: 'babel',
        include: __dirname + '/src'
      }
    ]
  }
}
