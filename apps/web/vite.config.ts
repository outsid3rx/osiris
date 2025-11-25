import path from 'node:path'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import svg from '@neodx/svg/vite'
import { defineConfig } from 'vite'
import { VitePWA } from 'vite-plugin-pwa'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
    svg({
      inputRoot: 'src/shared/ui/icons',
      output: 'public/sprites',
      resetColors: {
        include: ['./src/shared/ui/icons/*-auth.svg'],
      }
    }),
    VitePWA({
      registerType: 'prompt',
      injectRegister: false,

      pwaAssets: {
        disabled: false,
        config: true,
      },

      manifest: {
        name: 'osiris',
        short_name: 'osiris',
        description: 'Cotrol osiris from any device',
        theme_color: '#ffffff',
      },

      workbox: {
        globPatterns: ['**/*.{js,css,html,svg,png,ico}'],
        cleanupOutdatedCaches: true,
        clientsClaim: true,
      },

      devOptions: {
        enabled: false,
        navigateFallback: 'index.html',
        suppressWarnings: true,
        type: 'module',
      },
    }),
  ],
  resolve: {
    alias: {
      '~server': path.resolve(__dirname, '../server/src'),
      '~shared': path.resolve(__dirname, './src/shared'),
      '~entities': path.resolve(__dirname, './src/entities'),
      '~features': path.resolve(__dirname, './src/features'),
      '~widgets': path.resolve(__dirname, './src/widgets'),
      '~pages': path.resolve(__dirname, './src/pages'),
      '~app': path.resolve(__dirname, './src/app'),
      '@': path.resolve(__dirname, './src'),
    },
  },
  server: {
    proxy: {
      '/api': {
        target: 'http://localhost:3000/',
        changeOrigin: true,
      },
    },
  },
})
