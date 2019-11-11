module.exports = {
    runtimeCompiler: true,

    // If you want to explicitly transpile a dependency with Babel, you can list it in this option.
    transpileDependencies: [],

    devServer: {
        // https: true,
        port: process.env.VUE_APP_SERVER_PORT,
        proxy: {
            '^/api': {
                target: process.env.VUE_APP_API_URL,
                pathRewrite: { '^/api': '/api' },
                changeOrigin: true
            }
        }
    }
}
