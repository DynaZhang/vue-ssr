const fs = require('fs')
const Vue = require('vue')
const express = require('express')
const path = require("path");
const renderer = require('vue-server-renderer').createRenderer({
    template: fs.readFileSync(path.resolve(__dirname, 'index.html'), 'utf-8')  // 读取html文件
})

const server = express()
// 访问 'http://localhost:3000'时渲vue示例
server.get('/', (req, res) => {
    const app = new Vue({
        template: `
          <div id="app">{{message}}</div>
        `,
        data () {
            return {
                message: 'hello,张朱磊'
            }
        }
    })
    // 将vue示例转换成html字符串
    /**
     * @app vue示例
     * @context 插入模板的内容
     * @cb 回调函数
     */
    renderer.renderToString(app, {
        title: 'vue ssr',
        metaContent: '<meta name="description" content="哈哈哈哈">'
    }, (err, html) => {
        if (err) res.status(500).end('Interval Server Error')
        res.end(html)
    })
})

// 监听本地3000端口
server.listen(3000, () => {
    console.log(`server is running at http://localhost:3000`)
})