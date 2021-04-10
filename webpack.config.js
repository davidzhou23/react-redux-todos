const path = require('path');
const htmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack');

module.exports = {
    entry: './src/index.js',
    output: {
        path: path.resolve(__dirname, './dist'),
        filename:'index.js'
    },
    mode: 'development',
    devtool: 'sourcemap',
    module:{
        rules:[
            {
                test: /\.js$/,
                use: 'babel-loader'
            }
        ]
    },
    plugins:[
        new htmlWebpackPlugin({
            template: './src/index.html',
            filename: 'index.html',
            inject: true
        }),
        new webpack.HotModuleReplacementPlugin()
    ],
    devServer:{
        contentBase: './dist',
        hot: true,
        host: 'localhost'
    }
}