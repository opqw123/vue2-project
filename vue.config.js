const path = require('path')
const { defineConfig } = require("@vue/cli-service");
function resolve(dir) {
  return path.join(__dirname, dir)
}
module.exports = defineConfig({
  transpileDependencies: true,
  // 取消 ESLint 校验
  lintOnSave: false,
  // 自定义webpack配置
  configureWebpack: {
    resolve: {
      extensions: ['.js', '.vue', '.json'],
      alias: {
        'vue$': 'vue/dist/vue.esm.js',
        '@': resolve('src'),
      }
    },
  },
  devServer: {
    // port: 8000, // 端口号
    open: true,
  },
});
