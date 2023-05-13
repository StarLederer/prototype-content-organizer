import type { Component } from 'solid-js'
import { For } from 'solid-js'
import { createStore, produce } from 'solid-js/store'
import styles from './Entry.module.scss'
import Button from './buttons/Button'
import Editor from '~/components/Axis'
import PlaybackBar from '~/components/PlaybackBar'
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

const Main: Component<{
  track: Track
  setTrack: (v: Track) => void
}> = (props) => {
  const [patch, setPatch] = createStore<Vector>({})

  let cardContainer: HTMLFormElement | undefined

  const save = () => {
    props.setTrack({
      vector: {
        ...props.track.vector,
        ...patch,
      },
    })
  }

  return (
    <article class={styles.root}>
      <header data->
        <div data-img />
        <h1>Track title</h1>
      </header>

      <main>
        <aside data-player>
          <PlaybackBar attrs={{ 'data-bar': true }} />
        </aside>

        <form class={styles.form} ref={cardContainer}>
          <For each={axis}>
            {ax => (
              <Editor
                axis={ax}
                coordinate={patch[ax.id]}
                updateVector={v => setPatch(produce(vec => v(vec, ax.id)))}
              />
            )}
          </For>

          <Button
            variant="primary"
            onClick={save}
          >
            Done
            {Object.keys(patch).length > 0 && ' *'}
          </Button>
        </form>
      </main>

    </article>
  )
}

export default Main
