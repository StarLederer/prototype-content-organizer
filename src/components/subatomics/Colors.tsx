import type { Component } from 'solid-js'
import { For } from 'solid-js'
import styles from './Colors.module.scss'

const ColorCards: Component = () => (
  <>
    <div class={styles.group}>
      <For each={Array(4)}>
        {(_, bg) => (
          <div data-color data-bg={bg() + 1}>
            <For each={Array(6)}>
              {(_, fg) => (
                <div>{fg() + 1}</div>
              )}
            </For>
          </div>
        )}
      </For>
    </div>

    <div class={styles.group}>
      <For each={Array(4)}>
        {(_, acc) => (
          <div data-color data-panel={acc() + 1}>
            <For each={Array(6)}>
              {(_, fg) => (
                <div>{fg() + 1}</div>
              )}
            </For>
          </div>
        )}
      </For>
    </div>

    <div class={styles.group}>
      <For each={Array(4)}>
        {(_, acc) => (
          <div data-color data-accent={acc() + 1}>
            <For each={Array(6)}>
              {(_, fg) => (
                <div>{fg() + 1}</div>
              )}
            </For>
          </div>
        )}
      </For>
    </div>
  </>
)

const Main: Component = () => {
  return (
    <>
      <div class={`${styles.theme} theme-light`}>
        <ColorCards />
      </div>
      <div class={`${styles.theme} theme-dark`}>
        <ColorCards />
      </div>
    </>
  )
}

export default Main
