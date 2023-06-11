import type { Component } from 'solid-js'
import { For } from 'solid-js'
import styles from './SliderVisual.module.scss'

export interface Props {
  active: boolean
  min: number
  max: number
  value: () => number | undefined
}

const Main: Component<Props> = (props) => {
  const range = () => props.max - props.min
  const value = () => (props.value() ?? 0) - props.min
  const valueNormalized = () => value() / range()
  const factor = 1

  return (
    <div class={styles.root} data-active={props.active}>
      <div data-guide />
      <div data-gutter>
        <For each={Array(1 + range() * factor)}>
          {(_, i) => <div style={`--proximity: ${(1 - Math.abs(i() / factor / range() - valueNormalized())) ** 4}`} />}
        </For>
      </div>
      {/* <div data-fill style={`inline-size: ${valueNormalized() * 100}%`} /> */}
      <div data-handle style={`--t: ${valueNormalized()}`} />
    </div>
  )
}

export const inputStyle = styles.input

export default Main
