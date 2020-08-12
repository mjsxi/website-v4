import '../styles/globals.scss'
import { AnimatePresence } from 'framer-motion'
import BgGradient from '../components/bgGradient'



function MyApp({ Component, pageProps, router }) {
  return (
    <>
      <AnimatePresence>
        <Component {...pageProps} key={router.route} />
      </AnimatePresence>
      <BgGradient />
    </>
    )
}

export default MyApp
