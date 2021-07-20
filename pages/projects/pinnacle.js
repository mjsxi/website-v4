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

          <h3>— pinnacle design system<span>(2020-present)</span></h3>
          <p className={styles.intro}>for the last year, I’ve been working on a project at group nine called pinnacle&sup3;, this is one of the most ambitious initiatives group nine has ever undertaken for its home grown sites. this project touches everything from the back-end data structures to front-end implementation and design.</p>

          <div className={styles.contributions}>
            <p>
              <ul>
                <li><strong>role:</strong> product and design system lead</li>
                <li><strong>timeline:</strong> 12+ months</li>
                <li><strong>goal(s):</strong> componentize designs for easy replication across brands, bring the best parts of our existing sites forward and with modernized tastes, improve load times, improve ability to spin up new group nine brands.</li>
                <li><strong>skill(s):</strong> user research, design systems development, feature development, product strategy and goal setting.</li>
              </ul>
            </p>
          </div>

          <h5>intro</h5>

          <p>pinnacle at its core is the goal to get every group nine site onto one shared platform, this is built upon a single scalable codebase that has a shared design system across every brand expression. this required a massive rework of our old platform pinnacle&sup2; and included a complete refactoring of both engineering tools and how we as designers approach problems. this project has been in progress over the last year and has touch multiple brands and is continually being iterated and improved upon as expectations grow.</p>

          <p>you can see examples of this in action by visiting: <a target="_blank" href="//www.thrillist.com">thrillist</a>, <a target="_blank" href="//www.thedodo.com">the dodo</a>, <a target="_blank" href="//nowthisnews.com">now this</a>, and <a target="_blank" href="//www.seeker.com">seeker</a>. we are currently in the process of moving over another of our brands to this system and it will be added upon its launch.</p>

          <div className={styles.gallery}>
            <img
						loading="lazy"
            src="/assets/imgs/pinnacle-desktop-article_01.jpg"
            alt="pinnacles articles themed per brand"
            />
            <img
						loading="lazy"
            src="/assets/imgs/pinnacle-desktop-article_02.jpg"
            alt="pinnacles articles themed per brand"
            />
            <img
						loading="lazy"
            src="/assets/imgs/pinnacle-desktop-article_03.jpg"
            alt="pinnacles articles themed per brand"
            />
            <img
						loading="lazy"
            src="/assets/imgs/pinnacle-desktop-article_04.jpg"
            alt="pinnacles articles themed per brand"
            />
          </div>

          <cite>example of our article components across multiple large screens, each themed for a specific brand under the group nine umbrella</cite>

          <div className={styles.gallery}>
            <img
						loading="lazy"
            src="/assets/imgs/pinnacle-mobile-article_01.png"
            alt="pinnacles articles themed per brand"
            />
            <img
						loading="lazy"
            src="/assets/imgs/pinnacle-mobile-article_02.png"
            alt="pinnacles articles themed per brand"
            />
            <img
						loading="lazy"
            src="/assets/imgs/pinnacle-mobile-article_03.png"
            alt="pinnacles articles themed per brand"
            />
            <img
						loading="lazy"
            src="/assets/imgs/pinnacle-mobile-article_04.png"
            alt="pinnacles articles themed per brand"
            />
          </div>

          <cite>example of our article components across multiple small screens, each themed for a specific brand under the group nine umbrella</cite>

          <div className={styles.gallery}>
            <img
						loading="lazy"
            src="/assets/imgs/pinnacle-mobile-video_01.png"
            alt="pinnacles articles themed per brand"
            />
            <img
						loading="lazy"
            src="/assets/imgs/pinnacle-mobile-video_02.png"
            alt="pinnacles articles themed per brand"
            />
            <img
						loading="lazy"
            src="/assets/imgs/pinnacle-mobile-video_03.png"
            alt="pinnacles articles themed per brand"
            />
            <img
						loading="lazy"
            src="/assets/imgs/pinnacle-mobile-video_04.png"
            alt="pinnacles articles themed per brand"
            />
          </div>

          <cite>an example of a video node component that has been themed for some of group nines brands</cite>

          <h5>high level goals</h5>

          <p>
            <ul>
              <li>understanding the needs of our brands and what their baseline is and how this fits into pinnacle.</li>
              <li>create a single set of themeable tools to help improve our ability to share designs/features across all brands, at scale.</li>
              <li>improve workflows, and better unify the design, engineering, and pm handoff for new features and iterations.</li>
            </ul>
          </p>

          <h5>jumping off point</h5>

          <p>pinnacle&sup3;, is the in-house home grown solution to managing how sites express themselves across the brands owned and operated by group nine. originally, each brand had its own purpose built solution to managing the look and feel but shared nothing and had no interoperability across codebases.</p>

          <p>as group nine has grown, introducing and acquiring more brands, a new instance of pinnacle was spun up to serve the needs of each new site. they shared the same underlying publishing platform but as sites began to diverge and grow we quickly found ourselves managing and executing repetitive tasks across multiple designs and codebases, and anytime we wanted to introduce a new feature it needed to be designed, built and tested multiple times. this was highly unsustainable.</p>

          <p>e.g. features and stories across the brands shared a similar core but had diverged in their components and interactions, type system, ui elements such as inputs and fields and how the brand was being expressed.</p>

          <img
						loading="lazy"
            src="/assets/imgs/pinnacle-cards.jpg"
            alt="pinnacles content cards themed for each brand"
          />
          <cite>examples of some components used in our design system for the brands</cite>

          <h5>challenges</h5>

          <p>with multiple sites and sub-brands to consider, we've faced some sticky points throughout this overhaul, some of which include:</p>

          <p><strong>designing within a system and at scale.</strong> all our designs needed to have enough flexibility to work for all of our brands, yet still find room to have individual brand moments shine through to suit any of the editorial needs our stakeholders had. we essentially needed to create templates that we could easily maintain and scale that didn’t act like traditional templates. in order to meet these goals we did an audit of all existing components and cut any unnecessary pieces to help us better focus on delivering a rock solid core to scale up from, this meant sunsetting over 100 rarely used features, layouts, and components.</p>

          <p><strong>finding a balance between editorial needs and audience expectations.</strong> pinnacle is unique to most projects as it has two very different sets of users, editorial users who produce content and have expectations on how that content is expressed and users who come to our sites to experience that content. both sets of users are usually in sync with one another, but while editors love impactful pages with lots of effects to show their work our readers often want quick page loads and minimal page movement. as a team of designers, we need to consider what is the best path to ensure that our products work for all involved.</p>

          <p><strong>moving sites to a new platform while rebranding them.</strong> while designing and finding harmony between users we also needed to account for the brands getting refreshed as pinnacle&sup3; was in development. thrillist, the dodo, and seeker all received brand overhauls while we were in progress of migrating these brands to our new platform. this brought with it a few challenges i'd like to highlight — we were actively developing new features and components and needed to figure out how to work within a space where not all the brand elements were clearly defined. we often found ourselves needing to meet things that were out of our control such as launch windows, and expectations from other partners (such as sales and revenue). this often led us to needing to be thoughtful and hyper clear on feedback, timelines, success v failure, and a litany of smaller pieces that all go into a success product launch.</p>

          <p>communication was one of the major keys to this being successful.</p>

          <div className={styles.gallery}>
            <img
						loading="lazy"
            src="/assets/imgs/pinnacle-newspaper_01.jpg"
            alt="pinnacles articles themed per brand"
            />
            <img
						loading="lazy"
            src="/assets/imgs/pinnacle-newspaper_02.jpg"
            alt="pinnacles articles themed per brand"
            />
            <img
						loading="lazy"
            src="/assets/imgs/pinnacle-newspaper_03.jpg"
            alt="pinnacles articles themed per brand"
            />
            <img
						loading="lazy"
            src="/assets/imgs/pinnacle-newspaper_04.jpg"
            alt="pinnacles articles themed per brand"
            />
          </div>

          <cite>the brands reusing the same component in different contexts, due to time saved by moving to a scalable system we were able to give each brand its own unique "news paper" component that more aligned with their editorial goals.</cite>

          <h5>what does success look like</h5>

          <p>we’ve had many wins by moving to pinnacle, so lets look back at our high level goals and see how we did:</p>

          <p>
            <ul>
              <li><strong>understanding the needs of our brands and what their baseline is and how this fits into pinnacle.</strong>
                <ul>
                  <li>after a little over a year, we’ve migrated our main brands to the pinnacle mainline and over that time we have developed a deep understanding of the building blocks that make up our sites. Some of these include articles, features, video nodes, and “the homepages” (one of the more crucial parts noted by our stakeholders, each brand received a distinct homepage experience to better help with their brand expression (see above)) and all the smaller things that make up a pinnacle site. along with this we’ve come to understand the best way to express our brands and their unique identifiers.</li>
                </ul>
              </li>
              <li><strong>create a single set of themeable tools to help improve our ability to share designs/features across all brands, at scale.</strong>
                <ul>
                  <li>this is pretty easy as we either succeeded or we didn’t. We successfully moved all of our brands onto this new unified design system and codebase, so a success. we are still growing this system but as it stands today we’ve fully delivered on our goal to unify these brands to make scaling up a breeze.</li>
                </ul>
              </li>
              <li><strong>improve workflows, and better unify the design, engineering, and pm handoff for new features and iterations.</strong>
                <ul>
                  <li>this was a big goal of ours in this move and i think it’s another success story. while moving our codebase we also changed design tools to use figma and its amazing collaboration and component capabilities. due to this move and the power of components, design was able to build out a comprehensive design system with theming and a good bit of flexibility to meet our needs while engineering made a code component library that hooks into figma to pull all needed values. this has severely reduced turn around times, eased handoff and helped with small visual qa mishaps. now that handoff and qa can look to a single source of truth for design there is less errors and overall better communication between different teams within product.</li>
                </ul>
              </li>
            </ul>
          </p>

          <h5>lessons learned</h5>

          <p>
            <ul>
              <li>good work and a good foundation takes time to develop.</li>
              <li>communication is one of the most important tools we as designers have to help build consensus and build trust between our teammates and our users.</li>
              <li>knowing when to advocate for evolution of something vs changing something that already works.</li>
            </ul>
          </p>

          <h5>future improvements</h5>

          <p>
            <ul>
              <li>this project is still ongoing.</li>
            </ul>
          </p>

        </div>
      </motion.div>

    </div>
  )
}
