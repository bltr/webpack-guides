const path = require('path')

module.exports = {
    mode: 'development',

    // entry: {
    //     index: './src/index.js',
    //     import: './src/another-module.js',
    // },

    // Prevent Duplication - Entry dependencies
    // entry: {
    //     index: {
    //         import: './src/index.js',
    //         dependOn: 'shared',
    //     },
    //     another: {
    //         import: './src/another-module.js',
    //         dependOn: 'shared',
    //     },
    //     shared: 'lodash',
    // },

    // Dynamic Imports
    entry: {
        index: './src/index2.js',
    },

    output: {
        filename: '[name].bundle.js',
        path: path.resolve(__dirname, 'dist'),
        clean: true,
    },

    // Prevent Duplication - Entry dependencies
    // optimization: {
    //     runtimeChunk: 'single',
    // },

    // Prevent Duplication - SplitChunksPlugin
    // optimization: {
    //     splitChunks: {
    //         chunks: 'all',
    //     },
    // },
}