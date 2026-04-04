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
        onlineclass:"http://localhost:4173/assets/callservice.js"
      },
      shared: {
        react: "^18.2.0",
      },
    })
  ],
})
