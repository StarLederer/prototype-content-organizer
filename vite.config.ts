import path from 'node:path'
import { defineConfig } from 'vite'
import icons from 'unplugin-icons/vite'
import solid from 'vite-plugin-solid'
import pages from 'vite-plugin-pages'

export default defineConfig({
  resolve: {
    alias: {
      '~/': `${path.resolve(__dirname, 'src')}/`,
    },
  },

  plugins: [
    icons({ compiler: 'solid' }),
    solid(),
    pages(),
  ],
})
