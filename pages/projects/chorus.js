import { motion } from "framer-motion"
import Head from 'next/head'
import Link from 'next/link'
import Nav from '../../components/nav'
import BgGradient from '../../components/bgGradient'
import MainPage from '../../components/mainPage'
import styles from '../../styles/main.module.scss'

export default function Main() {
  return (
    <div id='projects' className={styles.container}>
      <Head>
        <script async src="https://www.googletagmanager.com/gtag/js?id=UA-175645967-1"></script>
        <script src="/ga.js"></script>
        <meta name="description" content="chorus project brief" />
        <meta name="keywords" content="designer, product design, design systems, matt sullivan, chorus" />
        <meta name="author" content="Matt Sullivan" />
        <title>matt sullivan</title>
        <link rel="icon" href="/favicon.png" />
      </Head>

      <Nav />

      <motion.div
        className={styles.proContainer}
        initial="hidden"
        animate="visible"
        exit="hidden"
        variants={{
          hidden: {
            y: "100%"
          },
          visible: {
            y: "0%"
          },
        }}
        transition={{
          default: { duration: .25 },
        }}
      >
        <div className={styles.proCotents}>

          <h3>— chorus <span>(2018)</span></h3>
          <p className={styles.intro}>this brief is for chorus, vox media’s content management system (cms). chorus helps power content across vox’s eight brands and over 300 websites daily.</p>

          <div className={styles.contributions}>
            <p>
              <ul>
                <li>user research</li>
                <li>ux/ui design</li>
                <li>feature development</li>
              </ul>
            </p>
          </div>

          <h5>overview</h5>

          <p>chorus was an ambitious project undertaken by vox media to help revolutionize the way stories were published on their platforms. this goal was overwhelmingly successful in comparison with offerings from its peers. i was fortunate enough to join the chorus team for over half a year, getting to contribute to story editing and asset management.</p>

          <img
            src="/assets/imgs/chorus-editor.jpg"
            alt="the chorus editor"
          />
          <cite>the peak at the chorus editor</cite>

          <h5>high level goals</h5>

          <p>
            <ul>
              <li>help rework flow of publishing stories to chorus.</li>
              <li>better maintain assets both within and out of the editor.</li>
            </ul>
          </p>

          <h5>final thoughts</h5>

          <p>since my time was so brief, i do not have much context to elaborate on my experience with the project. however, if you are interested in hearing more about my time with chorus, please do not hesitate to reach out.</p>

        </div>
      </motion.div>

    </div>
  )
}
