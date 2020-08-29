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
        <meta name="description" content="hymnal project brief" />
        <meta name="keywords" content="designer, product design, design systems, matt sullivan, hymnal" />
        <meta name="author" content="matt sullivan" />
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

          <h3>— hymnal <span>(2016)</span></h3>
          <p className={styles.intro}>this brief is for vox media’s home grown ad building platform. all the ads that were built for concert accross all of vox media and partners sites that ran on chorus used this tool to build and serve ads to millions of users.</p>

          <div className={styles.contributions}>
            <p>
              <ul>
                <li>led design</li>
                <li>conducted user research</li>
                <li>evolved our ux/ui designs</li>
                <li>contributed to product strategy</li>
              </ul>
            </p>
          </div>

          <h5>overview</h5>

          <p>in 2016, the revenue product team set out to evaluate our internal tools and found one of the main product offerings had grown stale, as product and user flows were being affected negatively by it. the tool, which runs all of vox media's premium ads across multiple networks, was not meeting the demands of its users and needed to be updated to reflect its usage.</p>

          <p>the goal was to make creating and building ads a better experience along with reducing user friction at certain pain points in the ad execution process by rethinking and modernizing the tool.</p>

          <img
            src="/assets/imgs/hymnal-ad-overview.jpg"
            alt="the hymnal apps main ad view"
          />
          <cite>the main view when looking at a hymnal made ad</cite>

          <h5>high level goals</h5>

          <p>
            <ul>
              <li>reduce user friction within the app.</li>
              <li>refresh user flow and rethink how ads are built.</li>
              <li>reduce build times to decrease per ad cost.</li>
            </ul>
          </p>

          <h5>jumping off point</h5>

          <p>hymnal was introduced in 2014 as a quick experiment as a small engineering project. it was initially built using rails and bootstrap without any design input. a few years later, it was supporting almost one hundred users and generating millions of dollars in revenue. as its needs expanded, hymnal was slated for a massive overhaul with a design-led focus.</p>

          <h5>initial findings and resolutions</h5>

          <p>this project initially began as a simple refresh but once the team and I started talking to the users it soon came to light that the very nature of how we build ads was the biggest pain point — from uploading assets to managing them, it was all a mess. we started by asking a small sample of users to go through their workflow and noticed many of them weren’t aware of what they could edit within any given ad or how to manage assets. this was a design failure of the tool, as this information wasn’t being surfaced to them.</p>

          <p>we needed to find a good resolution to a tricky problem by showing what could be added or manipulated within an ad while keeping users from being overwhelmed.</p>

          <p>we resolved this by reworking the tool to use a design paradigm found in code editors. this made it easier for users to see what options were available while leaning into tools they were already comfortable with using. by doing this, it let us better organize the information we were presenting to users so they could easily and efficiently create and distribute ads on our platform.</p>

          <img
            src="/assets/imgs/hymnal-ad-fields.jpg"
            alt="the hymnal apps asset field view"
          />
          <cite>this is hymnals asset population fields, users add assets to build our ads from this view</cite>

          <img
            src="/assets/imgs/hymnal-ad-code.jpg"
            alt="the hymnal apps code view"
          />
          <cite>this is hymnals code view, users add fuctionality and interactivity to our ads from this view</cite>

          <img
            src="/assets/imgs/hymnal-ad-split-view.jpg"
            alt="the hymnal apps asset and code split view"
          />
          <cite>a split view to help users when hopping between assets and code views in quick succession</cite>

          <img
            src="/assets/imgs/hymnal-ad-testing.jpg"
            alt="the hymnal apps main screen"
          />
          <cite>all of hymnals ads are built to be responsive and this is how we test how they looked at various breakpoints</cite>

          <h5>lessons learned</h5>

          <p>
            <ul>
              <li>users have a hard time articulating issues with interfaces they’ve grown accustomed to, so pinpointing needs through questions is crucial to help gaining context.</li>
              <li>be ready for ideas to fail. assumptions are only as good as their testing and while you anticipate your ideas to work, user testing will tell you otherwise.</li>
              <li>failure is a great tool in learning and is often how teams arrive at some of the best solutions.</li>
            </ul>
          </p>

          <h5>future improvements</h5>

          <p>
            <ul>
              <li>this redesign focused mostly on the creation and edit process and other parts of the app have not been addressed such as information organization, traversal within the system and other critical path issues within the experience.</li>
              <li>looking into what this would be like on mobile — even as just a read-only or with a diminished feature set since it doesn’t need parity with the desktop version.</li>
              <li>further ui/user flow improvements to help speed things up further.</li>
            </ul>
          </p>

        </div>
      </motion.div>

    </div>
  )
}
