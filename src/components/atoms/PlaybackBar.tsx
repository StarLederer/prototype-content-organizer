import type { Component } from 'solid-js'
import { For } from 'solid-js'
import styles from './PlaybackBar.module.scss'

const Main: Component<{
  attrs?: Record<string, any>
}> = (props) => {
  return (
    <div class={styles.root} {...props.attrs}>
      <For each={Array(2 ** 6)}>
        {() => <div style={`--t: ${Math.random() * 0.5 + 0.5}`} />}
      </For>
    </div>
  )
}

export default Main
