import React, { useState, useEffect } from 'react';
import { motion, useScroll, useTransform, useSpring } from 'framer-motion';
import Hero from './sections/Hero';
import About from './sections/About';
import Projects from './sections/Projects';
import Skills from './sections/Skills';
import Contact from './sections/Contact';
import DarkModeToggle from './components/DarkModeToggle';
import profileImg from './assets/profile.png';
import profileDarkImg from './assets/profile-dark.png';
import BackgroundParticles from './components/BackgroundParticles';
import Footer from './sections/Footer';

function App() {
  const { scrollY } = useScroll();

  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    if (isDark) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [isDark]);

  const scrollCheckpoints = [0, 800, 1200, 1500, 1900, 2600, 3000];
  const rawLeft = useTransform(scrollY, scrollCheckpoints, ["0%", "75%", "50%", "50%", "50%", "70%", "25%"]);
  const rawScale = useTransform(scrollY, scrollCheckpoints, [1.05, 1.4, 1.4, 1.4, 1.1, 1.1, 1.8]);
  const rawOpacity = useTransform(scrollY, scrollCheckpoints, [1, 1, 1, 0, 1, 1, 0]);

  const rawMobileOpacity = useTransform(scrollY, [0, 400], [1, 0.15]);
  const rawMobileY = useTransform(scrollY, [0, 400], ["-20%", "0%"]);

  const springConfig = { stiffness: 40, damping: 20, mass: 0.8 };

  const imageLeft = useSpring(rawLeft, springConfig);
  const imageScale = useSpring(rawScale, springConfig);
  const imageOpacity = useSpring(rawOpacity, springConfig);
  const mobileOpacity = useSpring(rawMobileOpacity, springConfig);
  const mobileY = useSpring(rawMobileY, springConfig);

  return (
    <div className="text-[var(--color-ink)] font-sans relative transition-colors duration-500">

      <BackgroundParticles />

      <DarkModeToggle isDark={isDark} setIsDark={setIsDark} />

      {/* --- DESKTOP STICKY BACKGROUND --- */}
      <div className="hidden md:flex fixed top-0 left-0 w-full h-screen pointer-events-none z-0 items-center justify-center">
        <div className="max-w-7xl w-full h-full relative px-8">
          <motion.div
            style={{
              left: imageLeft,
              scale: imageScale,
              opacity: imageOpacity,
              position: 'absolute',
              top: '50%',
              y: '-50%',
              transformOrigin: 'center center'
            }}
            className="w-[450px] lg:w-[500px]"
          >
            {!isDark ? (
              <img
                key="light-img"
                src={profileImg}
                alt="Avirup Light"
                className="w-full h-auto object-cover mix-blend-multiply mask-horizontal-fade"
              />
            ) : (
              <img
                key="dark-img"
                src={profileDarkImg}
                alt="Avirup Dark"
                className="w-full h-auto object-cover mix-blend-screen mask-horizontal-fade"
              />
            )}
          </motion.div>
        </div>
      </div>

      {/* --- MOBILE WATERMARK LAYER --- */}
      <div className="flex md:hidden fixed top-0 left-0 w-full h-screen pointer-events-none z-0 items-center justify-center overflow-hidden">
        <motion.div
          style={{ opacity: mobileOpacity, y: mobileY }}
          className="w-[300px]"
        >
          {!isDark ? (
            <img src={profileImg} className="w-full h-auto object-cover mix-blend-multiply mask-fade-bottom" />
          ) : (
            <img src={profileDarkImg} className="w-full h-auto object-cover mix-blend-screen mask-fade-bottom" />
          )}
        </motion.div>
      </div>

      {/* --- CONTENT LAYER (SINGLE BLOCK) --- */}
      <div className="relative z-10 w-full overflow-hidden pt-40 md:pt-0">
        <Hero />
        <About />
        <Projects />
        <Skills />
        <Contact />
        <Footer />
      </div>

    </div>
  );
}

export default App;