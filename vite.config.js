import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [
    react({
      jsxRuntime: 'classic', // force JSX parsing in .js files
      babel: {
        presets: ['@babel/preset-react']
      }
    })
  ],
})
