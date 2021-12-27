/**
 * @author: zhangzhulei(zhangzhulei@baidu.com)
 * @file: 客户端打包配置
 * @date: Do not edit
 */

const path = require('path')
const { merge } = require('webpack-merge');
const baseConfig = require('./webpack.base.config');
const VueSSRClientPlugin = require('vue-server-renderer/client-plugin');

const resolve = file => path.resolve(__dirname, file);

const clientConfig = {
    entry: {
        app: resolve('../src/entry-client.js')
    },
    module: {
        rules: [
            {
                test: /\.m?js$/,
                exclude: /(node_modules|bower_components)/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env'],
                        cacheDirectory: true,
                        plugins: ['@babel/plugin-transform-runtime']
                    }
                }
            }
        ]
    },
    optimization: {
        splitChunks: {
            name: 'manifest',
            minChunks: Infinity
        }
    },
    plugins: [
        // 此插件在输出目录中生成 `vue-ssr-client-manifest.json`。
        new VueSSRClientPlugin()
    ]
};

module.exports = merge(baseConfig, clientConfig);

