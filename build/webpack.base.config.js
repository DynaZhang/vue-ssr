/**
 * @author: zhangzhulei(zhangzhulei@baidu.com)
 * @file: 公共配置
 * @date: Do not edit
 */

const VueLoaderPlugin = require('vue-loader/lib/plugin');
const path = require('path');
const FriendlyErrorsWebpackPlugin = require('friendly-errors-webpack-plugin');

const resolve = file => path.resolve(__dirname, file);

const isProd = process.env.NODE_ENV === 'production';

module.exports = {
    mode: isProd ? 'production' : 'development',
    output: {
        path: resolve('../dist'),
        publicPath: '/dist/',
        filename: '[name].[chunkhash].js'
    },
    resolve: {
        alias: {
            '@': resolve('../src')
        },
        extensions: ['.js', '.vue', '.json']
    },
    devtool: isProd ? 'source-map' : 'cheap-module-eval-source-map',
    module: {
        rules: [
            {
                test: /\.(png|gif|jpeg|jpg)$/,
                use: [
                    {
                        loader: 'url-loader',
                        options: {
                            limit: 8 * 1024
                        }
                    }
                ]
            },
            {
                test: /\.(woff|woff2|eot|ttf|otf)$/,
                use: ['file-loader']
            },
            {
                test: /\.vue$/,
                loader: 'vue-loader'
            },
            {
                test: /\.(css|less)$/,
                use: [
                    'vue-style-loader',
                    {
                        loader: 'css-loader', 
                        options: {
                            importLoaders: 1
                        }
                    },
                    'postcss-loader',
                    'less-loader'
                ]
            }
        ]
    },
    plugins: [
        new VueLoaderPlugin(),
        new FriendlyErrorsWebpackPlugin()
    ]
}


