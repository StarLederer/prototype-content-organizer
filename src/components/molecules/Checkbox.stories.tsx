import type { Meta, StoryObj } from 'storybook-solidjs'
import { createSignal } from 'solid-js'
import Component from './Checkbox'

const meta = {
  component: Component,
  tags: ['autodocs'],
  args: {
    label: 'Label goes here',
  },
  render: (props) => {
    const [val, setVal] = createSignal(false)
    return <Component {...props} checked={val()} setChecked={setVal}/>
  },
} satisfies Meta<typeof Component>

export default meta
type Story = StoryObj<typeof meta>

export const Main: Story = {}
