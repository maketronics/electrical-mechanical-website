import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  define: {
    __DEFINES__: {
      API_URL: JSON.stringify('https://api.example.com'),
      OTHER_KEY: JSON.stringify('value')
    }
  }
})
