import type { Component } from 'solid-js'
import './App.scss'
import styles from './Colors.module.scss'

const Main: Component = () => {
  return (
      <div class={styles.root}>
        <div data-bg-1>
          <div>1</div>
          <div>2</div>
          <div>3</div>
          <div>4</div>
          <div>5</div>
        </div>
        <div data-bg-2>
          <div>1</div>
          <div>2</div>
          <div>3</div>
          <div>4</div>
          <div>5</div>
        </div>
        <div data-bg-3>
          <div>1</div>
          <div>2</div>
          <div>3</div>
          <div>4</div>
          <div>5</div>
        </div>
        <div data-bg-4>
          <div>1</div>
          <div>2</div>
          <div>3</div>
          <div>4</div>
          <div>5</div>
        </div>
      </div>
  )
}

export default Main
