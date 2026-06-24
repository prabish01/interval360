import Image from "next/image";
import Link from "next/link";
import { homeTheme } from "@/lib/homeTheme";
import { receiveReports, stats, steps } from "./data";
import { ConversationSection } from "./ConversationSection";
import { BookACallButton } from "@/components/BookACallButton";

export default function HowItWorksSections() {
  return (
    <div className="min-h-screen">
      {/* 1 — Dark: Hero */}
      <section className="relative overflow-hidden pt-28 pb-16 text-white md:pb-20 page-gutter" style={{ background: homeTheme.heroGradient }}>
        <div className="pointer-events-none absolute inset-0 grid-pattern" style={{ opacity: 0.16 }} />
        <div
          className="pointer-events-none absolute inset-0 opacity-50"
          style={{
            backgroundImage: `
              radial-gradient(ellipse 80% 50% at 50% -20%, ${homeTheme.blueGlowSoft}, transparent 55%)
            `,
          }}
        />
        <div className="content-wrap relative z-10 max-w-4xl">
          <p className="mb-5 text-xs font-semibold tracking-[0.28em] uppercase" style={{ color: homeTheme.blue }}>
            How it works
          </p>
          <h1 className="mb-6 text-[clamp(3rem,7vw,5.5rem)] font-extrabold leading-[1.08] tracking-[-0.02em] uppercase" style={{ fontFamily: "var(--font-space-grotesk)" }}>
            From launch to insight in <span style={{ color: homeTheme.blueBright }}>days — not weeks.</span>
          </h1>
          <p className="mb-10 max-w-[52ch] text-base leading-[1.75]" style={{ color: homeTheme.textBody }}>
            Interval 360 is designed to reduce friction at every stage of the 360 process — for the people providing feedback, for the leader receiving it, and for the HR team or coach running it. For a full overview, see <Link href="/platform-overview" className="underline hover:opacity-80" style={{ color: "rgba(255,255,255,0.9)" }}>how the platform works</Link>.
          </p>
          <div className="flex flex-wrap items-center gap-3">
            <Link href="/buy" className="inline-flex items-center justify-center rounded-sm px-7 py-3 text-sm font-semibold tracking-wide text-white no-underline transition-colors hover:bg-[#1a57e8] uppercase" style={{ background: homeTheme.blue, boxShadow: homeTheme.blueShadow }}>
              Buy an Assessment
            </Link>
            <BookACallButton
              className="inline-flex items-center justify-center rounded-sm border px-7 py-3 text-sm font-semibold tracking-wide text-white no-underline transition-colors hover:border-white/40 uppercase"
              style={{
                borderColor: homeTheme.outlineButtonBorder,
                background: homeTheme.outlineButtonBg,
              }}
            >
              Book a Call
            </BookACallButton>
            <Link href="#conversation" className="inline-flex items-center gap-1.5 border-b border-current px-0.5 py-3 text-sm font-medium no-underline transition-opacity hover:opacity-80 uppercase" style={{ color: homeTheme.linkMuted }}>
              See the conversation <span aria-hidden>→</span>
            </Link>
          </div>
        </div>
      </section>

      {/* 2 — Light: Stats */}
      <div className="border-y" style={{ borderColor: homeTheme.lightRule, background: homeTheme.sectionWhite }}>
        <div className="content-wrap page-gutter grid grid-cols-2 gap-px lg:grid-cols-4" style={{ background: homeTheme.lightRule }}>
          {stats.map((stat) => (
            <div key={stat.num} className="flex flex-col items-center justify-center gap-1 px-4 py-8 text-center md:py-10" style={{ background: homeTheme.sectionWhite }}>
              <span className="text-[clamp(1.35rem,2.8vw,1.85rem)] font-extrabold tracking-tight" style={{ fontFamily: "var(--font-space-grotesk)", color: homeTheme.blue }}>
                {stat.num}
              </span>
              <span className="max-w-[18ch] text-xs font-semibold uppercase leading-snug tracking-[0.14em]" style={{ color: homeTheme.lightBody }}>
                {stat.label}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* 3 — Dark: Process */}
      <section className="border-b py-20 text-white md:py-28" style={{ borderColor: homeTheme.borderSubtle, background: homeTheme.sectionBlack }}>
        <div className="content-wrap page-gutter">
          <h2 className="mb-14 text-[clamp(1.75rem,3vw,2.5rem)] font-bold tracking-tight uppercase md:mb-16" style={{ fontFamily: "var(--font-space-grotesk)" }}>
            The process
          </h2>
          <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 xl:grid-cols-5 xl:gap-6">
            {steps.map((step) => (
              <div key={step.num} className="relative min-h-44">
                <span className="pointer-events-none absolute -left-1 -top-4 select-none text-[4.25rem] font-extrabold leading-none text-white/[0.08] sm:text-[4.75rem]" style={{ fontFamily: "var(--font-space-grotesk)" }} aria-hidden>
                  {step.num}
                </span>
                <div className="relative z-10 flex h-full flex-col pt-10">
                  <h3 className="mb-3 text-sm font-bold uppercase leading-snug tracking-[0.12em]" style={{ fontFamily: "var(--font-space-grotesk)" }}>
                    {step.title}
                  </h3>
                  <p className="mb-4 text-base leading-[1.7]" style={{ color: homeTheme.textMuted }}>
                    {step.body}
                  </p>
                  <span className="mt-auto inline-block w-fit rounded px-2.5 py-1 text-xs font-semibold uppercase tracking-[0.1em]" style={{ background: homeTheme.blueTint12, color: homeTheme.blue }}>
                    {step.time}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4 — Light: Conversation */}
      <ConversationSection />

      {/* 5 — Dark: What you receive */}
      <section className="py-20 text-white md:py-28" style={{ background: homeTheme.sectionCharcoal }}>
        <div className="content-wrap page-gutter">
          <h2 className="mx-auto mb-14 text-center text-[clamp(1.75rem,3vw,2.5rem)] font-bold tracking-tight uppercase md:mb-16" style={{ fontFamily: "var(--font-space-grotesk)" }}>
            What you receive
          </h2>
          <p className="mx-auto mb-12 max-w-[56ch] text-center text-base leading-[1.75]" style={{ color: homeTheme.textFaint }}>
            Every Interval 360 assessment produces two distinct reports — one for the organization and one for the leader. Both are designed to be used directly, without additional interpretation.
          </p>
          <div className="grid gap-8 lg:grid-cols-2 lg:gap-10">
            {receiveReports.map((report) => (
              <div key={report.label} className="flex flex-col overflow-hidden rounded-2xl border border-white/9 bg-[#0c0c0c]">
                <div className="p-8 pb-6">
                  <p className="mb-2 text-xs font-bold uppercase tracking-[0.18em]">{report.label}</p>
                  <p className="mb-6 text-xs font-semibold uppercase tracking-[0.16em]" style={{ color: homeTheme.blue }}>
                    {report.subtitle}
                  </p>
                  <ul className="flex flex-col gap-2.5">
                    {report.items.map((item) => (
                      <li key={item} className="flex items-start gap-2.5 text-base leading-[1.55]" style={{ color: homeTheme.textMuted }}>
                        <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full" style={{ background: homeTheme.blue }} aria-hidden />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="relative mt-auto aspect-16/10 w-full border-t border-white/6 bg-black/50">
                  <Image src={report.image} alt={report.imageAlt} fill className="object-cover object-top opacity-90" sizes="(max-width: 1024px) 100vw, 50vw" />
                  <div className="pointer-events-none absolute inset-0 bg-linear-to-t from-[#0c0c0c] via-transparent to-transparent opacity-70" />
                </div>
              </div>
            ))}
          </div>
          <div className="mt-10 flex justify-center">
            <Link href="/reports-and-outputs" className="text-base font-semibold no-underline border-b pb-0.5 transition-opacity hover:opacity-70 uppercase" style={{ color: homeTheme.blue, borderColor: homeTheme.blue }}>
              See report structure →
            </Link>
          </div>
        </div>
      </section>

      {/* 6 — Light: Final CTA */}
      <section className="relative overflow-hidden border-t py-24 md:py-32" style={{ borderColor: homeTheme.lightRule, background: homeTheme.sectionWhite }}>
        <div
          className="pointer-events-none absolute inset-0 opacity-[0.07]"
          style={{
            backgroundImage: `
              linear-gradient(${homeTheme.lightRule} 1px, transparent 1px),
              linear-gradient(90deg, ${homeTheme.lightRule} 1px, transparent 1px)
            `,
            backgroundSize: "40px 40px",
          }}
        />
        <div className="content-wrap page-gutter relative z-10 mx-auto max-w-3xl text-center">
          <h2 className="mb-6 text-[clamp(1.65rem,3.2vw,2.35rem)] font-bold leading-[1.2] uppercase" style={{ fontFamily: "var(--font-space-grotesk)", color: homeTheme.lightHeading }}>
            Ready to see the process in action?
          </h2>
          <p className="mb-10 text-base leading-[1.75]" style={{ color: homeTheme.lightBody }}>
            Buy a single assessment and experience the full process — from setup to report. Check <Link href="/pricing" className="underline hover:opacity-80" style={{ color: homeTheme.blue }}>what it costs</Link>.
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            <Link href="/buy" className="inline-flex items-center justify-center rounded-sm px-8 py-3.5 text-sm font-semibold text-white no-underline transition-colors hover:bg-[#1a57e8] uppercase" style={{ background: homeTheme.blue, boxShadow: homeTheme.blueShadow }}>
              Buy an Assessment
            </Link>
            <BookACallButton
              className="inline-flex items-center justify-center rounded-sm border-2 border-transparent bg-transparent px-8 py-3.5 text-sm font-medium no-underline transition-colors hover:bg-black/[0.03] uppercase"
              style={{
                color: homeTheme.lightHeading,
                borderColor: homeTheme.lightHeading,
              }}
            >
              Book a Call
            </BookACallButton>
          </div>
        </div>
      </section>
    </div>
  );
}
