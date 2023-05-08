import type { ParentComponent } from 'solid-js'
import { Show, createSignal } from 'solid-js'
import { ContextMenu } from 'solid-headless'
import context from './context'
import Panel from './Panel'

const Main: ParentComponent = (props) => {
  const [x, setX] = createSignal(0)
  const [y, setY] = createSignal(0)

  const onContextMenu = (e: MouseEvent) => {
    if (e.currentTarget) {
      setX(e.clientX)
      setY(e.clientY)
    }
  }

  return (
    <context.Provider value={{ onContextMenu }}>
      <ContextMenu defaultOpen={false} style={{ display: 'contents' }}>
        {({ isOpen }) => (
          <>
            {props.children}

            <Show when={isOpen}>
              <Panel pos={[x(), y()]}/>
            </Show>
          </>
        )}
      </ContextMenu>
    </context.Provider>
  )
}

export default Main
