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
        <meta name="description" content="resonance design system project brief" />
        <meta name="keywords" content="designer, product design, design systems, matt sullivan, resonance" />
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

          <div className={styles.spacer}>If you found this while inspecting the page and can see this good on ya! I couldn't get css grid to do exactly what I wanted so I hacked in this spacer to get the grid to play nice!</div>

          <h3>— resonance design system & chorus<span>(2017)</span></h3>
          <p className={styles.intro}>after joining the chorus team in late 2017, i was asked to help work on vox media’s tools design system and story editor. this system is used across all of the company’s internal products as a way to help keep expectations and experiences similar between differnt apps. the tools team was mainly in service to chorus, vox media's cms.</p>

          <div className={styles.contributions}>
            <p>
              <ul>
                <li><strong>role:</strong> senior product designer</li>
                <li><strong>timeline:</strong> 10 months</li>
                <li><strong>goal(s):</strong> help improve vox medias internal design system, work to better chorus the main publishing tool for vox media.</li>
                <li><strong>skill(s):</strong> design systems growth and development, feature development.</li>
              </ul>
            </p>
          </div>

          <h5>intro</h5>

          <p>as vox media was rapidly expanding, the amount of tools it was producing for internal use was growing at a brisk pace and we were finding that many of these products where built with different libraries and frameworks and ended up producing products were not matching up, thus creating differing experiences across tools. because of this, we focused on unifying what our tools looked like so that users’ expectations while moving from one vox product to another kept a similar user experience.</p>

          <p>resonance was made in order to help us to solve this need for vox media, and for all of its other internal tools. chief among these was chorus, vox media content management system (cms), which was used as the testing bed for all the designed components found in our design system library.</p>

          <img
            src="/assets/imgs/resonance-buttons.jpg"
            alt="a collection of the resonance buttons"
          />
          <cite>a small sample of some of the buttons made for the resonance ui library</cite>

          <h5>high level goals</h5>

          <p>
            <ul>
              <li>build upon the design system to help reduce inconsistency across tools.</li>
              <li>extend our system to make it easier to build and iterate on designs.</li>
              <li>flesh out offering to allow us to better focus on problem solving.</li>
            </ul>
          </p>

          <h5>jumping off point</h5>

          <p>when resonance first started, it was a collection of design elements, but there was no real system in place. we didn’t have defined rules for colors/type and how they relate to other elements. when i joined the project, we refocused on building it into a proper design system with those defined rules in place rather than a collection of components.</p>

          <p>we had a solid foundation, but there was no set structure in place. our files and components had room for improvement and organization. how we were initially organizing elements was not optimal for the team, and was leading to things feeling overwhelming when needing to use the system.</p>

          <p>after joining, we took the design artifacts in place, evaluated their needs and their relation to parts of the system. we then revised our components and designs into a more well thought out, organized structure along with the development of a quick-access design sheet intended to generate design ideas at a faster pace. one of our notable accomplishments with this project was taking a monolithic file and turning it into smaller, more manageable files to base our future designs from.</p>

          <img
            src="/assets/imgs/chorus-editor.jpg"
            alt="the chorus editor"
          />
          <cite>the peak at the chorus editor, one of the main expressions of the resonance design system</cite>

          <h5>challenges</h5>

          <p>with a bunch of components already designed out, our biggest challenges were around reworking what we had and introducing some order and rules to help better shape the directions we wanted to take the system and its users in.</p>

          <p><strong>growing from a monolithic library file.</strong> one of the hardest parts to wrangling any system is taking what currently is working and not working and evaluating how to go about making changes that support the positive and rework the negative aspects. many of the users of resonance liked the file they were getting to work out of, but the file itself was unwieldy and bloated. one of the first and best improvements we made was around organization and separating work, this made working out of files much easier and we ultimately ended up splitting the single file into four separate smaller system files. this made scaling up easier and improved overall maintainability since users could now only use parts of the system that were applicable to their work without the distraction of extra parts they did not need.</p>

          <p><strong>designing in service of a predefined to a tool.</strong> since resonance was being made to support the chorus editor, most of the design and thoughts on where to evolve the system revolved around the way it would impact our main tool. that means we had many meetings with the team designing and maintaining chorus and its users to make sure all the new pieces we were adding kept things within expectations and accessible to all users.</p>

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

          <h5>what does success look like</h5>

          <p>we’ve had many wins by moving to pinnacle, so lets look back at our high level goals and see how we did:</p>

          <p>
            <ul>
              <li><strong>build upon the design system to help reduce inconsistency across tools.</strong>
                <ul>
                  <li>after a few months of reorganizing, we were able to better share our system with other teams and were able to onboard users in a much easier way. this led to more teams using our system and more internal tools being worked on keeping a more consistent design across teams and users. this also allow updates to be upstreamed from teams using the design system and left our team as no longer to soul contributors to it.</li>
                </ul>
              </li>
              <li><strong>extend our system to make it easier to build and iterate on designs.</strong>
                <ul>
                  <li>due to all of the changes we had made, breaking up the files, allowing other designers outside of our team to contribute, better connectivity between components in the system. we were better positioned to iterate on designs and push updates out to partner teams to keep the system alive and healthy. this allowed us to extend the system to support other projects that werent chorus in a much easier way.</li>
                </ul>
              </li>
              <li><strong>flesh out offering to allow us to better focus on problem solving.</strong>
                <ul>
                  <li>after the rework, we found we were not fighting our system as much as we previously were (a large reduction of symbol detaching while designing) and as a result we could focus more time worrying about what our users needs were and delivering the best experiences we could and not about the smaller repetitive design elements.</li>
                </ul>
              </li>
            </ul>
          </p>

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

    </div>
  )
}
