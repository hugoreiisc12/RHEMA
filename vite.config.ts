import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";

export default defineConfig({
  plugins: [react()],
  publicDir: 'publico',
  server: {
    port: 5173,
    host: true,
  },
  preview: {
    port: 5500,
    strictPort: true,
    host: true,
  },
  build: {
    rollupOptions: {
      output: {
        manualChunks: (id) => (id.includes('node_modules') ? 'vendor' : undefined),
      },
    },
    esbuild: { drop: ['console', 'debugger'] },
  },
  resolve: {
    alias: {
      "@/components/ui": path.resolve(__dirname, "./src/Componentes/Interface do Usuario"),
      "@/components": path.resolve(__dirname, "./src/Componentes"),
      "@/assets": path.resolve(__dirname, "./src/ativos"),
      "@/hooks": path.resolve(__dirname, "./src/gancho"),
      "@/lib": path.resolve(__dirname, "./src/bilbioteca"),
      "@/pages": path.resolve(__dirname, "./src/pagina"),
    },
  },
});
