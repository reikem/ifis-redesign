import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import path from 'path'


// https://vite.dev/config/
export default defineConfig({
  base: "https://reikem.github.io/ifis-redesign",
  plugins: [react(),],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    }}
})


