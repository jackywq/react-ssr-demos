const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
    target: 'node',
    mode: 'development',
    entry: path.join(__dirname, 'src/client/index.js'),
    output: {
        filename: 'bundle.js',
        path: path.join(__dirname, 'dist'),
        publicPath: '/public/'
    },
    module: {
        rules: [
            {
                test: /.(js|jsx)$/,
                loader: 'babel-loader',
                exclude: /node_modules/
            }
        ]
    },
    plugins:[
        new HtmlWebpackPlugin({
           template: path.join(__dirname, 'src/client/index.html'),
        })
    ],
    devServer: {
        hot: true,
        port: 3000,
        overlay: true
    }
}