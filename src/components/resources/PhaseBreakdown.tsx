"use client";

import { useEffect, useRef, useState } from "react";

interface Phase {
  num: string;
  days: string;
  phase: string;
  intro: string;
  subsections: { title: string; body: string }[];
  alert: { title: string; body: string[] };
}

const WarningIcon = () => (
  <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
    <path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z" />
    <line x1="12" y1="9" x2="12" y2="13" />
    <line x1="12" y1="17" x2="12.01" y2="17" />
  </svg>
);

const darkGrid = "linear-gradient(rgba(187,220,251,0.07) 1px,transparent 1px),linear-gradient(90deg,rgba(187,220,251,0.07) 1px,transparent 1px)";
const lightGrid = "linear-gradient(rgba(5,79,154,0.1) 1px,transparent 1px),linear-gradient(90deg,rgba(5,79,154,0.1) 1px,transparent 1px)";

const dark = {
  bg:              "#09090d",
  ghost:           "rgba(255,255,255,0.07)",
  label:           "#fff",
  intro:           "rgba(255,255,255,0.45)",
  subTitle:        "#fff",
  subBody:         "rgba(255,255,255,0.45)",
  cardBg:          "rgba(255,255,255,0.025)",
  cardBorder:      "rgba(255,255,255,0.08)",
  cardGrid:        darkGrid,
  cardGridOpacity: 0.07,
  gridBg:          darkGrid,
  gridOpacity:     0.35,
  track:           "rgba(255,255,255,0.07)",
  alertBg:         "rgba(239,68,68,0.06)",
  alertBorder:     "rgba(239,68,68,0.22)",
  alertLeft:       "rgba(239,68,68,0.8)",
  alertLabel:      "rgba(248,113,113,0.95)",
  alertTitle:      "#fff",
  alertBody:       "rgba(255,255,255,0.5)",
  hint:            "#fff",
};

const light = {
  bg:              "#ffffff",
  ghost:           "rgba(0,0,0,0.05)",
  label:           "#09090d",
  intro:           "rgba(0,0,0,0.45)",
  subTitle:        "#09090d",
  subBody:         "rgba(0,0,0,0.5)",
  cardBg:          "rgba(0,0,0,0.02)",
  cardBorder:      "rgba(0,0,0,0.1)",
  cardGrid:        lightGrid,
  cardGridOpacity: 0.5,
  gridBg:          lightGrid,
  gridOpacity:     1,
  track:           "rgba(0,0,0,0.1)",
  alertBg:         "rgba(239,68,68,0.07)",
  alertBorder:     "rgba(239,68,68,0.38)",
  alertLeft:       "rgba(239,68,68,0.9)",
  alertLabel:      "rgba(239,68,68,0.95)",
  alertTitle:      "#09090d",
  alertBody:       "rgba(0,0,0,0.6)",
  hint:            "#09090d",
};

const phaseThemes = [dark, light, dark];

