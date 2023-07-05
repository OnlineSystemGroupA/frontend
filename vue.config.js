const {defineConfig} = require('@vue/cli-service')
module.exports = defineConfig({
    transpileDependencies: true,
    devServer: {
        host: 'localhost',
        port: 8080,
        proxy: {
            '/api': {
                target: `http://172.27.154.150:8081`,
                changeOrigin: true,
                pathRewrite: {
                    '^/api': ''
                }
            }
        }
    }
})