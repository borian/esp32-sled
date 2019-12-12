const path = require("path");

module.exports = {
    outputDir: path.resolve(__dirname, "../data"),
    productionSourceMap: false,
    configureWebpack: {
        output: {
            filename: '[name].js',
        },
        optimization: {
            splitChunks: false
        }
    },
    css: {
        extract: false,
    },
}
