import React from 'react';
import { Darkmode } from '../hooks/DarkMode';

const Nav = () => {
  const [darkMode, setDarkMode] = Darkmode(false);
  const toggleMode = e => {
    e.preventDefault();
    setDarkMode(!darkMode);
  };
  return (
    <nav className="navbar">
      <h1>Players</h1>
      <div className="dark-mode__toggle">
        <div
          onClick={toggleMode}
          className={darkMode ? 'toggle toggled' : 'toggle'}
        
        />
      </div>
    </nav>
  );
};

export default Nav;
