import { useEffect, useRef } from "react";

interface P {
  x: number;
  y: number;
  vx: number;
  vy: number;
  r: number;
  c: string;
}

export default function Background() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    let raf = 0;
    let w = (canvas.width = window.innerWidth);
    let h = (canvas.height = window.innerHeight);
    const colors = ["22,211,238", "129,140,248", "192,132,252"];

    const count = Math.min(46, Math.floor(window.innerWidth / 34));
    const particles: P[] = Array.from({ length: count }, () => ({
      x: Math.random() * w,
      y: Math.random() * h,
      vx: (Math.random() - 0.5) * 0.35,
      vy: (Math.random() - 0.5) * 0.35,
      r: Math.random() * 1.8 + 0.6,
      c: colors[Math.floor(Math.random() * colors.length)],
    }));

    const onResize = () => {
      w = canvas.width = window.innerWidth;
      h = canvas.height = window.innerHeight;
    };
    window.addEventListener("resize", onResize);

    const draw = () => {
      ctx.clearRect(0, 0, w, h);
      // connections
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const a = particles[i];
          const b = particles[j];
          const dx = a.x - b.x;
          const dy = a.y - b.y;
          const d = Math.hypot(dx, dy);
          if (d < 120) {
            ctx.strokeStyle = `rgba(129,140,248,${(1 - d / 120) * 0.12})`;
            ctx.lineWidth = 1;
            ctx.beginPath();
            ctx.moveTo(a.x, a.y);
            ctx.lineTo(b.x, b.y);
            ctx.stroke();
          }
        }
      }
      for (const p of particles) {
        p.x += p.vx;
        p.y += p.vy;
        if (p.x < -20) p.x = w + 20;
        if (p.x > w + 20) p.x = -20;
        if (p.y < -20) p.y = h + 20;
        if (p.y > h + 20) p.y = -20;
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(${p.c},0.55)`;
        ctx.fill();
      }
      if (!reduce) raf = requestAnimationFrame(draw);
    };

    draw();

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("resize", onResize);
    };
  }, []);

  return (
    <div aria-hidden className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
      {/* base gradient */}
      <div className="absolute inset-0 bg-bg" />
      <div className="absolute -top-40 -left-40 h-[34rem] w-[34rem] rounded-full bg-accent/12 blur-[130px]" />
      <div className="absolute top-1/3 -right-40 h-[36rem] w-[36rem] rounded-full bg-accent2/12 blur-[140px]" />
      <div className="absolute bottom-0 left-1/3 h-[28rem] w-[28rem] rounded-full bg-accent3/10 blur-[130px]" />
      {/* grid */}
      <div className="bg-grid absolute inset-0 opacity-70" />
      {/* particles */}
      <canvas ref={canvasRef} className="absolute inset-0 h-full w-full" />
      {/* vignette to keep edges clean */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_55%,var(--bg)_100%)]" />
    </div>
  );
}
