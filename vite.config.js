import { defineConfig } from 'vite';

export default defineConfig({
  build: {
    rollupOptions: {
      external: ['react-hook-form'],
    },
  },
  optimizeDeps: {
    include: ['react-hook-form'],
  },
});