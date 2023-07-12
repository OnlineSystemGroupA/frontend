const {defineConfig} = require('@vue/cli-service')
module.exports = defineConfig({
    transpileDependencies: true,
    devServer: {
        host: '172.24.81.197',
        port: 8080,
        proxy: {
            '/api': {
                target: `http://localhost:8081`,
                changeOrigin: true,
                pathRewrite: {
                    '^/api': ''
                }
            }
        }
    }
})