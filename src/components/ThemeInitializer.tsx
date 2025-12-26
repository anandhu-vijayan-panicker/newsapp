// components/ThemeInitializer.tsx 
import { useEffect, useState } from 'react';

const ThemeInitializer: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [isInitialized, setIsInitialized] = useState(false);

  useEffect(() => {
    // theme from localStorage
    const initializeTheme = () => {
      const savedTheme = localStorage.getItem('theme');
      let theme: 'light' | 'dark' = 'light';
      
      if (savedTheme === 'dark' || savedTheme === 'light') {
        theme = savedTheme;
      } else {
        const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
        theme = prefersDark ? 'dark' : 'light';
      }
      
      // ApplyToDOM withoutTransition
      const root = document.documentElement;
      root.classList.remove('light', 'dark');
      root.classList.add(theme);
      
      setIsInitialized(true);
    };

    initializeTheme();
  }, []);

  // Show nothing until theme is initialized.. . 
  if (!isInitialized) {
    return (
      <div style={{
        background: '#f9fafb',
        minHeight: '100vh',
        opacity: 0,
        transition: 'none'
      }} />
    );
  }

  return <>{children}</>;
};

export default ThemeInitializer;