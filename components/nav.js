import Link from 'next/link'
import styles from '../styles/main.module.scss'

const Nav = () => (
  <nav id="nav" className={styles.nav}>
    <Link href="/">
      <a>matt sullivan</a>
    </Link>
    <Link href="/">
      <a>close(x)</a>
    </Link>
  </nav>
);

export default Nav;
