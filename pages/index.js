import Head from 'next/head'
import 'semantic-ui-css/semantic.min.css'
import styles from '../styles/Home.module.css'
import Sec1Part from '../component/sec1'
import Sec2Part from '../component/sec2'
import Sec3Part from '../component/sec3'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Slot Page</title>
      </Head>

      <main className={styles.main}>
        <div id="sec1"><Sec1Part /></div>
        <div id="sec2"><Sec2Part /></div>
      </main>

      <footer className={styles.footer}>
      </footer>
    </div>
  )
}
