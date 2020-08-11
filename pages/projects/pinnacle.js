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
        <title>matt sullivan</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <Nav />
        <MainPage />


          <motion.div
            className={styles.proContainer}
            initial="hidden"
            animate="visible"
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
              <h3>pinnacle</h3>
              <h4>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam iaculis felis id diam pellentesque mollis.</h4>
              <img src="/assets/imgs/cat.jpg" alt="my image" />
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam iaculis felis id diam pellentesque mollis. Fusce mollis varius lacus, vitae laoreet nulla. Fusce pharetra urna non placerat vehicula. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Etiam ac tellus aliquam, maximus orci in, sollicitudin augue. Maecenas tincidunt ligula ut ipsum euismod eleifend. Proin at varius erat.</p>
              <p>Nulla sollicitudin vel ipsum quis sagittis. Maecenas risus nisi, varius in turpis non, pellentesque imperdiet ante. Curabitur non congue turpis, eu mollis mi. Nullam sollicitudin arcu sit amet augue interdum convallis. Maecenas at dictum leo. Praesent vel metus a felis efficitur pulvinar id a velit. Morbi eu consequat arcu. In purus quam, euismod eu mattis vel, laoreet vel libero. Aliquam eleifend a nunc nec venenatis. Vivamus a lorem luctus, luctus mauris nec, viverra ante. Morbi venenatis quis purus sit amet viverra.</p>
              <p>Nunc vel mi id urna tincidunt efficitur. Fusce faucibus nisi ac diam porttitor, at fermentum nisi congue. Curabitur dui est, fringilla consequat urna id, commodo ultricies nisi. Sed velit mi, posuere in euismod ac, egestas non orci. Nullam et dui ullamcorper, dictum massa non, condimentum sapien. Donec tincidunt a turpis nec venenatis. Vivamus dictum tellus non sem ornare, ut ornare felis malesuada. Cras sodales ex eros, at pellentesque ex tincidunt ornare. Suspendisse eu tempus ipsum. Aenean venenatis risus turpis, in viverra sem placerat a. Mauris dictum maximus mi eget vehicula. Donec lorem felis, fermentum at commodo ac, cursus vel augue. Vestibulum a augue aliquet, egestas neque ut, blandit eros. Vivamus tempus velit in purus laoreet ultricies. Curabitur vel pellentesque nulla.</p>
              <p>Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Sed non ullamcorper magna. Nullam ornare nibh eget metus tincidunt, quis ultricies quam fringilla. Quisque mattis malesuada diam vitae tristique. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Curabitur id semper dui. Vivamus nec gravida justo, non lacinia velit. Ut venenatis nunc laoreet, dapibus nisi ut, ultricies dui.</p>
              <p>Suspendisse ut fermentum ex. Mauris felis turpis, scelerisque quis sagittis a, commodo eget lectus. Nam vehicula eleifend velit at facilisis. Curabitur efficitur ex vel condimentum ornare. Donec eget purus pellentesque, ullamcorper enim at, vestibulum mi. Nulla facilisi. Vestibulum cursus turpis eu nibh maximus viverra. Aliquam ut iaculis nibh, nec iaculis felis. Cras nisi sem, pulvinar vitae consequat id, ullamcorper non erat. Morbi vitae lorem sit amet libero sodales commodo nec eleifend nulla.</p>
            </div>
          </motion.div>

      </main>
      <BgGradient />
    </div>
  )
}
