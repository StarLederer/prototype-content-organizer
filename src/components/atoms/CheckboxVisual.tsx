import type { Component } from 'solid-js'
import style from './CheckboxVisual.module.scss'

// import IconCheck from '~icons/mdi/check'

const Main: Component<{
  active?: boolean
}> = props => (
  <div class={style.root} data-active={props.active}>
    {/* <IconCheck /> */}
  </div>
)

export default Main
