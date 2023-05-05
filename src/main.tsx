import { render } from 'solid-js/web'
import App from './App'
import './style'
import { cssProps } from './style/constants'

const root = document.getElementById('root')!

cssProps().forEach(([key, val]) => {
  root.style.setProperty(key, val)
})

render(() => <App />, root)
