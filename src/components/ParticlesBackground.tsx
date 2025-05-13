
import React, { useEffect, useRef } from 'react';

const ParticlesBackground: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const particles: Particle[] = [];
    const particleCount = Math.min(50, Math.floor(window.innerWidth / 20)); // Adjust for mobile
    const maxSize = 5;
    const minSize = 1;

    // Mouse interaction
    let mouse = {
      x: canvas.width / 2,
      y: canvas.height / 2,
      radius: 100
    };

    window.addEventListener('mousemove', function(e) {
      mouse.x = e.x;
      mouse.y = e.y;
    });

    window.addEventListener('touchmove', function(e) {
      if (e.touches.length > 0) {
        mouse.x = e.touches[0].clientX;
        mouse.y = e.touches[0].clientY;
      }
    });

    window.addEventListener('resize', function() {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      init();
    });

    // Particle class
    class Particle {
      x: number;
      y: number;
      size: number;
      speedX: number;
      speedY: number;
      color: string;

      constructor(x: number, y: number) {
        this.x = x;
        this.y = y;
        this.size = Math.random() * (maxSize - minSize) + minSize;
        this.speedX = Math.random() * 2 - 1;
        this.speedY = Math.random() * 2 - 1;
        
        // Colors from theme
        const colors = [
          'rgba(139, 92, 246, 0.5)',  // Purple
          'rgba(37, 99, 235, 0.5)',   // Blue
          'rgba(245, 158, 11, 0.3)'   // Yellow
        ];
        this.color = colors[Math.floor(Math.random() * colors.length)];
      }

      update() {
        // Move particles
        this.x += this.speedX;
        this.y += this.speedY;
        
        // Boundary collision
        if (this.x < 0 || this.x > canvas.width) this.speedX *= -1;
        if (this.y < 0 || this.y > canvas.height) this.speedY *= -1;

        // Mouse interaction
        const dx = mouse.x - this.x;
        const dy = mouse.y - this.y;
        const distance = Math.sqrt(dx * dx + dy * dy);
        if (distance < mouse.radius) {
          if (mouse.x > this.x && this.x > 0) {
            this.x -= 2;
            this.speedX = -Math.abs(this.speedX);
          }
          if (mouse.x < this.x && this.x < canvas.width) {
            this.x += 2;
            this.speedX = Math.abs(this.speedX);
          }
          if (mouse.y > this.y && this.y > 0) {
            this.y -= 2;
            this.speedY = -Math.abs(this.speedY);
          }
          if (mouse.y < this.y && this.y < canvas.height) {
            this.y += 2;
            this.speedY = Math.abs(this.speedY);
          }
        }
      }

      draw() {
        if (!ctx) return;
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fillStyle = this.color;
        ctx.fill();
      }
    }

    // Initialize particles
    function init() {
      particles.length = 0;
      for (let i = 0; i < particleCount; i++) {
        const x = Math.random() * canvas.width;
        const y = Math.random() * canvas.height;
        particles.push(new Particle(x, y));
      }
    }

    // Animation loop
    function animate() {
      requestAnimationFrame(animate);
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      for (let i = 0; i < particles.length; i++) {
        particles[i].update();
        particles[i].draw();
        
        // Connect particles with lines
        for (let j = i; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const distance = Math.sqrt(dx * dx + dy * dy);
          
          if (distance < 200) {
            ctx.beginPath();
            ctx.strokeStyle = `rgba(255, 255, 255, ${0.2 - distance/1000})`;
            ctx.lineWidth = 0.5;
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.stroke();
          }
        }
      }
    }

    init();
    animate();
    
    return () => {
      window.removeEventListener('mousemove', function(e) {
        mouse.x = e.x;
        mouse.y = e.y;
      });
      
      window.removeEventListener('touchmove', function(e) {
        if (e.touches.length > 0) {
          mouse.x = e.touches[0].clientX;
          mouse.y = e.touches[0].clientY;
        }
      });
      
      window.removeEventListener('resize', function() {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
        init();
      });
    };
  }, []);

  return (
    <canvas 
      ref={canvasRef} 
      className="fixed top-0 left-0 w-full h-full pointer-events-none z-0 opacity-30"
    />
  );
};

export default ParticlesBackground;
