import type { Meta, StoryObj } from 'storybook-solidjs'
import Component from './Entry'
import type { Track } from '~/api'

const track: Track = { vector: {} }

const meta = {
  component: Component,
  tags: ['autodocs'],
  args: {
    track,
    setTrack: () => {},
  },
} satisfies Meta<typeof Component>

export default meta
type Story = StoryObj<typeof meta>

export const Main: Story = {}
