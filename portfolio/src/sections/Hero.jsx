import React from 'react';
import { motion } from 'framer-motion';
import { TypeAnimation } from 'react-type-animation';

const Hero = ({ onViewportEnter }) => {
  return (
    <motion.section 
      onViewportEnter={onViewportEnter}
      viewport={{ amount: 0.5 }} // Tells App.jsx "I am active" when 50% visible
      className="min-h-screen flex items-center justify-center px-8 pt-20"
    >
      <div className="max-w-7xl w-full grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        
        {/* Empty div acting as a placeholder for the left image */}
        <div className="hidden md:block"></div>

        {/* Right Column: Introduction */}
        <div className="flex flex-col space-y-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
          >
            <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-2">
              Avirup Mukherjee
            </h1>
            <h2 className="text-xl md:text-2xl text-[var(--color-accent)] font-light mb-6">
              A Life Sciences Stud. & trying to be a Full-Stack Developer
            </h2>
          </motion.div>

          <div className="font-mono text-lg md:text-xl h-24">
            <TypeAnimation
              sequence={[
                'I build full-stack React applications.', 1000,
                'I develop Python tools for bio-image analysis.', 1000,
                'I design databases with PHP and MySQL.', 1000,
                'I explore Machine Learning and Mathematical Models.', 1000,
                'I create graphics and edits with the Adobe Suite.', 1000,
              ]}
              wrapper="span" speed={50} repeat={Infinity} cursor={true}
              className="text-[var(--color-ink)]"
            />
          </div>
        </div>

      </div>
    </motion.section>
  );
};

export default Hero;