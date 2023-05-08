import { createContext, useContext } from 'solid-js'

interface ContextMenuContext {
  onContextMenu: (e: MouseEvent) => void
}

export const context = createContext<ContextMenuContext>()
export const useContextMenu = () => useContext(context)

export default context
