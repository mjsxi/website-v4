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
        <meta name="description" content="Matt Sullivan's personal portfolio site" />
        <meta name="keywords" content="designer, product design, design systems, matt sullivan" />
        <meta name="author" content="Matt Sullivan" />
        <title>matt sullivan</title>
        <link rel="icon" href="/favicon.png" />
      </Head>
      <main className={styles.main}>
        <MainPage />
      </main>
    </div>
  )
}
