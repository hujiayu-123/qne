const path = require('path')

module.exports = {
    devServer: {
        proxy: {
            '/api': {
                target: "http://3g7096967c.qicp.vip:29355",
                pathRewrite: {
                    '^/api': ""
                }
            }
        }
    },
    pluginOptions: {
        "style-resources-loader": {
            preProcessor: "less",
            patterns: [
              //这个是加上自己的路径，
              //注意：试过不能使用别名路径
              path.resolve(__dirname, "./src/assets/css/global.less")
             ]
         }
     }
}