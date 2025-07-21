import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { federation } from '@module-federation/vite'
import { dependencies } from './package.json'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    federation({
      filename: 'remoteEntry.js',
      name: 'products',
      exposes: {
        './FeaturedProductsList': './src/components/FeaturedProductsList/FeaturedProductsList.tsx',
      },
      remotes: {},
      shared: {
        react: {
          singleton: true,
          requiredVersion: dependencies.react,
        }
      }
    }),
    react()
  ],
})
