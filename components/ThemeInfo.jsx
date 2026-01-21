import Image from 'next/image';
import { useTheme } from '../context/ThemeContext';
import styles from '../styles/ThemeInfo.module.css';

const ThemeInfo = ({ icon, name, publisher, theme }) => {
  const { setTheme, isTransitioning } = useTheme();

  const handleThemeChange = (e) => {
    if (isTransitioning) return;
    setTheme(theme, e);
  };

  return (
    <div className={styles.container}>
      <Image src={icon} alt={name} height={100} width={100} />
      <div className={styles.info}>
        <div>
          <h3>{name}</h3>
          <h5>{publisher}</h5>
        </div>
        <button
          onClick={handleThemeChange}
          disabled={isTransitioning}
          className={`${styles.themeButton} theme-button-glow`}
        >
          {isTransitioning ? 'Applying...' : 'Set Color Theme'}
        </button>
      </div>
    </div>
  );
};

export default ThemeInfo;
