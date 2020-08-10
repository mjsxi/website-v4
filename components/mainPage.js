
import Link from 'next/link'
import styles from '../styles/main.module.scss'

const MainPage = () => (
  <div>
    <div className={styles.heading}>
      <span>matt sullivan</span> is a product designer in NYC focusing on building out design systems and building up teams to achieve success with empathy, understanding, and support.
    </div>
    <div className={styles.subhead}>
      <div className={styles.projects}>
        <h2>projects</h2>
        <Link href="/projects/pinnacle">
          <a>Pinnacle 3</a>
        </Link>
        <Link href="/projects/parcel">
          <a>Parcel</a>
        </Link>
        <Link href="/projects/chorus">
          <a>Chorus</a>
        </Link>
        <Link href="/projects/resonance">
          <a>Resonance</a>
        </Link>
        <Link href="/projects/hymnal">
          <a>Hymnal</a>
        </Link>
      </div>
      <div className={styles.about}>
        <h2>about</h2>
        <p>A little about me, I’m more of a cat person and have been living with my long term roomate <a href="//instagram.com/uglybabykai/">Kai</a> for the last 5 years, I enjoy reading books (mostly on <a href="//amazon.com/Very-Serious-Cookbook-Contra-Wildair/dp/071487602X">cooking</a> and <a href="https://shop.butterandscotch.com/collections/swag/products/signed-butter-scotch-cookbook">baking</a>) and finding weird books to get design inspiration from (shout out to <a href="//vimeo.com/55449250">Atlas of the New Dutch Water Defence Line</a>), really enjoy video games specifically life simulators and collector games (enjoy this <a href="//polygon.com/2014/8/21/6052553/how-to-catch-every-pokemon">story</a> of me as a youth playing Pokémon).</p>
        <p>You can find me on <a href="//twitter.com/mjsxi">Twitter</a> (where I'm currently tweeting about Animal Crossing), <a href="//instagram.com/mjsxi/">Insta</a> (where I gram occationally), and if you’re here for it <a href="//linkedin.com/in/matt-sullivan-5455656a/">Linkedin</a>.</p>
      </div>
    </div>
  </div>
);

export default MainPage;
