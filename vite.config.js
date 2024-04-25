import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    rollupOptions: {
      external: [
        '/public/translations/tr.json',
        '/public/translations/en.json',
        '/public/translations/ru.json',
        '/public/translations/az.json'
      ]
    }
  }
})

