const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
    // 入口文件
    entry: {
        entry: path.resolve(__dirname, 'index.js')
    },
    // 出口文件的配置
    output : {
        path: path.resolve(__dirname, '../dist'),
        filename: 'bundle.js'
    },
    // 模块
    module: {
        rules: [
            // ...,
            {
                test: /\.html$/,
                use: [{
                    loader: "html-loader",
                    options: {
                        minimize: true
                    }
                }]
            }
        ]
    },
    // 插件
    plugins: [new HtmlWebpackPlugin()],
    // 配置webpack开发服务功能
    devServer: {
        port: 8080,
        inline: true
    }
}