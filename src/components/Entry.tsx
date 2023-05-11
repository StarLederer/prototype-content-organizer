import type { Component } from 'solid-js'
import { For, createSignal } from 'solid-js'
import styles from './Entry.module.scss'
import Button from './buttons/Button'
import Editor from '~/components/Axis'
import type { Axis, Track, Vector } from '~/api'

let id = -1

const axis: Axis[] = [
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

export interface Props {
  track: Track
  setTrack: (v: Track) => void
}

const Main: Component<Props> = (props) => {
  const [patch, setPatch] = createSignal<Vector>({})

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
            {ax => (
              <Editor
                axis={ax}
                coordinate={patch()[ax.id]}
                setCoordinate={v => setPatch((prev) => {
                  const next = { ...prev }

                  if (v === undefined)
                    delete next[ax.id]
                  else
                    next[ax.id] = v

                  return next
                })}
              />
            )}
          </For>
        </form>
      </main>

      <Button
        variant={Object.keys(patch()).length <= 0 ? 'ghost' : 'primary'}
        onClick={() => {
          props.setTrack({
            vector: {
              ...props.track.vector,
              ...patch,
            },
          })
        }}
      >
        Save
      </Button>
    </article>
  )
}

export default Main
