import type { Component } from 'solid-js'
import { For } from 'solid-js'
import { ContextMenuPanel } from 'solid-headless'
import Button from '../atoms/buttons/Button'
import type { ContextMenuItem } from './types'
import styles from './Panel.module.scss'

const Main: Component<{
  pos: [number, number]
  items: ContextMenuItem[]
  closeMenu: () => void
}> = props => (
  <ContextMenuPanel
    class={styles.menu}
    style={{
      left: `${props.pos[0]}px`,
      top: `${props.pos[1]}px`,
    }}
  >
    <For each={props.items}>
      {item => <Button onClick={() => {
        item.callback()
        props.closeMenu()
      }}>{item.title}</Button>}
    </For>
  </ContextMenuPanel>
)

export default Main
