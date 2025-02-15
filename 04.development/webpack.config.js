const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')


module.exports = {
    mode: 'development',
    devtool: 'inline-source-map',
    devServer: {
    },

    // если используется несколько entry на одной странице
    optimization: {
        runtimeChunk: 'single',
    },

    entry: {
        index: './src/index.js',
        print: './src/print.js',
    },

    output: {
        filename: '[name].bundle.js',
        path: path.resolve(__dirname, 'dist'),
        clean: true,
    },

    module: {
        rules: [
            {
                test: /\.css$/i,
                use: ['style-loader', 'css-loader'],
            },
        ]
    },

    plugins: [
        new HtmlWebpackPlugin({
            title: 'Development',
        }),
    ]
}