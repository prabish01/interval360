"use client";

import { useEffect, useRef } from "react";

interface Dot {
  x: number;
  y: number;
  vx: number;
  vy: number;
  r: number;
  alpha: number;
}

const DOT_COUNT   = 90;
const MAX_DIST    = 130;
const DOT_SPEED   = 0.28;

export default function NetworkCanvas() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const rafRef    = useRef(0);

  useEffect(() => {
    const canvas = canvasRef.current!;
    const ctx    = canvas.getContext("2d")!;
    let dots: Dot[] = [];
    let W = 0, H = 0;

    function resize() {
      const dpr   = window.devicePixelRatio || 1;
      W = canvas.offsetWidth;
      H = canvas.offsetHeight;
      canvas.width  = W * dpr;
      canvas.height = H * dpr;
      ctx.scale(dpr, dpr);
    }

    function init() {
      resize();
      dots = Array.from({ length: DOT_COUNT }, () => {
        const angle = Math.random() * Math.PI * 2;
        const speed = (Math.random() * 0.6 + 0.15) * DOT_SPEED;
        return {
          x:     Math.random() * W,
          y:     Math.random() * H,
          vx:    Math.cos(angle) * speed,
          vy:    Math.sin(angle) * speed,
          r:     Math.random() * 1.2 + 0.5,
          alpha: Math.random() * 0.4 + 0.2,
        };
      });
    }

    function draw() {
      ctx.clearRect(0, 0, W, H);

      for (const d of dots) {
        d.x += d.vx;
        d.y += d.vy;
        if (d.x < 0)    d.x = W;
        if (d.x > W)    d.x = 0;
        if (d.y < 0)    d.y = H;
        if (d.y > H)    d.y = 0;
      }

      // lines
      for (let i = 0; i < dots.length; i++) {
        for (let j = i + 1; j < dots.length; j++) {
          const dx   = dots[i].x - dots[j].x;
          const dy   = dots[i].y - dots[j].y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < MAX_DIST) {
            const t = 1 - dist / MAX_DIST;
            ctx.beginPath();
            ctx.moveTo(dots[i].x, dots[i].y);
            ctx.lineTo(dots[j].x, dots[j].y);
            ctx.strokeStyle = `rgba(80,160,220,${(t * 0.22).toFixed(3)})`;
            ctx.lineWidth = 0.6;
            ctx.stroke();
          }
        }
      }

      // dots
      for (const d of dots) {
        ctx.beginPath();
        ctx.arc(d.x, d.y, d.r, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(120,190,255,${d.alpha.toFixed(3)})`;
        ctx.fill();
      }

      rafRef.current = requestAnimationFrame(draw);
    }

    init();
    draw();

    const onResize = () => { init(); };
    window.addEventListener("resize", onResize);
    return () => {
      cancelAnimationFrame(rafRef.current);
      window.removeEventListener("resize", onResize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      style={{ position: "absolute", inset: 0, width: "100%", height: "100%", display: "block" }}
    />
  );
}
