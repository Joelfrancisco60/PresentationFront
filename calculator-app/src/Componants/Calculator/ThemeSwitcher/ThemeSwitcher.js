import React from "react";
import "./Styles.scss";

const ThemeSwitcher = ({ theme, onThemeChange }) => {
  return (
    <div className="theme-switcher">
      <button onClick={() => onThemeChange(1)} className={theme === 1 ? "active" : ""}>
        Theme 1
      </button>
      <button onClick={() => onThemeChange(2)} className={theme === 2 ? "active" : ""}>
        Theme 2
      </button>
      <button onClick={() => onThemeChange(3)} className={theme === 3 ? "active" : ""}>
        Theme 3
      </button>
    </div>
  );
};

export default ThemeSwitcher;
