import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { resolve } from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  base:'./',
  build:{
    target: 'es2015',
    outDir:'dist',
    minify: 'terser',
    emptyOutDir: true,
    lib: {
      entry: resolve(__dirname, 'lib/index.ts'),
      name: 'zztool',
      formats: ["es", "umd", "cjs"],
      // type: module 下，Node 用 .cjs 识别 CommonJS；浏览器沿用原有脚本地址。
      fileName: (format) => format === 'cjs' ? 'zztool.cjs' : `zztool.${format}.js`,
    },
    rollupOptions: {
      // 确保外部化处理那些你不想打包进库的依赖
      external: ['vue'],
    },
    terserOptions: {
      ecma: 2015,
      compress: {
        drop_console: true, // 去掉 console
        drop_debugger: true, // 去掉 debugger
        passes: 3, // 多次压缩提高体积优化
        pure_funcs: ['console.log', 'assert'], // 去掉指定函数调用
        collapse_vars: true,
        reduce_vars: true,
      },
      format:{
        comments:false
      }
    },

  }
})
