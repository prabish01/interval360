import Link from "next/link";
import {
  ArrowRight,
  BadgeCheck,
  Scale,
  Target,
  TrendingUp,
  Users,
} from "lucide-react";
import { homeTheme, marketingTypography } from "@/lib/homeTheme";

const problemGrid = [
  {
    num: "01",
    title: "Single-perspective decisions",
    body: "Promotion and succession shaped by one manager's view and last quarter's performance — not by how that leader is experienced across the organization, consistently over time.",
  },
  {
    num: "02",
    title: "Potential without leadership proof",
    body: "HiPo programs that track potential without grounding it in how that person actually leads.",
  },
  {
    num: "03",
    title: "Blind spots stay hidden",
    body: "Issues that multi-perspective feedback would have surfaced never make it into the conversation.",
  },
  {
    num: "04",
    title: "Calibration without a shared language",
    body: "Talent reviews conducted without comparable evidence across candidates — making calibration harder than it needs to be.",
  },
] as const;

const frameworkCards = [
  {
    label: 'The What — Results',
    linkLabel: "Performance signal",
    title: "Are they delivering at the level the role requires?",
    body: "Assesses delivery against goals, ownership of outcomes, quality of decisions, and execution under pressure — the core performance signal relevant to promotion and succession readiness.",
  },
  {
    label: 'The How — Leadership Experience',
    linkLabel: "Leadership signal",
    title: "Are they experienced as a leader — not just a high performer?",
    body: "Assesses how peers, direct reports, and cross-functional partners experience them — communication, trust, accountability, and team development. The signal that predicts whether a strong individual contributor will succeed in a bigger role.",
  },
] as const;

/** `title` is one line, or two strings for an intentional two-line stack (keeps body copy aligned). */
const moments = [
  {
    title: "Pre-promotion" as const,
    body: "Validate readiness before committing to executive upward mobility.",
    Icon: TrendingUp,
  },
  {
    title: ["Succession", "pool"] as const,
    body: "Identify and nurture the next generation of bench strength with data.",
    Icon: Users,
  },
  {
    title: "HiPo validation" as const,
    body: "Confirm high-potential status through multi-dimensional assessment.",
    Icon: BadgeCheck,
  },
  {
    title: ["Calibration", "prep"] as const,
    body: "Standardize talent discussions with objective intelligence exports.",
    Icon: Scale,
  },
  {
    title: "Post-hire signal" as const,
    body: "Assess the velocity of new leadership impact after the first 100 days.",
    Icon: Target,
  },
] as const;

