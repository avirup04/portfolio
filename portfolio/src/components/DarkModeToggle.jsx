import React from 'react';
import { FaSun, FaMoon } from 'react-icons/fa6';

const DarkModeToggle = ({ isDark, setIsDark }) => {
  return (
    <button
      onClick={() => setIsDark(!isDark)}
      // Removed fixed positioning so Layout.jsx can control where it sits!
      className="flex items-center justify-center w-10 h-10 rounded-full bg-paper/50 backdrop-blur-md border border-accent/30 text-ink hover:scale-110 transition-all duration-300 shadow-sm focus:outline-none cursor-pointer"
    >
      {isDark ? <FaSun className="text-amber-400 text-lg" /> : <FaMoon className="text-lg" />}
    </button>
  );
};

export default DarkModeToggle;