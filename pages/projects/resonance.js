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
        <meta name="description" content="resonance design system project brief" />
        <meta name="keywords" content="designer, product design, design systems, matt sullivan, resonance" />
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
              src="/assets/imgs/resonance-header.jpg"
              alt="a collection of resonance components"
            />

            <h3>resonance</h3>
            <h4>this project is for vox medias home grown ad building platform, all the ads built for concert and all sites on chorus used this tool to build and serve up ads to millions of users.</h4>

            <p>in 2016 the revenue product team set out to evaluate our internal tools and found one of the main product offerings had grown stale as a product and user flows were being affected negatively by it. The tool, which runs all of vox media's premium ads across multiple networks, had not grown with new and bigger demands and needed some rethinking to get things done in a more efficient and easier way.</p>
            <p>the hope was to make creating and building ads much easier along with reducing the user friction at certain pain points in the creation by rethinking and modernizing the tool.</p>

            <img
              src="/assets/imgs/resonance-buttons.jpg"
              alt="a collection of the resonance buttons"
            />
            <cite>a small sampling of buttons from resonance ui library</cite>

            <h5>high level goals</h5>

            <p>
              <ul>
                <li>reduce User Friction within the app</li>
                <li>refresh User flow and rethink how new ads are built</li>
                <li>reduce build times to decrease per ad cost</li>
              </ul>
            </p>

            <h5>jumping off point</h5>

            <p>hymnal was brought into the world in 2014 and was a quick experiment by a few engineers as a proof of concept built using rails and bootstrap 2 without any design input (lolsob). Fast forward a few years and it was supporting nearly one hundred users and millions of dollars and grew to be one of vox media’s main lines of business. Due to user frustration hymnal was slated for a massive overhaul with a design lead rework.</p>

            <h5>initial findings and resolutions</h5>

            <p>this project initially began as a simple refresh but once the team and I started talking to the users it soon came to light that the very nature of how we build ads was the biggest pain point — from uploading assets to managing them, it was all a mess. We started by asking a small sample of users to go through their workflow and noticed many of them weren’t aware of what they could edit within any given ad or how to manage assets — a design failure of the tool, as this information wasn’t being surfaced to them.</p>

            <p>this led us to a tricky solve to display what things could be added/manipulated within an ad but not clutter things as to make it distracting.</p>

            <p>we resolved this by reworking the tool to use a navigation system derived from a computer file system and popular code editors — this made it easy for users to see what options were available and leaned into things they were currently using along with letting us organize the information presented to users so they could easily and efficiently work through creating an ad on our platform.</p>

            <img
              src="/assets/imgs/resonance-colors.jpg"
              alt="a collection of the resonance colors"
            />
            <cite>a small sampling of buttons from resonance ui library</cite>

            <img
              src="/assets/imgs/resonance-type-scale.jpg"
              alt="a collection of the resonance colors"
            />
            <cite>a small sampling of buttons from resonance ui library</cite>

            <img
              src="/assets/imgs/resonance-sizing-scale.jpg"
              alt="a collection of the resonance colors"
            />
            <cite>a small sampling of buttons from resonance ui library</cite>

            <h5>favorite change</h5>

            <p>with the updated user flow and work process we were able to reduce the time it takes to create ads by about half; the most dramatic was an ad that had taken about 4 hours to make was cut down to about 1.5 hours.</p>

            <h5>lessons learned</h5>

            <p>
              <ul>
                <li>people have a hard time articulating issues with interfaces they’ve grown accustomed to using so proper context is needed to fish for what is bothering users.</li>
                <li>be ready for ideas to fail, assumptions are only as good as their testing and while you have ideas you think will have legs, some user testing will tell you otherwise.</li>
                <li>failure is a great tool in learning and is often how I came to some of my best ideas.</li>
              </ul>
            </p>

            <h5>future improvements</h5>

            <p>
              <ul>
                <li>this redesign focused mostly on the creation and edit process and other parts of the app have not been addressed such as information organization, traversale within the system and other critical path issues within the experience.</li>
                <li>looking into what this would be like on mobile — even as just a read only or cut down feature set since it doesn’t need parity with the desktop version.</li>
                <li>further ui/user flow improvements to help speed things up further.</li>
              </ul>
            </p>

          </div>
        </motion.div>

      </main>
    </div>
  )
}
