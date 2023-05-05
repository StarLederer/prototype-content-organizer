import type { Component } from 'solid-js'
import { For } from 'solid-js'
import styles from './SliderInput.module.scss'

interface IMainProps {
  min?: number
  max?: number
  hue?: number
  value: () => number
  onChange: (value: number) => void
}

const Main: Component<IMainProps> = (props) => {
  const id = 'a'

  const min = () => props.min ?? 0
  const max = () => props.max ?? 10
  const range = () => max() - min()
  const value = () => props.value() - min()
  const factor = 1

  return (
    <div class={styles.root}>
      {/* <label for={id}>Axis name here</label> */}
      <div data-labels>
        <span>{min()}</span>
        <span>{max()}</span>
      </div>
      <div data-slider>
        <div data-gutter>
          <For each={Array(1 + range() * factor)}>
            {(_, i) => <div style={`--proximity: ${(1 - Math.abs(i() / factor - value()) / max()) ** 6}`} />}
          </For>
        </div>
        <div data-guide />
        {/* <div data-fill style={`inline-size: ${props.value() * 100}%`} /> */}
        <div data-handle style={`inset-inline-start: ${value() / range() * 100}%`} />
        <input
          id={id}
          type="range"
          min={min()}
          max={max()}
          value={props.value()} onInput={(a) => {
            props.onChange(Number((a.target as HTMLInputElement).value))
          }}
        />
      </div>
    </div>
  )
}

export default Main
