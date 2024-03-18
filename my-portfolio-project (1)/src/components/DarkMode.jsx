import React from "react";

function DarkMode({ darkMode, toggleDarkMode }) {
  return (
    <div className="dark-mode-toggle">
      <div
        className={`slider ${darkMode ? "on" : "off"}`}
        onClick={toggleDarkMode}
      >
        <div className="slider-knob"></div>
      </div>
    </div>
  );
}

export default DarkMode;
