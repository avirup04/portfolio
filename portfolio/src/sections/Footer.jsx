import React from 'react';
import { motion } from 'framer-motion';
import logo from '../assets/icon.png'; // Make sure the path is correct

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full py-12 px-8 border-t border-[var(--color-accent)]/10 relative z-10 bg-[var(--color-paper)]/50 backdrop-blur-sm">
      <div className="max-w-7xl mx-auto flex flex-col items-center">
        
        {/* --- LOGO & BRANDING --- */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="flex flex-col items-center mb-8"
        >
          <img 
            src={logo} 
            alt="Avirup Logo" 
            className="w-16 h-16 mb-4 rounded-full border border-[var(--color-accent)]/20 shadow-lg"
          />
          <h3 className="text-xl font-bold tracking-tighter uppercase">
            Avirup Mukherjee
          </h3>
          <p className="text-[10px] tracking-[0.4em] text-[var(--color-accent)] uppercase mt-1">
            A Student of Life Sciences
          </p>
          <p className="text-[10px] tracking-[0.4em] text-[var(--color-accent)] uppercase mt-1">
            Trying to be a Full-Stack Developer
          </p>
        </motion.div>

        {/* --- STATUS INDICATOR --- */}
        <div className="flex items-center gap-2 mb-8 bg-[var(--color-ink)]/5 px-4 py-1.5 rounded-full border border-[var(--color-accent)]/10">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
          </span>
          <span className="text-[11px] font-mono uppercase tracking-widest opacity-70">
            Available for Research Internships
          </span>
        </div>

        {/* --- QUICK LINKS --- */}
        <nav className="flex flex-wrap justify-center gap-x-8 gap-y-4 mb-10 text-sm font-medium opacity-60">
          <a href="#hero" className="hover:text-[var(--color-accent)] transition-colors">Home</a>
          <a href="#about" className="hover:text-[var(--color-accent)] transition-colors">About</a>
          <a href="#projects" className="hover:text-[var(--color-accent)] transition-colors">Research</a>
          <a href="#contact" className="hover:text-[var(--color-accent)] transition-colors">Contact</a>
        </nav>

        {/* --- COPYRIGHT --- */}
        <div className="text-center">
          <p className="text-[10px] font-mono opacity-40 uppercase tracking-widest">
            &copy; {currentYear} Designed & Built by Avirup Mukherjee
          </p>
          <p className="text-[9px] font-mono opacity-30 mt-2">
            React + Framer Motion + Tailwind
          </p>
        </div>

      </div>
    </footer>
  );
};

export default Footer;