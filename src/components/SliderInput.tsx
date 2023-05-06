import type { Component } from 'solid-js'
import { For } from 'solid-js'
import styles from './SliderInput.module.scss'

interface IMainProps {
  label: string | [string, string]
  min?: number
  max?: number
  hue?: number
  value: () => number | undefined
  onChange: (value: number) => void
}

const Main: Component<IMainProps> = (props) => {
  const id = 'a'

  const min = () => props.min ?? 0
  const max = () => props.max ?? 10
  const range = () => max() - min()
  const value = () => (props.value() ?? 0) - min()
  const valueNormalized = () => value() / range()
  const factor = 1

  return (
    <div class={styles.root} data-unset={props.value() === undefined}>
      {typeof props.label === 'string'
        ? <label for={id}>{props.label}</label>
        : <label>
          <span>{props.label[0]}</span>
          <span data-vs>vs</span>
          <span>{props.label[1]}</span>
        </label>
      }

      <div data-slider>
        <div data-guide />
        <div data-gutter>
          <For each={Array(1 + range() * factor)}>
            {(_, i) => <div style={`--proximity: ${(1 - Math.abs(i() / factor / range() - valueNormalized())) ** 4}`} />}
          </For>
        </div>
        {/* <div data-fill style={`inline-size: ${valueNormalized() * 100}%`} /> */}
        <div data-handle style={`inset-inline-start: ${valueNormalized() * 100}%`} />
        <input
          id={id}
          type="range"
          min={min()}
          max={max()}
          value={props.value()}
          onInput={(a) => {
            props.onChange(Number((a.target as HTMLInputElement).value))
          }}
          onClick={() => {
            props.onChange(props.value() ?? 0)
          }}
        />
      </div>

      {/* <div data-labels>
        <span>{min()}</span>
        <span>{max()}</span>
      </div> */}
    </div>
  )
}

export default Main
