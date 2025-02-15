const path = require('path')

module.exports = {
    entry: {
        index: './src/index2.js',
    },

    output: {
        filename: '[name].bundle.js',
        path: path.resolve(__dirname, 'dist'),
        clean: true,
    }
}