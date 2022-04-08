import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { resolve } from 'path'
import pxtovw from 'postcss-px-to-viewport'

const loder_pxtovw = pxtovw({
  // 设计稿是多宽就写多宽，这里的设计稿宽度为375
  viewportWidth: 375,
  // viewportUnit: 'vw'
})
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@': resolve(__dirname, 'src')
    }
  },
  css: {
    postcss: {
      plugins: [loder_pxtovw]
    }
  }
})
