import { useEffect } from 'react';
import { AnimatePresence } from 'framer-motion'
import Router from 'next/router'
import BgGradient from '../components/bgGradient'
import '../styles/globals.scss'

const MyApp = ({ Component, pageProps, router }) => {
  useEffect(() => {
    document.addEventListener('keydown', (e) => {
      if (e.key == "Escape" || e.key === "27") {
        Router.push('/');
      }
    });
  }, []);
  return (
    <>
      <AnimatePresence initial={false} exitBeforeEnter>
        <Component {...pageProps} key={router.route} />
      </AnimatePresence>
      <BgGradient />
    </>
  )
}
export default MyApp
