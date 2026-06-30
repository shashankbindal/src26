import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import hoverMediaFeature from 'postcss-hover-media-feature'

export default defineConfig({
  plugins: [react()],
  css: {
    postcss: {
      plugins: [hoverMediaFeature()],
    },
  },
  server: {
    proxy: {
      '/api': {
        target: 'http://localhost:5000',
        changeOrigin: true,
        secure: false,
      },
    },
  },
})
