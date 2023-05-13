import type { ParentComponent } from 'solid-js'
import { Show, createSignal } from 'solid-js'
import { ContextMenu } from 'solid-headless'
import type { ContextMenuItem } from './types'
import context from './context'
import Panel from './Panel'

const Main: ParentComponent<{
  style?: string
  class?: string
  attrs?: Record<string, any>
}> = (props) => {
  const [x, setX] = createSignal(0)
  const [y, setY] = createSignal(0)
  const [open, setOpen] = createSignal(false)

  const [items, setItems] = createSignal<ContextMenuItem[]>([])

  const onContextMenu = (e: MouseEvent) => {
    setOpen(true)
    if (e.currentTarget) {
      setX(e.clientX)
      setY(e.clientY)
    }
  }

  const close = () => {
    setOpen(false)
  }

  return (
    <context.Provider value={{ onContextMenu, setItems }}>
      <ContextMenu class={props.class} style={props.style} {...props.attrs} isOpen={open()} onClose={close}>
        {({ isOpen }) => (
          <>
            {props.children}

            <Show when={isOpen}>
              <Panel pos={[x(), y()]} items={items()} closeMenu={close} />
            </Show>
          </>
        )}
      </ContextMenu>
    </context.Provider>
  )
}

export default Main
