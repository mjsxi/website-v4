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

          <div className={styles.spacer}>If you found this while inspecting the page and can see this good on ya! I couldn't get css grid to do exactly what I wanted so I hacked in this spacer to get the grid to play nice!</div>

          <h3>— design process<span>(∞)</span></h3>
          <p className={styles.intro}>here is a collection of thoughts around how i approach design and the processes around it, along with some thoughts around the ways that i like to use my skills with people to contribute broadly to a design team and our partners. i've put this above all my projects in hopes you will read this before diving into my work.</p>

          <h5>thougths on design</h5>

          <p>design isn’t how something looks it’s how it works. i think about this pretty often and how good design isn’t always beautiful and how beautiful design isn’t always good.</p>

          <p>at the core of design, and what makes it great, is how we try to solve problems with design thinking along with our ability to communicate complex problems. from my experience i’ve found that a design is only as successful as its ability to be tested and proven effective, this often isn’t found with beauty but with research, testing and iteration. we often find some of the best solutions when we open ourselves up to the willingness to be wrong and reevaluate our previously held assumtions.</p>

          <p>at the root of this is where great designers hold themselves — a willingness to grow, to have their minds changed, and being always curious and ready to build towards just solutions.</p>

          <h5>how I work</h5>

          <p>my main approach to work is built around empathy.</p>

          <p>i prefer to get to know the people i’m designing for — knowing who they are and what they care about lets me better focus resources to things that will make meaningful and impactful changes to their lives. i often find myself starting with questions and a willingness to listen before diving too deeply into any one solution. listening to people and their problems/wants/needs/goals is always how i’ve found the space to look outside myself and get the best results for any project i am apart of.</p>

          <p>i love running tests and being proven wrong, i like being able to lean into data as a way to help validate any sort of hypothesis i have on any on solution and am always open to a good feedback session. producing multiple ideas, putting together prototypes and tests are a great way we as designers can come to good solid conclusions.</p>

          <p>i know how to spend my energy, not every problem needs a novel bespoke solution and sometimes the smartest thing you can bring to a project is leaning on your past knowledge and common patterns and conventions to work quickly and reliably.</p>

          <p>design is never just one well placed solution but a collection of changes that lead to a greater impact.</p>

          <h5>working with others</h5>

          <p>i just lightly want to touch on my approach to teamwork and working with others. i heavily subscribe to the idea that there is no one rockstar on any team — everyone should have a voice and should be empowered to give and receive feedback on their work. everyone on a team has something to contribute and some of the best ideas i’ve ever come across has been through talking with others who aren’t “designers”.</p>

          <p>i strongly believe in building consensus and partnerships with others as a way to get the best results out of any team.</p>

          <h5>leadership thoughts & a little boasting</h5>

          <p>i love sessions for designers to gather and give feedback, in my last two jobs i have run weekly design feedback sessions — i think learning as we grow in our careers is one of the most important things, along with the lessons i've also run a monthly design challenge (one of them even became a successful <a target="_blank" href="https://www.kickstarter.com/projects/constancewatkins/reverie-tarot/description">kickstarter</a>!!!).</p>

          <p>i often find myself asking hard questions first and "breaking the ice" for others to ask questions that sometimes often make us feel too awkward to confront. specifically, around big societal changes and how we might go about as a group, of smart people, to make changes that allow for a more equitable and fair representation among us, as designers.</p>

          <p>i love getting to work with more junior members of a team and helping them grow. i often do this through listening. i believe the best way to be a mentor to someone is the listen first and speak second. communication is a two way street and hearing out those more junior than you is the best way to figure out how to speak with real impact and help them get the best opportunities to grow as a result. i always try my best to find time for those looking to learn and better themselves, some of the most rewarding parts of my career have been getting one on one time with someone looking to improve their hard and soft skills.</p>

          <p>i am a big proponent of change, and i am never really satisfied if i find the way something is being done has become more of a hinderance than helpful. in this vain, when we ramped up our design systems work at the end of last year i advocated for and helped shift our design team to figma. i pushed for this for a few reasons, one of the key reasons was to better help with collaboration (and seeing how things are currently going i'm very happy i pushed for this change) and just overall workflow improvements around things we were previously having to hack together. this has been a wild success and has eliminated a bunch of pain points for our teams.</p>

          <h5>last note</h5>

          <p>thanks for taking the time to read all this, i appreciate it! if you have any thoughts or feedback or just want to talk about anything, feel free to <a href="mailto:msullivanxi@gmail.com">reach out</a>, i always love getting to meet and talk to new people!</p>

        </div>
      </motion.div>

    </div>
  )
}
