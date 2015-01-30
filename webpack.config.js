var webpack = require('webpack');
var productionBuild = process.env.NODE_ENV === 'production';
var plugins = [new webpack.DefinePlugin({
    'process.env': {

        'NODE_ENV': JSON.stringify(process.env.NODE_ENV || 'development'),
    },
})];

if (productionBuild) {

    plugins.push(new webpack.optimize.DedupePlugin());
    plugins.push(new webpack.optimize.UglifyJsPlugin());
}

module.exports = {
    debug: !productionBuild,
    cache: !productionBuild,
    devtool: !productionBuild && 'inline-source-map',
    entry: {
        main: ['./index.js'],
        vendor: ['react']
    },
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
        extensions: ["", ".webpack.js", ".web.js", ".jsx", ".js"],
        root: process.cwd() + '/lib'
    },
    plugins: plugins
};