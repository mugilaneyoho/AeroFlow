import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import tailwindcss from '@tailwindcss/vite'
import federation from '@originjs/vite-plugin-federation'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(),
  tailwindcss(),
  federation({
    name: "training",
    filename: "training.js",
    exposes: {
      "./courses": "./src/remote/CoursePage.tsx",
      "./batches": "./src/remote/BatchPage.tsx",
      "./classes": "./src/remote/ClassPage.tsx",
    },
    shared: {
      react: "^18.2.0",
      "react-dom": "^18.2.0",
      "react-redux": "^8.1.1",
      "@reduxjs/toolkit": "^1.9.5",
    },
  })
  ],
  build: {
    target: 'esnext',
    cssCodeSplit: false,
  }
})
