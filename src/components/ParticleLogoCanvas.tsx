"use client";
import { useEffect, useRef } from "react";

interface Particle {
  x: number;
  y: number;
  ox: number;
  oy: number;
  vx: number;
  vy: number;
  radius: number;
  r: number;
  g: number;
  b: number;
  phase: number;
  freq: number;
}

interface AmbientDot {
  x: number;
  y: number;
  vx: number;
  vy: number;
  radius: number;
  baseAlpha: number;
  pulsePhase: number;
  pulseSpeed: number;
}

const DISTURB_RADIUS = 75;
const DISTURB_FORCE = 6;
const SPRING = 1; // softer tether — particles roam further
const FRICTION = 0.85;
const STEP = 5;
const AMBIENT_N = 550;
const WANDER_X = 6;
const WANDER_Y = 5;
const GRAVITY_Y = 5;

export default function ParticleLogoCanvas() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const mouseRef = useRef({ x: -99999, y: -99999 });
  const rafRef = useRef(0);

  useEffect(() => {
    const canvas = canvasRef.current!;
    const ctx = canvas.getContext("2d")!;
    let particles: Particle[] = [];
    let ambientDots: AmbientDot[] = [];
    let W = 0,
      H = 0,
      time = 0;
    // lagged mouse — smoothly follows real cursor for a delayed response
    let lagX = -99999,
      lagY = -99999;

    function pickColor(brightness: number): [number, number, number] {
      const t = brightness / 255;
      if (t > 0.75) return [240, 246, 255];
      if (t > 0.5) return [140, 185, 255];
      if (t > 0.25) return [45, 108, 255];
      return [2, 79, 150];
    }

    function resize() {
      const dpr = window.devicePixelRatio || 1;
      const rect = canvas.getBoundingClientRect();
      W = rect.width;
      H = rect.height;
      canvas.width = W * dpr;
      canvas.height = H * dpr;
      ctx.scale(dpr, dpr);
    }

    function createAmbientDots(): AmbientDot[] {
      const dots: AmbientDot[] = [];
      for (let i = 0; i < AMBIENT_N; i++) {
        const fast = Math.random() < 0.22;
        const speed = fast ? Math.random() * 1.1 + 0.55 : Math.random() * 0.38 + 0.06;
        const angle = Math.random() * Math.PI * 2;
        dots.push({
          x: Math.random() * W,
          y: Math.random() * H,
          vx: Math.cos(angle) * speed,
          vy: Math.sin(angle) * speed,
          radius: fast ? Math.random() * 0.9 + 0.4 : Math.random() * 0.6 + 0.2,
          baseAlpha: fast ? Math.random() * 0.28 + 0.12 : Math.random() * 0.16 + 0.04,
          pulsePhase: Math.random() * Math.PI * 2,
          pulseSpeed: Math.random() * 0.025 + 0.005,
        });
      }
      return dots;
    }

    function sampleLogo(): Promise<Particle[]> {
      return new Promise((resolve) => {
        const SVG_W = 619.04,
          SVG_H = 273.32;
        const logoW = Math.min(W * 0.72, 900);
        const logoH = (SVG_H / SVG_W) * logoW;

        const off = document.createElement("canvas");
        off.width = Math.round(logoW);
        off.height = Math.round(logoH);
        const offCtx = off.getContext("2d")!;
        const img = new Image();
        img.crossOrigin = "anonymous";

        img.onload = () => {
          offCtx.drawImage(img, 0, 0, off.width, off.height);
          const { data } = offCtx.getImageData(0, 0, off.width, off.height);
          const pts: Particle[] = [];
          const startX = (W - logoW) / 2;
          const startY = (H - logoH) / 2;

          for (let row = 0; row < off.height; row += STEP) {
            for (let col = 0; col < off.width; col += STEP) {
              const i = (row * off.width + col) * 4;
              if (data[i + 3] < 30) continue;
              const brightness = data[i] * 0.299 + data[i + 1] * 0.587 + data[i + 2] * 0.114;
              const [r, g, b] = pickColor(brightness);
              const px = startX + col;
              const py = startY + row;
              pts.push({
                x: px,
                y: py,
                ox: px,
                oy: py,
                vx: 0,
                vy: 0,
                // smaller radius = sharper, crisper particles
                radius: Math.random() * 0.9 + 0.3,
                r,
                g,
                b,
                phase: Math.random() * Math.PI * 2,
                freq: Math.random() * 1.2 + 0.4,
              });
            }
          }
          resolve(pts);
        };
        img.onerror = () => resolve([]);
        img.src = `/particle-logo.svg?v=1`;
      });
    }

    function animate() {
      ctx.clearRect(0, 0, W, H);
      time += 0.008;

      // smooth lag toward real cursor — creates ~8-frame delay
      lagX += (mouseRef.current.x - lagX) * 0.12;
      lagY += (mouseRef.current.y - lagY) * 0.12;
      const mx = lagX;
      const my = lagY;

      // ambient dots
      for (const d of ambientDots) {
        d.x += d.vx;
        d.y += d.vy;
        d.pulsePhase += d.pulseSpeed;
        if (d.x < -4) d.x = W + 4;
        if (d.x > W + 4) d.x = -4;
        if (d.y < -4) d.y = H + 4;
        if (d.y > H + 4) d.y = -4;
        const a = d.baseAlpha * (0.45 + 0.55 * Math.sin(d.pulsePhase));
        const speed = Math.sqrt(d.vx * d.vx + d.vy * d.vy);
        ctx.beginPath();
        ctx.arc(d.x, d.y, d.radius, 0, Math.PI * 2);
        ctx.fillStyle = speed > 0.45 ? `rgba(210,228,255,${a.toFixed(3)})` : `rgba(100,165,255,${a.toFixed(3)})`;
        ctx.fill();
      }

      // logo particles
      for (const p of particles) {
        const dx = p.x - mx;
        const dy = p.y - my;
        const distSq = dx * dx + dy * dy;

        if (distSq < DISTURB_RADIUS * DISTURB_RADIUS) {
          const dist = Math.sqrt(distSq) || 0.1;
          const t = 1 - dist / DISTURB_RADIUS;
          const force = t * t * DISTURB_FORCE;
          // radial push (coherent direction) + swirl + tiny noise
          // swirl adds turbulence without creating a perfect circle
          p.vx += (dx / dist) * force * 0.4 + (Math.random() - 0.5) * force * 1.6;
          p.vy += (dy / dist) * force * 0.4 + (Math.random() - 0.5) * force * 1.6;
          p.vx *= 0.88;
          p.vy *= 0.88;
        } else {
          // idle wander — fast local wobble + slow large drift outside own axis
          const tx = p.ox + Math.sin(time * p.freq + p.phase) * WANDER_X + Math.sin(time * 0.25 + p.phase * 0.6) * WANDER_X * 1.8;
          const ty = p.oy + Math.cos(time * p.freq * 0.7 + p.phase * 1.3) * WANDER_Y + Math.cos(time * 0.2 + p.phase * 0.8) * WANDER_Y * 1.8 + GRAVITY_Y * (1 - Math.abs(Math.cos(time * 0.3 + p.phase)));
          p.vx += (tx - p.x) * SPRING;
          p.vy += (ty - p.y) * SPRING;
          p.vx *= FRICTION;
          p.vy *= FRICTION;
        }

        p.x += p.vx;
        p.y += p.vy;

        const homeDist = Math.sqrt((p.x - p.ox) ** 2 + (p.y - p.oy) ** 2);
        const alpha = Math.max(0.35, Math.min(0.95, 0.88 - homeDist * 0.005));
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(${p.r},${p.g},${p.b},${alpha.toFixed(3)})`;
        ctx.fill();
      }

      rafRef.current = requestAnimationFrame(animate);
    }

    function onMouseMove(e: MouseEvent) {
      const rect = canvas.getBoundingClientRect();
      mouseRef.current = { x: e.clientX - rect.left, y: e.clientY - rect.top };
    }
    function onTouchMove(e: TouchEvent) {
      const t = e.touches[0];
      const rect = canvas.getBoundingClientRect();
      mouseRef.current = { x: t.clientX - rect.left, y: t.clientY - rect.top };
    }
    function onLeave() {
      mouseRef.current = { x: -99999, y: -99999 };
    }

    async function init() {
      resize();
      ambientDots = createAmbientDots();
      particles = await sampleLogo();
      cancelAnimationFrame(rafRef.current);
      animate();
    }

    init();
    window.addEventListener("mousemove", onMouseMove);
    window.addEventListener("touchmove", onTouchMove, { passive: true });
    window.addEventListener("mouseleave", onLeave);
    let resizeTimer: ReturnType<typeof setTimeout>;
    window.addEventListener("resize", () => {
      clearTimeout(resizeTimer);
      resizeTimer = setTimeout(init, 200);
    });

    return () => {
      cancelAnimationFrame(rafRef.current);
      window.removeEventListener("mousemove", onMouseMove);
      window.removeEventListener("touchmove", onTouchMove);
      window.removeEventListener("mouseleave", onLeave);
    };
  }, []);

  return <canvas ref={canvasRef} style={{ display: "block", width: "100%", height: "100%", pointerEvents: "none" }} />;
}
