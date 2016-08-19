var path = require('path');
var webpack = require('webpack');
module.exports = {
  entry:{
    index:"./src/components/Arno",
    vendor: ['react']
  },//入口文件
  output: {//打包输出的文件
    path:path.join(__dirname, './out'),
    //filename: "arno.js",
    //path: path.resolve(__dirname, './out'),
    filename: "[name].js",
    //publicPath: '',
    chunkFilename: "[name].js",
  },
  module: {
    loaders: [
      {
	  
        test: /\.(js|jsx)$/,
        loader: 'babel',
        query: {
          presets: ['es2015','babel-preset-react']
        }
      },
      {
        test: /\.css$/,
        loader: 'style-loader!css-loader'
      },
    ]
  },
  resolve: {// 现在你require文件的时候可以直接使用require('file')，不用使用require('file.coffee')
    extensions: ['', '.js', '.json', '.jsx']
  },
  plugins:[

    new webpack.ProvidePlugin({
      React: 'react'
    }),new webpack.optimize.CommonsChunkPlugin({
      names: ['vendor', 'manifest'],
    })
    //new webpack.optimize.CommonsChunkPlugin('vendor', 'vendor.bundle.js')//这是妮第三方库打包生成的文件
  ],
  exclude: [
    path.resolve(__dirname, "./node_modules")
  ]
}