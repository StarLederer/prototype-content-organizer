import type { Meta, StoryObj } from 'storybook-solidjs'
import Component from './CheckboxVisual'

const meta = {
  component: Component,
  tags: ['autodocs'],
  args: {
    active: false,
  },
} satisfies Meta<typeof Component>

export default meta
type Story = StoryObj<typeof meta>

export const Idle: Story = {}

export const Active: Story = {
  args: {
    active: true,
  },
}
