import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import tailwindcss from '@tailwindcss/vite'
import federation from '@originjs/vite-plugin-federation'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(), 
    tailwindcss(),
    federation({
      name: "vedioconfrence",
      remotes: {
        onlineclass:"http://localhost:6008/assets/callservice.js"
      },
      shared: {
        react: "^18.2.0",
      },
    })
  ],
  server:{
    port:5004,
    strictPort: true
  },
  preview:{
    port:6004,
    strictPort: true
  }
})
