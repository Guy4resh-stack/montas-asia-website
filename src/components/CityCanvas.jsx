import { useEffect, useRef } from 'react';

export default function CityCanvas() {
  const canvasRef = useRef(null);
  const dotsRef = useRef([]);
  const frameRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');

    function resize() {
      canvas.width = canvas.parentElement.offsetWidth;
      canvas.height = canvas.parentElement.offsetHeight;
      initDots();
    }

    function initDots() {
      dotsRef.current = [];
      const cols = Math.floor(canvas.width / 22);
      const rows = Math.floor(canvas.height / 22);
      const cx = canvas.width / 2, cy = canvas.height / 2;
      const maxD = Math.sqrt(cx * cx + cy * cy);
      for (let i = 0; i < cols; i++) {
        for (let j = 0; j < rows; j++) {
          const dx = (i / cols - 0.5) * canvas.width;
          const dy = (j / rows - 0.5) * canvas.height;
          const dist = Math.sqrt(dx * dx + dy * dy);
          dotsRef.current.push({
            x: i * 22 + 11, y: j * 22 + 11,
            brightness: Math.max(0.02, 0.35 - (dist / maxD) * 0.3),
            pulse: Math.random() * Math.PI * 2,
            pulseSpeed: 0.008 + Math.random() * 0.012,
            size: 0.8 + Math.random() * 1.2,
          });
        }
      }
    }

    function draw() {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      dotsRef.current.forEach(d => {
        d.pulse += d.pulseSpeed;
        const f = d.brightness + Math.sin(d.pulse) * 0.08;
        const a = Math.max(0, Math.min(1, f));
        ctx.fillStyle = f > 0.28 ? `rgba(127,186,154,${a})` : `rgba(74,154,102,${a * 0.7})`;
        ctx.beginPath();
        ctx.arc(d.x, d.y, d.size, 0, Math.PI * 2);
        ctx.fill();
      });
      frameRef.current = requestAnimationFrame(draw);
    }

    resize();
    draw();
    window.addEventListener('resize', resize);
    return () => {
      window.removeEventListener('resize', resize);
      cancelAnimationFrame(frameRef.current);
    };
  }, []);

  return <canvas ref={canvasRef} style={{ width: '100%', height: '100%', display: 'block' }} />;
}
