import type { Meta, StoryObj } from 'storybook-solidjs'
import Component from './Track'

const meta = {
  component: Component,
  tags: ['autodocs'],
} satisfies Meta<typeof Component>

export default meta
type Story = StoryObj<typeof meta>

export const Main: Story = {}
