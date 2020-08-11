import { motion } from "framer-motion"
import Link from 'next/link'
import styles from '../styles/main.module.scss'

const Nav = () => (
  <motion.nav id="nav"
    className={styles.nav}
    initial="hidden"
    animate="visible"
    exit="hidden"
    variants={{
      hidden: {
        opacity: 0
      },
      visible: {
        opacity: 1
      },
    }}
    transition={{
      default: { duration: .25 },
      delay: .3
    }}
  >
    <Link href="/">
      <a>matt sullivan</a>
    </Link>
    <Link href="/">
      <a>close(x)</a>
    </Link>
  </motion.nav>
);

export default Nav;
