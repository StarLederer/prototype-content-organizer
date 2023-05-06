import type { Component } from 'solid-js'
import { For, createSignal } from 'solid-js'
import styles from './Entry.module.scss'
import SliderInput from '~/components/SliderInput'

let id = -1

const axis: {
  id: number
  name: string | [string, string]
  min: number
  max: number
}[] = [
  // Beat
  {
    id: ++id,
    name: 'Trap',
    min: 0,
    max: 4,
  },
  {
    id: ++id,
    name: '2-Step',
    min: 0,
    max: 4,
  },
  {
    id: ++id,
    name: 'House',
    min: 0,
    max: 4,
  },
  {
    id: ++id,
    name: 'Exotic',
    min: 0,
    max: 4,
  },

  // Character
  {
    id: ++id,
    name: ['Organic', 'Electronic'],
    min: 0,
    max: 3,
  },
  {
    id: ++id,
    name: 'Melodic',
    min: 0,
    max: 3,
  },

  // Mood
  {
    id: ++id,
    name: ['Calm', 'Energetic'],
    min: -2,
    max: 2,
  },
  {
    id: ++id,
    name: ['Bright', 'Dark'],
    min: -2,
    max: 2,
  },
]

const Main: Component = () => {
  return (
    <article class={styles.root}>
      <header>
        <div data-img />
        <h1>Track title</h1>
      </header>

      <main>
        <h2>Axis</h2>
        <form class={styles.form}>
          <For each={axis}>
            {(ax) => {
              const [val, setVal] = createSignal(0)

              return <SliderInput
                label={ax.name}
                min={ax.min}
                max={ax.max}
                value={val}
                onChange={setVal}
              />
            }}
          </For>
        </form>
      </main>
    </article>
  )
}

export default Main
