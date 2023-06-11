import type { Meta, StoryObj } from 'storybook-solidjs'
import Component from './Button'

const meta = {
  component: Component,
  tags: ['autodocs'],
  render: args => <Component {...args}>Button</Component>,
} satisfies Meta<typeof Component>

export default meta
type Story = StoryObj<typeof meta>

export const Main: Story = {}

export const Tertiary: Story = {
  args: {
    variant: 'tertiary',
  },
}

export const Secondary: Story = {
  args: {
    variant: 'secondary',
  },
}

export const Primary: Story = {
  args: {
    variant: 'primary',
  },
}
