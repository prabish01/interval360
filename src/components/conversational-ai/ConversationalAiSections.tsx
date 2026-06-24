import Link from "next/link";
import {
  ArrowRight,
  Bot,
  MessageSquareText,
  ShieldCheck,
  Zap,
} from "lucide-react";
import { homeTheme, marketingTypography } from "@/lib/homeTheme";
import { surveyVsConvo, followUpExample } from "./data";

export default function ConversationalAiSections() {
  return (
    <div className="min-h-screen">
      {/* ── Hero — cinematic dark ── */}
      <section className="relative min-h-[85vh] overflow-hidden pt-24 text-white md:min-h-[78vh]">
        <div
          className="absolute inset-0"
          style={{
            background: `
              radial-gradient(ellipse 110% 75% at 60% 110%, rgba(45,108,255,0.32) 0%, transparent 48%),
              radial-gradient(ellipse 70% 55% at 15% 20%, rgba(0,106,245,0.12) 0%, transparent 45%),
              linear-gradient(180deg, #020510 0%, #061027 38%, #0a1428 100%)
            `,
          }}
        />
        <div className="pointer-events-none absolute inset-0 grid-pattern opacity-[0.14]" />
        <div
          className="pointer-events-none absolute inset-0 opacity-[0.4]"
          style={{
            backgroundImage: `radial-gradient(1.5px 1.5px at 20% 30%, rgba(255,255,255,0.35) 0%, transparent 100%),
              radial-gradient(1px 1px at 60% 70%, rgba(255,255,255,0.2) 0%, transparent 100%),
              radial-gradient(1px 1px at 80% 40%, rgba(255,255,255,0.15) 0%, transparent 100%)`,
            backgroundSize: "280px 280px, 320px 320px, 400px 400px",
          }}
        />
        <div className="absolute inset-0 bg-linear-to-t from-black/50 via-transparent to-black/40" />

        <div className="relative z-10 flex min-h-[85vh] flex-col justify-end pb-16 md:min-h-[78vh] md:justify-center md:pb-0 page-gutter">
          <div className="content-wrap max-w-3xl md:py-12">
            <p className={`mb-4 ${marketingTypography.heroEyebrow}`} style={{ color: homeTheme.blue }}>
              Conversational AI Quality
            </p>
            <h1
              className={`mb-6 ${marketingTypography.heroDisplay}`}
              style={{ fontFamily: "var(--font-space-grotesk)" }}
            >
              Signal without
              <br />
              <span style={{ color: homeTheme.blue }}>the black box.</span>
            </h1>
            <p
              className={`mb-10 max-w-[58ch] ${marketingTypography.heroLead}`}
              style={{ color: homeTheme.textBody }}
            >
              The quality of a 360 report is only as good as the quality of the
              feedback collected. Interval 360 uses conversational AI to gather
              more specific, more contextual input — and does it transparently.
            </p>
            <div className="flex flex-wrap gap-3">
              <Link
                href="#followup"
                id="hero-cta-see-in-action"
                className="inline-flex items-center justify-center gap-2 rounded-sm px-8 py-3.5 text-sm font-semibold text-white no-underline transition-colors hover:bg-[#1a57e8] uppercase"
                style={{ background: homeTheme.blue, boxShadow: homeTheme.blueShadow }}
              >
                See it in action
                <ArrowRight className="size-4 shrink-0" aria-hidden />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ── The problem — white ── */}
      <section
        className="border-y py-20 md:py-28"
        style={{ borderColor: homeTheme.lightRule, background: homeTheme.sectionWhite }}
      >
        <div className="content-wrap page-gutter">
          <div className="grid gap-12 lg:grid-cols-2 lg:gap-20 lg:items-start">
            <div className="flex gap-5">
              <div
                className="w-1 shrink-0 rounded-full"
                style={{ background: homeTheme.blue }}
                aria-hidden
              />
              <div>
                <p
                  className={`mb-4 ${marketingTypography.heroEyebrow}`}
                  style={{ color: homeTheme.blue }}
                >
                  Why conversation produces better data
                </p>
                <h2
                  className={marketingTypography.sectionDisplayLight}
                  style={{ fontFamily: "var(--font-space-grotesk)", color: homeTheme.lightHeading }}
                >
                  The format
                  <br />
                  is the problem.
                </h2>
              </div>
            </div>
            <div className="flex flex-col gap-5 pt-2">
              <p className="text-base leading-[1.8]" style={{ color: homeTheme.lightBody }}>
                Traditional 360 surveys ask every rater the same fixed questions
                regardless of what they say. A rating of 4 out of 5 on
                &ldquo;communicates effectively&rdquo; tells you almost nothing
                useful — there is no context, no example, no pattern.
              </p>
              <p className="text-base leading-[1.8]" style={{ color: homeTheme.lightBody }}>
                The issue is not the questions. It is the format. Surveys cannot
                probe. A conversation can.
              </p>
              <p className="text-base leading-[1.8]" style={{ color: homeTheme.lightBody }}>
                Interval 360 replaces the static survey with a structured
                conversation guided by AI — producing richer, more specific
                feedback with less burden on the rater.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── Precision over volume — dark, comparison cards ── */}
      <section
        className="border-b py-20 text-white md:py-28"
        style={{ borderColor: homeTheme.borderSubtle, background: "#050814" }}
      >
        <div className="content-wrap page-gutter">
          <div className="mb-12 md:mb-16 text-center">
            <p
              className={`mb-4 ${marketingTypography.heroEyebrow}`}
              style={{ color: homeTheme.eyebrow }}
            >
              Precision over volume
            </p>
            <h2
              className={`mx-auto max-w-[30ch] ${marketingTypography.sectionDisplayDark}`}
              style={{ fontFamily: "var(--font-space-grotesk)" }}
            >
              Survey vs.
              <br />
              Conversation
            </h2>
            <div
              className="mx-auto mt-6 h-px max-w-[80px]"
              style={{ background: `linear-gradient(90deg, transparent, ${homeTheme.blue}, transparent)` }}
            />
          </div>

          <div className="grid gap-5 lg:grid-cols-2">
            {/* Traditional Survey */}
            <div
              className="flex flex-col border"
              style={{
                borderColor: "rgba(255,255,255,0.08)",
                background: "rgba(255,255,255,0.02)",
              }}
            >
              <div
                className="px-8 py-5 border-b"
                style={{ borderColor: "rgba(255,255,255,0.08)" }}
              >
                <p
                  className="text-xs font-bold uppercase tracking-[0.2em]"
                  style={{ color: "rgba(255,255,255,0.4)" }}
                >
                  Traditional Survey
                </p>
              </div>
              <ul className="flex flex-col divide-y" style={{ borderColor: "rgba(255,255,255,0.05)" }}>
                {surveyVsConvo.survey.map((item, i) => (
                  <li
                    key={i}
                    className="flex items-start gap-4 px-8 py-5"
                    style={{ borderColor: "rgba(255,255,255,0.05)" }}
                  >
                    <span
                      className="mt-0.5 shrink-0 text-base font-bold"
                      style={{ color: "#f87171" }}
                    >
                      ✗
                    </span>
                    <p className="text-base leading-[1.65]" style={{ color: homeTheme.textMuted }}>
                      {item}
                    </p>
                  </li>
                ))}
              </ul>
            </div>

            {/* Interval 360 Conversation */}
            <div
              className="flex flex-col border"
              style={{
                borderColor: homeTheme.blue,
                background: "rgba(45,108,255,0.04)",
              }}
            >
              <div
                className="px-8 py-5 border-b"
                style={{ borderColor: "rgba(45,108,255,0.3)", background: "rgba(45,108,255,0.1)" }}
              >
                <p
                  className="text-xs font-bold uppercase tracking-[0.2em]"
                  style={{ color: homeTheme.blue }}
                >
                  Interval 360 Conversation
                </p>
              </div>
              <ul className="flex flex-col divide-y" style={{ borderColor: "rgba(45,108,255,0.12)" }}>
                {surveyVsConvo.conversation.map((item, i) => (
                  <li
                    key={i}
                    className="flex items-start gap-4 px-8 py-5"
                  >
                    <span
                      className="mt-0.5 shrink-0 text-base font-bold"
                      style={{ color: homeTheme.blue }}
                    >
                      ✓
                    </span>
                    <p className="text-base leading-[1.65]" style={{ color: "rgba(234,239,243,0.82)" }}>
                      {item}
                    </p>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ── Follow-up in action — light ── */}
      <section
        id="followup"
        className="py-20 md:py-28"
        style={{ background: homeTheme.sectionPaper }}
      >
        <div className="content-wrap page-gutter">
          <div className="grid gap-14 lg:grid-cols-2 lg:gap-16 lg:items-start">
            <div>
              <p
                className={`mb-4 ${marketingTypography.heroEyebrow}`}
                style={{ color: homeTheme.blue }}
              >
                Live example
              </p>
              <h2
                className={`mb-5 ${marketingTypography.sectionDisplayLight}`}
                style={{ fontFamily: "var(--font-space-grotesk)", color: homeTheme.lightHeading }}
              >
                Follow-up
                <br />
                in action
              </h2>
              <p className="mb-8 text-base leading-[1.75]" style={{ color: homeTheme.lightBody }}>
                When a rater gives a general answer, the AI probes for the
                specific example that makes feedback actionable. Every rater
                gets the same quality of depth — not just the ones who volunteer
                it.
              </p>
              <div className="flex items-center gap-3">
                <MessageSquareText
                  className="size-5 shrink-0"
                  style={{ color: homeTheme.blue }}
                  aria-hidden
                />
                <span
                  className="text-sm font-semibold uppercase tracking-[0.1em]"
                  style={{ color: homeTheme.lightHeading }}
                >
                  5–8 focused exchanges per rater
                </span>
              </div>
            </div>

            {/* Chat bubble thread */}
            <div className="flex flex-col gap-3">
              {followUpExample.map((msg, i) => {
                const isAi = msg.speaker === "ai";
                return (
                  <div
                    key={i}
                    className={`flex gap-3 ${isAi ? "" : "flex-row-reverse"}`}
                  >
                    <div
                      className="mt-1 flex size-8 shrink-0 items-center justify-center rounded-full text-white"
                      style={{ background: isAi ? homeTheme.blue : "#0b1733" }}
                      aria-hidden
                    >
                      {isAi ? (
                        <Bot className="size-4" />
                      ) : (
                        <span className="text-xs font-bold">R</span>
                      )}
                    </div>
                    <div
                      className="max-w-[82%] rounded border px-5 py-4 text-sm leading-[1.65]"
                      style={
                        isAi
                          ? {
                              background: "#fff",
                              borderColor: homeTheme.lightRule,
                              color: "#1e2d4a",
                            }
                          : {
                              background: homeTheme.lightHeading,
                              borderColor: "transparent",
                              color: "rgba(255,255,255,0.9)",
                            }
                      }
                    >
                      {msg.text}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* ── Why it matters — light, 3-column stats ── */}
      <section
        className="py-20 md:py-28"
        style={{ background: homeTheme.sectionWhite }}
      >
        <div className="content-wrap page-gutter">
          <div className="mb-14 grid gap-12 lg:grid-cols-2 lg:gap-20 lg:items-center">
            <div>
              <p
                className={`mb-4 ${marketingTypography.heroEyebrow}`}
                style={{ color: homeTheme.blue }}
              >
                The impact
              </p>
              <h2
                className={`mb-5 ${marketingTypography.sectionDisplayLight}`}
                style={{ fontFamily: "var(--font-space-grotesk)", color: homeTheme.lightHeading }}
              >
                Better data
                <br />
                better outcomes.
              </h2>
            </div>
            <p className="text-base leading-[1.8]" style={{ color: homeTheme.lightBody }}>
              When raters are guided through a structured conversation rather
              than faced with a static form, the quality of the feedback
              changes — and so does the quality of the decisions made from it.
            </p>
          </div>

          <div
            className="grid grid-cols-1 border lg:grid-cols-3"
            style={{ borderColor: homeTheme.lightRule }}
          >
            {[
              {
                Icon: Zap,
                stat: "5–8",
                unit: "exchanges",
                body: "Focused AI-guided exchanges replace 30–50 item static surveys — dramatically lowering rater burden without sacrificing depth.",
              },
              {
                Icon: MessageSquareText,
                stat: "3×",
                unit: "more specific",
                body: "Conversational probing consistently yields more specific examples and behavioral context than free-text survey fields.",
              },
              {
                Icon: ShieldCheck,
                stat: "100%",
                unit: "transparent",
                body: "Raters always know they are interacting with an AI. The process is fully disclosed and designed to be trustworthy.",
              },
            ].map((item, i) => (
              <div
                key={i}
                className="flex flex-col border-t px-8 py-10 first:border-t-0 lg:border-t-0 lg:border-l lg:first:border-l-0"
                style={{ borderColor: homeTheme.lightRule }}
              >
                <item.Icon
                  className="mb-5 size-6 shrink-0"
                  style={{ color: homeTheme.blue }}
                  aria-hidden
                />
                <p
                  className="mb-1 text-[2.8rem] font-extrabold leading-none tracking-tight"
                  style={{ fontFamily: "var(--font-space-grotesk)", color: homeTheme.lightHeading }}
                >
                  {item.stat}
                </p>
                <p
                  className="mb-4 text-xs font-bold uppercase tracking-[0.16em]"
                  style={{ color: homeTheme.blue }}
                >
                  {item.unit}
                </p>
                <p className="text-base leading-[1.6]" style={{ color: homeTheme.lightBody }}>
                  {item.body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Closing CTA — dark ── */}
      <section
        className="relative overflow-hidden border-t py-24 text-center text-white md:py-28"
        style={{ borderColor: homeTheme.borderSubtle, background: homeTheme.heroGradient }}
      >
        <div className="pointer-events-none absolute inset-0 grid-pattern opacity-15" />
        <div
          className="pointer-events-none absolute inset-0 opacity-50"
          style={{
            backgroundImage: `radial-gradient(circle at 50% 100%, ${homeTheme.blueTint35}, transparent 55%)`,
          }}
        />
        <div className="content-wrap page-gutter relative z-10">
          <h2
            className={`mx-auto mb-6 max-w-[40ch] ${marketingTypography.ctaBandDisplay}`}
            style={{ fontFamily: "var(--font-space-grotesk)" }}
          >
            See what better
            <br />
            data produces.
          </h2>
          <p
            className="mx-auto mb-10 max-w-[48ch] text-base leading-[1.75]"
            style={{ color: homeTheme.textMuted }}
          >
            Run a 360 that gives your leaders feedback they can actually use —
            specific, contextual, and generated through a transparent process.
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            <Link
              href="/buy"
              id="cta-buy-assessment"
              className="inline-flex items-center justify-center gap-2 rounded-sm px-10 py-4 text-xs font-bold tracking-[0.18em] text-white no-underline uppercase transition-opacity hover:opacity-95"
              style={{
                background: "linear-gradient(90deg, #2d6cff 0%, #7c3aed 100%)",
                boxShadow: "0 12px 40px rgba(45, 108, 255, 0.35)",
              }}
            >
              Buy an Assessment
              <ArrowRight className="size-4 shrink-0" aria-hidden />
            </Link>
            <Link
              href="/reports-and-outputs"
              id="cta-see-sample-reports"
              className="inline-flex items-center justify-center rounded-sm border px-8 py-3.5 text-sm font-semibold text-white no-underline transition-colors hover:border-white/45 uppercase"
              style={{
                borderColor: homeTheme.outlineButtonBorder,
                background: homeTheme.outlineButtonBg,
              }}
            >
              See Sample Reports
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
