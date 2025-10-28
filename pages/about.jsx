import { useState } from 'react';
// import ContactCode from '../components/ContactCode';
// import styles from '../styles/ContactPage.module.css';
import styles from '../styles/AboutPage.module.css';


const contactItems = [
  {
    social: 'website',
    link: 'thearcher.dev',
    href: 'https://thearcher.dev',
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


const AboutPage = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');

  const submitForm = async (e) => {
    e.preventDefault();
    console.log(process.env.NEXT_PUBLIC_API_URL);
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/contact`, {
      method: 'POST',
      body: JSON.stringify({ name, email, subject, message }),
    });
    if (res.ok) {
      alert('Your response has been received!');
      setName('');
      setEmail('');
      setSubject('');
      setMessage('');
    } else {
      alert('There was an error. Please try again in a while.');
    }
  };

  return (
    <div className={styles.container}>
      <div>
        {/* <h3 className={styles.heading}>Reach Out Via Socials</h3> */}




        <div className={styles.code}>



        <p className={styles.line }>&lt;<span className={styles.className}>main</span>&gt;</p>
          <p className={styles.line}>&nbsp;&nbsp;&lt;<span className={styles.className}>section</span>&gt;</p>
            <p className={styles.line}>&nbsp;&nbsp;&nbsp;&nbsp;&lt;<span className={styles.className}>h2</span>&gt;Who I Am&lt;/<span className={styles.className}>h2</span>&gt;</p>
            <p className={styles.line}>&nbsp;&nbsp;&nbsp;&nbsp;&lt;<span className={styles.className}>p</span>&gt;</p>
              <p className={styles.line}>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Hi, I'm Josh Gimenes, a passionate computer science student in northern Utah.
              </p>
            <p className={styles.line}>&nbsp;&nbsp;&nbsp;&nbsp;&lt;/<span className={styles.className}>p</span>&gt;</p>
            <p className={styles.line}>&nbsp;&nbsp;&nbsp;&nbsp;&lt;<span className={styles.className}>p</span>&gt;</p>
              <p className={styles.line}>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;I'm passionate about web and mobile development and enjoy solving challenging problems by coming up with creative and efficient coding solutions.
              </p>
            <p className={styles.line}>&nbsp;&nbsp;&nbsp;&nbsp;&lt;/<span className={styles.className}>p</span>&gt;</p>
          <p className={styles.line}>&nbsp;&nbsp;&lt;/<span className={styles.className}>section</span>&gt;</p>

          <p className={styles.line}></p>

          <p className={styles.line}>&nbsp;&nbsp;&lt;<span className={styles.className}>section</span>&gt;</p>
            <p className={styles.line}>&nbsp;&nbsp;&nbsp;&nbsp;&lt;<span className={styles.className}>h2</span>&gt;Work Experience&lt;/<span className={styles.className}>h2</span>&gt;</p>
            <p className={styles.line}>&nbsp;&nbsp;&nbsp;&nbsp;&lt;<span className={styles.className}>p</span>&gt;</p>
              <p className={styles.line}>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;I'm currently a contractor at Stryker, where I specialize in the voice command and NLP module for a team-developed surgical application, enabling hands-free medical equipment control and enhancing surgeon efficiency in the OR.
              </p>
            <p className={styles.line}>&nbsp;&nbsp;&nbsp;&nbsp;&lt;/<span className={styles.className}>p</span>&gt;</p>
            <p className={styles.line}>&nbsp;&nbsp;&nbsp;&nbsp;&lt;<span className={styles.className}>p</span>&gt;</p>
              <p className={styles.line}>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;I have worked for several other companies, building systems such as multiplayer games, mobile applications, and backend systems.
              </p>
            <p className={styles.line}>&nbsp;&nbsp;&nbsp;&nbsp;&lt;/<span className={styles.className}>p</span>&gt;</p>
          <p className={styles.line}>&nbsp;&nbsp;&lt;/<span className={styles.className}>section</span>&gt;</p>
          
          <p className={styles.line}></p>

          <p className={styles.line}>&nbsp;&nbsp;&lt;<span className={styles.className}>section</span>&gt;</p>
            <p className={styles.line}>&nbsp;&nbsp;&nbsp;&nbsp;&lt;<span className={styles.className}>h2</span>&gt;Achievements&lt;/<span className={styles.className}>h2</span>&gt;</p>
            <p className={styles.line}>&nbsp;&nbsp;&nbsp;&nbsp;&lt;<span className={styles.className}>p</span>&gt;</p>
              <p className={styles.line}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;3.96 GPA | B.S. Computer Science - Utah Valley University</p>
            <p className={styles.line}>&nbsp;&nbsp;&nbsp;&nbsp;&lt;/<span className={styles.className}>p</span>&gt;</p>
            <p className={styles.line}>&nbsp;&nbsp;&nbsp;&nbsp;&lt;<span className={styles.className}>p</span>&gt;</p>
              <p className={styles.line}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Mobile Dev Certification - MTECH</p>
            <p className={styles.line}>&nbsp;&nbsp;&nbsp;&nbsp;&lt;/<span className={styles.className}>p</span>&gt;</p>
            <p className={styles.line}>&nbsp;&nbsp;&nbsp;&nbsp;&lt;<span className={styles.className}>p</span>&gt;</p>
              <p className={styles.line}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;JustBuild AI Agents Hackathon - 2nd Place</p>
            <p className={styles.line}>&nbsp;&nbsp;&nbsp;&nbsp;&lt;/<span className={styles.className}>p</span>&gt;</p>
            <p className={styles.line}>&nbsp;&nbsp;&nbsp;&nbsp;&lt;<span className={styles.className}>p</span>&gt;</p>
              <p className={styles.line}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Weber State Hackathon - 2nd Place</p>
            <p className={styles.line}>&nbsp;&nbsp;&nbsp;&nbsp;&lt;/<span className={styles.className}>p</span>&gt;</p>
            <p className={styles.line}>&nbsp;&nbsp;&nbsp;&nbsp;&lt;<span className={styles.className}>p</span>&gt;</p>
              <p className={styles.line}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Chosen as Time magazine's Person of the Year 2006</p>
            <p className={styles.line}>&nbsp;&nbsp;&nbsp;&nbsp;&lt;/<span className={styles.className}>p</span>&gt;</p>
          <p className={styles.line}>&nbsp;&nbsp;&lt;/<span className={styles.className}>section</span>&gt;</p>
        
        <p className={styles.line}>&lt;/<span className={styles.className}>main</span>&gt;</p>




      </div>




      </div>
      <div className={styles.bgwhite}>
        

        <main className={styles.wrapper}>
          <section>
            <h2>Who I Am</h2>
            <p>
              Hi, I'm Josh Gimenes, a passionate computer science student in northern Utah.
            </p>

            <p>
            I'm passionate about web and mobile development and enjoy solving challenging problems by coming up with creative and efficient coding solutions.
            </p>
          </section>

          <br></br>

          <section>
            <h2>Work</h2>
            <p>
              I'm currently a contractor at Stryker, where I specialize in the voice command and NLP module for a team-developed surgical application, enabling hands-free medical equipment control and enhancing surgeon efficiency in the OR.
            </p>
            <p>
              I have worked for several other companies, building systems such as multiplayer games, mobile applications, and backend systems.
            </p>
          </section>

          <br></br>

          <section>
            <h2>Achievements</h2>
            <p>
              3.96 GPA | B.S. Computer Science - Utah Valley University
            </p>
            <p>
              Mobile Dev Certification - MTECH
            </p>
            <p>
              JustBuild AI Agents Hackathon - 2nd Place
            </p>
            <p>
              Weber State Hackathon - 2nd Place
            </p>
            <p>
              Chosen as Time magazine's Person of the Year 2006
            </p>
          </section>
        </main>

      </div>
    </div>
  );
};

export async function getStaticProps() {
  return {
    props: { title: 'About' },
  };
}

export default AboutPage;
