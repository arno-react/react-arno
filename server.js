/*eslint no-console:0 */
'use strict';
require('core-js/fn/object/assign');
const webpack = require('webpack');
const WebpackDevServer = require('webpack-dev-server');
const config = require('./webpack.config');
const open = require('open');


new WebpackDevServer(webpack(config), config.devServer)
    .listen(config.port, config.host, (err) => {
        if (err) {
            console.log(err);
        }

        console.log('Listening at ' + config.host + ':' + config.port);
        console.log('Opening your system browser...');
        open('http://' + config.host + ':' + config.port + '/webpack-dev-server/');
    });
