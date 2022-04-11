import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import * as path from 'path'
import styleImport, { VantResolve } from 'vite-plugin-style-import'
import viteCompression from 'vite-plugin-compression'

// https://vitejs.dev/config/
export default defineConfig({
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src')
    }
  },
  plugins: [
    viteCompression({
      threshold: 10240
    }),
    vue(),
    styleImport({
      resolves: [VantResolve()]
    })
  ]
})
