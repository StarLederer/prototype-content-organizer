import type { Component } from 'solid-js'
import { For, Show, createSignal } from 'solid-js'
import { ContextMenuBoundary } from 'solid-headless'
import styles from './Axis.module.scss'
import SliderVisual, { inputStyle } from './SliderVisual'
import { useContextMenu } from '~/components/contextMenu'
import type { Axis, Coordinate } from '~/api'

const Slider: Component<{
  id: string
  min: number
  max: number
  value: number
  setValue: (next: number) => void
}> = (props) => {
  const [active, setActive] = createSignal(false)

  return (
    (
      <div
        class={styles.slider}
        onMouseEnter={() => setActive(true)}
        onMouseLeave={() => setActive(false)}
      >
        <SliderVisual
          min={props.min}
          max={props.max}
          value={() => props.value ?? 0}
          active={active()}
        />

        <input
          id={props.id}
          type="range"
          min={props.min}
          max={props.max}
          value={props.value}
          onInput={(a) => {
            props.setValue(Number((a.target as HTMLInputElement).value))
          }}
          class={inputStyle}
        />
      </div>
    )
  )
}

const Main: Component<{
  axis: Axis
  coordinate: Coordinate | undefined
  setCoordinate: (next: Coordinate | undefined) => void
}> = (props) => {
  const id = 'a'

  const min = () => props.axis.min ?? 0
  const max = () => props.axis.max ?? 10

  const contextMenuCtx = useContextMenu()

  const onContextMenu = (e: MouseEvent) => {
    contextMenuCtx?.setItems([
      {
        title: 'Duplicate',
        callback: () => { },
      },
      {
        title: 'Remove',
        callback: () => props.setCoordinate(undefined),
      },
    ])
    contextMenuCtx?.onContextMenu(e)
  }

  return (
    <ContextMenuBoundary
      class={styles.root}
      data-unset={props.coordinate === undefined}
      onContextMenu={onContextMenu}
    >
      {typeof props.axis.name === 'string'
        ? <label for={id}>{props.axis.name}</label>
        : <label>
          <span>{props.axis.name[0]}</span>
          <span data-vs>vs</span>
          <span>{props.axis.name[1]}</span>
        </label>
      }

      <Show
        when={Array.isArray(props.coordinate)}
        fallback={
          <Slider
            id={id}
            min={min()}
            max={max()}
            value={props.coordinate as number}
            setValue={v => props.setCoordinate(v)}
          />
        }
      >
        <For each={props.coordinate as number[]}>
          {coord => <Slider
            id={id}
            min={min()}
            max={max()}
            value={coord}
            setValue={() => props.setCoordinate(0)}
          />}
        </For>
      </Show>

    </ContextMenuBoundary>
  )
}

export default Main
