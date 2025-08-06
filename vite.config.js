import { defineConfig } from 'vite';
// ...existing code...
export default defineConfig({
  // ...existing config...
  optimizeDeps: {
    include: ['vue', 'react', 'your-main-dependency'] // Kullandığınız ana bağımlılıkları ekleyin
  },
  build: {
    rollupOptions: {
      input: './index.html' // Giriş dosyanızın yolu
    }
  }
  // ...existing code...
});

