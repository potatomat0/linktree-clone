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
      title: "it’s easier to imagine the end of the world than the end of capitalism",
    },
    vn: {
      title: 'Tôi chỉ là con mọt tiêu thụ nội dung aaaaaaaa',
    },
  };

  return (
    <header className="flex relative flex-col items-center justify-center p-9  mt-44 header-container ">
      <div className="w-40 h-40 rounded-full bg-white flex items-center justify-center md:w-32 md:h-32 lg:w-40 lg:h-40">
        <a target="_blank"
          rel="noopener noreferrer"
          href='https://www.facebook.com/hornlessunic0rn/'>
          <img className="rounded-full " src={logo} alt="Logo" />
        </a>
      </div>
      <p className="flex my-6 font-bold md:text-lg lg:text-xl">
        {textContent[language].title}
      </p>
      <div className="flex space-x-4">
        <button
          className="p-2 rounded-full hover:bg-black hover:text-white"
          onClick={handleDarkModeToggle}
        >
          <FontAwesomeIcon icon={darkMode ? faMoon : faSun} size='2x' />
        </button>
        <button
          className="p-2 rounded-full font-bold text-2xl hover:bg-black hover:text-white"
          onClick={handleLanguageToggle}
        >
          {language === 'en' ? 'EN' : 'VI'}
        </button>
        <a
          href="https://github.com/potatomat0/linktree-clone"
          target="_blank"
          rel="noopener noreferrer"
          className="p-2 rounded-full hover:bg-black hover:text-white"
        >
          <FontAwesomeIcon icon={faGithub} size='2x' />
        </a>
      </div>
    </header>
  );
};

export default PageHeader;