import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import path from 'path'
import postCssPxToRem from 'postcss-pxtorem'
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  resolve: {
    // 别名
    alias: {
      '@': path.resolve(__dirname, 'src'),
    },
  },
  server: {
    port: 7709,
    proxy: {
      // https://vitejs.cn/config/#server-proxy
      '/api': 'http://localhost:4567',
    }
  },
  build: {
    // 指定生成静态资源的存放路径（相对于 build.outDir）。
    assetsDir: '/assets',
    // 小于此阈值的导入或引用资源将内联为 base64 编码，以避免额外的 http 请求 0 禁用
    assetsInlineLimit: 1024 * 6,
  },
  css: {
    postcss: {
      plugins: [
        postCssPxToRem({
          // 根大小
          rootValue: 37.5,
          // 保留几位小数
          unitPrecision: 4,
          // 可以从px转成rem的属性 * 是全部css属性
          propList: ['*'],
          // 最小转换值
          minPixelValue: 1,
          // 忽略转换 的属性开头
          selectorBlackList: ['.van']

        })
      ]
    }
  },
})
