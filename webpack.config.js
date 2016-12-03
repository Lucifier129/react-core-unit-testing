var webpack = require('webpack');
var path = require('path');

module.exports = {
    module: {
        loaders: [{
            test: /\.jsx?$/,
            loader: 'babel-loader',
            query: {
                stage: 0
            },
            exclude: /node_modules/
        }]
    },
    resolve: {
        extensions: ['', '.js'],
        root: __dirname
    }
};
