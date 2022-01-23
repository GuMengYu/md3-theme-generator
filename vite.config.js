import { defineConfig } from 'vite'
export default defineConfig({
    build: {
        lib: {
            name: 'es',
            entry: 'index.js'
        },
      rollupOptions: {
        // https://rollupjs.org/guide/en/#big-list-of-options
      }
    }
  })