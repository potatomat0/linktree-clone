import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMoon, faSun } from '@fortawesome/free-regular-svg-icons';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import logo from '../assets/logo.jpg';

const Header = () => {
  const [darkMode, setDarkMode] = useState(false);
  const [language, setLanguage] = useState('en');

  const handleDarkModeToggle = () => {
    setDarkMode(!darkMode);
  };

  const handleLanguageToggle = () => {
    setLanguage(language === 'en' ? 'vn' : 'en');
  };

  return (
    <header className="flex flex-col items-center justify-center p-4">
      <div className="w-40 h-40 rounded-full bg-gray-300 flex items-center justify-center">
        <img className="rounded-full" src={logo} alt="Logo" />
      </div>
    <p className="flex my-4"> Tôi chỉ là một con mọt tiêu thụ nội dung thôi aaaa </p>
      <div className="flex mt-8 space-x-4">
        <button
          className="p-2 rounded-full hover:bg-gray-200"
          onClick={handleDarkModeToggle}
        >
          <FontAwesomeIcon icon={darkMode ? faSun : faMoon} size="lg" />
        </button>
        <button
          className="p-2 rounded-full hover:bg-gray-200"
          onClick={handleLanguageToggle}
        >
          {language === 'en' ? 'VN' : 'EN'}
        </button>
        <a
          href="https://github.com/potatomat0/linktree-clone"
          target="_blank"
          rel="noopener noreferrer"
          className="p-2 rounded-full hover:bg-gray-200"
        >
          <FontAwesomeIcon icon={faGithub} size="lg" />
        </a>
      </div>
    </header>
  );
};

export default Header;