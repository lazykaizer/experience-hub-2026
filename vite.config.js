import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  plugins: [
    react(), 
    tailwindcss(),
    {
      name: 'html-transform',
      transformIndexHtml(html) {
        return html.replace(
          /GA_MEASUREMENT_ID/g,
          (process.env.VITE_GA_ID || '').trim()
        )
      }
    }
  ],
})
