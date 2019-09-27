const path = require('path'),
    HtmlWebpackPlugin = require('html-webpack-plugin'),
    { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = {
    entry: './src/index.tsx',
    output: {
        path: path.join(__dirname, '/dist'),
        filename: 'js/[name].[hash].bundle.js'
    },
    resolve: {
        extensions: ['.js', '.jsx', '.json', '.ts', '.tsx']
    },
    module: {
        rules: [
            {
                test: /\.(ts|tsx)$/,
                loader: 'ts-loader'
            },
            {
                enforce: 'pre',
                test: /\.js$/,
                loader: "source-map-loader"
            },
            {
                test: /\.css$/i,
                use: ['style-loader', 'css-loader'],
            },
            {
                test: /\.(woff(2)?|ttf|eot)(\?v=\d+\.\d+\.\d+)?$/,
                use: [
                    {
                        loader: 'file-loader',
                        options: {
                            name: '[name].[ext]',
                            outputPath: 'fonts/'
                        }
                    }
                ]
            },
            {
                test: /\.(png|svg|jpg|gif)$/,
                use: [
                  {
                      loader: 'file-loader',
                      options: {
                          name: '[name].[ext]',
                          outputPath: 'images/'
                      }
                  }
                ]
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: path.resolve(__dirname, 'src', 'index.html')
        }),
        new CleanWebpackPlugin()
    ]
};
