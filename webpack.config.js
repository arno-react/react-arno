var webpack = require('webpack');
var path = require('path');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var autoprefixer = require('autoprefixer');
var precss = require('precss');

module.exports = {
    entry: './src/index',
    externals: {
        'react': 'react',
        'react-dom': 'react-dom',
        'react-addons-css-transition-group': 'react-addons-css-transition-group'
    },
    output: {
        path: path.join(__dirname, 'dist'),
        filename: 'arno.js',
        library: 'Arno',
        libraryTarget: 'umd'
    },
    resolve: {
        extensions: ['', '.js', '.css', '.less','.jsx']
    },
    plugins: [
        new webpack.optimize.OccurenceOrderPlugin(),
        new ExtractTextPlugin('arno.css')
    ],
    module: {
        loaders: [{
            test: /\.(js|jsx)$/,
            loader: 'babel'
        }, {
            test: /\.(css|less)$/,
            loader: ExtractTextPlugin.extract('style', 'css?-autoprefixer!postcss!less')
        },
        {
            test: /\.(png|jpg|gif|woff|woff2|ttf|eot|svg)$/,
            loader: 'url?limit=1024&name=fonts/[name].[ext]'
        }]
    },
    postcss: function () {
        return [autoprefixer({browsers: ['iOS >= 8', 'Android >= 4.1']}), precss];
    }
};
