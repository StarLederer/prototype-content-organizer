import type { Component } from 'solid-js'
import { createSignal } from 'solid-js'
import styles from './Track.module.scss'
import { nextId } from '~/lib/id'
import CheckboxVisual from '~/components/atoms/CheckboxVisual'

const Main: Component = () => {
  const id = `${nextId()}`
  const [selected, setSelected] = createSignal(true)

  return (
    <div class={styles.root} data-selected={selected()}>
      <input
        type="checkbox"
        id={id}
        checked={selected()}
        onInput={e => setSelected(e.target.checked)}
      />
      <CheckboxVisual active={selected()} />

      <label for={id}>
        <img src="https://picsum.photos/200" alt="" />

        <div data-details>
          <span data-title>Title</span>
          <span data-artist>Artist</span>
        </div>
      </label>
    </div>
  )
}

export default Main
