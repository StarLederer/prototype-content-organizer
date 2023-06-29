import type { Meta, StoryObj } from 'storybook-solidjs'
import Component from './Entry'
import ContextMenu from '~/components/contextMenu/Provider'
import type { Track } from '~/api'

const track: Track = { vector: {} }

const meta = {
  component: Component,
  tags: ['autodocs'],
  args: {
    track,
    setTrack: () => { },
  },
  render: props => <ContextMenu><Component {...props} /></ContextMenu>,
} satisfies Meta<typeof Component>

export default meta
type Story = StoryObj<typeof meta>

export const Main: Story = {}
