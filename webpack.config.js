const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');

module.exports = {
    entry: {
        app: './src/index.js',
    },
    plugins: [
        new HtmlWebpackPlugin({
            inject: true,
            template: './src/index.html',
            filename: 'index.html'
        }),
        new CleanWebpackPlugin(),
        
    ],
    output: {
        filename: '[name].bundle.js',
        path: path.resolve(__dirname, 'dist')
    }, 
    module: {
        rules: [
            { 
                test: /\.js$/, 
                exclude: /node_modules/, 
                // loader: "babel-loader" 
                use: ['babel-loader', 'astroturf/loader']
            },
            {
                test: /\.css$/,
                use: [
                'style-loader',
                'css-loader',
                'postcss-loader'
                ]
            },
            { 
                test: /\.(png|svg|jpg|gif)$/,
                use: [
                    {
                    loader: 'file-loader',
                    options: {
                        outputPath: 'img',
                        name: '[name].[ext]'
                    }
                    }   
                ],
            },
        ],
    },
};