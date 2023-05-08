import type { Component } from 'solid-js'
import { For } from 'solid-js'
import './App.scss'
import styles from './App.module.scss'
import Entry from '~/components/Entry'
import ContextMenu from '~/components/contextMenu/Provider'

const Main: Component = () => {
  return (
    <ContextMenu>
      <div class={styles.root}>
        <For each={Array(4)}>
          {() => <Entry />}
        </For>
      </div>
    </ContextMenu>
  )
}

export default Main
