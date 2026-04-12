import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { homeTheme } from "@/lib/homeTheme";
import { coachValueProps, useCases } from "./data";

function UseCaseImage({ index }: { index: number }) {
  const layers = [
    "linear-gradient(145deg, #2a2a2a 0%, #0f0f0f 55%, #1c1c1c 100%)",
    "linear-gradient(145deg, #353535 0%, #121212 50%, #252525 100%)",
    "linear-gradient(145deg, #1f1f1f 0%, #0a0a0a 48%, #2e2e2e 100%)",
  ];
  return (
    <div className="relative aspect-4/3 w-full overflow-hidden">
      <div className="absolute inset-0" style={{ background: layers[index % 3] }} />
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.12]"
        style={{
          backgroundImage: `linear-gradient(${homeTheme.lightRule} 1px, transparent 1px), linear-gradient(90deg, ${homeTheme.lightRule} 1px, transparent 1px)`,
          backgroundSize: "20px 20px",
        }}
      />
    </div>
  );
}

export default function SolutionsSections() {
  return (
    <div className="min-h-screen">
      {/* 1 — Dark hero */}
      <section
        className="relative overflow-hidden pt-28 pb-20 text-white md:pb-28 page-gutter"
        style={{ background: homeTheme.heroGradient }}
      >
        <div className="pointer-events-none absolute inset-0 grid-pattern" style={{ opacity: 0.16 }} />
        <div
          className="pointer-events-none absolute inset-0 opacity-50"
          style={{
            backgroundImage: `radial-gradient(ellipse 80% 50% at 50% -20%, ${homeTheme.blueGlowSoft}, transparent 55%)`,
          }}
        />
        <div className="content-wrap relative z-10 max-w-4xl">
          <p
            className="mb-5 text-[0.68rem] font-semibold tracking-[0.32em] uppercase"
            style={{ color: homeTheme.blue }}
          >
            Precision intelligence
          </p>
          <h1
            className="mb-6 text-[clamp(2rem,4.6vw,3.25rem)] font-extrabold leading-[1.08] tracking-[-0.02em] uppercase"
            style={{ fontFamily: "var(--font-space-grotesk)" }}
          >
            Solutions: Better leadership feedback for the moments that matter most.
          </h1>
          <p className="mb-10 max-w-[52ch] text-[1.05rem] leading-[1.75]" style={{ color: homeTheme.textBody }}>
            Interval 360 is built for the specific moments where leadership insight is most valuable — talent decisions, development programs, and leadership transitions. Find your use case below.
          </p>
          <div className="flex flex-wrap items-center gap-3">
            <Link
              href="#use-cases"
              className="inline-flex items-center justify-center gap-2 rounded-sm px-7 py-3 text-[0.8rem] font-semibold tracking-wide text-white no-underline transition-colors hover:bg-[#1a57e8] uppercase"
              style={{ background: homeTheme.blue, boxShadow: homeTheme.blueShadow }}
            >
              Explore methodology
              <ArrowRight className="size-4 shrink-0" aria-hidden />
            </Link>
            <Link
              href="/company#contact"
              className="inline-flex items-center justify-center rounded-sm border px-7 py-3 text-[0.8rem] font-semibold tracking-wide text-white no-underline transition-colors hover:border-white/40 uppercase"
              style={{
                borderColor: homeTheme.outlineButtonBorder,
                background: homeTheme.outlineButtonBg,
              }}
            >
              Book demo
            </Link>
          </div>
        </div>
      </section>

      {/* 2 — Light: use cases */}
      <section
        id="use-cases"
        className="scroll-mt-24 border-y py-20 md:py-28"
        style={{ borderColor: homeTheme.lightRule, background: homeTheme.sectionWhite }}
      >
        <div className="content-wrap page-gutter">
          <p
            className="mb-4 text-[0.68rem] font-semibold tracking-[0.28em] uppercase"
            style={{ color: homeTheme.lightBody }}
          >
            Use cases
          </p>
          <h2
            className="mb-14 text-[clamp(1.85rem,3.5vw,2.75rem)] font-bold leading-[1.12] tracking-tight uppercase md:mb-16"
            style={{ fontFamily: "var(--font-space-grotesk)", color: homeTheme.lightHeading }}
          >
            Where Interval 360 makes the{" "}
            <span style={{ color: homeTheme.blue }}>biggest difference.</span>
          </h2>

          <div className="grid gap-10 lg:grid-cols-3 lg:gap-8">
            {useCases.map((uc, i) => (
              <article
                key={uc.href}
                className="flex flex-col overflow-hidden border transition-shadow hover:shadow-[0_20px_50px_rgba(0,0,0,0.08)]"
                style={{ borderColor: homeTheme.lightRule, background: homeTheme.sectionWhite }}
              >
                <UseCaseImage index={i} />
                <div className="flex flex-1 flex-col p-8">
                  <p className="mb-2 text-[0.65rem] font-semibold uppercase tracking-[0.18em]" style={{ color: homeTheme.lightBody }}>
                    {uc.num}
                  </p>
                  <h3
                    className="mb-4 text-[1.05rem] font-bold uppercase leading-snug tracking-wide"
                    style={{ fontFamily: "var(--font-space-grotesk)", color: homeTheme.lightHeading }}
                  >
                    {uc.title}
                  </h3>
                  <p className="mb-6 flex-1 text-[0.92rem] leading-[1.7]" style={{ color: homeTheme.lightBody }}>
                    {uc.body}
                  </p>
                  <div className="mb-6 flex flex-wrap gap-2">
                    {uc.who.map((tag) => (
                      <span
                        key={tag}
                        className="text-[0.62rem] font-semibold uppercase tracking-[0.12em]"
                        style={{
                          color: homeTheme.lightBody,
                          background: homeTheme.sectionPaper,
                          padding: "0.35rem 0.65rem",
                          border: `1px solid ${homeTheme.lightRule}`,
                        }}
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  <Link
                    href={uc.href}
                    className="inline-flex items-center gap-1.5 text-[0.82rem] font-semibold no-underline transition-opacity hover:opacity-75 uppercase"
                    style={{ color: homeTheme.blue }}
                  >
                    See how it works
                    <ArrowRight className="size-4" aria-hidden />
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* 3 — Dark: coaches */}
      <section
        className="border-b py-20 text-white md:py-28"
        style={{ borderColor: homeTheme.borderSubtle, background: homeTheme.sectionBlack }}
      >
        <div className="content-wrap page-gutter">
          <p
            className="mb-4 text-[0.68rem] font-semibold tracking-[0.28em] uppercase"
            style={{ color: homeTheme.blue }}
          >
            Partner ecosystem
          </p>
          <h2
            className="mb-6 max-w-[42ch] text-[clamp(1.75rem,3.2vw,2.5rem)] font-bold leading-[1.15] tracking-tight uppercase"
            style={{ fontFamily: "var(--font-space-grotesk)" }}
          >
            For coaches: A repeatable, client-ready 360 process —{" "}
            <span style={{ color: homeTheme.blueBright }}>without building one yourself.</span>
          </h2>
          <p className="mb-14 max-w-[56ch] text-[1.02rem] leading-[1.75] md:mb-16" style={{ color: homeTheme.textMuted }}>
            Interval 360 gives coaches and consultants a fast, reliable way to run a structured leadership 360 for any client — with professional-quality outputs ready to use in a debrief conversation the same day they arrive.
          </p>

          <div className="grid gap-5 md:grid-cols-3">
            {coachValueProps.map((item) => (
              <div
                key={item.title}
                className="flex flex-col border p-6 md:p-8"
                style={{
                  borderColor: "rgba(255,255,255,0.1)",
                  background: "rgba(255,255,255,0.03)",
                }}
              >
                <div className="mb-5 size-3 shrink-0" style={{ background: homeTheme.blue }} aria-hidden />
                <h3
                  className="mb-3 text-[0.95rem] font-bold uppercase leading-snug tracking-wide"
                  style={{ fontFamily: "var(--font-space-grotesk)" }}
                >
                  {item.title}
                </h3>
                <p className="text-[0.88rem] leading-[1.65]" style={{ color: homeTheme.textMuted }}>
                  {item.body}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-12">
            <Link
              href="/for-coaches"
              className="inline-flex items-center gap-2 text-[0.88rem] font-semibold text-white no-underline transition-opacity hover:opacity-80 uppercase"
            >
              Become a certified partner
              <ArrowRight className="size-4" aria-hidden />
            </Link>
          </div>
        </div>
      </section>

      {/* 4 — Dark: triple CTA band */}
      <section className="border-b py-0 text-white" style={{ borderColor: homeTheme.borderSubtle, background: homeTheme.sectionCharcoal }}>
        <div className="content-wrap page-gutter grid md:grid-cols-3">
          <div
            className="flex flex-col justify-center gap-6 border-b py-14 md:border-b-0 md:border-r md:py-16"
            style={{ borderColor: homeTheme.borderSubtle }}
          >
            <p
              className="max-w-[22ch] text-[clamp(1.25rem,2.2vw,1.5rem)] font-bold uppercase leading-snug"
              style={{ fontFamily: "var(--font-space-grotesk)" }}
            >
              Start your next leadership cycle today.
            </p>
            <Link
              href="/buy"
              className="inline-flex w-fit items-center justify-center rounded-sm px-8 py-3 text-[0.8rem] font-semibold text-white no-underline transition-colors hover:bg-[#1a57e8] uppercase"
              style={{ background: homeTheme.blue, boxShadow: homeTheme.blueShadow }}
            >
              Get started
            </Link>
          </div>

          <div
            className="relative flex min-h-[14rem] items-center justify-center overflow-hidden border-b py-14 md:border-b-0 md:border-r md:py-16"
            style={{ borderColor: homeTheme.borderSubtle }}
          >
            <div className="absolute inset-0 opacity-40" style={{ background: homeTheme.heroGradient }} />
            <div
              className="pointer-events-none absolute inset-0 opacity-20"
              style={{
                backgroundImage: `radial-gradient(circle at 50% 50%, ${homeTheme.blueGlowSoft}, transparent 65%)`,
              }}
            />
            <p className="relative z-10 px-6 text-center text-[0.72rem] font-semibold uppercase tracking-[0.35em] text-white/45">
              Interval 360
            </p>
          </div>

          <div className="flex flex-col justify-center py-14 md:py-16">
            <p
              className="text-[clamp(2.5rem,5vw,3.5rem)] font-extrabold leading-none tracking-tight"
              style={{ fontFamily: "var(--font-space-grotesk)", color: homeTheme.blue }}
            >
              98%
            </p>
            <p className="mt-3 text-[0.85rem] font-bold uppercase tracking-[0.2em] text-white/80">User satisfaction</p>
            <p className="mt-4 max-w-[28ch] text-[0.78rem] leading-[1.6] text-white/45">
              Based on post-assessment feedback from raters and leaders across pilot programs.
            </p>
          </div>
        </div>
      </section>

      {/* 5 — Light: closing */}
      <section className="py-20 md:py-24" style={{ background: homeTheme.sectionPaper }}>
        <div className="content-wrap page-gutter text-center">
          <h2
            className="mx-auto mb-5 max-w-[30ch] text-[clamp(1.5rem,2.8vw,2rem)] font-bold uppercase leading-snug"
            style={{ fontFamily: "var(--font-space-grotesk)", color: homeTheme.lightHeading }}
          >
            Find the use case that fits your organization.
          </h2>
          <p className="mx-auto mb-10 max-w-[48ch] text-[1.02rem] leading-[1.75]" style={{ color: homeTheme.lightBody }}>
            All use cases start with the same process. Talk to us about which one fits your immediate need.
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            <Link
              href="/company#contact"
              className="inline-flex items-center justify-center rounded-sm px-8 py-3.5 text-[0.85rem] font-semibold text-white no-underline transition-colors hover:bg-[#1a57e8] uppercase"
              style={{ background: homeTheme.blue, boxShadow: homeTheme.blueShadow }}
            >
              Book a call
            </Link>
            <Link
              href="/buy"
              className="inline-flex items-center justify-center rounded-sm border-2 border-transparent px-8 py-3.5 text-[0.85rem] font-medium no-underline transition-colors hover:bg-black/[0.03] uppercase"
              style={{
                color: homeTheme.lightHeading,
                borderColor: homeTheme.lightHeading,
              }}
            >
              Buy an assessment
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
