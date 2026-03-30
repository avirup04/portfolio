import React from 'react';
import { motion } from 'framer-motion';

// Your project data. You can easily add image URLs or links here later!
const projects = [
  {
    id: 1,
    title: "LabAnalyzer",
    description: "A full-stack web application designed to automate wet-lab data quantification for life science departments.",
    tech: ["React", "PHP", "MySQL", "Tailwind"],
  },
  {
    id: 2,
    title: "Bio-Image Cell Measurement Tool",
    description: "A Python-based utility utilizing OpenCV to accurately measure the length and circumference of cells directly from smartphone images.",
    tech: ["Python", "OpenCV", "Algorithms"],
  },
  {
    id: 3,
    title: "RKMRC Attendance PWA",
    description: "A progressive web app built for students to seamlessly track their daily attendance and academic standing.",
    tech: ["React", "PHP", "MySQL", "PWA"],
  },
  {
    id: 4,
    title: "Computer Centre Portal",
    description: "A modern, responsive front-end interface built to streamline information access for a technical computer centre.",
    tech: ["React", "CSS", "UI/UX"],
  }
];

// Animation setup for a smooth "staggered" entrance
const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.2 } // Cards appear one after another
  }
};

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
};

const Projects = () => {
  return (
    <section className="min-h-screen py-24 px-8 flex flex-col justify-center items-center relative z-10">
      <div className="max-w-7xl w-full">
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true, amount: 0.3 }}
          className="mb-16 text-center md:text-left"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-[var(--color-ink)] mb-4">
            Featured <span className="text-[var(--color-accent)] font-serif italic">Work</span>
          </h2>
          <div className="w-20 h-1 bg-[var(--color-accent)]/50 mx-auto md:mx-0 rounded-full"></div>
        </motion.div>

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.1 }}
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
        >
          {projects.map((project) => (
            <motion.div 
              key={project.id}
              variants={cardVariants}
              whileHover={{ y: -10 }} // The "hooky" lift animation
              className="bg-white/60 backdrop-blur-sm border border-[var(--color-accent)]/20 p-8 rounded-2xl shadow-sm hover:shadow-[0_20px_40px_rgba(0,0,0,0.08)] transition-all duration-300 flex flex-col h-full"
            >
              {/* Optional: Add an <img src={project.image} /> here later */}
              <h3 className="text-2xl font-bold text-[var(--color-ink)] mb-3">
                {project.title}
              </h3>
              <p className="text-[var(--color-ink)]/70 mb-6 flex-grow leading-relaxed">
                {project.description}
              </p>
              
              <div className="flex flex-wrap gap-2 mt-auto">
                {project.tech.map((tag, index) => (
                  <span 
                    key={index} 
                    className="px-3 py-1 text-xs font-mono font-medium tracking-wide bg-[var(--color-ink)] text-[var(--color-paper)] rounded-full"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  );
};

export default Projects;