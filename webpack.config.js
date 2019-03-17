const path = require('path');
module.exports = {
    mode: 'development',
    devtool: 'inline-source-map',
    entry: './src/script.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'my-first-webpack.bundle.js',
        publicPath: './dist/',

    },
    module: {
        rules: [
              {
                test: /\.css$/,
                use:
                  [
                    'style-loader',
                    'css-loader',
                  ]
              },
            {
                test: /\.(png|jpg|gif|svg)$/,
                loader: 'file-loader?name=images/[name].[ext]',
            },
            {
                test: /\.(ttf|eot|woff|woff2)$/,
                loader: 'file-loader?name=fonts/[name].[ext]',
            },
        ]
    },
    
};