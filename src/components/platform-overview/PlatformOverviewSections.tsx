import Link from "next/link";
import Image from "next/image";
import { differentiators, modelDimensions, whoItems } from "./data";

export default function PlatformOverviewSections() {
  return (
    <div className="flex flex-col">

      {/* ── HERO — dark ── */}
      <section className="min-h-screen flex flex-col bg-[#0a0e1a]">
        <div className="flex-1 grid lg:grid-cols-2 content-wrap page-gutter w-full pt-28 pb-16 gap-12">

          {/* Left */}
          <div className="flex flex-col justify-center py-10">
            <p className="text-[0.68rem] font-semibold tracking-[0.28em] uppercase text-[#2d6cff] mb-8">
              Evolution of Talent Intelligence
            </p>
            <h1 className="text-[clamp(3rem,6vw,5.5rem)] font-extrabold uppercase leading-[0.92] text-white mb-8" style={{ fontFamily: "var(--font-space-grotesk)" }}>
              Platform<br />Overview
            </h1>
            <p className="text-[1rem] leading-[1.8] text-white/60 mb-10 max-w-[44ch]">
              A leadership assessment platform built for repeatable, organization-wide 360 assessments.
            </p>
            <div className="flex flex-wrap gap-4 items-center">
              <Link href="/buy" className="text-[0.85rem] font-semibold px-7 py-3 bg-[#2d6cff] text-white hover:bg-[#1a57e8] transition-colors no-underline">
                Buy an Assessment
              </Link>
              <Link href="/reports-and-outputs" className="text-[0.85rem] font-medium px-7 py-3 border border-white/20 text-white hover:border-white/40 transition-colors no-underline">
                See the Reports
              </Link>
              <Link href="/company#contact" className="text-[0.85rem] font-medium text-[#2d6cff] border-b border-[#2d6cff] pb-0.5 no-underline hover:opacity-70 transition-opacity">
                Get an Assessment →
              </Link>
            </div>
          </div>

          {/* Right — product mockup */}
          <div className="hidden lg:flex items-center justify-center py-10">
            <div className="w-full border border-white/6 overflow-hidden">
              <div className="flex items-center gap-2 px-4 py-2.5 border-b border-white/6 bg-[#0e1220]">
                <div className="w-2 h-2 rounded-full bg-white/10" />
                <div className="w-2 h-2 rounded-full bg-white/10" />
                <div className="w-2 h-2 rounded-full bg-white/10" />
                <span className="text-[0.6rem] text-white/20 ml-2 tracking-wider">interval360 — platform</span>
              </div>
              <div className="bg-[#0b0f1a] p-6">
                <p className="text-[0.65rem] font-bold tracking-[0.2em] uppercase text-[#2d6cff] mb-3">A focused assessment layer —</p>
                <h3 className="text-[1.6rem] font-extrabold uppercase leading-[1.05] text-white mb-5" style={{ fontFamily: "var(--font-space-grotesk)" }}>
                  not another HR<br />platform.
                </h3>
                <p className="text-[0.82rem] leading-[1.7] text-white/50 mb-6 max-w-[38ch]">
                  Interval 360 is purpose-built around the assessment process itself — how feedback is collected, synthesized, and used.
                </p>
                <div className="flex flex-col gap-2">
                  {["Purpose-built for collection, synthesis, and usage", "Two reports per assessment", "Five-minute feedback process"].map((pt, i) => (
                    <div key={i} className="flex items-center gap-3">
                      <div className="w-1 h-1 rounded-full bg-[#2d6cff]" />
                      <span className="text-[0.78rem] text-white/40">{pt}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* ── BETTER INPUT — white ── */}
      <section className="min-h-screen flex flex-col bg-white">
        <div className="flex-1 flex flex-col content-wrap page-gutter w-full py-24">

          {/* Top row */}
          <div className="grid lg:grid-cols-2 gap-12 items-end mb-16">
            <h2 className="text-[clamp(2.8rem,5.5vw,4.5rem)] font-extrabold uppercase leading-[0.92] text-[#0b1733]" style={{ fontFamily: "var(--font-space-grotesk)" }}>
              Better Input.<br />Better Output.<br />
              <span className="text-[#2d6cff]">Less Burden.</span>
            </h2>
            <p className="text-[1rem] leading-[1.8] text-[#4a5877] max-w-[42ch] lg:self-end">
              Traditional 360 tools rely on long static surveys and produce exhaustive reports. Interval 360 was built to fix both problems — at the collection stage and the output stage.
            </p>
          </div>

          {/* 4-col differentiator grid */}
          <div className="flex-1 grid lg:grid-cols-4 border-t border-l border-[#e4eaf5]">
            {differentiators.map((d, i) => {
              const [num, label] = d.num.split(" — ");
              return (
                <div key={i} className="group flex flex-col p-8 border-r border-b border-[#e4eaf5] hover:bg-[#f5f8ff] transition-colors duration-300">
                  <p className="text-[0.65rem] font-bold tracking-[0.2em] uppercase text-[#2d6cff] opacity-50 group-hover:opacity-100 transition-opacity duration-300 mb-6">
                    {num}{label ? ` — ${label}` : ""}
                  </p>
                  <h3 className="text-[0.95rem] font-bold uppercase tracking-[0.02em] leading-[1.3] mb-4 text-[#0b1733]" style={{ fontFamily: "var(--font-space-grotesk)" }}>
                    {d.title}
                  </h3>
                  <p className="text-[0.85rem] leading-[1.7] text-[#4a5877] mt-auto">{d.body}</p>
                </div>
              );
            })}
          </div>

        </div>
      </section>

      {/* ── TWO DIMENSIONS — dark ── */}
      <section className="min-h-screen flex flex-col bg-[#0e0e0e]">
        <div className="flex-1 flex flex-col content-wrap page-gutter w-full py-24">

          <div className="mb-14">
            <p className="text-[0.68rem] font-semibold tracking-[0.28em] uppercase text-[#2d6cff] mb-6">
              The Assessment Framework
            </p>
            <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6">
              <h2 className="text-[clamp(2.8rem,5.5vw,4.5rem)] font-extrabold uppercase leading-[0.92] text-white" style={{ fontFamily: "var(--font-space-grotesk)" }}>
                Two Dimensions.<br />
                <span className="text-[#2d6cff]">One Complete Picture.</span>
              </h2>
              <p className="text-[0.95rem] leading-[1.8] text-white/50 max-w-[40ch] lg:text-right">
                Interval 360 evaluates leadership across two dimensions — what a leader delivers and how they lead. Both are required for a complete view.
              </p>
            </div>
          </div>

          <div className="flex-1 grid lg:grid-cols-2 border-t border-l border-white/6">
            {modelDimensions.map((dim, i) => (
              <div key={dim.label} className="p-10 border-r border-b border-white/6 flex flex-col gap-6">
                <div>
                  <p className="text-[0.65rem] font-bold tracking-[0.2em] uppercase text-[#2d6cff] mb-4">{dim.label}</p>
                  <h3 className="text-[1.4rem] font-extrabold uppercase leading-[1.1] text-white" style={{ fontFamily: "var(--font-space-grotesk)" }}>
                    {dim.title}
                  </h3>
                </div>
                <div className="flex flex-col">
                  {dim.items.map((item) => (
                    <div key={item} className="flex items-start gap-4 py-3.5 border-b border-white/6 last:border-0">
                      <div className="w-1.5 h-1.5 rounded-full bg-[#2d6cff] shrink-0 mt-2" />
                      <span className="text-[0.88rem] leading-[1.6] text-white/60">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* ── BUILT FOR — white ── */}
      <section className="min-h-screen flex flex-col bg-white">
        <div className="flex-1 flex flex-col content-wrap page-gutter w-full py-24">

          <div className="mb-14">
            <p className="text-[0.68rem] font-semibold tracking-[0.28em] uppercase text-[#2d6cff] mb-6">
              Who It Serves
            </p>
            <h2 className="text-[clamp(2.8rem,5.5vw,4.5rem)] font-extrabold uppercase leading-[0.92] text-[#0b1733]" style={{ fontFamily: "var(--font-space-grotesk)" }}>
              Built For Individuals<br />And Organizations,{" "}
              <span className="text-[#2d6cff] italic">Alike.</span>
            </h2>
          </div>

          <div className="flex-1 grid lg:grid-cols-3 border-t border-l border-[#e4eaf5]">
            {whoItems.map((item, i) => (
              <div key={i} className="group flex flex-col p-8 border-r border-b border-[#e4eaf5] hover:bg-[#f5f8ff] transition-colors duration-300">
                <p className="text-[0.65rem] font-bold tracking-[0.2em] uppercase text-[#2d6cff] opacity-50 group-hover:opacity-100 transition-opacity duration-300 mb-5">
                  {item.label}
                </p>
                <h3 className="text-[1rem] font-bold uppercase tracking-[0.02em] leading-[1.3] mb-4 text-[#0b1733]" style={{ fontFamily: "var(--font-space-grotesk)" }}>
                  {item.title}
                </h3>
                <p className="text-[0.88rem] leading-[1.7] text-[#4a5877]">{item.body}</p>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* ── CTA — blue ── */}
      <section className="min-h-[50vh] flex items-center bg-[#2d6cff]">
        <div className="content-wrap page-gutter w-full py-24 text-center">
          <p className="text-[0.68rem] font-semibold tracking-[0.28em] uppercase text-white/60 mb-6">
            Ready To Evolve?
          </p>
          <h2 className="text-[clamp(2.5rem,5vw,4rem)] font-extrabold uppercase leading-[0.92] text-white mb-10" style={{ fontFamily: "var(--font-space-grotesk)" }}>
            Ready To See The<br />Platform In Action?
          </h2>
          <div className="flex gap-4 justify-center flex-wrap">
            <Link href="/buy" className="text-[0.9rem] font-bold px-8 py-3.5 bg-white text-[#2d6cff] hover:bg-white/90 transition-colors no-underline">
              Deploy the Mission
            </Link>
            <Link href="/company#contact" className="text-[0.9rem] font-medium px-8 py-3.5 border border-white/40 text-white hover:border-white/70 transition-colors no-underline">
              Schedule a Demo
            </Link>
          </div>
        </div>
      </section>

    </div>
  );
}
