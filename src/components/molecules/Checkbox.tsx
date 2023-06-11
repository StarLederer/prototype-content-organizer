import type { Component } from 'solid-js'
import style from './Checkbox.module.scss'
import Visual from '~/components/atoms/CheckboxVisual'
import { nextId } from '~/lib/id'

const Main: Component<{
  label: string
  checked?: boolean
  setChecked?: (val: boolean) => void
}> = (props) => {
  const id = `${nextId()}`

  return (
    <div class={style.root}>
      <input
        type="checkbox"
        id={id}
        checked={props.checked}
        onInput={e => props.setChecked?.(e.target.checked)}
      />
      <Visual active={props.checked} />
      <label for={id}>{props.label}</label>
    </div>
  )
}

export default Main
