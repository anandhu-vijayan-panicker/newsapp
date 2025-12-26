import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { toggleTheme } from '../../../store/themeSlice';
import { RootState } from '../../../store/store';
import '../../../styles/navbar.css';

const ThemeToggle: React.FC = () => {
  const dispatch = useDispatch();
  const theme = useSelector((state: RootState) => state.theme.mode);

  return (
    <button 
      className="theme-toggle"
      onClick={() => dispatch(toggleTheme())}
      aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
    >
      <div className={`toggle-slider ${theme}`}>
        <span className="icon">{theme === 'dark' ? '🌙' : '☀️'}</span>
      </div>
      <span className="toggle-label">
        {theme === 'dark' ? 'Dark' : 'Light'}
      </span>
    </button>
  );
};

export default ThemeToggle;