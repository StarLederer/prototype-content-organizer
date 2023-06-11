import type { Component } from 'solid-js'
import { For } from 'solid-js'
import './App.scss'
import type { Track } from './api'
import Entry from '~/components/organisms/Entry'
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
      <div data-container>
        <For each={tracks}>
          {track => <Entry track={track} setTrack={() => { }} />}
        </For>
      </div>
    </ContextMenu>
  )
}

export default Main
