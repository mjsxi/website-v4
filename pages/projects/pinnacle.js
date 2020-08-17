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
        <meta name="description" content="pinnacle design system project brief" />
        <meta name="keywords" content="designer, product design, design systems, matt sullivan, pinnacle" />
        <meta name="author" content="matt sullivan" />
        <title>matt sullivan</title>
        <link rel="icon" href="/favicon.png" />
      </Head>

      <main className={styles.main}>
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

            <img
              className={styles.fullWidth}
              src="/assets/imgs/pinnacle-header.jpg"
              alt="the pinnacle system logo"
            />

            <h3>pinnacle</h3>
            <h4>this brief is for pinnacle^3, from which the framework of all group nine media sites are built upon. this project is ongoing and we are currently in the process of updating and modernizing to our third version.</h4>

            <h5>contributions</h5>

            <p>
              <ul>
                <li>design systems development</li>
                <li>component design and feedback</li>
                <li>overseeing design contributions</li>
                <li>user research</li>
                <li>team goals and strategy</li>
              </ul>
            </p>

            <h5>overview</h5>

            <p>in the summer of 2019, group nine embarked on updating its owned and operated sites to bring it up to date with modern web standards. due to reworking the core of our sites, we wanted to reevaluate how we were approaching design at scale. with pinnacle^2, each brand was isolated and was unable to share components with the other brands.</p>

            <p>with the next version of pinnacle, it was imperative that all components designed for one brand could easily be transferred to another brand. this reduces the level of effort required for long-term maintainability and new feature additions. currently, we are in the process of building up pinnacle^3 to address these issues.</p>

            <img
              src="/assets/imgs/pinnacle-elements.jpg"
              alt="an example of smaller elements in pinnacle"
            />
            <cite>a small collection of elements themed to be used on group nines brands</cite>

            <h5>high level goals</h5>

            <p>
              <ul>
                <li>improve ability to share designs/features across all brands.</li>
                <li>optimize pages to better utilize pinnacle^2’s more successful elements.</li>
                <li>better unity between design and engineering’s needs for a more seamless handoff.</li>
              </ul>
            </p>

            <h5>jumping off point</h5>

            <p>over the past few years, group nine has been using a system called pinnacle^2 to manage our site’s front end. as time has progressed, we were finding that its ability to match our needs was not being met. because of this, we decided to rework our platform with an updated version built to be more modular along with addressing load times to better meet our audience where they are.</p>

            <img
              src="/assets/imgs/pinnacle-cards.jpg"
              alt="pinnacles content cards themed for each brand"
            />
            <cite>one of pinnacles components themed to demonstrate its flexibilty across brands</cite>

            <h5>initial findings and resolutions</h5>

            <p>we were finding our page loads were inhibiting our audience’s interactions with the content we were producing. as we were looking for solutions, engineers were flagging concerns that our tech stack was becoming hard to work with due to all of the legacy elements restricting our options.</p>

            <p>due to poor page loading speeds and our engineers having to hack together solutions due to an outdated code base, we decided to rework of our front-end system from the ground up.</p>

            <p>we have taken many steps to fix our initial findings and have resolved a majority of the issues found. however, we have not resolved everything; but as we keep making optimizations and updates within pinnacle^3 we will continue to build upon it to meet our needs.</p>

            <p>as of today we have moved most of our sites to the new framework and are looking forward to moving the rest.</p>

            <img
              src="/assets/imgs/pinnacle-articles.jpg"
              alt="pinnacles articles themed per brand"
            />
            <cite>example of article components themed for some of group nines brands</cite>

            <img
              src="/assets/imgs/pinnacle-video.jpg"
              alt="pinnacles video nodes themed per brand"
            />
            <cite>example of video node components themed for some of group nines brands</cite>

            <h5>lessons learned</h5>

            <p>
              <ul>
                <li>good work and a good foundation takes time.</li>
              </ul>
            </p>

            <h5>future improvements</h5>

            <p>
              <ul>
                <li>not very applicable as this project is still ongoing.</li>
              </ul>
            </p>

          </div>
        </motion.div>

      </main>
    </div>
  )
}
