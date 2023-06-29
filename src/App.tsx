import type { Component, ParentComponent } from 'solid-js'
import { For } from 'solid-js'
import { A, Router, useRoutes } from '@solidjs/router'

import styles from './App.module.scss'

import ContextMenu from '~/components/contextMenu/Provider'

import routes from '~solid-pages'

const Nav: Component<{
  items: {
    title: string
    href: string
  }[]
}> = (props) => {
  return (
    <nav class={styles.nav}>
      <For each={props.items}>
        {item => (
          <A href={item.href} >{item.title}</A>
        )}
      </For>
    </nav>
  )
}

const Wrappers: ParentComponent = props => (
  <Router>
    <ContextMenu class={styles.root}>
      {props.children}
    </ContextMenu>
  </Router>
)

const Main: Component = () => {
  const Routes = useRoutes(routes)

  return (
    <Wrappers>
      <div data-container>
        <Routes />
      </div>
      <Nav items={[
        { title: 'Refine', href: '/refine' },
        { title: 'Explore', href: '/explore' },
      ]} />
    </Wrappers>
  )
}

export default Main
