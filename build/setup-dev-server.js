/**
 * @author: zhangzhulei(zhangzhulei@baidu.com)
 * @file: 封装处理模块
 * @date: Do not edit
 */

module.exports = function (app, templatePath, cb) {
    let ready
    const onReady = new Promise(r => ready = r)

    let serverBundle
    let clientManifest
    let template

    const update = () => {
        if (serverBundle && clientManifest) {
            // 构建完毕，通知 server 可以 render 渲染了
            ready()
            // 更新 server 中的 Renderer
            cb(serverBundle, {
                template,
                clientManifest
            })
        }
    }

    // 监视构建 template，调用 update 更新 Renderer
    // 监视构建 serverBundle，调用 update 更新 Renderer 
    // 监视构建 clientManifest，调用 update 更新 Renderer

    return onReady
}
