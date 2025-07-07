import { defineConfig } from 'vite'
import path from 'path'
import react from '@vitejs/plugin-react'
import { tanstackRouter } from '@tanstack/router-plugin/vite'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    tanstackRouter({
      target: 'react',
    }),
  ],
  resolve: {
    alias: {
      components: path.resolve('src/components'),
      pages: path.resolve('src/pages'),
    },
  },
})
