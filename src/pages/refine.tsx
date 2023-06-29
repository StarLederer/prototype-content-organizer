import type { Component } from 'solid-js'
import { For } from 'solid-js'
import styles from './refine.module.scss'
import type { Track } from '~/api'
import Entry from '~/components/organisms/Entry'

const tracks: Track[] = [
  { vector: {} },
  { vector: {} },
  { vector: {} },
  { vector: {} },
]

const Main: Component = () => (
  <div class={styles.root}>
    <For each={tracks}>
      {track => <Entry track={track} setTrack={() => { }} />}
    </For>
  </div>
)

export default Main
