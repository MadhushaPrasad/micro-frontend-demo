import { federation } from '@module-federation/vite';
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { dependencies } from './package.json'

// https://vite.dev/config/
export default defineConfig({
  build: {
    target: 'esnext',
    minify: false
  },
  plugins: [
    federation({
      name: 'app',
      remotes: {
        products: {
          type: 'module',
          name: 'products',
          entry: "http://localhost:3000/remoteEntry.js",
          entryGlobalName: 'remote',
          shareScope: 'default',
        }
      },
      filename: 'remoteEntry.js',
      shared: {
        react: {
          singleton: true,
          requiredVersion: dependencies.react,
        },
      }
    }),
    react()
  ],
})
