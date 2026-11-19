import { useEffect, useRef } from 'react';

/** Image pixels converge into a portrait and gently scatter near the pointer. */
export default function ParticlePortrait({ className = '', label = 'Portrait particles forming Gurpreet Ram' }) {
  const canvasRef = useRef(null);
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d', { alpha: true });
    if (!ctx) return;
    let width = 0, height = 0, raf = 0, particles = [], pointer = { x: -1000, y: -1000 }, dpr = 1;
    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const portrait = new Image(); portrait.src = '/images/gurpreet-portrait.jpg';
    const resize = () => {
      const rect = canvas.getBoundingClientRect();
      dpr = Math.min(window.devicePixelRatio || 1, 1.7);
      width = Math.max(1, rect.width); height = Math.max(1, rect.height);
      canvas.width = Math.round(width * dpr); canvas.height = Math.round(height * dpr);
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      if (portrait.complete && portrait.naturalWidth) createParticles();
    };
    const createParticles = () => {
      const sampling = document.createElement('canvas');
      const sw = 180, sh = Math.round(sw * portrait.naturalHeight / portrait.naturalWidth);
      sampling.width = sw; sampling.height = sh;
      const sctx = sampling.getContext('2d', { willReadFrequently: true });
      if (!sctx) return;
      sctx.drawImage(portrait, 0, 0, sw, sh);
      const data = sctx.getImageData(0, 0, sw, sh).data;
      const scale = Math.min(width * 0.93 / sw, height * 0.93 / sh);
      const ox = (width - sw * scale) / 2, oy = (height - sh * scale) / 2;
      particles = [];
      const step = width < 480 ? 3 : 2;
      for (let y = 0; y < sh; y += step) for (let x = 0; x < sw; x += step) {
        const k = (y * sw + x) * 4, a = data[k + 3];
        if (a < 80) continue;
        const brightness = (data[k] + data[k + 1] + data[k + 2]) / 3;
        if (brightness < 8 && Math.random() > 0.65) continue;
        const tx = ox + x * scale, ty = oy + y * scale;
        particles.push({ x: reduced ? tx : Math.random() * width, y: reduced ? ty : Math.random() * height, tx, ty, vx: 0, vy: 0, color: `rgb(${data[k]},${data[k + 1]},${data[k + 2]})`, size: brightness > 210 ? 1.45 : 1.2, delay: Math.random() * 40 });
      }
      if (reduced) { cancelAnimationFrame(raf); draw(); }
    };
    const draw = () => {
      ctx.clearRect(0, 0, width, height);
      for (const p of particles) {
        p.delay = Math.max(0, p.delay - 1);
        if (!reduced && p.delay > 0) continue;
        const dx = p.tx - p.x, dy = p.ty - p.y;
        p.vx += dx * (reduced ? 0.09 : 0.045); p.vy += dy * (reduced ? 0.09 : 0.045);
        const px = p.x - pointer.x, py = p.y - pointer.y, dist = Math.hypot(px, py);
        if (!reduced && dist < 70) { const force = (70 - dist) / 70; p.vx += (px / (dist || 1)) * force * 2.4; p.vy += (py / (dist || 1)) * force * 2.4; }
        p.vx *= 0.82; p.vy *= 0.82; p.x += p.vx; p.y += p.vy;
        ctx.fillStyle = p.color; ctx.fillRect(p.x, p.y, p.size, p.size);
      }
      if (!reduced) raf = requestAnimationFrame(draw);
    };
    const onMove = (event) => { const r = canvas.getBoundingClientRect(); pointer = { x: event.clientX - r.left, y: event.clientY - r.top }; };
    const onLeave = () => { pointer = { x: -1000, y: -1000 }; };
    portrait.onload = () => createParticles();
    if (portrait.complete && portrait.naturalWidth) createParticles();
    resize(); draw();
    canvas.addEventListener('pointermove', onMove); canvas.addEventListener('pointerleave', onLeave);
    const observer = new ResizeObserver(resize); observer.observe(canvas);
    return () => { cancelAnimationFrame(raf); observer.disconnect(); canvas.removeEventListener('pointermove', onMove); canvas.removeEventListener('pointerleave', onLeave); portrait.onload = null; };
  }, []);
  return <canvas ref={canvasRef} className={`particle-portrait ${className}`} role="img" aria-label={label}/>;
}
