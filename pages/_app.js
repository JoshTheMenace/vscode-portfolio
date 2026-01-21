import { useEffect } from 'react';
import { motion } from 'framer-motion';
import Layout from '../components/Layout';
import Head from '../components/Head';
import { ThemeProvider } from '../context/ThemeContext';
import '../styles/globals.css';
import '../styles/themes.css';
import '../styles/transitions.css';

function MyApp({ Component, pageProps }) {
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
        <motion.div
          key={pageProps.title}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.3, ease: 'easeOut' }}
        >
          <Component {...pageProps} />
        </motion.div>
      </Layout>
    </ThemeProvider>
  );
}

export default MyApp;
