import { createContext, useContext, useState, useCallback, useRef } from 'react';

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
  const [rippleStyle, setRippleStyle] = useState({});
  const [pendingTheme, setPendingTheme] = useState(null);
  const rippleRef = useRef(null);

  const setTheme = useCallback((theme, event) => {
    if (isTransitioning) return;

    // Get click position for ripple origin
    let x, y;
    if (event) {
      const rect = event.currentTarget.getBoundingClientRect();
      x = rect.left + rect.width / 2;
      y = rect.top + rect.height / 2;
    } else {
      x = window.innerWidth / 2;
      y = window.innerHeight / 2;
    }

    // Calculate the maximum distance to any corner
    const maxX = Math.max(x, window.innerWidth - x);
    const maxY = Math.max(y, window.innerHeight - y);
    const maxRadius = Math.sqrt(maxX * maxX + maxY * maxY) * 1.1;

    // Store the pending theme
    setPendingTheme(theme);
    setIsTransitioning(true);

    // Set initial ripple position
    setRippleStyle({
      left: x,
      top: y,
      width: 0,
      height: 0,
      opacity: 1,
    });

    // Start the ripple expansion
    requestAnimationFrame(() => {
      setRippleStyle({
        left: x,
        top: y,
        width: maxRadius * 2,
        height: maxRadius * 2,
        opacity: 1,
      });
    });

    // Apply the theme mid-transition
    setTimeout(() => {
      document.documentElement.setAttribute('data-theme', theme);
      localStorage.setItem('theme', theme);
    }, 400);

    // Clean up after animation
    setTimeout(() => {
      setRippleStyle({
        left: x,
        top: y,
        width: maxRadius * 2,
        height: maxRadius * 2,
        opacity: 0,
      });
    }, 500);

    setTimeout(() => {
      setIsTransitioning(false);
      setPendingTheme(null);
      setRippleStyle({});
    }, 800);
  }, [isTransitioning]);

  const getCurrentTheme = useCallback(() => {
    if (typeof window === 'undefined') return 'github-dark';
    return localStorage.getItem('theme') || 'github-dark';
  }, []);

  return (
    <ThemeContext.Provider value={{ setTheme, isTransitioning, getCurrentTheme }}>
      {children}
      {isTransitioning && (
        <div
          className="theme-ripple-overlay"
          style={{
            '--ripple-x': `${rippleStyle.left}px`,
            '--ripple-y': `${rippleStyle.top}px`,
            '--ripple-size': `${rippleStyle.width || 0}px`,
            '--ripple-opacity': rippleStyle.opacity || 0,
          }}
          data-theme={pendingTheme}
        >
          <div className="theme-ripple" />
        </div>
      )}
    </ThemeContext.Provider>
  );
};

export default ThemeContext;
