import type { Component } from 'solid-js'
import { For } from 'solid-js'
import './App.scss'
import type { Track } from './api'
import Entry from '~/components/Entry'
import ContextMenu from '~/components/contextMenu/Provider'

const tracks: Track[] = [
  { vector: {} },
  { vector: {} },
  { vector: {} },
  { vector: {} },
]

const Main: Component = () => {
  return (
    <ContextMenu>
      <For each={tracks}>
        {track => <Entry track={track} setTrack={() => {}} />}
      </For>
    </ContextMenu>
  )
}

export default Main
