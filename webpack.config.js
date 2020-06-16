const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtructPlugin = require('mini-css-extract-plugin');

module.exports = {
    mode: 'development',
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: 'babel-loader'
            },
            {//Loading images
                test: /\.(png|jpg|jpeg|gif|ico)$/,
                use: [
                    {
                        loader: 'file-loader',
                        options: {
                            outputPath: 'images',
                            name: '[name]-[sha1:hash:7].[ext]'
                        }
                    }
                ]
            },
            {//Loading fonts
                test: /\.(ttf|otf|eot|woff|woff2)$/,
                use: [
                    {
                        loader: 'file-loader',
                        options: {
                            outputPath: 'fonts',
                            name: '[name].[ext]'
                        }
                    }
                ]
            },
            {//Loafing CSS
                test: /\.(css)$/,
                use: [MiniCssExtructPlugin.loader, 'css-loader']
            },
            {//Loading SASS/SCSS
                test: /\.(s[ac]ss)$/,
                use: [MiniCssExtructPlugin.loader, 'css-loader',
                    { loader: 'sass-loader', options: {} },
                ]
            },
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            title: 'Build Webpack Sandbox',
            buildTime: new Date().toISOString(),
            template: 'public/index.html'
        }),
        new MiniCssExtructPlugin({
            filename: 'main-[hash:8].css'
        })
    ]
}