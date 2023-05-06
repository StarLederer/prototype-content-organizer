import type { Component } from 'solid-js'
import { For } from 'solid-js'
import './App.scss'
import styles from './App.module.scss'
import Entry from '~/components/Entry'

const Main: Component = () => {
  return (
    <div class={styles.root}>
      <For each={Array(4)}>
        {() => <Entry />}
      </For>
    </div>
  )
}

export default Main
