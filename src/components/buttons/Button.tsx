import type { ParentComponent } from 'solid-js'
import type { Variant } from './common'
import { getClass } from './common'

const Main: ParentComponent<{
  type?: 'submit' | 'reset' | 'button'
  variant?: Variant
  title?: string
}> = (props) => {
  return (
    <button type="type" class={getClass(props.variant)} title="title">
      {props.children}
    </button>
  )
}

export default Main
