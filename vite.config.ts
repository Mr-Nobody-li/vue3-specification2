/*
 * @Author: Mr-Nobody-li
 * @Date: 2022-07
 * @LastEditors: Mr-Nobody-li
 * @LastEditTime: 2023-06
 * @Description:vite config
 */
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { resolve } from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias: [
      {
        find: '@',
        replacement: resolve(__dirname, 'src'),
      },
    ],
  },
})
