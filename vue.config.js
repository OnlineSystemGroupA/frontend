const {defineConfig} = require('@vue/cli-service')
module.exports = defineConfig({
    transpileDependencies: true,
    devServer: {
        host: 'stcos.kekwy.com',
        port: 8080,
        proxy: {
            '/api': {
                target: `http://192.168.43.122:8081`,
                changeOrigin: true,
                pathRewrite: {
                    '^/api': ''
                }
            }
        }
    }
})