export default function TalentDecisionsSections() {
  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="relative min-h-[85vh] overflow-hidden pt-24 text-white md:min-h-[78vh]">
        <div
          className="absolute inset-0"
          style={{
            background: `
              radial-gradient(ellipse 100% 70% at 50% 120%, rgba(45,108,255,0.35) 0%, transparent 45%),
              radial-gradient(ellipse 80% 60% at 85% 20%, rgba(0,106,245,0.14) 0%, transparent 45%),
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
            <nav className="mb-8 text-[0.78rem]" aria-label="Breadcrumb">
              <Link href="/solutions" className="font-medium text-white/50 no-underline transition-colors hover:text-white">
                Solutions
              </Link>
              <span className="mx-2 text-white/30">/</span>
              <span className="text-white/70">Talent decisions</span>
            </nav>
            <p className={`mb-4 ${marketingTypography.heroEyebrow}`} style={{ color: homeTheme.blue }}>
              Data vs intelligence
            </p>
            <h1
              className={`mb-6 ${marketingTypography.heroDisplay}`}
              style={{ fontFamily: "var(--font-space-grotesk)" }}
            >
              Talent
              <br />
              Decisions
            </h1>
            <p className={`mb-10 max-w-[62ch] ${marketingTypography.heroLead}`} style={{ color: homeTheme.textBody }}>
              Move from guesswork to signal-driven certainty. Interval 360 gives you structured, multi-perspective leadership feedback for the moments where talent decisions matter most — so promotion, succession, and placement calls rest on evidence, not anecdotes.
            </p>
            <div className="flex flex-wrap gap-3">
              <Link
                href="/company#contact"
                className="inline-flex items-center justify-center gap-2 rounded-sm px-8 py-3.5 text-[0.82rem] font-semibold text-white no-underline transition-colors hover:bg-[#1a57e8] uppercase"
                style={{ background: homeTheme.blue, boxShadow: homeTheme.blueShadow }}
              >
                Book a call
                <ArrowRight className="size-4 shrink-0" aria-hidden />
              </Link>
              <Link
                href="/reports-and-outputs"
                className="inline-flex items-center justify-center rounded-sm border px-8 py-3.5 text-[0.82rem] font-semibold text-white no-underline transition-colors hover:border-white/45 uppercase"
                style={{
                  borderColor: homeTheme.outlineButtonBorder,
                  background: homeTheme.outlineButtonBg,
                }}
              >
                See sample report
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* The problem — white + 2×2 grid */}
      <section className="border-y py-20 md:py-28" style={{ borderColor: homeTheme.lightRule, background: homeTheme.sectionWhite }}>
        <div className="content-wrap page-gutter">
          <div className="grid gap-12 lg:grid-cols-2 lg:gap-20 lg:items-start">
            <div>
              <h2
                className={`${marketingTypography.sectionDisplayLight} text-[#0b1733]`}
                style={{ fontFamily: "var(--font-space-grotesk)" }}
              >
                High-Stakes
                <br />
                Guesses.
              </h2>
              <div className="mt-6 h-1 w-14 rounded-full" style={{ background: homeTheme.blue }} />
            </div>
            <div>
              <p className="text-[1.05rem] leading-[1.8]" style={{ color: "#4a5877" }}>
                Promotion and succession calls are among the most consequential choices an organization makes. When the feedback layer is thin, decisions default to visibility, politics, and last quarter's story — not how a leader is actually experienced by the people around them.
              </p>
            </div>
          </div>

          <div className="mt-16 grid gap-10 border-t pt-16 sm:grid-cols-2" style={{ borderColor: homeTheme.lightRule }}>
            {problemGrid.map((item) => (
              <div key={item.num} className="relative pl-2">
                <span
                  className="pointer-events-none absolute -left-1 -top-2 select-none text-[4rem] font-extrabold leading-none sm:text-[4.5rem]"
                  style={{ fontFamily: "var(--font-space-grotesk)", color: "rgba(5, 79, 154, 0.08)" }}
                  aria-hidden
                >
                  {item.num}
                </span>
                <h3
                  className="relative z-10 mb-3 text-[1.05rem] font-bold uppercase tracking-[0.02em] leading-[1.3]"
                  style={{ fontFamily: "var(--font-space-grotesk)", color: "#0b1733" }}
                >
                  {item.title}
                </h3>
                <p className="relative z-10 text-[0.9rem] leading-[1.7]" style={{ color: "#4a5877" }}>
                  {item.body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Kinetic framework — dark */}
      <section className="border-b py-20 text-white md:py-28" style={{ borderColor: homeTheme.borderSubtle, background: "#050814" }}>
        <div className="content-wrap page-gutter">
          <div className="mb-12 max-w-3xl md:mb-16">
            <h2
              className={`mb-5 ${marketingTypography.sectionDisplayDark}`}
              style={{ fontFamily: "var(--font-space-grotesk)" }}
            >
              The Kinetic
              <br />
              Framework
            </h2>
            <p className="max-w-[56ch] text-[1.02rem] leading-[1.75]" style={{ color: homeTheme.textMuted }}>
              Interval 360 surfaces the two dimensions that matter most for talent decisions: what leaders deliver, and how they are experienced as leaders. Together they replace one-dimensional anecdotes with a complete picture.
            </p>
          </div>
          <div className="grid gap-5 lg:grid-cols-2">
            {frameworkCards.map((card) => (
              <div
                key={card.label}
                className="flex flex-col border p-8 md:p-10"
                style={{
                  borderColor: "rgba(255,255,255,0.1)",
                  background: "rgba(255,255,255,0.03)",
                }}
              >
                <p className="mb-4 text-[0.72rem] font-bold uppercase tracking-[0.14em]" style={{ color: homeTheme.blue }}>
                  {card.label}
                </p>
                <h3 className="mb-4 text-[1.1rem] font-bold leading-snug" style={{ fontFamily: "var(--font-space-grotesk)" }}>
                  {card.title}
                </h3>
                <p className="mb-8 flex-1 text-[0.92rem] leading-[1.7]" style={{ color: homeTheme.textMuted }}>
                  {card.body}
                </p>
                <div className="flex items-center gap-2 border-t border-white/10 pt-6">
                  <span className="text-[0.72rem] font-bold uppercase tracking-[0.2em]" style={{ color: homeTheme.eyebrow }}>
                    {card.linkLabel}
                  </span>
                  <span className="h-px flex-1 max-w-[120px] bg-linear-to-r from-white/40 to-transparent" aria-hidden />
                  <ArrowRight className="size-4 shrink-0 text-white/50" aria-hidden />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Moments of signal — white, 5 columns */}
      <section className="py-20 md:py-28" style={{ background: homeTheme.sectionWhite }}>
        <div className="content-wrap page-gutter">
          <div className="mb-14 md:mb-16">
            <p className={`mb-4 ${marketingTypography.heroEyebrow}`} style={{ color: homeTheme.blue }}>
              Strategic deployment
            </p>
            <h2
              className={marketingTypography.sectionDisplayLight}
              style={{ fontFamily: "var(--font-space-grotesk)", color: homeTheme.lightHeading }}
            >
              Moments of
              <br />
              Signal
            </h2>
          </div>
          <div
            className="grid grid-cols-1 border lg:grid-cols-5"
            style={{ borderColor: homeTheme.lightRule }}
          >
            {moments.map((m, i) => {
              return (
                <div
                  key={i}
                  className="flex min-h-full flex-col border-t px-5 py-8 first:border-t-0 lg:border-t-0 lg:border-l lg:px-6 lg:py-10 lg:first:border-l-0"
                  style={{ borderColor: homeTheme.lightRule }}
                >
                  <m.Icon
                    className="mb-5 size-6 shrink-0 stroke-[1.5]"
                    style={{ color: homeTheme.blue }}
                    aria-hidden
                  />
                  <h3
                    className="mb-3 min-h-11 text-[0.8125rem] font-bold uppercase leading-tight tracking-[0.06em] sm:min-h-12 lg:min-h-13"
                    style={{ fontFamily: "var(--font-space-grotesk)", color: "#0b1733" }}
                  >
                    {Array.isArray(m.title) ? (
                      <>
                        {m.title[0]}
                        <br />
                        {m.title[1]}
                      </>
                    ) : (
                      m.title
                    )}
                  </h3>
                  <p className="text-[0.8125rem] leading-[1.55]" style={{ color: homeTheme.lightBody }}>
                    {m.body}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA — gradient button */}
      <section
        className="relative overflow-hidden border-t py-24 text-center text-white md:py-28"
        style={{ borderColor: homeTheme.borderSubtle, background: homeTheme.sectionBlack }}
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
            Ready to evolve your
            <br />
            talent architecture?
          </h2>
          <p className="mx-auto mb-10 max-w-[48ch] text-[1.02rem] leading-[1.75]" style={{ color: homeTheme.textMuted }}>
            Talk to us about integrating Interval 360 into promotion, succession, and calibration workflows.
          </p>
          <Link
            href="/company#contact"
            className="inline-flex min-w-[min(100%,320px)] items-center justify-center rounded-sm px-10 py-4 text-[0.78rem] font-bold tracking-[0.18em] text-white no-underline uppercase transition-opacity hover:opacity-95"
            style={{
              background: "linear-gradient(90deg, #2d6cff 0%, #7c3aed 100%)",
              boxShadow: "0 12px 40px rgba(45, 108, 255, 0.35)",
            }}
          >
            Initiate Interval phase
          </Link>
        </div>
      </section>
    </div>
  );
}
