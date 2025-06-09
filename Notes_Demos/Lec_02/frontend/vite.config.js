import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  server: {
    proxy: {
      '/api': {
        '/api': 'http://localhost:3000',
        // this will append the url as well as server will assume that the url is already there and the request is coming from the same server solving the CORS issue
      },
    },
  }
  plugins: [react()],
})
