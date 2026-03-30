import React from 'react';
import { motion } from 'framer-motion';

const skillList = [
  "PHP", "MySQL", "Python", "React", "HTML/CSS", 
  "Adobe Photoshop", "Adobe Premiere Pro", "LaTeX",
  "Tailwind CSS", "JavaScript", "C", "Excel", "Git & GitHub"
];

const Skills = () => {
  return (
    <section className="min-h-screen flex items-center justify-center px-8 relative z-10">
      <div className="max-w-7xl w-full grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        
        {/* Left Column: The Floating Skills */}
        <div>
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true, amount: 0.5 }}
            className="mb-8 text-center md:text-left"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-[var(--color-ink)] mb-4">
              Raw <span className="text-[var(--color-accent)] font-serif italic">Skills</span>
            </h2>
            <p className="text-lg text-[var(--color-ink)]/70">
              The tools, languages, and software I use to bring ideas to life.
            </p>
          </motion.div>

          <div className="flex flex-wrap gap-4 justify-center md:justify-start">
            {skillList.map((skill, index) => (
              <motion.div
                key={index}
                // This creates the continuous "anti-gravity" float effect
                animate={{ y: [0, -8, 0] }}
                transition={{ 
                  duration: 4, 
                  repeat: Infinity, 
                  ease: "easeInOut",
                  delay: index * 0.2 // Staggers the floating so they don't move identically
                }}
                className="bg-white/50 backdrop-blur-md border border-[var(--color-accent)]/30 px-6 py-3 rounded-full shadow-sm text-[var(--color-ink)] font-mono font-medium tracking-wide hover:bg-[var(--color-ink)] hover:text-[var(--color-paper)] transition-colors duration-300 cursor-default"
              >
                {skill}
              </motion.div>
            ))}
          </div>
        </div>

        {/* Right Column: Empty placeholder for your anti-faded portrait! */}
        <div className="hidden md:block"></div>

      </div>
    </section>
  );
};

export default Skills;