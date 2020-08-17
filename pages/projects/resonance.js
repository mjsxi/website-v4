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
            <h4>this brief is for vox media’s tools design system. this is used across all of the company’s internal products as a way to help lower the barrier for engineers and designers to deliver on new ideas.</h4>

            <p>as vox media was expanding, the amount of tools it was producing for internal use grew and we were finding that products were not matching up, thus creating differing experiences across tools. because of this, we focused on unifying what our tools looked like so that users’ expectations while moving from product to product was the same.</p>

            <p>resonance was made in order to help us to solve this need for vox media and its brands.</p>

            <img
              src="/assets/imgs/resonance-buttons.jpg"
              alt="a collection of the resonance buttons"
            />
            <cite>a small sampling of buttons from resonance ui library</cite>

            <h5>high level goals</h5>

            <p>
              <ul>
                <li>reduce inconsistency across tools.</li>
                <li>make it easier to build and iterate on designs.</li>
                <li>allow us to better focus on problem solving.</li>
              </ul>
            </p>

            <h5>jumping off point</h5>

            <p>when resonance first started, it was a collection of design elements, but there was no real system in place. we didn’t have defined rules for colors/type and how they relate to other elements. when i joined the project, we refocused on building it into a proper design system with those defined rules in place rather than a collection of components.</p>

            <h5>initial findings and resolutions</h5>

            <p>we had a solid foundation, but there was no set structure in place. our files and components had room for improvement and organization. how we were initially organizing elements was not optimal for the team, and was leading to things feeling overwhelming when needing to use the system.</p>

            <p>after joining, we took the design artifacts in place, evaluated their needs and their relation to parts of the system. we then revised our components and designs into a more well thought out, organized structure along with the development of a quick-access design sheet intended to generate design ideas at a faster pace. one of our notable accomplishments with this project was taking a monolithic file and turning it into smaller, more manageable files to base our future designs from.</p>

            <img
              src="/assets/imgs/resonance-colors.jpg"
              alt="a collection of the resonances colors"
            />
            <cite>an overview of colors from the resonance library</cite>

            <img
              src="/assets/imgs/resonance-type-scale.jpg"
              alt="a collection of the resonances type scale"
            />
            <cite>an overview of the type scale from the resonance library</cite>

            <img
              src="/assets/imgs/resonance-sizing-scale.jpg"
              alt="the sizing scale for resonance"
            />
            <cite>the sizing scale used in resonance</cite>

            <h5>lessons learned</h5>

            <p>
              <ul>
                <li>maintaining/managing things at scale is not easy.</li>
                <li>making changes to an already existing system requires patience and understanding.</li>
                <li>do more prep work prior to executing on ideas.</li>
              </ul>
            </p>

            <h5>future improvements</h5>

            <p>
              <ul>
                <li>build out a source of truth for design and engineering to share.</li>
              </ul>
            </p>

          </div>
        </motion.div>

      </main>
    </div>
  )
}
