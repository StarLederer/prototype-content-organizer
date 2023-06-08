import { Component, For } from "solid-js";
import Axis from '~/components/Axis'
import { axis } from '~/api'
import style from './FilterSection.module.scss'

const Main: Component = () => (
  <section class={style.root}>
    <For each={axis}>
      {ax => (
        <Axis
          axis={ax}
          coordinate={undefined}
          updateVector={() => { }}
        />
      )}
    </For>
  </section>
)

export default Main
