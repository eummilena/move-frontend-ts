import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  // Production build with Terser to allow dropping console/debugger and fine-grained control
  build: {
    minify: 'terser',
    target: 'es2020',
    sourcemap: false,
    terserOptions: {
      compress: {
        drop_console: true,
        drop_debugger: true,
        pure_funcs: ['console.info', 'console.debug', 'console.log', 'console.warn']
      },
      format: {
        comments: false
      },
      mangle: true
    } as any
  }
})
