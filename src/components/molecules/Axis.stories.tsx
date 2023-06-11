import type { Meta, StoryObj } from 'storybook-solidjs'
import { createStore, produce } from 'solid-js/store'
import Component from './Axis'
import type { Vector } from '~/api'
import { axis } from '~/api'

const meta = {
  component: Component,
  tags: ['autodocs'],
  args: {
    axis: axis[0],
  },
  render: (args) => {
    const [val, setVal] = createStore<Vector>({})

    return (
      <Component
        {...args}
        coordinate={val[0]}
        updateVector={v => setVal(produce(vec => v(vec, 0)))}
      />
    )
  },
} satisfies Meta<typeof Component>

export default meta
type Story = StoryObj<typeof meta>

export const Main: Story = {}
