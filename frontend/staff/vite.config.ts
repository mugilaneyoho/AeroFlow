import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import tailwindcss from '@tailwindcss/vite'
import federation from "@originjs/vite-plugin-federation"

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
    federation({
      name: "vedioconfrence",
      remotes: {
        onlineclass:"http://localhost:6008/assets/callservice.js",
        ticketsystem:"http://localhost:6007/assets/ticketsystem.js",
      },
      shared: {
        react: "^18.2.0",
      },
    })
  ],
  server:{
    port:5003,
    strictPort: true
  },
  preview:{
    port:6003,
    strictPort: true
  }
})
