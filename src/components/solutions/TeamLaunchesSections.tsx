import Link from "next/link";
import {
  Clock,
  FileText,
  MessageSquare,
  Quote,
  Search,
  Users,
} from "lucide-react";
import { homeTheme, marketingTypography } from "@/lib/homeTheme";

const transitionMoments = [
  {
    num: "01",
    label: "First-Time Manager",
    title: "From individual contributor to leading others",
    body: "The most common and most challenging transition in leadership. What made someone successful as an individual contributor is often not what makes them effective as a manager. Early feedback surfaces the specific gaps before they compound.",
  },
  {
    num: "02",
    label: "Promotion or Expanded Scope",
    title: "More responsibility, a wider stage",
    body: "A promotion changes the context in which leadership is evaluated. Strengths that were sufficient at the previous level may not be enough at the next one. A fresh 360 captures how the leader is experienced in their new scope — not just their previous role.",
  },
  {
    num: "03",
    label: "Executive Transition",
    title: "New organization, new team, higher stakes",
    body: "An executive stepping into a new organization or a significantly new role needs to understand quickly how they are landing with peers, the board, and direct reports. A structured 360 early in the transition provides the multi-perspective signal they cannot get from internal observation alone.",
  },
] as const;

const helpItems = [
  {
    title: "Baseline in first 60 days",
    body: "Run the assessment early enough that early patterns can still be shaped.",
    Icon: FileText,
  },
  {
    title: "Coach-ready output",
    body: "Reports are formatted for direct use in a transition coaching conversation.",
    Icon: MessageSquare,
  },
  {
    title: "Clear focus areas",
    body: "Development areas are prioritized and specific — not generic leadership advice.",
    Icon: Search,
  },
  {
    title: "Manager alignment",
    body: "The assessment report gives the manager and leader a shared starting point for the first 90-day conversation.",
    Icon: Users,
  },
] as const;

