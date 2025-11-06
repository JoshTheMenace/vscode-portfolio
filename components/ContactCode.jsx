import styles from '../styles/ContactCode.module.css';

const contactItems = [
  {
    social: 'website',
    link: 'joshthemenace.com',
    href: 'https://joshthemenace.com',
  },
  {
    social: 'email',
    link: 'josh.gimenes1@gmail.com',
    href: 'mailto:josh.gimenes1@gmail.com',
  },
  {
    social: 'github',
    link: 'JoshTheMenace',
    href: 'https://github.com/JoshTheMenace',
  },
  {
    social: 'linkedin',
    link: 'Josh Gimenes',
    href: 'https://www.linkedin.com/in/josh-gimenes/',
  },
];

const ContactCode = () => {
  return (
    <div className={styles.code}>
      <p className={styles.line}></p>
      <p className={styles.line}>
        <span className={styles.className}>.socials</span> &#123;
      </p>
      {contactItems.slice(0, 8).map((item, index) => (
        <p className={styles.line} key={index}>
          &nbsp;&nbsp;&nbsp;{item.social}:{' '}
          <a href={item.href} target="_blank" rel="noopener">
            {item.link}
          </a>
          ;
        </p>
      ))}
      {contactItems.slice(8, contactItems.length).map((item, index) => (
        <p className={styles.line} key={index}>
          &nbsp;&nbsp;{item.social}:{' '}
          <a href={item.href} target="_blank" rel="noopener">
            {item.link}
          </a>
          ;
        </p>
      ))}
      <p className={styles.line}>&#125;</p>

      <p className={styles.line}></p>
      <p className={styles.line}></p>
      <p className={styles.line}></p>
      <p className={styles.line}></p>
      <p className={styles.line}></p>
      <p className={styles.line}></p>
      <p className={styles.line}></p>
      <p className={styles.line}></p>
      <p className={styles.line}></p>
    </div>
  );
};

export default ContactCode;
