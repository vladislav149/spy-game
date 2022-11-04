const {defineConfig} = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  publicPath: '/spy-game/',
  css: {
    loaderOptions: {
      sass: {
        additionalData: '@import "@/assets/style/styles.scss";'
      }
    }
  }
})
