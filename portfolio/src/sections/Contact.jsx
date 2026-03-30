import React from 'react';
import { motion } from 'framer-motion';
import { 
  FaGithub, 
  FaInstagram, 
  FaEnvelope, 
  FaFacebookF, 
  FaYoutube, 
  FaXTwitter, 
  FaLinkedinIn, 
  FaGlobe 
} from 'react-icons/fa6';

const socialLinks = [
  // UPDATED: Added your real GitHub link
  { id: 1, name: "GitHub", icon: <FaGithub />, url: "https://github.com/avirup04" },
  { id: 2, name: "LinkedIn", icon: <FaLinkedinIn />, url: "https://www.linkedin.com/in/avirup-mukherjee-2b4230381/" }, 
  { id: 3, name: "X", icon: <FaXTwitter />, url: "https://x.com/Voyager_Avirup" },
  { id: 4, name: "Instagram", icon: <FaInstagram />, url: "https://www.instagram.com/okayscintific.guy/" },
  { id: 5, name: "Facebook", icon: <FaFacebookF />, url: "https://www.facebook.com/profile.php?id=100089098132731" },
  { id: 6, name: "YouTube", icon: <FaYoutube />, url: "https://www.youtube.com/@avirupmukherjee7858" },
  { id: 7, name: "Website", icon: <FaGlobe />, url: "https://heyavirup.rf.gd" },
  { id: 8, name: "Mail", icon: <FaEnvelope />, url: "mailto:avirupmukherjee019@gmail.com" },
];

const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.1, delayChildren: 0.3 }
  }
};

const itemVariants = {
  hidden: { opacity: 0, scale: 0.5, y: 20 },
  show: { opacity: 1, scale: 1, y: 0, transition: { type: "spring", stiffness: 300, damping: 20 } }
};

const Contact = () => {
  return (
    <section className="min-h-screen flex flex-col items-center justify-center px-8 relative z-10 pb-20">
      
      <motion.div 
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: true, amount: 0.5 }}
        className="bg-white/80 dark:bg-slate-900/60 backdrop-blur-xl border border-[var(--color-accent)]/30 p-8 md:p-14 rounded-[2.5rem] shadow-xl max-w-2xl w-full text-center mb-12"
      >
        <h2 className="text-5xl md:text-6xl font-bold text-[var(--color-ink)] mb-2">
          Let's <span className="text-[var(--color-accent)] dark:text-blue-300 font-serif italic drop-shadow-sm dark:drop-shadow-[0_0_10px_rgba(147,197,253,0.3)]">Connect</span>
        </h2>
        
        <p className="text-[var(--color-ink)]/60 dark:text-slate-300 text-sm md:text-base font-medium mb-10 tracking-tight">
          Have a project in mind or just want to discuss the future of Bio-CS?
        </p>
        
        {/* --- THE ATM CARD --- */}
        <div className="flex justify-center mb-10">
          <div className="bg-[var(--color-paper)] border border-[var(--color-accent)]/20 p-6 md:p-8 rounded-2xl shadow-inner w-full text-left font-mono relative overflow-hidden group">
            
            {/* The EMV Chip */}
            <div className="absolute top-6 right-6 md:right-8 w-10 h-8 md:w-12 md:h-9 bg-gradient-to-br from-amber-200/40 to-amber-400/20 border border-amber-500/30 rounded-md flex items-center justify-center">
               <div className="grid grid-cols-2 gap-1 w-6 h-4 md:w-8 md:h-5">
                  <div className="border-r border-b border-amber-500/20"></div>
                  <div className="border-b border-amber-500/20"></div>
                  <div className="border-r border-amber-500/20"></div>
                  <div></div>
               </div>
            </div>

            <div className="space-y-6">
              <div>
                <p className="text-[10px] uppercase tracking-[0.3em] text-slate-500 dark:text-blue-300/70 mb-1 font-bold">Holder Name</p>
                <p className="text-base md:text-xl tracking-widest text-[var(--color-ink)] uppercase font-black">
                  Avirup Mukherjee
                </p>
              </div>

              <div>
                <p className="text-[10px] uppercase tracking-[0.3em] text-slate-500 dark:text-blue-300/70 mb-1 font-bold">Contact ID</p>
                {/* Linked Phone Number */}
                <a href="tel:+919064153961" className="text-sm md:text-lg tracking-[0.2em] text-[var(--color-ink)] hover:text-[var(--color-accent)] transition-colors">
                  +91 90641 53961
                </a>
              </div>

              <div>
                <p className="text-[10px] uppercase tracking-[0.3em] text-slate-500 dark:text-blue-300/70 mb-1 font-bold">Network Address</p>
                {/* Linked Email */}
                <a href="mailto:avirupmukherjee019@gmail.com" className="text-[11px] xs:text-xs sm:text-sm md:text-base tracking-wider text-[var(--color-ink)] lowercase whitespace-nowrap overflow-hidden text-ellipsis hover:text-[var(--color-accent)] transition-colors">
                  avirupmukherjee019@gmail.com
                </a>
              </div>
            </div>
          </div>
        </div>
        
        {/* BIG ACTION BUTTON */}
        <a 
          href="mailto:avirupmukherjee019@gmail.com"
          className="inline-block bg-[var(--color-ink)] text-[var(--color-paper)] font-mono tracking-widest px-10 py-4 rounded-full text-sm uppercase hover:bg-slate-700 dark:hover:bg-blue-400 transition-all duration-300 shadow-lg hover:shadow-xl hover:-translate-y-1 transform active:scale-95"
        >
          Initialize Chat
        </a>
      </motion.div>

      {/* Social Icons Row */}
      <motion.div 
        variants={containerVariants}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.8 }}
        className="flex flex-wrap justify-center gap-4 md:gap-6"
      >
        {socialLinks.map((link) => (
          <motion.div key={link.id} variants={itemVariants}>
            <a 
              href={link.url}
              target="_blank" // Opens in new tab
              rel="noopener noreferrer" // Security best practice
              className="w-12 h-12 md:w-14 md:h-14 rounded-full border border-slate-300 dark:border-blue-300/20 flex items-center justify-center text-[var(--color-ink)] text-xl md:text-2xl hover:bg-[var(--color-ink)] hover:text-[var(--color-paper)] transition-all duration-300 shadow-sm hover:shadow-md"
            >
              {link.icon}
            </a>
          </motion.div>
        ))}
      </motion.div>

    </section>
  );
};

export default Contact;