import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// base: './' -> relative asset paths, so the built index.html works when
// opened directly from disk and when hosted at any path.
export default defineConfig({
  base: '/',
  plugins: [react()],
})
