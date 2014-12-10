module.exports = {
    entry: "./index.js",
    devtool: 'eval',
    output: {
        path: "./public",
        filename: "[name].js"
    },
    module: {
        loaders: [{
            test: /\.js.?$/,
            loader: 'jsx-loader?harmony'
        }]
    },
    resolve: {
        extensions: ["", ".webpack.js", ".web.js", ".jsx", ".js"]
    }
};