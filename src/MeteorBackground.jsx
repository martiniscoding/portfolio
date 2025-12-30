import React, { useEffect, useRef } from 'react';

const MeteorBackground = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    // alpha: false for maximum performance on full-screen backgrounds
    const ctx = canvas.getContext('2d', { alpha: false });
    let animationFrameId;

    const meteors = [];
    const meteorCount = 40; // Increased for a richer "shower" effect

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    class Meteor {
      constructor() {
        this.reset();
      }

      reset() {
        // SCATTERED SPAWN: Starts anywhere from far left to far right
        // We use a negative Y offset so they drop into view naturally
        this.x = Math.random() * (canvas.width + 500) - 250; 
        this.y = (Math.random() * -canvas.height) - 100;
        
        // Speed kept at your requested original pace
        this.speed = Math.random() * 8 + 4;
        this.len = Math.random() * 120 + 80;
        
        // BRIGHTNESS: Higher base opacity (0.5 to 0.9)
        this.opacity = Math.random() * 0.4 + 0.5;
        this.size = Math.random() * 2 + 1; // Thicker lines for more "pop"
      }

      update() {
        this.x += this.speed;
        this.y += this.speed * 0.5; // Maintain the top-left to bottom-right angle

        if (this.y > canvas.height || this.x > canvas.width) {
          this.reset();
        }
      }

      draw() {
        const grad = ctx.createLinearGradient(
          this.x, 
          this.y, 
          this.x - this.len, 
          this.y - (this.len * 0.5)
        );

        // CINEMATIC COLORS: Pure white head fading to a transparent cool-blue tail
        grad.addColorStop(0, `rgba(255, 255, 255, ${this.opacity})`);
        grad.addColorStop(0.1, `rgba(200, 220, 255, ${this.opacity * 0.6})`);
        grad.addColorStop(1, 'rgba(0, 0, 0, 0)');
        
        ctx.strokeStyle = grad;
        ctx.lineWidth = this.size;
        ctx.lineCap = 'round';
        
        ctx.beginPath();
        ctx.moveTo(this.x, this.y);
        ctx.lineTo(this.x - this.len, this.y - (this.len * 0.5));
        ctx.stroke();

        // BRIGHT HEAD GLOW: Adds a small "flare" at the tip of each meteor
        ctx.fillStyle = `rgba(255, 255, 255, ${this.opacity})`;
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fill();
      }
    }

    // Initialize the scattered shower
    for (let i = 0; i < meteorCount; i++) {
      meteors.push(new Meteor());
    }

    const render = () => {
      // Paint background solid black
      ctx.fillStyle = '#000000';
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      meteors.forEach((m) => {
        m.update();
        m.draw();
      });
      animationFrameId = requestAnimationFrame(render);
    };

    window.addEventListener('resize', resize);
    resize();
    render();

    return () => {
      window.removeEventListener('resize', resize);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100vw',
        height: '100vh',
        zIndex:0, 
        pointerEvents: 'none',
      }}
    />
  );
};

export default MeteorBackground;