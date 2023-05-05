import type { Component } from 'solid-js'
import { createSignal } from 'solid-js'
import './App.scss'
import styles from './App.module.scss'
import SliderInput from '~/components/SliderInput'

const Main: Component = () => {
  const [val, setVal] = createSignal<number>(0)

  return (
    <form class={styles.root}>
      <SliderInput value={val} onChange={setVal}/>
    </form>
  )
}

export default Main
