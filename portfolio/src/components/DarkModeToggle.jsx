import React from 'react';
import { FaSun, FaMoon } from 'react-icons/fa6';

const DarkModeToggle = ({ isDark, setIsDark }) => {
  return (
    <button
      onClick={() => setIsDark(!isDark)}
      className="fixed top-6 right-8 z-50 p-3 rounded-full bg-white/20 backdrop-blur-md border border-[var(--color-accent)]/30 text-[var(--color-ink)] hover:scale-110 transition-all duration-300 shadow-lg cursor-pointer"
    >
      {isDark ? <FaSun className="text-amber-400" /> : <FaMoon />}
    </button>
  );
};

export default DarkModeToggle;