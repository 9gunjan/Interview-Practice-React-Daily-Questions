import React, { useState } from "react";

const DarkMode = () => {
  const [isDark, setIsDark] = useState(false);
  //true=dark hai
  //false = dark nahi hai

  const toggleMode = () => {
    setIsDark(!isDark);
  };

  return (
    // Corrected className to properly evaluate the ternary
    <div className={`app-container ${isDark ? "dark" : "light"}`}>
      <h1>Dark Mode Toggle</h1>
      <button
        className={`toggle ${isDark ? "active" : ""} `}
        onClick={toggleMode}
      >
        {/* The span should be the clickable element for the circle */}
        <span className={`circle ${isDark ? "circle-right" : ""}`}></span>
      </button>
    </div>
  );
};

export default DarkMode;