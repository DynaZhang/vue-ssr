/**
 * @author: zhangzhulei(zhangzhulei@baidu.com)
 * @file: 启动文件
 * @date: Do not edit
 */
const path = require('path')
const express = require('express')
const fs = require('fs')
const { createBundleRenderer } = require('vue-server-renderer')

const serverBundle = require('./dist/vue-ssr-server-bundle.json')
const template = fs.readFileSync('./index.html', 'utf-8')
const clientManifest = require('./dist/vue-ssr-client-manifest.json')

const isProd = process.env.NODE_ENV === 'production'

let renderer


const server = express()

renderer = createBundleRenderer(serverBundle, {
    template,
    clientManifest
})

server.get('/', (req, res) => {
    renderer.renderToString({
        title: '哈哈哈',
        metaContent: '<meta name="description" content="zzl" />'
    }, (err, html) => {
        console.log(err)
        if (err) {
            return res.status(500).end('Internal Server Error')
        }
        res.setHeader('Content-Type', 'text/html; charset=utf-8')
        res.end(html)
    })
})

server.listen(8080, () => {
    console.log('server running at http://localhost:8080')
})