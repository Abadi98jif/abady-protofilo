import { useEffect, useRef } from "react";

export default function Cursor() {
  const dotRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (window.matchMedia("(pointer: coarse)").matches) return;
    const dot = dotRef.current;
    const ring = ringRef.current;
    if (!dot || !ring) return;

    let tx = 0;
    let ty = 0;
    let rx = 0;
    let ry = 0;
    let raf = 0;

    const onMove = (e: MouseEvent) => {
      tx = e.clientX;
      ty = e.clientY;
      dot.style.transform = `translate3d(${tx}px, ${ty}px, 0) translate(-50%,-50%)`;
    };

    const loop = () => {
      rx += (tx - rx) * 0.14;
      ry += (ty - ry) * 0.14;
      ring.style.transform = `translate3d(${rx}px, ${ry}px, 0) translate(-50%,-50%)`;
      raf = requestAnimationFrame(loop);
    };

    window.addEventListener("mousemove", onMove);
    loop();

    const enlarge = () => ring.classList.add("ring-hover");
    const shrink = () => ring.classList.remove("ring-hover");
    document.addEventListener("mouseover", (e) => {
      const t = e.target as HTMLElement;
      if (t.closest("a, button, [data-cursor]")) enlarge();
      else shrink();
    });

    return () => {
      window.removeEventListener("mousemove", onMove);
      cancelAnimationFrame(raf);
      document.removeEventListener("mouseover", enlarge);
    };
  }, []);

  return (
    <div className="pointer-events-none fixed inset-0 z-[60] hidden md:block">
      <div
        ref={dotRef}
        className="absolute top-0 left-0 h-1.5 w-1.5 rounded-full bg-accent"
        style={{ willChange: "transform" }}
      />
      <div
        ref={ringRef}
        className="ring-hover absolute top-0 left-0 h-9 w-9 rounded-full border border-accent/50 transition-[width,height,opacity] duration-300"
        style={{ willChange: "transform" }}
      />
      <style>{`.ring-hover{width:3.25rem;height:3.25rem;opacity:.9}`}</style>
    </div>
  );
}
