import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  server: {
    // 啟動 server 時預設開啟的頁面
    open: '/pages/index.html',
  },
});