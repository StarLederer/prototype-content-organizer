import type { Component } from 'solid-js'
import { createSignal } from 'solid-js'
import { ContextMenuBoundary } from 'solid-headless'
import styles from './Axis.module.scss'
import SliderVisual, { inputStyle } from './SliderVisual'
import { useContextMenu } from '~/components/contextMenu'

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

  const [active, setActive] = createSignal(false)

  const min = () => props.min ?? 0
  const max = () => props.max ?? 10

  const contextMenuCtx = useContextMenu()

  const onContextMenu = (e: MouseEvent) => {
    contextMenuCtx?.setItems([
      {
        title: 'Duplicate',
        callback: () => { },
      },
      {
        title: 'Remove',
        callback: () => { },
      },
    ])
    contextMenuCtx?.onContextMenu(e)
  }

  const onClick = () => {
    props.onChange(props.value() ?? 0)
  }

  return (
    <ContextMenuBoundary
      class={styles.root}
      data-unset={props.value() === undefined}
      onContextMenu={onContextMenu}
    >
      {typeof props.label === 'string'
        ? <label for={id}>{props.label}</label>
        : <label>
          <span>{props.label[0]}</span>
          <span data-vs>vs</span>
          <span>{props.label[1]}</span>
        </label>
      }

      <div
        class={styles.slider}
        onMouseEnter={() => setActive(true)}
        onMouseLeave={() => setActive(false)}
      >
        <SliderVisual
          min={min()}
          max={max()}
          value={() => props.value() ?? 0}
          active={active()}
        />

        <input
          id={id}
          type="range"
          min={min()}
          max={max()}
          value={props.value()}
          onInput={(a) => {
            props.onChange(Number((a.target as HTMLInputElement).value))
          }}
          onClick={onClick}
          class={inputStyle}
        />
      </div>
    </ContextMenuBoundary>
  )
}

export default Main
