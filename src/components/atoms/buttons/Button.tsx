import type { ParentComponent } from 'solid-js'
import type { Variant } from './common'
import { getClass } from './common'

const Main: ParentComponent<{
  type?: 'submit' | 'reset' | 'button'
  variant?: Variant
  title?: string
  onClick?: () => void
}> = (props) => {
  return (
    <button
      type={props.type}
      class={getClass(props.variant)}
      title="title"
      onClick={props.onClick}
    >
      {props.children}
    </button>
  )
}

export default Main
