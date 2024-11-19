import type { UserConfig } from 'vite'
import path from 'node:path'
import vue from '@vitejs/plugin-vue'
import { defineConfig } from 'vite'
import VueDevTools from 'vite-plugin-vue-devtools'

export default defineConfig((config: UserConfig) => {
  return {
    resolve: {
      alias: {
        '@': path.resolve(process.cwd(), 'src'),
      },
    },
    plugins: [vue(), config.mode != 'production' && VueDevTools()],
  }
})
