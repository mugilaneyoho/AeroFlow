import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import federation from '@originjs/vite-plugin-federation'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    federation({
      name:'telecaller',
      remotes:{
        telecaller:'http://localhost:4173/assets/telecaller.js'
      },
      shared: {
        react: '^18.2.0',
        'react-dom': '^18.2.0',
        'react-redux': '^8.1.1',
        '@reduxjs/toolkit': '^1.9.5',
      },
    })
  ],
})
