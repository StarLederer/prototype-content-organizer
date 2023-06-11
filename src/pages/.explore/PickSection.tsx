import { Component, For } from "solid-js";

import Track from '~/components/molecules/Track'
import Checkbox from '~/components/molecules/Checkbox'
import style from "./PickSection.module.scss"

const Main: Component = () => (
  <section class={style.root}>
    <div>
    <Checkbox label="Test"/>
    </div>
    <For each={Array(16)}>
      {() => (
        <Track />
      )}
    </For>
  </section>
)

export default Main
