import { render } from 'solid-js/web'
import './style'
import App from './App'
import { cssProps } from './style/constants'

const root = document.getElementById('root')!

cssProps().forEach(([key, val]) => {
  root.style.setProperty(key, val)
})

render(() => <App />, root)
