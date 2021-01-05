import { motion } from "framer-motion"
import Link from 'next/link'
import styles from '../styles/main.module.scss'

const MainPage = () => (
  <>
    <div className={styles.heading}>
      <motion.h1
        initial="hidden"
        animate="visible"
        variants={{
          hidden: {
            y: "100%",
            opacity: 0
          },
          visible: {
            y: "0%",
            opacity: 1
          },
        }}
        transition={{
          default: {
            duration: .3,
            delay: .4
          },
        }}
      >
        <span>hi im matt sullivan</span>, i'm a product designer in new york city, my main focus is around helping build out design systems and supporting teams to achieve success with understanding, empathy, and support.
      </motion.h1>
    </div>
    <div className={styles.subhead}>
      <motion.div
        className={styles.projects}
        initial="hidden"
        animate="visible"
        variants={{
          hidden: {
            y: "100%",
            opacity: 0
          },
          visible: {
            y: "0%",
            opacity: 1
          },
        }}
        transition={{
          default: {
            duration: .3,
            delay: .5
          },
        }}
      >
        <h2>projects</h2>
        <ul>
          <Link href="/projects/design-process">
            <li><a>Process</a></li>
          </Link>
          <Link href="/projects/pinnacle">
            <li><a>Pinnacle</a></li>
          </Link>
          <Link href="/projects/parcel">
            <li><a>Parcel</a></li>
          </Link>
          <Link href="/projects/resonance">
            <li><a>Resonance</a></li>
          </Link>
          <Link href="/projects/hymnal">
            <li><a>Hymnal</a></li>
          </Link>
        </ul>
      </motion.div>
      <motion.div
        className={styles.about}
        initial="hidden"
        animate="visible"
        variants={{
          hidden: {
            y: "100%",
            opacity: 0
          },
          visible: {
            y: "0%",
            opacity: 1
          },
        }}
        transition={{
          default: {
            duration: .3,
            delay: .6
          },
        }}
      >
        <h2>about</h2>
        <p>A little about me, I’m more of a cat person and have been living with my long term roomate <a target="_blank" href="//instagram.com/uglybabykai/">Kai</a> for the last 5 years, I enjoy reading books (mostly on <a target="_blank" href="//amazon.com/Very-Serious-Cookbook-Contra-Wildair/dp/071487602X">cooking</a> and <a target="_blank" href="https://shop.butterandscotch.com/collections/swag/products/signed-butter-scotch-cookbook">baking</a>) and finding weird books to get design inspiration from (shout out to <a target="_blank" href="//vimeo.com/55449250">Atlas of the New Dutch Water Defence Line</a>), really enjoy video games specifically life simulators and collector games (enjoy this <a target="_blank" href="//polygon.com/2014/8/21/6052553/how-to-catch-every-pokemon">story</a> of me as a youth playing Pokémon).</p>
        <p>You can find me on <a target="_blank" href="//twitter.com/mjsxi">Twitter</a> (I'm currently tweeting about Animal Crossing or ranting about design), <a target="_blank" href="//instagram.com/mjsxi/">Instagram</a>, and if you’re here for it <a target="_blank" href="//linkedin.com/in/matt-sullivan-5455656a/">Linkedin</a>. Feel free to reach out by <a href="mailto:msullivanxi@gmail.com">email</a> if you're looking to connect or just want to talk!</p>
      </motion.div>
    </div>
  </>
);

export default MainPage;
