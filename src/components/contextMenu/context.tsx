import type { Setter } from 'solid-js'
import { createContext, useContext } from 'solid-js'
import type { ContextMenuItem } from './types'

interface ContextMenuContext {
  setItems: Setter<ContextMenuItem[]>
  onContextMenu: (e: MouseEvent) => void
}

export const context = createContext<ContextMenuContext>()
export const useContextMenu = () => useContext(context)

export default context
