import React, { useState, useEffect } from 'react';
import sun from '../../imagenes/sun.svg'
import moon from '../../imagenes/moon.svg'
import './DarkMode.css'



function DarkMode() {
  const [isDarkMode, setIsDarkMode] = useState(() => {
    const mode = JSON.parse(localStorage.getItem('darkMode'));
    return mode !== null ? mode : false;
  });

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
  };

  useEffect(() => {
    const body = document.querySelector('body');
    if (isDarkMode) {
      body.classList.add('dark');
    } else {
      body.classList.remove('dark');
    }
    localStorage.setItem('darkMode', JSON.stringify(isDarkMode));
  }, [isDarkMode]);

  return (
    <div className='div-dark'>
      <button onClick={toggleDarkMode} className='dark-mode'>
        {isDarkMode ? <img src={moon} alt="moon" /> : <img src={sun} alt="sun" />  }
      </button>
    </div>
  );
}

export default DarkMode;
