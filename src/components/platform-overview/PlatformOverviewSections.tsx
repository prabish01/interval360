import Link from "next/link";
import PageHero from "@/components/PageHero";
import { differentiators, modelDimensions, whoItems } from "./data";

export default function PlatformOverviewSections() {
  return (
    <>
      <PageHero
        eyebrow="Platform Overview"
        title={<>A leadership assessment platform built for <span style={{ color: "var(--sky-blue)" }}>repeatable, organization-wide 360 assessments.</span></>}
        body="Interval 360 replaces cumbersome survey-based 360 processes with a faster, more scalable approach — producing two purpose-built reports: one that gives managers and HR the insight they need for talent decisions, and one that gives leaders what they need to grow."
        buttons={[
          { href: "/company#contact", label: "Book a Call", variant: "teal" },
          { href: "/reports-and-outputs", label: "See the reports →", variant: "secondary" },
          { href: "/buy", label: "Buy an assessment →", variant: "ghost" },
        ]}
      />

      <section className="py-24 page-gutter" style={{ background: "#fff" }}>
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          <div>
            <span className="inline-block text-[0.72rem] font-bold tracking-[0.15em] uppercase px-3 py-1 rounded mb-5" style={{ background: "rgba(5,79,154,0.08)", color: "var(--navy)" }}>
              Leadership Assessment Platform
            </span>
            <p className="text-[0.72rem] font-semibold tracking-[0.2em] uppercase mb-4" style={{ color: "var(--teal)" }}>What Interval 360 Is</p>
            <h2 className="text-[clamp(1.7rem,3vw,2.3rem)] font-bold leading-[1.2] tracking-[-0.02em]" style={{ fontFamily: "var(--font-poppins)", color: "var(--navy-dark)" }}>
              A focused assessment layer — not another HR platform.
            </h2>
          </div>
          <div className="flex flex-col gap-5">
            <p className="text-[1rem] leading-[1.75]" style={{ color: "var(--slate)" }}>
              Interval 360 is the next-gen talent intelligence platform. AI-powered insights that scale, revealing the talent you have and the leadership development you need.
            </p>
            <p className="text-[1rem] leading-[1.75]" style={{ color: "var(--slate)" }}>
              Unlike broad HR platforms that treat 360 assessments as one module among many, Interval 360 is purpose-built around the assessment process itself — how feedback is collected, how it is synthesized, and how it is used. That focus is what makes the outputs more useful and the process more scalable.
            </p>
            <p className="text-[1rem] leading-[1.75]" style={{ color: "var(--slate)" }}>
              It works for a single leader buying an assessment independently, and for organizations assessing hundreds of leaders across a development program, a succession cycle, or an ongoing assessment cadence.
            </p>
          </div>
        </div>
      </section>

      <section className="py-24 page-gutter" style={{ background: "var(--light-bg)" }}>
        <div className="grid lg:grid-cols-2 gap-16 mb-14 items-end">
          <div>
            <p className="text-[0.72rem] font-semibold tracking-[0.2em] uppercase mb-4" style={{ color: "var(--teal)" }}>What Makes It Different</p>
            <h2 className="text-[clamp(1.7rem,3vw,2.3rem)] font-bold leading-[1.2] tracking-[-0.02em]" style={{ fontFamily: "var(--font-poppins)", color: "var(--navy-dark)" }}>
              Better input. Better output. Less burden.
            </h2>
          </div>
          <p className="text-[1.05rem] leading-[1.75]" style={{ color: "var(--slate)" }}>
            Traditional 360 tools rely on long static surveys and produce exhaustive reports. Interval 360 was built to fix both problems — at the collection stage and the output stage.
          </p>
        </div>
        <div className="grid lg:grid-cols-2 gap-6">
          {differentiators.map((d, i) => (
            <div key={i} className="p-8 rounded-lg" style={{ background: "#fff", border: "1px solid var(--rule)" }}>
              <p className="text-[0.72rem] font-bold tracking-[0.12em] uppercase mb-3" style={{ color: "var(--teal)" }}>{d.num}</p>
              <h3 className="text-[1.05rem] font-semibold mb-3" style={{ fontFamily: "var(--font-poppins)", color: "var(--navy-dark)" }}>{d.title}</h3>
              <p className="text-[0.92rem] leading-[1.7]" style={{ color: "var(--slate)" }}>{d.body}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="py-24 page-gutter" style={{ background: "#fff" }}>
        <p className="text-[0.72rem] font-semibold tracking-[0.2em] uppercase mb-4" style={{ color: "var(--teal)" }}>The Assessment Framework</p>
        <h2 className="text-[clamp(1.7rem,3vw,2.3rem)] font-bold leading-[1.2] tracking-[-0.02em] mb-5 max-w-[28ch]" style={{ fontFamily: "var(--font-poppins)", color: "var(--navy-dark)" }}>Two dimensions. One complete picture.</h2>
        <p className="text-[1.05rem] leading-[1.75] mb-12 max-w-[60ch]" style={{ color: "var(--slate)" }}>Interval 360 evaluates leadership across two dimensions — what a leader delivers and how they lead. Both are required for a complete view of leadership effectiveness.</p>
        <div className="grid lg:grid-cols-2 gap-6">
          {modelDimensions.map((dim) => (
            <div key={dim.label} className="p-10 rounded-lg" style={{ background: "var(--light-bg)", borderTop: `3px solid ${dim.color}` }}>
              <p className="text-[0.72rem] font-bold tracking-[0.15em] uppercase mb-3" style={{ color: dim.color }}>{dim.label}</p>
              <h3 className="text-[1.15rem] font-semibold mb-5" style={{ fontFamily: "var(--font-poppins)", color: "var(--navy-dark)" }}>{dim.title}</h3>
              <ul className="flex flex-col gap-3">
                {dim.items.map((item) => (
                  <li key={item} className="flex items-center gap-3 text-[0.92rem]" style={{ color: "var(--slate)" }}>
                    <span className="w-1.5 h-1.5 rounded-full shrink-0" style={{ background: dim.color }} />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      <section className="py-24 page-gutter" style={{ background: "var(--navy-dark)" }}>
        <p className="text-[0.72rem] font-semibold tracking-[0.2em] uppercase mb-4" style={{ color: "var(--teal-light)" }}>Who It Serves</p>
        <h2 className="text-[clamp(1.7rem,3vw,2.3rem)] font-bold leading-[1.2] tracking-[-0.02em] mb-14 max-w-[28ch]" style={{ fontFamily: "var(--font-poppins)", color: "#fff" }}>Built for individuals and organizations, alike.</h2>
        <div className="grid lg:grid-cols-3 gap-6">
          {whoItems.map((item, i) => (
            <div key={i} className="p-8 rounded-lg" style={{ background: "rgba(255,255,255,0.05)", border: "1px solid rgba(187,220,251,0.15)" }}>
              <p className="text-[0.72rem] font-bold tracking-[0.15em] uppercase mb-3" style={{ color: "var(--teal)" }}>{item.label}</p>
              <h3 className="text-[1.05rem] font-semibold mb-3" style={{ fontFamily: "var(--font-poppins)", color: "#fff" }}>{item.title}</h3>
              <p className="text-[0.92rem] leading-[1.7]" style={{ color: "rgba(234,239,243,0.65)" }}>{item.body}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="py-28 page-gutter text-center relative overflow-hidden" style={{ background: "linear-gradient(135deg, var(--navy-dark) 0%, var(--navy) 100%)" }}>
        <div className="absolute inset-0 pointer-events-none grid-pattern" />
        <div className="relative z-10">
          <h2 className="text-[clamp(1.7rem,3vw,2.3rem)] font-bold leading-[1.2] mb-5 mx-auto max-w-[28ch]" style={{ fontFamily: "var(--font-poppins)", color: "#fff" }}>Ready to see the platform in action?</h2>
          <p className="text-[1.05rem] leading-[1.75] mb-10 mx-auto max-w-[48ch]" style={{ color: "rgba(234,239,243,0.7)" }}>Buy a single assessment, or book a call to discuss an enterprise rollout.</p>
          <div className="flex gap-4 justify-center flex-wrap">
            <Link href="/buy" className="text-[0.9rem] font-semibold px-8 py-3.5 rounded no-underline" style={{ background: "var(--teal)", color: "#fff" }}>Buy an Assessment</Link>
            <Link href="/company#contact" className="text-[0.9rem] font-medium px-8 py-3.5 rounded border-[1.5px] no-underline" style={{ color: "#fff", borderColor: "rgba(255,255,255,0.4)", background: "transparent" }}>Book a Call</Link>
          </div>
        </div>
      </section>
    </>
  );
}
