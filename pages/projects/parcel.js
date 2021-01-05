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
        <meta name="description" content="parcel project brief" />
        <meta name="keywords" content="designer, product design, design systems, matt sullivan, parcel" />
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

          <h3>— parcel <span>(2019)</span></h3>
          <p className={styles.intro}>when i joined group nine in late 2018 this was the project i was hired to oversee. this ambitious project was done in the span of about 11 months and covered a redesign, a change in strategy, user experience rethinking along with a reworking of the information architecture and a need for higher content density on any given page.</p>

          <div className={styles.contributions}>
            <p>
              <ul>
                <li><strong>role:</strong> product design lead</li>
                <li><strong>timeline:</strong> 13 months</li>
                <li><strong>goal(s):</strong> redesign parcel to be more modern and better fit our users needs, develop a design system to be used across a bunch of group nines internal tools, better develop the user interface and experiance within parcel.</li>
                <li><strong>skill(s):</strong> user research and testing, design systems development, feature protoyping and development, product strategy.</li>
              </ul>
            </p>
          </div>

          <h5>overview</h5>

          <p>parcel at its most basic definition is group nines internal video aggregator tool, it allows the multiple brands under the group nine umbrella to contribute video, share, and find assets already produced by the brands. this was done to better encourage interoperability of video assets to reduce spend and time needed to find the right video to go along with a story while leaning into all the work we do to produce high quality assets.</p>

          <p>when joining the project, we started by defining what was successful about the already existing version of parcel along with conducting user interview sessions to help us define what our 3/6/12 month goals were to evolve parcel to better meet our users where they are.</p>

          <img 
						loading="lazy"
            src="/assets/imgs/parcel-before-after.jpg"
            alt="parcel before and after redesign"
          />
          <cite>parcel, before and after the redesign and refocus</cite>

          <h5>high level goals</h5>

          <p>
            <ul>
              <li>reduce the clicks needed and the overall friction we found while watching our users navigate/use parcel.</li>
              <li>put together a design system to better harmonize all the parts of parcel, along with helping to modernize its look and feel and develop a system that can be scaled up to fit other internal tools needs.</li>
              <li>introduce a better search system, and improve density of assets and information within the app.</li>
            </ul>
          </p>

          <h5>jumping off point</h5>

          <p>initially, parcel was not meeting the needs of our users and needed a lot of care to move beyond its roots. shortly after joining the team, i quickly led a fundamental shift in thinking and approach for the project’s design aspect. in addition to putting together a design system, our main focus was on a visual design update, better information architecture and a more fleshed out user experience.</p>

          <p>as group nine moved to using this internal tool, its users often found themselves frustrated over the amount of scrolling and poor communication of actionable targets. this often led to users having a bad experience and often a breakdown of trust between the product team developing the tool and its users. both groups often felt their needs were not being met.</p>

          <p>e.g. users didn't want to be taken out of the experience when viewing a video asset,  the way the previous team had solved this was with a full screen overlay. while taking what users asked for and delivering it, this ended up being tedious to move between assets even though it wasn't taking users out of the page it often ended up with users only going to parcel when they had direct links.</p>

          <img 
						loading="lazy"
            src="/assets/imgs/parcel-info-overlay.jpg"
            alt="the parcel apps info panel"
          />
          <cite>the info panel for a selected video in parcel</cite>

          <img 
						loading="lazy"
            src="/assets/imgs/parcel-insights.jpg"
            alt="the pacel apps insight view"
          />
          <cite>the insights view for a selected video in parcel</cite>

          <h5>challenges</h5>

          <p>with thousands of videos at our disposal, we faced a fun and unique challenge to make navigating our entire collection as easy and fast as possible. here is some of the bigger challenges we faced:</p>

          <p><strong>resolving user malcontent over a frustrating user experience.</strong> due to previous work on this product not meeting the expectations of its users, many of them had become unwilling to use parcel unless they were given direct links to a video asset. the results of this was a fundamental breakdown for one of the main reason parcel was built, i.e. to help users find video assets they could use for their work. recontextualizing and repairing this relationship between the team and its users was not going to be easy due to all the friction and pain points. many found the unintuitive ways of interacting with elements in the product along with the information density being low often led to users feeling as though there was a lot on the page with little results.</p>

          <p><strong>building new features and value adds to better help users find what they need.</strong> one of the biggest pieces of feedback the team was hearing was around how difficult it was to find necessary videos, no matter what key phrases they used against the search it never ended up returning what was expected. with the users expectations not being met, many gave up on using search and lost confidence in any of the results it was able to produce. we wanted to rethink how we were going about using search within parcel and how we could build upon the unsuccessful implementation by adding new search options and features to better meet users expectations and to reestablish the broken trust.</p>

          <p><strong>building a nice baseline for future internal tools.</strong> upon joining group nine, one of their stated goals was to lean more into components and repeatable design patterns, this was in hopes of freeing up resources to better focus on the needs of our users. this was a bit of a precursor to the <Link href="/projects/pinnacle">pinnacle project</Link>. one of the biggest challenges was making an agnostic and flexible system that could span this video aggregator, our in-house content management system, and a few other interal tools that are used by group nine.</p>

          <img 
						loading="lazy"
            src="/assets/imgs/parcel-series-details.jpg"
            alt="parcels series details view"
          />
          <cite>parcels series details page</cite>

          <h5>what does success look like</h5>

          <p>we’ve had many wins by moving to pinnacle, so lets look back at our high level goals and see how we did:</p>

          <p>
            <ul>
              <li><strong>reduce the clicks needed and the overall friction we found while watching our users navigate/use parcel.</strong>
                <ul>
                  <li>this was our proudest achievement for this project, on average to search for a video, then narrow down the results and view 10 different videos took about 40 clicks to complete. upon reworking how search and navigation worked, we were able to reduce this to about 15 clicks on average. this is about a 63% decrease in clicks and this small collection of changes and optimizations ended up changing a great deal of the negative sentiment for our users around parcel.</li>
                </ul>
              </li>
              <li><strong>put together a design system to better harmonize all the parts of parcel, along with helping to modernize its look and feel and develop a system that can be scaled up to fit other internal tools needs.</strong>
                <ul>
                  <li>this one is pretty cut and dry. we successfully reworked all the designs of parcel along with building out a robust and modern design system to support our work along with other teams and projects. shortly after the first iteration of this design system launched, parcel and our cms immediately moved over to this newly available system. during the development we chose to heavily focus on density of information, ways to show clear wayfinding and navigation, and a friendly and accessible color palette to make users feel as though the tools they were using were pleasant and easy to use.</li>
                </ul>
              </li>
              <li><strong>introduce a better search system, and improve density of assets and information within the app.</strong>
                <ul>
                  <li>this was another big avenue of mistrust in our product, users would search things and more often then not get unexpected or wrong search results. after taking this to heart we went back to the drawing board and after about two months of testing and iteration landed on a completely rethought out experience (see image below for a peak). accurate search results was a huge sticking point to many of the parcel users and this rework didn't just cover the design portion but also the underlying tech facilitating search. we cleaned up the design to better showcase what could be searched against and improved the density of information and streamlined navigation between results, this helped our users get the most out of any query. this change, along with a few other quality of life improvements saw parcels daily active user numbers jump to about 10x what they were before i joined.</li>
                </ul>
              </li>
            </ul>
          </p>

          <img 
						loading="lazy"
            src="/assets/imgs/parcel-search.jpg"
            alt="parcels reworked and expanded search"
          />
          <cite>parcel with its revised and expanded search to help better surface desired results</cite>

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

    </div>
  )
}