export default function PhaseBreakdown({ phases }: { phases: Phase[] }) {
  const wrapperRef = useRef<HTMLDivElement>(null);
  const [activePhase, setActivePhase] = useState(0);
  const [lineProgress, setLineProgress] = useState(0);

  useEffect(() => {
    const onScroll = () => {
      const el = wrapperRef.current;
      if (!el) return;
      const rect = el.getBoundingClientRect();
      const scrollable = el.offsetHeight - window.innerHeight;
      if (scrollable <= 0) return;
      const scrolled = Math.max(0, -rect.top);
      const p = Math.min(1, scrolled / scrollable);
      setLineProgress(p);
      setActivePhase(Math.min(phases.length - 1, Math.floor(p * phases.length)));
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, [phases.length]);

  const active = phases[activePhase];
  const t = phaseThemes[activePhase];

  return (
    <>
      <style>{`
        @keyframes pb-in {
          from { opacity: 0; transform: translateY(14px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        .pb-in { animation: pb-in 0.32s cubic-bezier(0.22,1,0.36,1) both; }
      `}</style>

      <div ref={wrapperRef} style={{ height: `${phases.length * 100 + 100}vh` }}>
        <div style={{
          position: "sticky", top: 0, height: "100vh",
          background: t.bg,
          overflow: "hidden", display: "flex", flexDirection: "column",
          transition: "background 0.45s ease",
        }}>
          {/* Grid bg */}
          <div className="absolute inset-0 pointer-events-none" style={{ backgroundImage: t.gridBg, backgroundSize: "52px 52px", opacity: t.gridOpacity, transition: "opacity 0.45s ease" }} />

          <div style={{
            position: "relative", zIndex: 1, flex: 1,
            display: "grid",
            gridTemplateColumns: "clamp(150px, 18vw, 240px) 1fr",
            maxWidth: "1280px", width: "100%",
            margin: "0 auto",
            padding: "0 clamp(1rem, 4vw, 4rem)",
          }}>

            {/* ── LEFT: line + label ── */}
            <div style={{ display: "flex", alignItems: "stretch" }}>

              {/* Progress line */}
              <div style={{ display: "flex", flexDirection: "column", alignItems: "center", width: "28px", flexShrink: 0, position: "relative", marginRight: "1.5rem", paddingTop: "12%", paddingBottom: "12%" }}>
                {/* Track */}
                <div style={{ position: "absolute", top: "12%", bottom: "12%", left: "50%", transform: "translateX(-50%)", width: "2px", background: t.track, borderRadius: "1px", transition: "background 0.45s ease" }} />
                {/* Fill */}
                <div style={{
                  position: "absolute", top: "12%", left: "50%", transform: "translateX(-50%)",
                  width: "2px", borderRadius: "1px",
                  background: "linear-gradient(to bottom, rgba(99,102,241,0.9), rgba(129,140,248,0.6))",
                  height: `${lineProgress * 76}%`,
                  transition: "height 0.12s linear",
                }} />
                {/* Dots */}
                {phases.map((_, i) => {
                  const pct = (i / (phases.length - 1)) * 76;
                  const isActive = i === activePhase;
                  const isPast = i < activePhase;
                  return (
                    <div key={i} style={{
                      position: "absolute", left: "50%",
                      top: `calc(12% + ${pct}%)`,
                      transform: "translate(-50%, -50%)",
                      width: isActive ? 12 : 7,
                      height: isActive ? 12 : 7,
                      borderRadius: "50%",
                      background: isPast ? "rgba(99,102,241,0.7)" : isActive ? "rgba(99,102,241,0.95)" : t.track,
                      border: isActive ? "2px solid rgba(129,140,248,0.55)" : "none",
                      boxShadow: isActive ? "0 0 12px rgba(99,102,241,0.55)" : "none",
                      transition: "all 0.35s cubic-bezier(0.4,0,0.2,1)",
                    }} />
                  );
                })}
              </div>

              {/* Label */}
              <div style={{ flex: 1, display: "flex", alignItems: "center" }}>
                <div>
                  <span key={`n-${activePhase}`} className="pb-in" style={{ display: "block", fontFamily: "var(--font-space-grotesk), sans-serif", fontSize: "clamp(3.5rem, 7vw, 6rem)", fontWeight: 900, lineHeight: 1, color: t.ghost, letterSpacing: "-0.04em", marginBottom: "0.75rem", userSelect: "none" }}>
                    {active.num}
                  </span>
                  <span style={{ display: "block", width: 7, height: 7, borderRadius: "50%", background: "rgba(99,102,241,0.9)", marginBottom: "0.5rem" }} />
                  <p key={`d-${activePhase}`} className="pb-in" style={{ fontFamily: "ui-monospace, monospace", fontSize: "var(--text-xs)", fontWeight: 700, letterSpacing: "0.12em", textTransform: "uppercase", color: "rgba(99,102,241,0.9)", marginBottom: "0.3rem" }}>
                    {active.days}
                  </p>
                  <p key={`p-${activePhase}`} className="pb-in" style={{ fontSize: "var(--text-sm)", fontWeight: 700, color: t.label }}>
                    {active.phase}
                  </p>
                </div>
              </div>
            </div>

            {/* ── RIGHT: content ── */}
            <div key={activePhase} className="pb-in" style={{ display: "flex", flexDirection: "column", justifyContent: "center", padding: "clamp(2rem, 4vw, 3.5rem) 0 clamp(2rem, 4vw, 3.5rem) clamp(1rem, 3vw, 2.5rem)", gap: "1.25rem" }}>

              {/* Content card */}
              <div style={{ border: `1px solid ${t.cardBorder}`, borderRadius: "6px", background: t.cardBg, overflow: "hidden", position: "relative", backdropFilter: "blur(16px)", WebkitBackdropFilter: "blur(16px)", transition: "border-color 0.45s ease, background 0.45s ease" }}>
                <div className="absolute inset-0 pointer-events-none" style={{ backgroundImage: t.cardGrid, backgroundSize: "52px 52px", opacity: t.cardGridOpacity }} />
                <div style={{ position: "relative", zIndex: 1, padding: "clamp(1.25rem, 3vw, 2rem)" }}>
                  <p style={{ fontFamily: "ui-monospace, 'Cascadia Code', monospace", fontSize: "var(--text-sm)", color: t.intro, lineHeight: 1.75, marginBottom: "1.75rem", transition: "color 0.45s ease" }}>
                    {active.intro}
                  </p>
                  <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "clamp(1rem, 3vw, 2rem)" }}>
                    {active.subsections.map((sub) => (
                      <div key={sub.title}>
                        <h4 style={{ fontSize: "var(--text-xs)", fontWeight: 700, letterSpacing: "0.14em", textTransform: "uppercase", color: t.subTitle, marginBottom: "0.6rem", transition: "color 0.45s ease" }}>{sub.title}</h4>
                        <p style={{ fontSize: "var(--text-sm)", color: t.subBody, lineHeight: 1.7, transition: "color 0.45s ease" }}>{sub.body}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Alert */}
              <div style={{ borderTopWidth: "1px", borderRightWidth: "1px", borderBottomWidth: "1px", borderLeftWidth: "2px", borderStyle: "solid", borderTopColor: t.alertBorder, borderRightColor: t.alertBorder, borderBottomColor: t.alertBorder, borderLeftColor: t.alertLeft, borderRadius: "0 6px 6px 0", padding: "1.1rem 1.4rem", background: t.alertBg, backdropFilter: "blur(16px)", WebkitBackdropFilter: "blur(16px)", transition: "background 0.45s ease, border-color 0.45s ease" }}>
                <p style={{ display: "flex", alignItems: "center", gap: "8px", fontSize: "var(--text-xs)", fontWeight: 700, letterSpacing: "0.16em", textTransform: "uppercase", color: t.alertLabel, marginBottom: "0.5rem", transition: "color 0.45s ease" }}>
                  <WarningIcon />
                  System Alert: Failure Point
                </p>
                <p style={{ fontSize: "var(--text-sm)", fontWeight: 700, color: t.alertTitle, marginBottom: "0.5rem", transition: "color 0.45s ease" }}>{active.alert.title}</p>
                {active.alert.body.map((p, j) => (
                  <p key={j} style={{ fontSize: "var(--text-sm)", color: t.alertBody, lineHeight: 1.65, marginBottom: j < active.alert.body.length - 1 ? "0.6rem" : 0, transition: "color 0.45s ease" }}>{p}</p>
                ))}
              </div>
            </div>
          </div>

          {/* Scroll hint */}
          <div style={{
            position: "absolute", bottom: "1.5rem", left: "50%", transform: "translateX(-50%)",
            display: "flex", flexDirection: "column", alignItems: "center", gap: "6px",
            opacity: lineProgress > 0.85 ? 0 : 0.3,
            transition: "opacity 0.3s",
            color: t.hint,
          }}>
            <span style={{ fontFamily: "ui-monospace, monospace", fontSize: "var(--text-xs)", letterSpacing: "0.16em", textTransform: "uppercase" }}>
              {activePhase + 1} / {phases.length}
            </span>
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
              <path d="M12 5v14M5 12l7 7 7-7" />
            </svg>
          </div>
        </div>
      </div>
    </>
  );
}
