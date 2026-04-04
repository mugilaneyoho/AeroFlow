import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import federation from '@originjs/vite-plugin-federation'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(),
    federation({
      name:'vedioconfrence',
      filename:'callservice.js',
      exposes:{
        "./callservice":"./src/App.tsx"
      },
      shared:{
        react: "^18.2.0",
      }
    })
  ],
  build: {
    target: 'esnext',   
    cssCodeSplit: false,
  },
})
