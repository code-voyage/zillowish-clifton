module.exports = {
  entry: __dirname + '/client/src/components/index.jsx',
  module: {
    rules: [
      { 
        test: [/\.jsx/],
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-react', '@babel/preset-env']
          }
        }
      }
    ]
  },
   output: {
    filename: 'bundle.js',
    path: __dirname + '/client/dist/'
  }
};

console.log("directory:",__dirname + '/client/dist');