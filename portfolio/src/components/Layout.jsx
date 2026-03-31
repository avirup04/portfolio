import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import BackgroundParticles from './BackgroundParticles';
import DarkModeToggle from './DarkModeToggle';
import logo from '../assets/icon.png'; 

// 1. UPDATED LINKS WITH DROPDOWN STRUCTURE
const navLinks = [
  { name: 'Home', href: '#hero' },
  { name: 'About', href: '#about' },
  { 
    name: 'Research & Projects', 
    href: '#projects',
    dropdown: [
      { name: 'LabAnalyzer', href: '#menu1' },
      { name: 'Attendance PWA', href: '#menu2' },
      { name: 'Cell Metrics', href: '#menu3' },
    ]
  },
  { name: 'Publications', href: '#publications' },
  { name: 'Contact', href: '#contact' },
];

const Layout = ({ children, isDark, setIsDark }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [mobileDropdownOpen, setMobileDropdownOpen] = useState(false); // Controls mobile sub-menu
  const currentYear = new Date().getFullYear();

  return (
    <div className="text-ink font-sans relative transition-colors duration-500">
      
      <BackgroundParticles />

      {/* --- ACTION ZONE (Top Right) --- */}
      {/* Dark Mode Toggle - Now visible on mobile (positioned left of hamburger) and desktop */}
      <div className="fixed top-7 right-20 md:top-8 md:right-8 z-50 flex items-center">
        <DarkModeToggle isDark={isDark} setIsDark={setIsDark} />
      </div>

      {/* --- DESKTOP NAVBAR --- */}
      <nav className="fixed top-8 right-24 z-50 hidden md:block">
        <ul className="flex items-center gap-8">
          {navLinks.map((link) => (
            <li key={link.name} className="relative group">
              <a 
                href={link.href}
                className="flex items-center gap-1 text-[11px] font-mono uppercase tracking-[0.3em] text-ink opacity-60 hover:opacity-100 hover:text-accent transition-all duration-300 py-2"
              >
                {link.name}
                {/* Dropdown Arrow Indicator */}
                {link.dropdown && (
                  <svg className="w-3 h-3 opacity-70 group-hover:rotate-180 transition-transform duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                )}
              </a>

              {/* Desktop Dropdown Menu */}
              {link.dropdown && (
                <div className="absolute top-full left-0 mt-0 pt-2 hidden group-hover:block w-48">
                  <div className="bg-paper border border-accent/20 shadow-xl rounded-lg overflow-hidden flex flex-col p-2 backdrop-blur-xl">
                    {link.dropdown.map((subItem) => (
                      <a 
                        key={subItem.name} 
                        href={subItem.href}
                        className="text-[10px] font-mono uppercase tracking-widest text-ink opacity-70 hover:opacity-100 hover:text-accent hover:bg-ink/5 px-3 py-2 rounded transition-all"
                      >
                        {subItem.name}
                      </a>
                    ))}
                  </div>
                </div>
              )}
            </li>
          ))}
        </ul>
      </nav>

      {/* --- MOBILE HAMBURGER BUTTON --- */}
      <button 
        onClick={() => setIsMenuOpen(!isMenuOpen)}
        className="fixed top-7 right-6 z-60 md:hidden flex flex-col justify-center items-center w-10 h-10 gap-1.5 focus:outline-none bg-paper/80 backdrop-blur-md rounded-full border border-accent/20 shadow-sm"
      >
        <motion.span animate={isMenuOpen ? { rotate: 45, y: 8 } : { rotate: 0, y: 0 }} className="w-5 h-[1.2px] bg-ink" />
        <motion.span animate={isMenuOpen ? { opacity: 0 } : { opacity: 1 }} className="w-5 h-[1.2px] bg-ink" />
        <motion.span animate={isMenuOpen ? { rotate: -45, y: -8 } : { rotate: 0, y: 0 }} className="w-5 h-[1.2px] bg-ink" />
      </button>

      {/* --- MOBILE OVERLAY MENU --- */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed inset-0 z-55 bg-paper/95 backdrop-blur-2xl flex flex-col items-center justify-center md:hidden overflow-y-auto pt-20 pb-10"
          >
            <ul className="flex flex-col items-center gap-8 w-full px-6">
              {navLinks.map((link, i) => (
                <motion.li 
                  key={link.name}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0, transition: { delay: i * 0.1 } }}
                  className="flex flex-col items-center w-full"
                >
                  {link.dropdown ? (
                    // Mobile Dropdown Trigger
                    <div className="flex flex-col items-center w-full">
                      <button 
                        onClick={() => setMobileDropdownOpen(!mobileDropdownOpen)}
                        className="flex items-center gap-2 text-lg xs:text-xl font-mono uppercase tracking-[0.2em] xs:tracking-[0.3em] text-ink text-center"
                      >
                        {link.name}
                        <svg className={`w-4 h-4 transition-transform duration-300 ${mobileDropdownOpen ? 'rotate-180 text-accent' : ''}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                        </svg>
                      </button>
                      
                      {/* Mobile Dropdown Items */}
                      <AnimatePresence>
                        {mobileDropdownOpen && (
                          <motion.div 
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: 'auto', opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            className="flex flex-col items-center gap-4 mt-4 overflow-hidden"
                          >
                            {link.dropdown.map((subItem) => (
                              <a 
                                key={subItem.name} 
                                href={subItem.href}
                                onClick={() => setIsMenuOpen(false)}
                                className="text-sm font-mono uppercase tracking-widest text-accent opacity-80"
                              >
                                ↳ {subItem.name}
                              </a>
                            ))}
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  ) : (
                    // Standard Mobile Link
                    <a 
                      href={link.href}
                      onClick={() => setIsMenuOpen(false)}
                      // Fixed font sizes and tracking so it doesn't break
                      className="text-lg xs:text-xl font-mono uppercase tracking-[0.2em] xs:tracking-[0.3em] text-ink text-center"
                    >
                      {link.name}
                    </a>
                  )}
                </motion.li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>

      {/* --- PAGE CONTENT --- */}
      <main className="relative z-10 w-full overflow-hidden">
        {children}
      </main>

      {/* --- INTEGRATED FOOTER --- */}
      <footer className="w-full py-16 px-8 border-t border-accent/10 relative z-10 bg-paper/50 backdrop-blur-sm">
        {/* ... (Your existing footer code stays exactly the same) ... */}
        <div className="max-w-7xl mx-auto flex flex-col items-center">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="flex flex-col items-center mb-8 text-center">
            <img src={logo} alt="Avirup Logo" className="w-16 h-16 mb-4 rounded-full border border-accent/20 shadow-lg" />
            <h3 className="text-xl font-bold tracking-tighter uppercase text-ink">Avirup Mukherjee</h3>
            <p className="text-[10px] tracking-[0.4em] text-accent uppercase mt-1">A Student of Life Sciences</p>
            <p className="max-w-70 md:max-w-none text-sm md:text-lg font-medium text-ink/60 tracking-tight uppercase mt-2">
              Trying to be a Full-Stack Developer
            </p>
          </motion.div>

          <div className="flex items-center gap-2 mb-10 bg-ink/5 px-4 py-1.5 rounded-full border border-accent/10">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
            </span>
            <span className="text-[10px] font-mono uppercase tracking-widest opacity-70">Available for Research Internships</span>
          </div>

          <nav className="flex flex-wrap justify-center gap-x-10 gap-y-4 mb-12 text-xs font-mono uppercase tracking-[0.2em] opacity-60">
            {navLinks.map((link) => (
              <a key={link.name} href={link.href} className="hover:text-accent transition-colors">
                {link.name}
              </a>
            ))}
          </nav>

          <div className="text-center opacity-40">
            <p className="text-[9px] font-mono uppercase tracking-[0.3em]">&copy; {currentYear} Designed & Built by Avirup Mukherjee</p>
            <p className="text-[8px] font-mono mt-2 tracking-widest">React • Framer Motion • Tailwind</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Layout;