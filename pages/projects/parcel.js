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
        <meta name="description" content="parcel project brief" />
        <meta name="keywords" content="designer, product design, design systems, matt sullivan, parcel" />
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
              src="/assets/imgs/parcel-header.jpg"
              alt="the parcel apps logo"
            />

            <h3>parcel</h3>
            <h4>this brief is for group nine media’s video intelligence system. parcel’s intended use is to highlight video trends and track user engagement metrics.</h4>

            <p>in late 2017, as group nine media pivoted into producing more video content, they realized they needed a way to help track and find trends across their audience engagement. parcel initially started as a place to house all the videos produced by group nine, but eventually expanded to servicing metrics on a per-video basis.</p>

            <p>when i joined the project, we noticed a few inconsistencies. we wanted to address them by building out a design system. our goal was then to extend them out to other tools in the organization.</p>

            <img
              src="/assets/imgs/parcel-before-after.jpg"
              alt="parcel before and after redesign"
            />
            <cite>parcel, before and after the redesign and refocus</cite>

            <h5>high level goals</h5>

            <p>
              <ul>
                <li>improve user flows and reduce friction</li>
                <li>put together a design system to help modernize parcel</li>
                <li>refine search and asset curation within the app</li>
              </ul>
            </p>

            <h5>jumping off point</h5>

            <p>initially, parcel was not meeting the needs of our users and needed a lot of care to move beyond its roots. shortly after joining the team, i quickly led a fundamental shift in thinking and approach for the project’s design aspect. in addition to putting together a design system, our main focus was on a visual design update, better information architecture and a more fleshed out user experience.</p>

            <img
              src="/assets/imgs/parcel-info-overlay.jpg"
              alt="the parcel apps info panel"
            />
            <cite>the info panel for a selected video in parcel</cite>

            <img
              src="/assets/imgs/parcel-insights.jpg"
              alt="the pacel apps insight view"
            />
            <cite>the insights view for a selected video in parcel</cite>

            <h5>initial findings and resolutions</h5>

            <p>our initial findings were that users were frustrated while using the app (search was not returning expected results; assets were not loading quickly; moving between videos was cumbersome). there was a lot of uncertainty while navigating through the app, which led to confusion. all of this resulted in a breakdown of trust between our users and the team responsible for parcel.</p>

            <p>we conducted a series of user feedback sessions where we talk to users as a way of building trust with them. we found out what their overall objectives were while trying to establish better lines of communication.</p>

            <p>after these sessions, we looked to address confusion within the app by focusing on cleaning up the interface. we also made touch points more clearly defined to help resolve frustration that some users found while navigating through the app. we also reworked how search was being approached and introduced a new way to search video parameters to help users get the results they originally expected. we also reworked our asset pipeline to bring in video thumbnails instead of loading the entire video.</p>

            <img
              src="/assets/imgs/parcel-search.jpg"
              alt="parcels reworked and expanded search"
            />
            <cite>parcel with its revised search to help better surface results</cite>

            <img
              src="/assets/imgs/parcel-series-details.jpg"
              alt="parcels series details view"
            />
            <cite>parcels series details page</cite>

            <h5>lessons learned</h5>

            <p>
              <ul>
                <li>building trust and communication between users and teams is crucial when developing products.</li>
                <li>good relationships with stakeholders allows them to be more compelled to speak freely on what isn’t meeting their needs.</li>
                <li>never be afraid to take a beat and reevaluate the needs you are designing for, and if those needs are being met.</li>
                <li>building consensus on how to solve a problem is the easiest way to advocate for change.</li>
              </ul>
            </p>

            <h5>future improvements</h5>

            <p>
              <ul>
                <li>continue refining updates that were made to the app based on user feedback.</li>
                <li>getting more people involved results in better feedback and growth within the product.</li>
              </ul>
            </p>

          </div>
        </motion.div>

      </main>
    </div>
  )
}
