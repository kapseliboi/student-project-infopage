const merge = require('webpack-merge'),
    common = require('./webpack.common');

module.exports = merge(common, {
    mode: 'development',
    devtool: 'source-map',
    devServer: {
        contentBase: './dist',
        watchOptions: {
            poll: true
        }
    }
});
