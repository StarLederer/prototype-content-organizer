import type { Meta, StoryObj } from 'storybook-solidjs'
import Component from './SliderVisual'

const meta = {
  component: Component,
  tags: ['autodocs'],
  args: {
    active: false,
    min: 0,
    max: 5,
    value: () => 3,
  },
} satisfies Meta<typeof Component>

export default meta
type Story = StoryObj<typeof meta>

export const Main: Story = {}
