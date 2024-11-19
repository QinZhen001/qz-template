import type { UserConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { defineConfig } from 'vite'
import VueDevTools from 'vite-plugin-vue-devtools'

export default defineConfig((config: UserConfig) => {
  return {
    resolve: {
      alias: {
        '@': '/src',
      },
    },
    plugins: [vue(), config.mode !== 'production' && VueDevTools()],
  }
})
