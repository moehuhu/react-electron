const path = require('path');
const LodashModuleReplacementPlugin = require('lodash-webpack-plugin');
const MomentLocalesPlugin = require('moment-locales-webpack-plugin');

module.exports = {
    entry: './src/index.js',
    output: {
        filename: 'main.js',
        path: path.resolve(__dirname, 'dist'),
    },
    target: 'node',
    module: {
        rules: [{
            test: /\.jsx?$/,
            use: [
                { loader: 'babel-loader' }
            ],

        }]
    },
    plugins: [
        new LodashModuleReplacementPlugin(),
        new MomentLocalesPlugin(),
    ]
};