import { createContext, useContext, useState, useCallback } from 'react';

const ThemeContext = createContext();

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
};

export const ThemeProvider = ({ children }) => {
  const [isTransitioning, setIsTransitioning] = useState(false);

  const setTheme = useCallback((theme) => {
    if (isTransitioning) return;

    setIsTransitioning(true);

    // Add transition class to enable smooth color transitions
    document.documentElement.classList.add('theme-transitioning');

    // Apply the theme
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('theme', theme);

    // Remove transition class after animation completes
    setTimeout(() => {
      document.documentElement.classList.remove('theme-transitioning');
      setIsTransitioning(false);
    }, 400);
  }, [isTransitioning]);

  const getCurrentTheme = useCallback(() => {
    if (typeof window === 'undefined') return 'github-dark';
    return localStorage.getItem('theme') || 'github-dark';
  }, []);

  return (
    <ThemeContext.Provider value={{ setTheme, isTransitioning, getCurrentTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export default ThemeContext;
