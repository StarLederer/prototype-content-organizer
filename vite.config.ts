import path from 'node:path'
import { defineConfig } from 'vite'
import solid from 'vite-plugin-solid'
import icons from 'unplugin-icons/vite'

export default defineConfig({
  resolve: {
    alias: {
      '~/': `${path.resolve(__dirname, 'src')}/`,
    },
  },

  plugins: [
    solid(),
    icons({ compiler: 'solid' }),
  ],
})
