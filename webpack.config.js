const path = require('path');
const srcDir = path.join(__dirname, '/src/client');
const distDir = path.join(__dirname, '/src/dist');
const webpack = require('webpack');

module.exports = {
    entry: `${srcDir}/index.jsx`,
    output: {
        path: distDir,
        filename: 'bundle.js',
    },
    resolve: {
        extensions: ['.js', '.jsx', '.json', '.css']
    },
    module : {
        rules : [
            {
                test: /\.css$/,
                loader: 'style-loader!css-loader'
            },
            {
                test: /\.png$/,
                loader: 'url-loader?limit=100000&minetype=image/png'
            },
            {
                test: /\.jpg/,
                loader: 'file-loader'
            },
            {
                test : /\.jsx?/,
                include : srcDir,
                loader : 'babel-loader',
                query: {
                    presets: ['@babel/react']
                }
            }
        ]
    },
    plugins: [
        new webpack.DefinePlugin({
            'process.env.NODE_ENV': JSON.stringify('production')
        })
    ]
};

