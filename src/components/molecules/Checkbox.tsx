import type { Component } from 'solid-js'
import { createSignal } from 'solid-js'
import style from './Checkbox.module.scss'
import Visual from '~/components/atoms/CheckboxVisual'
import { nextId } from '~/lib/id'

const Main: Component<{
  label: string
  active?: boolean
  setActive?: () => void
}> = (props) => {
  const id = `${nextId()}`
  const [selected, setSelected] = createSignal(true)

  return (
    <div class={style.root}>
      <input
        type="checkbox"
        id={id}
        checked={selected()}
        onInput={e => setSelected(e.target.checked)}
      />
      <Visual active={selected()} />
      <label for={id}>{props.label}</label>
    </div>
  )
}

export default Main
