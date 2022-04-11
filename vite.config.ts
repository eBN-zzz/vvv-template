import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import * as path from 'path'
import styleImport, { VantResolve } from 'vite-plugin-style-import'
import viteCompression from 'vite-plugin-compression'

// https://vitejs.dev/config/
export default defineConfig({
  base: './',
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src')
    }
  },
  plugins: [
    vue(),
    viteCompression({
      threshold: 10240
    }),
    styleImport({
      resolves: [VantResolve()]
    })
  ],
  build: {
    target: 'modules',
    assetsDir: 'assets',
    minify: 'terser', // 混淆器，terser构建后文件体积更小
    terserOptions: {
      compress: {
        drop_console: true,
        drop_debugger: true
      }
    }
  }
})
