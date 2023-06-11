import type { Preview } from 'storybook-solidjs'
import { render } from 'solid-js/web'
import { cssProps } from '~/style/constants'
import '~/style'

const preview: Preview = {
  parameters: {
    actions: { argTypesRegex: '^on[A-Z].*' },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
  },
  decorators: [
    (Story) => {
      const root = document.createElement('div')

      cssProps().forEach(([key, val]) => {
        root.style.setProperty(key, val)
      })

      render(Story, root)

      return root
    },
  ],
}

export default preview
