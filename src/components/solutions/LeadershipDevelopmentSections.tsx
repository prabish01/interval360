import Link from "next/link";
import {
  AlertTriangle,
  ArrowLeftRight,
  ArrowRight,
  BarChart3,
  Check,
  LayoutDashboard,
  Rocket,
  Shuffle,
  Timer,
  Users,
} from "lucide-react";
import { homeTheme, marketingTypography } from "@/lib/homeTheme";

const cadenceItems = [
  {
    num: "01",
    moment: "Program start",
    title: "Establish a clear baseline",
    body: "Begin the program with a 360 assessment for each participant. This anchors their development focus on real evidence — not self-perception — and gives coaches and facilitators structured context for every conversation.",
    Icon: Rocket,
  },
  {
    num: "02",
    moment: "Mid-program",
    title: "Check whether development is landing",
    body: "Run a second round at the midpoint to see whether the development priorities identified at the start are shifting. This creates accountability, focuses coaching conversations, and gives participants a progress signal.",
    Icon: ArrowLeftRight,
  },
  {
    num: "03",
    moment: "Program close",
    title: "Demonstrate what changed",
    body: "A final assessment at the close gives program sponsors and participants a concrete before/after comparison. This is the evidence base for demonstrating program impact — and for setting the next development focus.",
    Icon: Check,
  },
] as const;

const scaleItems = [
  "Launch across a full cohort in minutes — not weeks of coordination",
  "Raters complete their input in ~5 minutes, dramatically reducing participant fatigue",
  "Automated synthesis means no manual processing or analyst time",
  "HR admins can monitor completion and access all reports from a single dashboard",
  "Cohort-level analytics available for program sponsors and facilitators",
] as const;

const scaleCards = [
  { label: "Cohort launch", body: scaleItems[0], Icon: Users, wide: false as const },
  { label: "<5 min input", body: scaleItems[1], Icon: Timer, wide: false as const },
  { label: "AI synthesis", body: scaleItems[2], Icon: Shuffle, wide: false as const },
  { label: "HR admin panel", body: scaleItems[3], Icon: LayoutDashboard, wide: false as const },
  { label: "Cohort analytics", body: scaleItems[4], Icon: BarChart3, wide: true as const },
] as const;

