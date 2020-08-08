import Head from 'next/head'
import Link from 'next/link'
import styles from '../../styles/main.module.scss'

export default function Main() {
  return (
    <div className={styles.container}>
      <Head>
        <title>matt sullivan</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        Something, something, Something
      </main>
    </div>
  )
}
