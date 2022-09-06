const webpack = require('webpack');

module.exports = {
    mode: 'development',
    devtool: 'cheap-module-source-map',
    devServer: {
        port: 3000,
        hot: true,
        open: true,
    },
    plugins: [
        new webpack.DefinePlugin({
            'process.env.name': JSON.stringify('Kyriakos Bekas - Dev'),
        }),
    ],
};
