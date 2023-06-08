import styles from './explore.module.scss'
import FilterSection from './.explore/FilterSection'
import PickSection from './.explore/PickSection'

function Main() {
  return (
    <article class={styles.root}>
      <FilterSection />
      <PickSection />
    </article>
  )
}

export default Main
