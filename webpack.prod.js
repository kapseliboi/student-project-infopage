const merge = require('webpack-merge'),
    common = require('./webpack.common'),
    TerserJSPlugin = require('terser-webpack-plugin'),
    OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin');

module.exports = merge(common, {
    mode: 'production',
    resolve: {
        alias: {
            '@material-ui/core': '@material-ui/core/es'
        }
    },
    optimization: {
        minimize: true,
        minimizer: [
            new TerserJSPlugin(),
            new OptimizeCssAssetsPlugin({})
        ]
    },
});
