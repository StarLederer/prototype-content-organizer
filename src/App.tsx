import type { Component } from 'solid-js'
import { For } from 'solid-js'
import './App.scss'
import Entry from '~/components/Entry'
import ContextMenu from '~/components/contextMenu/Provider'

const Main: Component = () => {
  return (
    <ContextMenu>
      <For each={Array(4)}>
        {() => <Entry />}
      </For>
    </ContextMenu>
  )
}

export default Main
