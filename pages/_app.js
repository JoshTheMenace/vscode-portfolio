import { useEffect } from 'react';
import { useRouter } from 'next/router';
import { AnimatePresence, motion } from 'framer-motion';
import Layout from '../components/Layout';
import Head from '../components/Head';
import { ThemeProvider } from '../context/ThemeContext';
import '../styles/globals.css';
import '../styles/themes.css';
import '../styles/transitions.css';

// Premium page transition variants
const pageVariants = {
  initial: {
    opacity: 0,
    y: 20,
    scale: 0.98,
  },
  enter: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.4,
      ease: [0.25, 0.46, 0.45, 0.94],
      when: 'beforeChildren',
      staggerChildren: 0.1,
    },
  },
  exit: {
    opacity: 0,
    y: -10,
    scale: 1.01,
    transition: {
      duration: 0.25,
      ease: [0.25, 0.46, 0.45, 0.94],
    },
  },
};

// Content animation for staggered children
const contentVariants = {
  initial: {
    opacity: 0,
    y: 15,
  },
  enter: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.35,
      ease: [0.25, 0.46, 0.45, 0.94],
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
            <motion.div variants={contentVariants}>
              <Component {...pageProps} />
            </motion.div>
          </motion.div>
        </AnimatePresence>
      </Layout>
    </ThemeProvider>
  );
}

export default MyApp;
