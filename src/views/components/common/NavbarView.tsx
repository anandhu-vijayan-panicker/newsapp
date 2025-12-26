import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { RootState } from '../../../store/store';
import ThemeToggle from './ThemeToggle';
import LanguageToggle from './LanguageToggle';
import { getTranslation } from '../../../utils/translations';
import '../../../styles/navbar.css';

const NavbarView: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const language = useSelector((state: RootState) => state.language.current);
  const t = getTranslation(language);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <nav className="navbar">
      {/* Logo with Link to home */}
      <Link to="/" className="logo" onClick={closeMenu}>
         {t('appName')}
      </Link>

      {/* Hamburger Menu Button - Mobile Only */}
      <button 
        className={`hamburger-menu ${isMenuOpen ? 'active' : ''}`}
        onClick={toggleMenu}
        aria-label="Toggle menu"
        aria-expanded={isMenuOpen}
      >
        <span className="hamburger-line"></span>
        <span className="hamburger-line"></span>
        <span className="hamburger-line"></span>
      </button>

      {/* Desktop Navigation Links */}
      <ul className="nav-links">
        <li onClick={closeMenu}>{t('home')}</li>
        <li onClick={closeMenu}>{t('latestNews')}</li> 
        <li onClick={closeMenu}>{t('blogs')}</li>
      </ul>

      {/* Desktop Actions */}
      <div className="nav-actions">
        <LanguageToggle />
        <ThemeToggle />
       
      </div>

      {/* Mobile Menu Overlay - Close when clicking overlay */}
      <div className={`mobile-menu-overlay ${isMenuOpen ? 'open' : ''}`} onClick={closeMenu}></div>

      {/* Mobile Menu - Only ONE close button here */}
      <div className={`mobile-menu ${isMenuOpen ? 'open' : ''}`}>
        <div className="mobile-menu-header">
          <Link to="/" className="mobile-logo" onClick={closeMenu}>
             {t('appName')}
          </Link>
          <button className="close-menu" onClick={closeMenu} aria-label="Close menu">
            ×
          </button>
        </div>
        
        <ul className="mobile-nav-links">
          <li onClick={closeMenu}>{t('home')}</li>
         <li onClick={closeMenu}>{t('latestNews')}</li>
          <li onClick={closeMenu}>{t('blogs')}</li>
        </ul>

        <div className="mobile-menu-actions">
          <div className="mobile-toggle-group">
            <LanguageToggle />
            <ThemeToggle />
          </div>
          
        </div>
      </div>
    </nav>
  );
};

export default NavbarView;