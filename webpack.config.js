const path = require('path');

module.exports = {
    entry: './src/index.js',
    output: {
        filename: 'main.js',
        path: path.resolve(__dirname, 'dist'),
    },
    module: {
        rules: [{
            test: /\.jsx?$/,
            use: [
                { loader: 'babel-loader' }
            ],

        }]
    }
};