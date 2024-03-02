
import styles from './page.module.css'
import Navbar from './Navbar/Navbar'
import { Herosec } from './Herosec/Herosec'

export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.description}>
        <Navbar />
        <Herosec />
      </div>
    </main>
  )
}
