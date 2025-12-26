import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { toggleLanguage } from '../../../store/languageSlice';
import { RootState } from '../../../store/store';
import '../../../styles/navbar.css';

const LanguageToggle: React.FC = () => {
  const dispatch = useDispatch();
  const language = useSelector((state: RootState) => state.language.current);

  return (
    <button 
      className="language-toggle"
      onClick={() => dispatch(toggleLanguage())}
      aria-label={`Switch to ${language === 'en' ? 'Arabic' : 'English'}`}
    >
      <span className="language-text">
        {language === 'en' ? 'EN' : 'AR'}
      </span>
    </button>
  );
};

export default LanguageToggle;