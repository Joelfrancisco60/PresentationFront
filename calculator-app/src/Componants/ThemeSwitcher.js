import React from 'react';

const ThemeSwitcher = ({ theme, onThemeChange }) => {
  return (
    <div className="theme-switcher">
      <span>Theme</span>
      <div className="theme-buttons">
        {[1, 2, 3].map((t) => (
          <button
            key={t}
            className={t === theme ? 'active' : ''}
            onClick={() => onThemeChange(t)}
          >
            {t}
          </button>
        ))}
      </div>
    </div>
  );
};

export default ThemeSwitcher;
