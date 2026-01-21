import Link from 'next/link';
import { motion } from 'framer-motion';
import Illustration from '../components/Illustration';
import styles from '../styles/HomePage.module.css';

const backgroundVariants = {
  hidden: { opacity: 0, scale: 1.1 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 1,
      ease: [0.25, 0.46, 0.45, 0.94],
    },
  },
};

const contentVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.3,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0.25, 0.46, 0.45, 0.94],
    },
  },
};

const buttonVariants = {
  hidden: { opacity: 0, y: 20, scale: 0.9 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.5,
      ease: [0.25, 0.46, 0.45, 0.94],
    },
  },
  hover: {
    scale: 1.05,
    transition: {
      duration: 0.2,
      ease: 'easeInOut',
    },
  },
  tap: {
    scale: 0.98,
  },
};

const illustrationVariants = {
  hidden: { opacity: 0, x: 50, rotate: 5 },
  visible: {
    opacity: 1,
    x: 0,
    rotate: 0,
    transition: {
      duration: 0.8,
      delay: 0.5,
      ease: [0.25, 0.46, 0.45, 0.94],
    },
  },
};

export default function HomePage() {
  return (
    <>
      <div className={styles.container}>
        <motion.div
          className={styles.background}
          variants={backgroundVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.h1
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            I ❤ CODING
          </motion.h1>
          <motion.h1
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            I ❤ CREATING
          </motion.h1>
        </motion.div>
        <div className={styles.foreground}>
          <motion.div
            className={styles.content}
            variants={contentVariants}
            initial="hidden"
            animate="visible"
          >
            <motion.h1 className={styles.name} variants={itemVariants}>
              Josh Gimenes
            </motion.h1>
            <motion.h6 className={styles.bio} variants={itemVariants}>
              Web + Mobile Developer
            </motion.h6>
            <motion.div style={{ display: 'inline-block' }} variants={buttonVariants}>
              <Link href="/projects">
                <motion.button
                  className={styles.button}
                  whileHover="hover"
                  whileTap="tap"
                  variants={buttonVariants}
                >
                  View Work
                </motion.button>
              </Link>
            </motion.div>
            <motion.div style={{ display: 'inline-block' }} variants={buttonVariants}>
              <Link href="/contact">
                <motion.button
                  className={styles.outlined}
                  whileHover="hover"
                  whileTap="tap"
                  variants={buttonVariants}
                >
                  Contact Me
                </motion.button>
              </Link>
            </motion.div>
          </motion.div>
          <motion.div
            variants={illustrationVariants}
            initial="hidden"
            animate="visible"
          >
            <Illustration className={styles.illustration} />
          </motion.div>
        </div>
      </div>
    </>
  );
}

export async function getStaticProps() {
  return {
    props: { title: 'Home' },
  };
}
