import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMoon, faSun } from '@fortawesome/free-regular-svg-icons';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import logo from '../assets/logo.jpg';
import './Header.css';

const PageHeader = ({ language, setLanguage }) => {
  const [darkMode, setDarkMode] = useState(false);

  const handleDarkModeToggle = () => {
    setDarkMode(!darkMode);
  };

  const handleLanguageToggle = () => {
    setLanguage(language === 'en' ? 'vn' : 'en');
  };

  useEffect(() => {
    if (darkMode) {
      document.body.classList.add('dark-mode');
    } else {
      document.body.classList.remove('dark-mode');
    }
  }, [darkMode]);

  const textContent = {
    en: {
      title: "I'm literally just a full time media consumer",
    },
    vn: {
      title: 'Tôi chỉ là con mọt tiêu thụ nội dung aaaaaaaa',
    },
  };

  return (
    <header className="flex relative flex-col items-center justify-center p-4 mt-36 header-container ">
    <div className="w-40 h-40 rounded-full bg-gray-300 flex items-center justify-center md:w-32 md:h-32 lg:w-40 lg:h-40">
      <img className="rounded-full" src={logo} alt="Logo" />
    </div>
    <p className="flex my-6 font-bold text-center md:text-lg lg:text-xl"> 
      {textContent[language].title}
    </p>
    <div className="flex space-x-4">
        <button
          className="p-2 rounded-full hover:bg-black hover:text-white"
          onClick={handleDarkModeToggle}
        >
          <FontAwesomeIcon icon={darkMode ? faMoon : faSun} size="lg" />
        </button>
        <button
          className="p-2 rounded-full font-bold hover:bg-black hover:text-white"
          onClick={handleLanguageToggle}
        >
          {language === 'en' ? 'VI' : 'EN'}
        </button>
        <a
          href="https://github.com/potatomat0/linktree-clone"
          target="_blank"
          rel="noopener noreferrer"
          className="p-2 rounded-full hover:bg-black hover:text-white"
        >
          <FontAwesomeIcon icon={faGithub} size="lg" />
        </a>
      </div>
    </header>
  );
};

export default PageHeader;