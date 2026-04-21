"use client";

import Link from "next/link";
import ParticleLogoCanvas from "@/components/ParticleLogoCanvas";

export default function ParticleHero() {
  return (
    <div className="font-sans bg-black">

      {/* ── 1. Hero ── */}
      <section
        data-nav-theme="dark"
        className="relative overflow-hidden min-h-screen flex flex-col justify-end pt-48 pb-24 lg:pb-32 border-b border-white/10"
        style={{ background: "radial-gradient(ellipse at 60% -10%, #0e1428 0%, #08090d 100%)" }}
      >
        {/* Particle canvas — atmospheric right-side layer */}
        <div className="absolute inset-0 pointer-events-none" style={{ opacity: 0.6 }}>
          <ParticleLogoCanvas />
        </div>

        {/* Left fade so text stays readable */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{ background: "linear-gradient(to right, #08090d 35%, rgba(8,9,13,0.6) 65%, transparent 100%)" }}
        />

        {/* Perspective grid — same as company page */}
        <div
          className="absolute inset-0 opacity-[0.12] mix-blend-screen pointer-events-none"
          style={{
            backgroundImage: "linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)",
            backgroundSize: "60px 20px",
            transform: "perspective(500px) rotateX(60deg) scale(2)",
            transformOrigin: "top center",
          }}
        />

        {/* Text — bottom-left, matching company hero */}
        <div className="w-full px-6 md:px-12 lg:px-20 xl:px-[8%] relative z-10 flex flex-col gap-6">
          <div className="flex items-center gap-4">
            <span className="h-[2px] w-10 bg-[#2d6cff]" aria-hidden />
            <p className="text-[0.65rem] font-bold uppercase tracking-[0.2em] text-[#2d6cff]">
              Conversational AI · Live Feedback
            </p>
          </div>

          <h1
            className="text-[clamp(3.5rem,8vw,7rem)] font-bold leading-[0.9] tracking-tight text-white m-0 max-w-[14ch]"
            style={{ fontFamily: "var(--font-space-grotesk)" }}
          >
            Feedback that{" "}
            <span className="font-serif italic font-light opacity-90">listens back.</span>
          </h1>

          <p className="text-[1.1rem] leading-[1.6] text-white/60 max-w-[45ch] mt-4">
            Interval 360 replaces static surveys with a live AI conversation — one that probes,
            adapts, and synthesises responses into structured leadership insight in real time.
          </p>

          <div className="flex gap-4 flex-wrap mt-4">
            <Link
              href="/particle/chat"
              className="text-[0.9rem] font-semibold px-8 py-3.5 no-underline bg-[#2d6cff] text-white hover:bg-[#1a57e8] transition-colors duration-200"
            >
              See it in action →
            </Link>
            <Link
              href="/conversational-ai"
              className="text-[0.9rem] font-medium px-8 py-3.5 no-underline border border-white/20 text-white hover:border-white/40 transition-colors duration-200"
            >
              How the AI works
            </Link>
          </div>
        </div>
      </section>

      {/* ── 2. What makes it different ── */}
      <section className="py-24 md:py-32 border-b border-white/5" style={{ background: "#0c0d12" }}>
        <div className="content-wrap page-gutter grid lg:grid-cols-[1fr_2fr] gap-16 lg:gap-24 items-start">
          <div className="flex flex-col gap-6">
            <p className="text-[0.65rem] font-bold uppercase tracking-[0.2em] text-[#2d6cff]">
              What Makes It Different
            </p>
            <h2
              className="text-[clamp(2.5rem,4.5vw,3.5rem)] font-bold leading-[1.05] tracking-tight text-white"
              style={{ fontFamily: "var(--font-space-grotesk)" }}
            >
              A 360 that actually converses.
            </h2>
          </div>
          <div className="flex flex-col gap-6 text-[1.05rem] leading-[1.65] text-white/50 max-w-[52ch]">
            <p>
              Traditional 360s ask fixed questions and get fixed answers. They cannot follow up,
              cannot probe ambiguity, and cannot distinguish a thoughtful rating from a rushed one.
            </p>
            <p>
              Interval 360 conducts a structured conversation guided by AI. Each exchange adapts to
              what the rater just said — surfacing richer context, specific examples, and patterns
              that surveys simply cannot reach.
            </p>
            <Link
              href="/particle/chat"
              className="self-start text-[0.88rem] font-semibold no-underline text-white/70 border-b border-white/20 pb-0.5 hover:text-white hover:border-white/50 transition-colors"
            >
              Try a live session →
            </Link>
          </div>
        </div>
      </section>

      {/* ── 3. Feature cards ── */}
      <section className="py-24 md:py-32 border-b border-black/10 text-black" style={{ background: "#ffffff" }}>
        <div className="content-wrap page-gutter">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-20 pb-12 border-b border-black/10">
            <h2
              className="text-[clamp(2.5rem,4.5vw,3.5rem)] font-bold leading-[1.05] tracking-tight"
              style={{ fontFamily: "var(--font-space-grotesk)", color: "#111" }}
            >
              Built into every session.
            </h2>
            <p className="text-[0.6rem] font-bold uppercase tracking-[0.2em] text-[#888] md:pb-2">
              Core Capabilities
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-y-16 gap-x-12">
            {FEATURES.map((f, idx) => (
              <div
                key={f.title}
                className="flex flex-col group border-l border-black/5 pl-6 hover:border-black/20 transition-colors"
              >
                <span className="text-[0.65rem] font-bold text-[#888] mb-6">
                  0{idx + 1}
                </span>
                <h3
                  className="text-[1.15rem] font-bold leading-[1.2] tracking-tight mb-4"
                  style={{ fontFamily: "var(--font-space-grotesk)", color: "#111" }}
                >
                  {f.title}
                </h3>
                <p className="text-[0.92rem] leading-[1.65] text-[#666]">
                  {f.body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 4. CTA ── */}
      <section className="min-h-screen flex flex-col" style={{ background: "#0a0e1a" }}>
        <div className="flex-1 grid lg:grid-cols-2 content-wrap page-gutter w-full py-20">

          {/* Left */}
          <div className="flex flex-col justify-center lg:pr-16 py-10 border-b lg:border-b-0 border-white/6" style={{ borderRight: "1px solid rgba(255,255,255,0.06)" }}>
            <p className="text-[0.68rem] font-semibold tracking-[0.28em] uppercase text-[#2d6cff] mb-8">
              Ready to see it?
            </p>
            <h2
              className="text-[clamp(2.6rem,5.5vw,4.5rem)] font-extrabold uppercase leading-[0.92] text-white mb-14"
              style={{ fontFamily: "var(--font-space-grotesk)" }}
            >
              Experience<br />a live AI<br />feedback<br />session.
            </h2>
            <div className="flex gap-4 flex-wrap">
              <Link
                href="/particle/chat"
                className="text-[0.9rem] font-semibold px-8 py-3.5 no-underline bg-[#2d6cff] text-white hover:bg-[#1a57e8] transition-colors duration-200"
              >
                Open Live Session
              </Link>
              <Link
                href="/company#contact"
                className="text-[0.9rem] font-medium px-8 py-3.5 no-underline border border-white/20 text-white hover:border-white/40 transition-colors duration-200"
              >
                Book a Call
              </Link>
            </div>
          </div>

          {/* Right — quote + stats */}
          <div className="flex flex-col justify-center lg:pl-16 py-10 gap-10">
            <div className="bg-[#2d6cff] p-8">
              <p className="text-[1.05rem] leading-[1.75] text-white font-medium italic mb-6">
                &ldquo;The feedback was more specific than anything we&rsquo;d collected before.
                Raters said it felt like a real conversation — not a form.&rdquo;
              </p>
              <div className="flex items-center gap-3">
                <div className="w-6 h-px bg-white/50" />
                <p className="text-[0.68rem] font-semibold tracking-[0.2em] uppercase text-white/70">
                  Head of Talent, Mid-Market Technology Co.
                </p>
              </div>
            </div>

            <div className="flex flex-col gap-0">
              {STATS.map((s, i) => (
                <div key={i} className="flex items-start gap-8 py-8 border-t border-white/6 last:border-b last:border-white/6">
                  <span className="text-[3rem] font-extrabold leading-none text-[#2d6cff] shrink-0 w-24">
                    {s.value}
                  </span>
                  <div>
                    <p className="text-[0.75rem] font-bold tracking-[0.15em] uppercase text-white mb-1">
                      {s.label}
                    </p>
                    <p className="text-[0.85rem] leading-[1.7] text-white/50">
                      {s.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

const FEATURES = [
  {
    title: "Adaptive Probing",
    body: "The AI follows each response with a contextual follow-up. No two sessions are the same.",
  },
  {
    title: "Real-Time Synthesis",
    body: "Responses are structured and analysed as they arrive — no manual review required.",
  },
  {
    title: "Calibrated Depth",
    body: "A 10-exchange limit keeps sessions respectful of time while capturing meaningful nuance.",
  },
  {
    title: "Structured Output",
    body: "Every session closes with a clean report — themes, verbatims, and a development summary.",
  },
];

const STATS = [
  {
    value: "~5m",
    label: "Per Feedback Session",
    desc: "Most raters finish in under five minutes — no login, no rating scales.",
  },
  {
    value: "10×",
    label: "Exchange Limit",
    desc: "Calibrated depth: enough to surface real insight without fatiguing respondents.",
  },
];
