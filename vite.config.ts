import { defineConfig, type Plugin } from 'vite'
import react from '@vitejs/plugin-react'
// @ts-ignore
import { pages, renderPage } from './src/data/seoPagesData.js'

function seoDevPlugin(): Plugin {
  return {
    name: 'seo-dev-prerender',
    transformIndexHtml(html, ctx) {
      const cleanPath = (ctx?.originalUrl || ctx?.path || '/').split('?')[0].replace(/\/$/, '') || '/'
      const matchedPage = pages.find((p: any) => p.path === cleanPath)
      if (matchedPage) {
        return renderPage(html, matchedPage)
      }
      return html
    },
  }
}

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), seoDevPlugin()],
})
