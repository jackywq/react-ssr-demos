const path  = require('path');

module.exports = {
    target: 'node',
    mode: 'development',
    entry: path.join(__dirname, 'src/client/ServerApp.js'),
    output: {
        filename: 'ServerApp.js',
        path: path.join(__dirname, 'dist'),
        libraryTarget: 'commonjs2'
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
}