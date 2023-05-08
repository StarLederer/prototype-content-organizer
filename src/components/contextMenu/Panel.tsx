import type { Component } from 'solid-js'
import { For } from 'solid-js'
import { ContextMenuPanel } from 'solid-headless'
import Button from '../buttons/Button'
import styles from './Panel.module.scss'

const Main: Component<{
  pos: [number, number]
}> = props => (
  <ContextMenuPanel
    class={styles.menu}
    style={{
      left: `${props.pos[0]}px`,
      top: `${props.pos[1]}px`,
    }}
  >
    <For each={Array(5)}>
      {() => <Button>Menu item</Button>}
    </For>
  </ContextMenuPanel>
)

export default Main
