import styles from './explore.module.scss'
import FilterSection from './_explore/FilterSection'
import PickSection from './_explore/PickSection'

function Main() {
  return (
    <article class={styles.root}>
      <FilterSection />
      <PickSection />
    </article>
  )
}

export default Main
