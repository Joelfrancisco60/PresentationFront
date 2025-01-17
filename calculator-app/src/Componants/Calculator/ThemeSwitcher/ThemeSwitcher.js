import React from "react";

const ThemeSwitcher = ({ onThemeChange }) => {
  return (
    <div className="theme-switcher">
      <div className="theme-switcher-container">
        <span className="theme-switcher-name">THEME</span>
        <button onClick={() => onThemeChange(1)} className="theme-switcher-button">
          1
        </button>
        <button onClick={() => onThemeChange(2)} className="theme-switcher-button">
          2
        </button>
        <button onClick={() => onThemeChange(3)} className="theme-switcher-button">
          3
        </button>
      </div>
    </div>
  );
};

export default ThemeSwitcher;
