import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'


export default defineConfig({
  build: {
    rollupOptions: {
      external: 
      ["react-router-dom"]
      ['react-hook-form']
    }
  }
});