export default function TeamLaunchesSections() {
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
              <span className="text-white/70">Team launches</span>
            </nav>
            <p className={`mb-4 ${marketingTypography.heroEyebrow}`} style={{ color: homeTheme.blue }}>
              Strategic performance
            </p>
            <h1
              className={`mb-6 ${marketingTypography.heroDisplay}`}
              style={{ fontFamily: "var(--font-space-grotesk)" }}
            >
              Use Case —
              <br />
              Team Launches
            </h1>
            <p className={`mb-10 max-w-[62ch] ${marketingTypography.heroLead}`} style={{ color: homeTheme.textBody }}>
              The first 90 days in a new leadership role set patterns that are hard to undo. Interval 360 gives leaders, their managers, and their coaches a structured, evidence-based starting point for that transition — while there is still time to shape it.
            </p>
            <div className="flex flex-wrap gap-3">
              <Link
                href="/buy"
                className="inline-flex items-center justify-center rounded-sm px-8 py-3.5 text-[0.82rem] font-semibold text-white no-underline transition-colors hover:bg-[#1a57e8] uppercase"
                style={{ background: homeTheme.blue, boxShadow: homeTheme.blueShadow }}
              >
                Buy an assessment
              </Link>
              <Link
                href="/company#contact"
                className="inline-flex items-center justify-center rounded-sm border px-8 py-3.5 text-[0.82rem] font-semibold text-white no-underline transition-colors hover:border-white/45 uppercase"
                style={{
                  borderColor: homeTheme.outlineButtonBorder,
                  background: homeTheme.outlineButtonBg,
                }}
              >
                Book a call
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Three transition moments — white */}
      <section className="border-y py-20 md:py-28" style={{ borderColor: homeTheme.lightRule, background: homeTheme.sectionWhite }}>
        <div className="content-wrap page-gutter">
          <div className="mb-14 flex flex-col gap-6 sm:mb-16 md:flex-row md:items-end md:justify-between md:gap-10">
            <h2
              className={marketingTypography.sectionDisplayLight}
              style={{ fontFamily: "var(--font-space-grotesk)", color: homeTheme.lightHeading }}
            >
              Three Transition
              <br />
              Moments
            </h2>
            <div
              className="hidden h-px min-h-px md:block md:min-w-[min(40%,280px)] md:flex-1"
              style={{ background: homeTheme.lightRule }}
              aria-hidden
            />
          </div>

          <div className="grid gap-10 md:grid-cols-3 md:gap-8 lg:gap-10">
            {transitionMoments.map((t) => (
              <div key={t.num} className="flex flex-col">
                <p className="mb-4 text-[0.7rem] font-semibold tabular-nums tracking-[0.2em] text-[#94a3b8]">
                  {t.num}
                </p>
                <h3
                  className="mb-2 text-[1rem] font-bold uppercase leading-snug tracking-wide"
                  style={{ fontFamily: "var(--font-space-grotesk)", color: "#0b1733" }}
                >
                  {t.label}
                </h3>
                <p className="mb-3 text-[0.88rem] font-semibold leading-snug" style={{ color: homeTheme.lightHeading }}>
                  {t.title}
                </p>
                <p className="mb-6 flex-1 text-[0.88rem] leading-[1.65]" style={{ color: homeTheme.lightBody }}>
                  {t.body}
                </p>
                <div className="h-0.5 w-12 rounded-full" style={{ background: homeTheme.blue }} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why timing matters — dark + quote card */}
      <section className="border-b py-20 text-white md:py-28" style={{ borderColor: homeTheme.borderSubtle, background: "#050814" }}>
        <div className="content-wrap page-gutter">
          <div className="grid gap-12 lg:grid-cols-2 lg:gap-16 lg:items-start">
            <div>
              <p className={`mb-4 ${marketingTypography.heroEyebrow}`} style={{ color: homeTheme.blue }}>
                The critical window
              </p>
              <h2
                className={`mb-6 ${marketingTypography.sectionDisplayDark}`}
                style={{ fontFamily: "var(--font-space-grotesk)" }}
              >
                Why Timing
                <br />
                Matters
              </h2>
              <p className="mb-6 max-w-[52ch] text-[1.02rem] leading-[1.75]" style={{ color: homeTheme.textMuted }}>
                The most useful moment to run a 360 during a role transition is early — typically within the first 60–90 days. Habits are still forming, relationships are still open, and patterns can still be shaped intentionally.
              </p>
              <p className="mb-8 max-w-[52ch] text-[1.02rem] leading-[1.75]" style={{ color: homeTheme.textMuted }}>
                By the time most organizations run feedback, the transition window has closed. Interval 360 is fast and low-burden enough to use while that window is still open.
              </p>
              <div className="flex items-center gap-3 text-[0.78rem]" style={{ color: homeTheme.textFaint }}>
                <Clock className="size-4 shrink-0 text-[#94a3b8]" aria-hidden />
                <span className="font-medium tracking-wide uppercase">First 60–90 days · highest leverage</span>
              </div>
            </div>

            <div
              className="relative overflow-hidden rounded-lg border p-8 md:p-10 lg:p-12"
              style={{
                borderColor: "rgba(255,255,255,0.1)",
                background: "rgba(255,255,255,0.04)",
              }}
            >
              <Quote
                className="mb-6 size-10 shrink-0 opacity-90"
                style={{ color: homeTheme.blue }}
                aria-hidden
              />
              <blockquote
                className="mb-10 text-[1.15rem] font-medium italic leading-[1.55] md:text-[1.25rem]"
                style={{ fontFamily: "var(--font-space-grotesk)", color: "rgba(255,255,255,0.92)" }}
              >
                The first 90 days establishes leadership patterns that persist for years. Feedback at that stage — while there&apos;s still time to respond — is worth more than feedback at any other point in the role.
              </blockquote>
              <div className="flex items-center gap-3 border-t border-white/10 pt-6">
                <div className="h-px w-10 rounded-full" style={{ background: homeTheme.blue }} />
                <span className="text-[0.72rem] font-bold uppercase tracking-[0.18em]" style={{ color: homeTheme.eyebrow }}>
                  Interval360 methodology
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How it helps — four cards */}
      <section className="py-20 md:py-28" style={{ background: homeTheme.sectionPaper }}>
        <div className="content-wrap page-gutter">
          <div className="mx-auto mb-14 max-w-3xl text-center md:mb-16">
            <p className={`mb-4 ${marketingTypography.heroEyebrow}`} style={{ color: homeTheme.blue }}>
              How it helps
            </p>
            <h2
              className={`mb-5 ${marketingTypography.sectionDisplayLight}`}
              style={{ fontFamily: "var(--font-space-grotesk)", color: homeTheme.lightHeading }}
            >
              What you get from an
              <br />
              early-transition 360
            </h2>
            <p className="text-[1.05rem] leading-[1.75]" style={{ color: homeTheme.lightBody }}>
              Concrete outputs your leader, coach, and manager can use in the first 90 days — not a binder that sits on a shelf.
            </p>
          </div>
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {helpItems.map((item) => (
              <div
                key={item.title}
                className="flex flex-col border p-6 md:p-7"
                style={{
                  borderColor: homeTheme.lightRule,
                  background: homeTheme.sectionWhite,
                }}
              >
                <item.Icon className="mb-4 size-6 shrink-0" style={{ color: homeTheme.blue }} aria-hidden />
                <h3
                  className="mb-3 text-[0.95rem] font-bold uppercase leading-snug tracking-wide"
                  style={{ fontFamily: "var(--font-space-grotesk)", color: homeTheme.lightHeading }}
                >
                  {item.title}
                </h3>
                <p className="text-[0.85rem] leading-[1.6]" style={{ color: homeTheme.lightBody }}>
                  {item.body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section
        className="relative overflow-hidden border-t py-24 text-center text-white md:py-28"
        style={{ borderColor: homeTheme.borderSubtle, background: homeTheme.sectionBlack }}
      >
        <div className="pointer-events-none absolute inset-0 grid-pattern opacity-15" />
        <div
          className="pointer-events-none absolute inset-0 opacity-45"
          style={{
            backgroundImage: `radial-gradient(circle at 50% 100%, ${homeTheme.blueGlowSoft}, transparent 50%)`,
          }}
        />
        <div className="content-wrap page-gutter relative z-10">
          <h2
            className={`mx-auto mb-10 max-w-[40ch] ${marketingTypography.ctaBandDisplay}`}
            style={{ fontFamily: "var(--font-space-grotesk)" }}
          >
            Ready to accelerate
            <br />
            the transition?
          </h2>
          <Link
            href="/buy"
            className="inline-flex min-w-[min(100%,280px)] items-center justify-center rounded-sm px-10 py-3.5 text-[0.82rem] font-semibold text-white no-underline uppercase transition-colors hover:bg-[#1a57e8]"
            style={{ background: homeTheme.blue, boxShadow: homeTheme.blueShadow }}
          >
            Start assessment plan
          </Link>
        </div>
      </section>
    </div>
  );
}
