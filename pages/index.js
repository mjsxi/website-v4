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
        <script async src="https://www.googletagmanager.com/gtag/js?id=UA-175645967-1"></script>
        <script src="/ga.js"></script>
        <meta name="description" content="matt sullivan's personal projects site" />
        <meta name="keywords" content="designer, product design, design systems, matt sullivan" />
        <meta name="author" content="matt sullivan" />
        <title>matt sullivan</title>
        <link rel="icon" href="/favicon.png" />
      </Head>

      <MainPage />
    </div>
  )
}
