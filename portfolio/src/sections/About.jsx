import React from 'react';
import { motion } from 'framer-motion';

const About = ({ onViewportEnter }) => {
  return (
    <motion.section 
      onViewportEnter={onViewportEnter}
      viewport={{ amount: 0.5 }}
      className="min-h-screen flex items-center justify-center px-8"
    >
      <div className="max-w-7xl w-full grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        
        {/* Left Column: The Hooky, Soft Card */}
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          // Soft styling: slight blur, very faint border, delicate shadow
          className="bg-white/40 backdrop-blur-md border border-[var(--color-accent)]/20 p-10 rounded-3xl shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:-translate-y-2 transition-transform duration-500"
        >
          <h2 className="text-4xl font-bold mb-6 text-[var(--color-ink)]">
            Bridging Code & <span className="text-[var(--color-accent)] font-serif italic">Biology</span>
          </h2>
          
          <div className="space-y-4 text-lg leading-relaxed text-[var(--color-ink)]/80">
            <p>
              I am an undergraduate student in Life Sciences at Ramakrishna Mission Residential College, passionate about unlocking biological mysteries through computational power. 
            </p>
            <p>
              My focus lies heavily in computational biology. Whether it is building automated web applications to quantify wet-lab data, writing Python scripts to measure cells, or aiming for advanced research in the field, I thrive at the intersection of complex algorithms and living systems.
            </p>
            <p>
              When I am not coding or in the lab, I am likely designing UI/UX layouts, editing videos, or exploring deep learning architectures.
            </p>
          </div>
        </motion.div>

        {/* Empty placeholder for the right image */}
        <div className="hidden md:block"></div>

      </div>
    </motion.section>
  );
};

export default About;