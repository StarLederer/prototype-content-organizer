import type { Component } from 'solid-js'
import { For } from 'solid-js'
import { createStore, produce } from 'solid-js/store'
import styles from './Entry.module.scss'
import Button from './buttons/Button'
import Axis from '~/components/Axis'
import PlaybackBar from '~/components/PlaybackBar'
import { axis } from '~/api'
import type { Track, Vector } from '~/api'

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
        <span>Track artists</span>
      </header>

      <aside data-player>
        <PlaybackBar attrs={{ 'data-bar': true }} />
      </aside>

      <main>

        <form class={styles.form} ref={cardContainer}>
          <For each={axis}>
            {ax => (
              <Axis
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
