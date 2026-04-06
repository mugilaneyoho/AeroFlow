import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import federation from '@originjs/vite-plugin-federation'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
    federation({
      name: "master",
      remotes: {
        telecaller: "http://localhost:6001/assets/telecaller.js",
        courses: "http://localhost:6002/assets/training.js",
        batches: "http://localhost:6002/assets/training.js",
        classes: "http://localhost:6002/assets/training.js",
        ticketsystem:"http://localhost:6007/assets/ticketsystem.js"
      },
      shared: {
        react: "^18.2.0",
        "react-dom": "^18.2.0",
        "react-redux": "^8.1.1",
        "@reduxjs/toolkit": "^1.9.5",
      },
    })
  ],
  server:{
    port:5006,
    strictPort: true
  },
  preview:{
    port:6006,
    strictPort: true
  }
})
