import type { Component } from 'solid-js'
import { For } from 'solid-js'
import { createStore, produce } from 'solid-js/store'
import styles from './Entry.module.scss'
import Button from '~/components/buttons/Button'
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

  const view = (i: number) => {
    if (!cardContainer)
      return

    cardContainer.children[i].scrollIntoView({
      behavior: 'smooth',
      block: 'nearest',
      inline: 'nearest',
    })
  }

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
        <PlaybackBar attrs={{ 'data-bar': true }}/>
      </header>

      <main>
        <form class={styles.form} ref={cardContainer}>
          <For each={axis}>
            {(ax, i) => (
              <div class={styles.card}>
                <Editor
                  axis={ax}
                  coordinate={patch[ax.id]}
                  updateVector={v => setPatch(produce(vec => v(vec, ax.id)))}
                />
                <div data-controls-primary>
                  <Button type="button" variant="ghost" onClick={() => view(i() - 1)}>Previous</Button>
                  <Button type="button" variant="primary" onClick={() => view(i() + 1)}>Next</Button>
                </div>
              </div>
            )}
          </For>
        </form>
      </main>

      {/* <Button
        variant={Object.keys(patch).length <= 0 ? 'ghost' : 'primary'}
        onClick={save}
      >
        Save
      </Button> */}
    </article>
  )
}

export default Main