export default function LeadershipDevelopmentSections() {
  return (
    <div className="min-h-screen">
      {/* Hero — dark, cinematic */}
      <section className="relative min-h-[85vh] overflow-hidden pt-24 text-white md:min-h-[78vh]">
        <div
          className="absolute inset-0"
          style={{
            background: `
              radial-gradient(ellipse 120% 80% at 20% 100%, rgba(45,108,255,0.18) 0%, transparent 50%),
              radial-gradient(ellipse 80% 60% at 85% 20%, rgba(0,106,245,0.12) 0%, transparent 45%),
              linear-gradient(180deg, #020510 0%, #061027 38%, #0a1428 100%)
            `,
          }}
        />
        <div className="pointer-events-none absolute inset-0 grid-pattern opacity-[0.14]" />
        <div
          className="pointer-events-none absolute inset-0 opacity-[0.35]"
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
              <span className="text-white/70">Leadership development</span>
            </nav>
            <p
              className={`mb-4 ${marketingTypography.heroEyebrow}`}
              style={{ color: homeTheme.blue }}
            >
              Strategic use case
            </p>
            <h1
              className={`mb-6 ${marketingTypography.heroDisplay}`}
              style={{ fontFamily: "var(--font-space-grotesk)" }}
            >
              Leadership
              <br />
              development
            </h1>
            <p
              className={`mb-10 max-w-[62ch] ${marketingTypography.heroLead}`}
              style={{ color: homeTheme.textBody }}
            >
              Leadership development programs work better when they are anchored to real feedback. Interval 360 makes it practical to run meaningful 360 assessments as a core part of your program — at a cost and scale that makes a recurring cadence feasible.
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

      {/* The problem — light */}
      <section className="border-y py-20 md:py-28" style={{ borderColor: homeTheme.lightRule, background: homeTheme.sectionWhite }}>
        <div className="content-wrap page-gutter">
          <div className="grid gap-14 lg:grid-cols-2 lg:gap-20 lg:items-start">
            <div className="flex gap-5">
              <div className="w-1 shrink-0 rounded-full" style={{ background: homeTheme.blue }} aria-hidden />
              <div>
                <h2
                  className={marketingTypography.sectionDisplayLight}
                  style={{ fontFamily: "var(--font-space-grotesk)", color: homeTheme.lightHeading }}
                >
                  The
                  <br />
                  problem
                </h2>
              </div>
            </div>
            <div>
              <p className="mb-10 text-[1.02rem] leading-[1.75]" style={{ color: homeTheme.lightBody }}>
                Leadership development programs often invest heavily in curriculum, coaching, and cohort experiences — but the feedback layer is an afterthought. When 360 assessments are included at all, they are typically run once, using traditional survey tools that produce long reports few participants actually read and use.
              </p>
              <div className="grid gap-8 sm:grid-cols-2">
                <div>
                  <div className="mb-3 flex items-center gap-2">
                    <AlertTriangle className="size-5 shrink-0 text-red-500" aria-hidden />
                    <h3
                      className="text-[0.82rem] font-bold uppercase tracking-[0.12em]"
                      style={{ fontFamily: "var(--font-space-grotesk)", color: homeTheme.lightHeading }}
                    >
                      Friction heavy
                    </h3>
                  </div>
                  <p className="text-[0.9rem] leading-[1.65]" style={{ color: homeTheme.lightBody }}>
                    Coordination, follow-up, and long surveys burn participant goodwill. Program teams spend weeks chasing completion instead of facilitating development.
                  </p>
                </div>
                <div>
                  <div className="mb-3 flex items-center gap-2">
                    <AlertTriangle className="size-5 shrink-0 text-red-500" aria-hidden />
                    <h3
                      className="text-[0.82rem] font-bold uppercase tracking-[0.12em]"
                      style={{ fontFamily: "var(--font-space-grotesk)", color: homeTheme.lightHeading }}
                    >
                      Stale data
                    </h3>
                  </div>
                  <p className="text-[0.9rem] leading-[1.65]" style={{ color: homeTheme.lightBody }}>
                    Without a reliable baseline and progress signal, coaches lack structured context and sponsors cannot show what changed — so impact stays anecdotal.
                  </p>
                </div>
              </div>
              <p className="mt-10 text-[1rem] leading-[1.75]" style={{ color: homeTheme.lightBody }}>
                Interval 360 is designed to close that gap — by making high-quality feedback fast enough, low-burden enough, and affordable enough to use as a consistent, repeatable layer within any leadership development program.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* How it fits — dark */}
      <section className="border-b py-20 text-white md:py-28" style={{ borderColor: homeTheme.borderSubtle, background: homeTheme.sectionBlack }}>
        <div className="content-wrap page-gutter">
          <div className="mb-14 text-center md:mb-16">
            <h2
              className={`mx-auto mb-5 max-w-[40ch] ${marketingTypography.sectionDisplayDark}`}
              style={{ fontFamily: "var(--font-space-grotesk)" }}
            >
              How it fits
              <br />a development program
            </h2>
            <div className="mx-auto h-1 w-14 rounded-full" style={{ background: homeTheme.blue }} />
            <p className="mx-auto mt-6 max-w-[56ch] text-[0.95rem] leading-[1.75]" style={{ color: homeTheme.textMuted }}>
              Interval 360 can be used at any point in a development program. These are the three moments where it most consistently adds value.
            </p>
          </div>
          <div className="grid gap-5 lg:grid-cols-3">
            {cadenceItems.map((item) => (
              <div
                key={item.num}
                className="relative overflow-hidden border p-8 transition-transform duration-300 hover:-translate-y-1 hover:shadow-xl group cursor-pointer"
                style={{
                  borderColor: "rgba(255,255,255,0.1)",
                  background: "rgba(255,255,255,0.04)",
                }}
              >
                <span
                  className="pointer-events-none absolute -right-2 -top-4 select-none text-[5.5rem] font-extrabold leading-none text-white/[0.06]"
                  style={{ fontFamily: "var(--font-space-grotesk)" }}
                  aria-hidden
                >
                  {item.num}
                </span>
                <item.Icon className="relative z-10 mb-6 size-7" style={{ color: homeTheme.blue }} aria-hidden />
                <p className="relative z-10 mb-2 text-[0.72rem] font-bold uppercase tracking-[0.16em]" style={{ color: homeTheme.blue }}>
                  {item.moment}
                </p>
                <h3
                  className="relative z-10 mb-4 text-[1rem] font-bold uppercase leading-snug tracking-wide"
                  style={{ fontFamily: "var(--font-space-grotesk)" }}
                >
                  {item.title}
                </h3>
                <p className="relative z-10 text-[0.88rem] leading-[1.65]" style={{ color: homeTheme.textMuted }}>
                  {item.body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Built for program scale — light */}
      <section className="py-20 md:py-28" style={{ background: homeTheme.sectionPaper }}>
        <div className="content-wrap page-gutter">
          <div className="grid gap-14 lg:grid-cols-2 lg:gap-16 lg:items-start">
            <div>
              <p className={`mb-4 ${marketingTypography.heroEyebrow}`} style={{ color: homeTheme.blue }}>
                Efficiency engine
              </p>
              <h2
                className={`mb-5 ${marketingTypography.sectionDisplayLight}`}
                style={{ fontFamily: "var(--font-space-grotesk)", color: homeTheme.lightHeading }}
              >
                Built for
                <br />
                program scale
              </h2>
              <p className="mb-8 text-[1.02rem] leading-[1.75]" style={{ color: homeTheme.lightBody }}>
                Traditional 360 programs require significant coordination, follow-up, and processing time. Interval 360 handles all of that automatically — so program managers can run a full cohort assessment with a fraction of the effort.
              </p>
              <div className="flex flex-wrap items-center gap-4">
                <Link
                  href="/company#contact"
                  className="inline-flex items-center justify-center rounded-sm px-8 py-3.5 text-[0.82rem] font-semibold text-white no-underline transition-opacity hover:opacity-90 uppercase"
                  style={{ background: homeTheme.sectionBlack }}
                >
                  Talk to us
                </Link>
                <Link
                  href="/pricing"
                  className="inline-flex items-center gap-1.5 border-b border-current pb-0.5 text-[0.82rem] font-semibold no-underline transition-opacity hover:opacity-75 uppercase"
                  style={{ color: homeTheme.lightHeading }}
                >
                  See pricing
                  <ArrowRight className="size-4" aria-hidden />
                </Link>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-3">
              {scaleCards.map((card) => (
                <div
                  key={card.label}
                  className={`flex flex-col border p-5 ${card.wide ? "col-span-2" : ""}`}
                  style={{
                    borderColor: homeTheme.lightRule,
                    background: homeTheme.sectionWhite,
                  }}
                >
                  <card.Icon className="mb-4 size-6 shrink-0 text-[#111]" aria-hidden />
                  <p
                    className="mb-2 text-[0.68rem] font-bold uppercase tracking-[0.14em]"
                    style={{ fontFamily: "var(--font-space-grotesk)", color: homeTheme.lightHeading }}
                  >
                    {card.label}
                  </p>
                  <p className="text-[0.82rem] leading-[1.55]" style={{ color: homeTheme.lightBody }}>
                    {card.body}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Closing CTA — dark */}
      <section
        className="relative overflow-hidden border-t py-24 text-center text-white md:py-28"
        style={{ borderColor: homeTheme.borderSubtle, background: homeTheme.heroGradient }}
      >
        <div className="pointer-events-none absolute inset-0 grid-pattern opacity-15" />
        <div
          className="pointer-events-none absolute inset-0 opacity-40"
          style={{
            backgroundImage: `radial-gradient(circle at 50% 120%, ${homeTheme.blueGlowSoft}, transparent 50%)`,
          }}
        />
        <div className="content-wrap page-gutter relative z-10">
          <h2
            className={`mx-auto mb-5 max-w-[36ch] ${marketingTypography.ctaBandDisplay}`}
            style={{ fontFamily: "var(--font-space-grotesk)" }}
          >
            Build feedback into your next program
            <br />
            from the start.
          </h2>
          <p className="mx-auto mb-10 max-w-[48ch] text-[1.02rem] leading-[1.75]" style={{ color: homeTheme.textMuted }}>
            Talk to us about how to integrate Interval 360 into your development program design.
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
              className="inline-flex items-center justify-center rounded-sm border px-8 py-3.5 text-[0.85rem] font-medium text-white no-underline transition-colors hover:border-white/45 uppercase"
              style={{
                borderColor: homeTheme.outlineButtonBorder,
                background: homeTheme.outlineButtonBg,
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
