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
    minify: true,
    emptyOutDir: true,
    lib: {
      entry: resolve(__dirname, 'lib/index.ts'),
      name: 'zztool',
      formats: ["es", "umd", "cjs"],
      // the proper extensions will be added
      fileName: (format) => {
        if (format === 'es') return `zztool.es.js`
        if (format === 'umd') return `zztool.umd.js`
        if (format === 'cjs') return `zztool.umd.cjs`
        return `zztool.${format}.js`
      },
    },
    rollupOptions: {
      // 确保外部化处理那些你不想打包进库的依赖
      external: ['vue'],
    },
    terserOptions: {
      compress: {
        drop_console: true,
        drop_debugger: true,
      },
      format:{
        comments:false
      }
    },

  }
})
