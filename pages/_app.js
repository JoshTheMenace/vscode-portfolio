import { useEffect } from 'react';
import { useRouter } from 'next/router';
import { AnimatePresence, motion } from 'framer-motion';
import Layout from '../components/Layout';
import Head from '../components/Head';
import { ThemeProvider } from '../context/ThemeContext';
import '../styles/globals.css';
import '../styles/themes.css';
import '../styles/transitions.css';

// Simple fade transition - no layout-breaking transforms on exit
const pageVariants = {
  initial: {
    opacity: 0,
  },
  enter: {
    opacity: 1,
    transition: {
      duration: 0.3,
      ease: 'easeOut',
    },
  },
  exit: {
    opacity: 0,
    transition: {
      duration: 0.15,
      ease: 'easeIn',
    },
  },
};

function MyApp({ Component, pageProps }) {
  const router = useRouter();

  useEffect(() => {
    // Initialize theme from localStorage
    if (localStorage.getItem('theme')) {
      document.documentElement.setAttribute(
        'data-theme',
        localStorage.getItem('theme')
      );
    }
  }, []);

  return (
    <ThemeProvider>
      <Layout>
        <Head title={`Josh Gimenes Portfolio | ${pageProps.title}`} />
        <AnimatePresence mode="wait" initial={false}>
          <motion.div
            key={router.pathname}
            variants={pageVariants}
            initial="initial"
            animate="enter"
            exit="exit"
            className="page-transition-wrapper"
          >
            <Component {...pageProps} />
          </motion.div>
        </AnimatePresence>
      </Layout>
    </ThemeProvider>
  );
}

export default MyApp;
