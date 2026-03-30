import React, { useEffect, useRef } from 'react';

const BackgroundParticles = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    let canvas = canvasRef.current;
    if (!canvas) return;
    let ctx = canvas.getContext('2d');
    let animationFrameId;
    let particles = [];
    
    // Increased count slightly for better visibility
    const particleCount = 80; 
    const mouse = { x: null, y: null, radius: 180 };

    function handleResize() {
      if (!canvas) return;
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      init();
    }

    function handleMouseMove(event) {
      mouse.x = event.clientX;
      mouse.y = event.clientY;
    }

    function init() {
      particles = [];
      for (let i = 0; i < particleCount; i++) {
        particles.push(new Particle());
      }
    }

    class Particle {
      constructor() {
        this.x = Math.random() * window.innerWidth;
        this.y = Math.random() * window.innerHeight;
        // Variety in sizes for a more "physical" feel
        this.size = Math.random() * 3 + 1; 
        this.velocity = {
          x: (Math.random() - 0.5) * 0.5,
          y: (Math.random() - 0.5) * 0.5
        };
        this.density = (Math.random() * 20) + 1;
      }

      draw() {
        const style = getComputedStyle(document.documentElement);
        const color = style.getPropertyValue('--accent').trim() || '#8A9A9D';
        
        // Using a slightly higher opacity (88 in hex) to ensure they are seen
        ctx.fillStyle = color + '88'; 
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fill();
      }

      update() {
        this.x += this.velocity.x;
        this.y += this.velocity.y;

        if (this.x > window.innerWidth) this.x = 0;
        if (this.x < 0) this.x = window.innerWidth;
        if (this.y > window.innerHeight) this.y = 0;
        if (this.y < 0) this.y = window.innerHeight;

        if (mouse.x !== null) {
          let dx = mouse.x - this.x;
          let dy = mouse.y - this.y;
          let distance = Math.sqrt(dx * dx + dy * dy);
          if (distance < mouse.radius) {
            const force = (mouse.radius - distance) / mouse.radius;
            // The "push" effect
            this.x -= (dx / distance) * force * 4;
            this.y -= (dy / distance) * force * 4;
          }
        }
      }
    }

    function animate() {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      for (let i = 0; i < particles.length; i++) {
        particles[i].update();
        particles[i].draw();
      }
      animationFrameId = requestAnimationFrame(animate);
    }

    window.addEventListener('resize', handleResize);
    window.addEventListener('mousemove', handleMouseMove);
    handleResize();
    animate();

    return () => {
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('mousemove', handleMouseMove);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed top-0 left-0 w-full h-full pointer-events-none"
      style={{ zIndex: -1 }} 
    />
  );
};

export default BackgroundParticles;