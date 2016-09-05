var path = require('path');
var webpack = require('webpack');
var AssetsPlugin = require('assets-webpack-plugin');
var autoprefixer = require('autoprefixer');
var precss = require('precss');

module.exports = {
    devtool: 'eval',
    entry: {
        'index': [
            './examples/index'
        ]
    },
    output: {
        path: path.join(__dirname, 'build'),
        filename: '[name].[hash].bundle.js',
        publicPath: '/arno/build/'
    },
    plugins: [
        new webpack.NoErrorsPlugin(),
        new AssetsPlugin({
            filename: 'build/webpack-assets.js',
            processOutput: function (assets) {
                return 'window.WEBPACK_ASSETS = ' + JSON.stringify(assets);
            }
        })
    ],
    module: {
        loaders: [
            {
                test: /\.(js|jsx)$/,
                loader: 'babel'
            },
            {
                test: /\.(png|jpg|gif|woff|woff2|ttf|eot|svg)$/,
                loader: 'url-loader?limit=1024&name=fonts/[name].[hash].[ext]'
            },
            {
                test: /\.(css|less)$/,
                loader: 'style!css?-autoprefixer!postcss!less'
            }
        ]
    },
    postcss: function () {
        return [autoprefixer({browsers: ['iOS >= 8', 'Android >= 4.1']}), precss];
    },
    devServer: {
        proxy: {
            "/station/*": {
                "target": "http://0.0.0.0:3000",
                "secure": false
            }
        },
        hot: true,
        noInfo: false,
        historyApiFallback: true,
        host: '0.0.0.0',
        port: 3000
    }
};
