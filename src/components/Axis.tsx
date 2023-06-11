import type { Component } from 'solid-js'
import { Index, Show, createSignal } from 'solid-js'
import { ContextMenuBoundary } from 'solid-headless'
import styles from './Axis.module.scss'
import SliderVisual, { inputStyle } from './atoms/SliderVisual'
import { useContextMenu } from '~/components/contextMenu'
import type { Axis, AxisId, Coordinate, Vector } from '~/api'
import nextId from '~/lib/id'

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
  updateVector: (setter: (vec: Vector, axis: AxisId) => void) => void
  class?: string
}> = (props) => {
  const id = nextId()

  const min = () => props.axis.min ?? 0
  const max = () => props.axis.max ?? 10

  const contextMenuCtx = useContextMenu()

  const onContextMenu = (e: MouseEvent) => {
    contextMenuCtx?.setItems([
      {
        title: Array.isArray(props.coordinate) ? 'Add position' : 'Multiple positions',
        callback: () => {
          props.updateVector((vec, ax) => {
            if (Array.isArray(vec[ax]))
              (vec[ax] as number[]).push(0)
            else
              vec[ax] = [vec[ax] as number, 0]
          })
        },
      },
      {
        title: Array.isArray(props.coordinate) ? 'Remove all' : 'Remove',
        callback: () => props.updateVector((vec, ax) => {
          delete vec[ax]
        }),
      },
    ])
    contextMenuCtx?.onContextMenu(e)
  }

  return (
    <ContextMenuBoundary
      class={`${styles.root} ${props.class}`}
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
            setValue={v => props.updateVector((vec, ax) => vec[ax] = v)}
          />
        }
      >
        <Index each={props.coordinate as number[]}>
          {(coord, i) => <Slider
            id={id}
            min={min()}
            max={max()}
            value={(coord())}
            setValue={v => props.updateVector((vec, ax) => (vec[ax] as number[])[i] = v)}
          />}
        </Index>
      </Show>

    </ContextMenuBoundary>
  )
}

export default Main
