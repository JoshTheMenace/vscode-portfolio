import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import styles from '../styles/AboutPage.module.css';

const codeLines = [
  { text: '<main>', indent: 0 },
  { text: '<section>', indent: 1 },
  { text: '<h2>Who I Am</h2>', indent: 2 },
  { text: '<p>', indent: 2 },
  { text: "Hi, I'm Josh Gimenes, a passionate computer science student in northern Utah.", indent: 3, isContent: true },
  { text: '</p>', indent: 2 },
  { text: '<p>', indent: 2 },
  { text: "I'm passionate about web and mobile development and enjoy solving challenging problems by coming up with creative and efficient coding solutions.", indent: 3, isContent: true },
  { text: '</p>', indent: 2 },
  { text: '</section>', indent: 1 },
  { text: '', indent: 0 },
  { text: '<section>', indent: 1 },
  { text: '<h2>Work Experience</h2>', indent: 2 },
  { text: '<p>', indent: 2 },
  { text: "I'm currently a contractor at Stryker, where I specialize in the voice command and NLP module for a team-developed surgical application, enabling hands-free medical equipment control and enhancing surgeon efficiency in the OR.", indent: 3, isContent: true },
  { text: '</p>', indent: 2 },
  { text: '<p>', indent: 2 },
  { text: 'I have worked for several other companies, building systems such as multiplayer games, mobile applications, and backend systems.', indent: 3, isContent: true },
  { text: '</p>', indent: 2 },
  { text: '</section>', indent: 1 },
  { text: '', indent: 0 },
  { text: '<section>', indent: 1 },
  { text: '<h2>Achievements</h2>', indent: 2 },
  { text: '<p>3.96 GPA | B.S. Computer Science - Utah Valley University</p>', indent: 2 },
  { text: '<p>Mobile Dev Certification - MTECH</p>', indent: 2 },
  { text: '<p>JustBuild AI Agents Hackathon - 2nd Place</p>', indent: 2 },
  { text: '<p>Weber State Hackathon - 2nd Place</p>', indent: 2 },
  { text: "<p>Chosen as Time magazine's Person of the Year 2006</p>", indent: 2 },
  { text: '</section>', indent: 1 },
  { text: '</main>', indent: 0 },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.05,
      delayChildren: 0.2,
    },
  },
};

const lineVariants = {
  hidden: { opacity: 0, x: -10 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.3,
      ease: [0.25, 0.46, 0.45, 0.94],
    },
  },
};

const sectionVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: [0.25, 0.46, 0.45, 0.94],
    },
  },
};

const renderCodeLine = (line, index) => {
  const indent = '\u00A0'.repeat(line.indent * 4);

  if (line.text === '') {
    return <p key={index} className={styles.line}>&nbsp;</p>;
  }

  if (line.isContent) {
    return (
      <motion.p key={index} className={styles.line} variants={lineVariants}>
        {indent}{line.text}
      </motion.p>
    );
  }

  // Parse HTML-like tags
  const parts = line.text.split(/(<\/?[^>]+>)/g);
  return (
    <motion.p key={index} className={styles.line} variants={lineVariants}>
      {indent}
      {parts.map((part, i) => {
        if (part.startsWith('</')) {
          const tagName = part.slice(2, -1);
          return (
            <span key={i}>
              &lt;/<span className={styles.className}>{tagName}</span>&gt;
            </span>
          );
        } else if (part.startsWith('<')) {
          const tagName = part.slice(1, -1);
          return (
            <span key={i}>
              &lt;<span className={styles.className}>{tagName}</span>&gt;
            </span>
          );
        }
        return <span key={i}>{part}</span>;
      })}
    </motion.p>
  );
};

const AboutPage = () => {
  const [cursorVisible, setCursorVisible] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setCursorVisible((v) => !v);
    }, 530);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className={styles.container}>
      <motion.div
        className={styles.code}
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {codeLines.map((line, index) => renderCodeLine(line, index))}
        <motion.span
          className={styles.cursor}
          animate={{ opacity: cursorVisible ? 1 : 0 }}
          transition={{ duration: 0.1 }}
        >
          |
        </motion.span>
      </motion.div>

      <motion.div
        className={styles.bgwhite}
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6, delay: 0.3, ease: [0.25, 0.46, 0.45, 0.94] }}
      >
        <main className={styles.wrapper}>
          <motion.section variants={sectionVariants} initial="hidden" animate="visible">
            <h2>Who I Am</h2>
            <p>
              Hi, I'm Josh Gimenes, a passionate computer science student in northern Utah.
            </p>
            <p>
              I'm passionate about web and mobile development and enjoy solving challenging problems by coming up with creative and efficient coding solutions.
            </p>
          </motion.section>

          <br />

          <motion.section
            variants={sectionVariants}
            initial="hidden"
            animate="visible"
            transition={{ delay: 0.2 }}
          >
            <h2>Work</h2>
            <p>
              I'm currently a contractor at Stryker, where I specialize in the voice command and NLP module for a team-developed surgical application, enabling hands-free medical equipment control and enhancing surgeon efficiency in the OR.
            </p>
            <p>
              I have worked for several other companies, building systems such as multiplayer games, mobile applications, and backend systems.
            </p>
          </motion.section>

          <br />

          <motion.section
            variants={sectionVariants}
            initial="hidden"
            animate="visible"
            transition={{ delay: 0.4 }}
          >
            <h2>Achievements</h2>
            <p>3.96 GPA | B.S. Computer Science - Utah Valley University</p>
            <p>Mobile Dev Certification - MTECH</p>
            <p>JustBuild AI Agents Hackathon - 2nd Place</p>
            <p>Weber State Hackathon - 2nd Place</p>
            <p>Chosen as Time magazine's Person of the Year 2006</p>
          </motion.section>
        </main>
      </motion.div>
    </div>
  );
};

export async function getStaticProps() {
  return {
    props: { title: 'About' },
  };
}

export default AboutPage;
