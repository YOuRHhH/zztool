import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { resolve } from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  base:'./',
  build:{
    target: 'modules',
    outDir:'dist',
    minify: 'terser',
    emptyOutDir: true,
    lib: {
      entry: resolve(__dirname, 'lib/index.ts'),
      name: 'zztool',
      formats: ["es", "umd", "cjs"],
      // the proper extensions will be added
      fileName: (format) => `zztool.${format}.js`,
    },
    rollupOptions: {
      // 确保外部化处理那些你不想打包进库的依赖
      external: ['vue'],
    },
    terserOptions: {
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
