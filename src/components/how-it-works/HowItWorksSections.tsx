import Image from "next/image";
import Link from "next/link";
import { Send } from "lucide-react";
import { homeTheme } from "@/lib/homeTheme";
import { conversationExample, receiveReports, stats, steps } from "./data";

export default function HowItWorksSections() {
  return (
    <div className="min-h-screen">
      {/* 1 — Dark: Hero */}
      <section
        className="relative overflow-hidden pt-28 pb-16 text-white md:pb-20 page-gutter"
        style={{ background: homeTheme.heroGradient }}
      >
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
          <p
            className="mb-5 text-[0.68rem] font-semibold tracking-[0.28em] uppercase"
            style={{ color: homeTheme.blue }}
          >
            How it works
          </p>
          <h1
            className="mb-6 text-[clamp(2rem,5vw,3.25rem)] font-extrabold leading-[1.08] tracking-[-0.02em] uppercase"
            style={{ fontFamily: "var(--font-space-grotesk)" }}
          >
            From launch to insight in{" "}
            <span style={{ color: homeTheme.blueBright }}>days — not weeks.</span>
          </h1>
          <p className="mb-10 max-w-[52ch] text-[1.05rem] leading-[1.75]" style={{ color: homeTheme.textBody }}>
            Interval 360 is designed to reduce friction at every stage of the 360 process — for the people providing feedback, for the leader receiving it, and for the HR team or coach running it.
          </p>
          <div className="flex flex-wrap items-center gap-3">
            <Link
              href="/buy"
              className="inline-flex items-center justify-center rounded-sm px-7 py-3 text-[0.82rem] font-semibold tracking-wide text-white no-underline transition-colors hover:bg-[#1a57e8] uppercase"
              style={{ background: homeTheme.blue, boxShadow: homeTheme.blueShadow }}
            >
              Buy an assessment
            </Link>
            <Link
              href="/company#contact"
              className="inline-flex items-center justify-center rounded-sm border px-7 py-3 text-[0.82rem] font-semibold tracking-wide text-white no-underline transition-colors hover:border-white/40 uppercase"
              style={{
                borderColor: homeTheme.outlineButtonBorder,
                background: homeTheme.outlineButtonBg,
              }}
            >
              Book a call
            </Link>
            <Link
              href="#conversation"
              className="inline-flex items-center gap-1.5 border-b border-current px-0.5 py-3 text-[0.82rem] font-medium no-underline transition-opacity hover:opacity-80 uppercase"
              style={{ color: homeTheme.linkMuted }}
            >
              See the conversation <span aria-hidden>→</span>
            </Link>
          </div>
        </div>
      </section>

      {/* 2 — Light: Stats */}
      <div className="border-y" style={{ borderColor: homeTheme.lightRule, background: homeTheme.sectionWhite }}>
        <div className="content-wrap page-gutter grid grid-cols-2 gap-px lg:grid-cols-4" style={{ background: homeTheme.lightRule }}>
          {stats.map((stat) => (
            <div
              key={stat.num}
              className="flex flex-col items-center justify-center gap-1 px-4 py-8 text-center md:py-10"
              style={{ background: homeTheme.sectionWhite }}
            >
              <span
                className="text-[clamp(1.35rem,2.8vw,1.85rem)] font-extrabold tracking-tight"
                style={{ fontFamily: "var(--font-space-grotesk)", color: homeTheme.blue }}
              >
                {stat.num}
              </span>
              <span
                className="max-w-[18ch] text-[0.65rem] font-semibold uppercase leading-snug tracking-[0.14em]"
                style={{ color: homeTheme.lightBody }}
              >
                {stat.label}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* 3 — Dark: Process */}
      <section
        className="border-b py-20 text-white md:py-28"
        style={{ borderColor: homeTheme.borderSubtle, background: homeTheme.sectionBlack }}
      >
        <div className="content-wrap page-gutter">
          <h2
            className="mb-14 text-[clamp(1.75rem,3vw,2.5rem)] font-bold tracking-tight uppercase md:mb-16"
            style={{ fontFamily: "var(--font-space-grotesk)" }}
          >
            The process
          </h2>
          <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 xl:grid-cols-5 xl:gap-6">
            {steps.map((step) => (
              <div key={step.num} className="relative min-h-44">
                <span
                  className="pointer-events-none absolute -left-1 -top-4 select-none text-[4.25rem] font-extrabold leading-none text-white/[0.08] sm:text-[4.75rem]"
                  style={{ fontFamily: "var(--font-space-grotesk)" }}
                  aria-hidden
                >
                  {step.num}
                </span>
                <div className="relative z-10 flex h-full flex-col pt-10">
                  <h3
                    className="mb-3 text-[0.78rem] font-bold uppercase leading-snug tracking-[0.12em]"
                    style={{ fontFamily: "var(--font-space-grotesk)" }}
                  >
                    {step.title}
                  </h3>
                  <p className="mb-4 text-[0.88rem] leading-[1.7]" style={{ color: homeTheme.textMuted }}>
                    {step.body}
                  </p>
                  <span
                    className="mt-auto inline-block w-fit rounded px-2.5 py-1 text-[0.65rem] font-semibold uppercase tracking-[0.1em]"
                    style={{ background: homeTheme.blueTint12, color: homeTheme.blue }}
                  >
                    {step.time}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4 — Light: Conversation */}
      <section
        id="conversation"
        className="scroll-mt-24 border-b py-20 md:py-28"
        style={{ borderColor: homeTheme.lightRule, background: homeTheme.sectionPaper }}
      >
        <div className="content-wrap page-gutter grid items-start gap-14 lg:grid-cols-2 lg:gap-20">
          <div>
            <h2
              className="mb-6 text-[clamp(1.75rem,3vw,2.5rem)] font-bold tracking-tight uppercase"
              style={{ fontFamily: "var(--font-space-grotesk)", color: homeTheme.lightHeading }}
            >
              The conversation
            </h2>
            <p className="mb-6 text-[1.02rem] leading-[1.75]" style={{ color: homeTheme.lightBody }}>
              The AI starts with structured opening questions designed to elicit useful, specific input. When a response is general, it follows up with a targeted probe — the same way a skilled interviewer would.
            </p>
            <p className="mb-8 text-[1.02rem] leading-[1.75]" style={{ color: homeTheme.lightBody }}>
              The result is feedback that is richer, more specific, and more useful than anything a static survey can produce — in the same amount of time.
            </p>
            <div
              className="inline-flex items-center gap-2.5 rounded-full border px-4 py-2"
              style={{
                borderColor: homeTheme.lightRule,
                background: homeTheme.sectionWhite,
              }}
              role="status"
            >
              <span className="relative flex h-2 w-2">
                <span
                  className="absolute inline-flex h-full w-full animate-ping rounded-full opacity-40"
                  style={{ background: homeTheme.blue }}
                />
                <span className="relative inline-flex h-2 w-2 rounded-full" style={{ background: homeTheme.blue }} />
              </span>
              <span
                className="text-[0.62rem] font-semibold uppercase tracking-[0.2em]"
                style={{ color: homeTheme.lightBody }}
              >
                AI intelligence pulse active
              </span>
            </div>
          </div>

          <div className="overflow-hidden rounded-xl border border-black/10 bg-[#101010] text-white shadow-[0_24px_80px_rgba(0,0,0,0.18)]">
            <div className="flex items-center gap-2 border-b border-white/8 px-4 py-3">
              <div className="flex gap-1.5">
                <span className="size-2.5 rounded-full bg-[#ff5f57]/90" />
                <span className="size-2.5 rounded-full bg-[#febc2e]/90" />
                <span className="size-2.5 rounded-full bg-[#28c840]/90" />
              </div>
              <span className="ml-2 text-[0.72rem] text-white/35">Interval 360 — Feedback Conversation</span>
            </div>
            <div className="flex max-h-[min(28rem,70vh)] flex-col gap-4 overflow-y-auto p-5 md:p-6">
              {conversationExample.map((msg, i) => (
                <div key={i} className={`flex ${msg.speaker === "rater" ? "justify-end" : "justify-start"}`}>
                  <div
                    className={`max-w-[92%] rounded-2xl px-4 py-3 text-[0.86rem] leading-[1.65] md:max-w-[88%] ${
                      msg.speaker === "ai"
                        ? "rounded-bl-md border text-white/90"
                        : "rounded-br-md bg-white/7 text-white/80"
                    }`}
                    style={
                      msg.speaker === "ai"
                        ? {
                            borderColor: "rgba(187,220,251,0.22)",
                            background: `linear-gradient(165deg, ${homeTheme.blueTint35} 0%, ${homeTheme.blueTint12} 100%)`,
                          }
                        : undefined
                    }
                  >
                    {msg.speaker === "ai" && (
                      <span
                        className="mb-1.5 block text-[0.62rem] font-bold uppercase tracking-[0.16em]"
                        style={{ color: homeTheme.blue }}
                      >
                        Interval 360 AI
                      </span>
                    )}
                    {msg.text}
                  </div>
                </div>
              ))}
            </div>
            <div className="flex items-center gap-2 border-t border-white/8 px-4 py-3">
              <div className="flex flex-1 items-center rounded-lg border border-white/10 bg-black/40 px-3 py-2.5">
                <span className="text-[0.78rem] text-white/25">Type a response…</span>
              </div>
              <button
                type="button"
                className="flex size-10 shrink-0 items-center justify-center rounded-lg border border-white/12 bg-white/6 text-white/50"
                aria-label="Send (illustration)"
              >
                <Send className="size-4" aria-hidden />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* 5 — Dark: What you receive */}
      <section className="py-20 text-white md:py-28" style={{ background: homeTheme.sectionCharcoal }}>
        <div className="content-wrap page-gutter">
          <h2
            className="mx-auto mb-14 text-center text-[clamp(1.75rem,3vw,2.5rem)] font-bold tracking-tight uppercase md:mb-16"
            style={{ fontFamily: "var(--font-space-grotesk)" }}
          >
            What you receive
          </h2>
          <p className="mx-auto mb-12 max-w-[56ch] text-center text-[1.02rem] leading-[1.75]" style={{ color: homeTheme.textFaint }}>
            Every Interval 360 assessment produces two distinct reports — one for the organization and one for the leader. Both are designed to be used directly, without additional interpretation.
          </p>
          <div className="grid gap-8 lg:grid-cols-2 lg:gap-10">
            {receiveReports.map((report) => (
              <div
                key={report.label}
                className="flex flex-col overflow-hidden rounded-2xl border border-white/9 bg-[#0c0c0c]"
              >
                <div className="p-8 pb-6">
                  <p className="mb-2 text-[0.68rem] font-bold uppercase tracking-[0.18em]">{report.label}</p>
                  <p
                    className="mb-6 text-[0.72rem] font-semibold uppercase tracking-[0.16em]"
                    style={{ color: homeTheme.blue }}
                  >
                    {report.subtitle}
                  </p>
                  <ul className="flex flex-col gap-2.5">
                    {report.items.map((item) => (
                      <li key={item} className="flex items-start gap-2.5 text-[0.88rem] leading-[1.55]" style={{ color: homeTheme.textMuted }}>
                        <span
                          className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full"
                          style={{ background: homeTheme.blue }}
                          aria-hidden
                        />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="relative mt-auto aspect-16/10 w-full border-t border-white/6 bg-black/50">
                  <Image
                    src={report.image}
                    alt={report.imageAlt}
                    fill
                    className="object-cover object-top opacity-90"
                    sizes="(max-width: 1024px) 100vw, 50vw"
                  />
                  <div className="pointer-events-none absolute inset-0 bg-linear-to-t from-[#0c0c0c] via-transparent to-transparent opacity-70" />
                </div>
              </div>
            ))}
          </div>
          <div className="mt-10 flex justify-center">
            <Link
              href="/reports-and-outputs"
              className="text-[0.88rem] font-semibold no-underline border-b pb-0.5 transition-opacity hover:opacity-70 uppercase"
              style={{ color: homeTheme.blue, borderColor: homeTheme.blue }}
            >
              See report structure →
            </Link>
          </div>
        </div>
      </section>

      {/* 6 — Light: Final CTA */}
      <section
        className="relative overflow-hidden border-t py-24 md:py-32"
        style={{ borderColor: homeTheme.lightRule, background: homeTheme.sectionWhite }}
      >
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
          <h2
            className="mb-6 text-[clamp(1.65rem,3.2vw,2.35rem)] font-bold leading-[1.2] uppercase"
            style={{ fontFamily: "var(--font-space-grotesk)", color: homeTheme.lightHeading }}
          >
            Ready to see the process in action?
          </h2>
          <p className="mb-10 text-[1.05rem] leading-[1.75]" style={{ color: homeTheme.lightBody }}>
            Buy a single assessment and experience the full process — from setup to report.
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            <Link
              href="/buy"
              className="inline-flex items-center justify-center rounded-sm px-8 py-3.5 text-[0.85rem] font-semibold text-white no-underline transition-colors hover:bg-[#1a57e8] uppercase"
              style={{ background: homeTheme.blue, boxShadow: homeTheme.blueShadow }}
            >
              Buy an assessment
            </Link>
            <Link
              href="/company#contact"
              className="inline-flex items-center justify-center rounded-sm border-2 border-transparent bg-transparent px-8 py-3.5 text-[0.85rem] font-medium no-underline transition-colors hover:bg-black/[0.03] uppercase"
              style={{
                color: homeTheme.lightHeading,
                borderColor: homeTheme.lightHeading,
              }}
            >
              Book a call
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
