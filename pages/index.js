import { motion } from "framer-motion"
import Head from 'next/head'
import Link from 'next/link'
import Nav from '../components/nav'
import MainPage from '../components/mainPage'
import styles from '../styles/main.module.scss'

export default function Main() {
  return (
    <div className={styles.container}>
      <Head>
        <title>matt sullivan</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <MainPage />
      </main>

      <footer className={styles.footer}>
      </footer>
    </div>
  )
}
