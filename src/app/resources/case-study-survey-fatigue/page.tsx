import Link from "next/link";
import { ArrowRight, BarChart2, TrendingUp, Users } from "lucide-react";
import { homeTheme } from "@/lib/homeTheme";

export const metadata = {
  title: "Overcoming Survey Fatigue — Interval 360",
  description: "How a healthcare services group moved from annual survey fatigue to a quarterly 360 signal — with a 91% rater completion rate and 78% reduction in HR administration time.",
  openGraph: {
    title: "Overcoming Survey Fatigue — Interval 360",
    description: "How a healthcare services group moved from annual survey fatigue to a quarterly 360 signal — with a 91% rater completion rate and 78% reduction in HR administration time.",
  },
  twitter: {
    title: "Overcoming Survey Fatigue — Interval 360",
    description: "How a healthcare services group moved from annual survey fatigue to a quarterly 360 signal — with a 91% rater completion rate and 78% reduction in HR administration time.",
  },
};

/* ─── DATA ──────────────────────────────────────────────────────────────── */

const stats = [
  {
    value: "4×",
    label: "More frequent feedback cycles",
    sub: "From annual to quarterly — same rigor, less drag.",
  },
  {
    value: "78%",
    label: "Reduction in HR time",
    sub: "Reduction in HR time spent administering the 360 process.",
  },
  {
    value: "91%",
    label: "Rater completion rate",
    sub: "Rater completion rate in first quarterly cycle.",
  },
];

const situation = {
  eyebrow: "Situation",
  heading: "A well-run organization with a feedback process that had stopped working",
  body: [
    "The organization is a regional healthcare services group operating across multiple sites in the southeastern United States. At the time of engagement they employed approximately 900 people, with a leadership population of 42 managers and directors spanning clinical, operational, and administrative functions.",
    "People operations were managed by a three-person HR team. The team had used the same enterprise 360 platform for five years — an annual cycle administered in the third quarter of each year, with reports delivered in November in time for year-end performance conversations.",
    "The process was well-established. Competency frameworks were mature. Survey design was professionally structured. From the outside, it was a 360 program that was working. From the inside, it had quietly stopped functioning as a development tool and was operating almost entirely as an administrative ritual.",
    "The HR Director began evaluating alternatives in the first quarter. The trigger was not a single failure but an accumulation of friction that had become impossible to ignore.",
  ],
};

const challenge = {
  eyebrow: "The Challenge",
  heading: "Technically functional.\nPractically useless.",
  body: [
    "The legacy platform was not broken in any obvious way. Surveys launched on schedule. Reports generated cleanly. The competency framework was professionally built and covered the dimensions the organization cared about. None of that was the problem.",
    "The problem was timing. The 360 cycle ran from August through October. By the time reports were processed and reviewed, it was mid-to-late November. Managers received feedback that was nominally about the past year but had been shaped by rater memory of the past three months. And that feedback landed in the same two-week window as performance ratings, compensation decisions, and year-end planning — when no one had time to do anything with it.",
  ],
  raterExperience: {
    heading: "The rater experience problem",
    body: [
      "The survey itself was the second problem. Raters were asked to assess each manager across multiple competency dimensions using an 11-point response scale, with open-text fields at the end of each section. For a manager with a full rater panel, this meant a single rater could spend 25 to 30 minutes completing one survey — and many raters had more than one.",
      "The experience was desktop-only. There was no mobile-compatible version. Raters received email invitations and were expected to sit at a computer to complete the assessment. In a healthcare services environment where many staff work non-desk roles, this created an additional structural barrier.",
      "The result was a 58% average rater completion rate across the five years the organization had used the platform. More than four in ten invited raters never submitted. The organization had learned to treat this as normal.",
      "What they had not calculated was the compounding effect. A 58% completion rate meant that the managers with the smallest rater panels — often newer leaders or those in less central roles — could receive reports based on three or four responses. At that sample size, a single outlier response could move a competency score by a meaningful margin. The data was real, but its reliability was unevenly distributed across the leadership population.",
    ],
  },
  dataCosted: {
    heading: "What the data cost",
    body: [
      "Running the annual cycle required between 180 and 200 hours of HR staff time per cycle. That included building the rater panels, managing the invitation process, chasing non-completions, processing reports, and coordinating debrief conversations. For a three-person team managing all other people operations responsibilities, this was a significant seasonal burden.",
      "The platform also carried a substantial annual license cost — a fixed expense regardless of how many assessments were actually completed or how many reports were meaningfully used.",
    ],
  },
  quote: {
    text: "The data was real and the reports were well-built, but they landed at the exact wrong moment every year, and by January nobody remembered what was in them.",
    author: "Director of People Operations",
  },
};

const systemComparison = {
  heading: "System Comparison",
  legacy: {
    label: "Legacy process (before)",
    items: [
      "Annual cycle running August through November",
      "Reports delivered 14 to 16 weeks after launch",
      "180 to 200 hours of HR time per cycle",
      "Significant annual platform license cost",
      "Raters spending 25 to 30 minutes per survey",
      "58% average rater completion rate",
      "Fewer than one in three managers used their report",
      "Mobile-hostile experience, desktop required",
    ],
  },
  interval: {
    label: "Interval 360 (now)",
    items: [
      "Quarterly cycles, 14 days each",
      "Reports delivered same day as project close",
      "Under 40 hours of HR time per cycle",
      "Per-assessment pricing, no annual license",
      "Rater conversations averaging around five minutes",
      "91% rater completion rate in first cycle",
      "Reports integrated directly into quarterly check-ins",
      "Fully conversational, works on any device",
    ],
  },
};

const inflectionPoint = {
  eyebrow: "The Inflection Point",
  heading: "What it took to believe the lighter process was still rigorous",
  body: [
    "The HR Director evaluated two other platforms before selecting Interval 360. Both offered more frequent feedback cycles than the legacy tool. Neither resolved the core tension she had identified: that simplifying the rater experience seemed to require accepting thinner or less reliable data.",
    "The evaluation of Interval 360 began with sample reports. She had expected to see the kind of output that a shorter, lighter process typically produces — broad thematic summaries, averaged ratings, generic developmental suggestions. What she found was more specific and more contextual than anything the legacy platform had generated.",
    "The per-assessment pricing model removed the fixed-cost barrier that had made frequency economically impractical. A quarterly cadence became financially straightforward to pilot.",
  ],
  quote: {
    text: "I fully expected to give something up. In my experience, when you simplify the process, you get thinner data. But the reports were more specific than anything we'd gotten out of the old tool. I didn't have a good explanation for that at first.",
    author: "Director of People Operations",
  },
};

const approach = {
  eyebrow: "The Approach",
  heading: "Rebuilding the cadence from the ground up",
  pilotBody: [
    "The organization ran a pilot with eight managers in the first cycle before expanding to the full leadership population. Pilot completion rate was 93%. HR time for the pilot cycle was under six hours. Reports were ready the same day the project closed.",
    "The pilot served two purposes: it gave the HR team confidence in the operational model before committing the full leadership population, and it gave the eight pilot managers a reference point — something to compare their subsequent quarterly reports against.",
  ],
  cadenceHeading: "Designing the quarterly cadence",
  cadenceBody: [
    "The full rollout structured four cycles across the calendar year. The Q1 cycle ran in February and was timed to feed the organization's spring talent review. The Q2 cycle ran in May as a development check-in. The Q3 cycle ran in August at mid-year. The Q4 cycle ran in November and fed the year-end talent conversations.",
    "The Q1 and Q4 cycles were designated full cycles — covering both what the manager accomplished and how they led. The Q2 and Q3 cycles were development check-ins covering the how dimension only. This kept the mid-year cycles lighter for raters while maintaining the full signal at the moments the organization most needed it.",
    "Project windows were set to 10 days. Raters received one reminder at day five. There was no extended chasing, no manual follow-up from HR, and no exceptions process for late submissions.",
  ],
  prepHeading: "Preparing managers for a different kind of feedback",
  prepBody: [
    "Before the first full cycle launched, each manager attended a one-hour orientation session. The session covered what the conversational format looked and felt like for raters, how to read the report, and how to use the 90-day cadence as a development rhythm rather than an annual event. The orientation was run once. It was not repeated for subsequent cycles.",
  ],
};

const cadence = [
  {
    quarter: "Q1 — February",
    title: "Spring Talent Review",
    body: "Full cycle. Covers both what and how. Data feeds directly into the organization's spring talent review conversations.",
  },
  {
    quarter: "Q2 — May",
    title: "Development Check-in",
    body: "How dimension only. Lighter for raters. Focused on leadership behavior and team experience in the 90 days since Q1.",
  },
  {
    quarter: "Q3 — August",
    title: "Mid-Year Signal",
    body: "How dimension only. Delta from Q1 and Q2 surfaced in each report — leaders can see movement on specific themes across the year.",
  },
  {
    quarter: "Q4 — November",
    title: "Year-End Integration",
    body: "Full cycle. Data feeds directly into year-end talent reviews. No separate survey. No reconciliation. The signal is already there.",
  },
];

const outcomes = {
  eyebrow: "Outcomes",
  heading: "What actually changed",
  dataSection: {
    heading: "The data arrived when it was needed",
    body: [
      "In the first full year of quarterly cycling, the organization completed four cycles across all 42 leaders. The Q4 cycle closed in late November — the same week the senior leadership team began talent review conversations. For the first time, the data being discussed in those conversations was current.",
      "Two decisions in the Q4 talent review were directly informed by the cycle data in ways the HR Director described as qualitatively different from prior years. One leader who had been on a Driver placement track showed clear and consistent improvement across the Q2, Q3, and Q4 cycles — movement that was visible in the longitudinal data but would not have been visible in a single annual snapshot. A second leader with strong internal advocates but a more ambiguous performance record showed a flat signal across all four cycles — a pattern that changed the nature of the conversation.",
      "Neither decision was made solely on 360 data. But in both cases, the HR Director noted that the quarterly signal gave the talent review a factual anchor it had not had before.",
    ],
  },
  raterSection: {
    heading: "Rater completion and quality",
    body: [
      "The Q1 completion rate was 91%. By Q3, it had reached 94%. The HR team attributed the improvement to rater familiarity with the format — raters who had completed the conversational assessment once were significantly more likely to complete it again, and to complete it faster.",
      "Average rater time-to-complete dropped from approximately 25 minutes on the legacy platform to under five minutes by the second cycle. The accessibility of the conversational format — available on any device, requiring no login, completable in a single sitting — removed the structural barriers that had suppressed completion rates for five years.",
      "The qualitative character of the feedback also shifted. Reports from the legacy platform had tended toward competency ratings with brief open-text commentary. Reports from the quarterly cycles contained more specific behavioral description — raters describing particular interactions, particular decisions, particular moments of impact. The HR Director noted that this shift made the reports more useful in debrief conversations because there was actual material to discuss.",
    ],
  },
  hrSection: {
    heading: "HR capacity and cost",
    body: [
      "Total HR time across all four cycles in year one was approximately 140 hours — less than the time required to run a single annual cycle under the legacy process. Per-assessment pricing eliminated the fixed license cost and made the program's cost directly proportional to the number of assessments completed. For a three-person HR team, the capacity that had been consumed by the annual 360 administration became available for other work.",
    ],
  },
  quote: {
    text: "We went from a process that consumed half a quarter and produced data nobody used to four short cycles that actually change what we talk about in talent conversations. The time savings matter, but honestly what matters more is that the data is useful now.",
    author: "Director of People Operations",
  },
  callout: {
    heading: "On data freshness",
    body: "One finding the HR Director had not anticipated was the effect of quarterly cycling on data accuracy. Annual 360 assessments are subject to recency bias — raters assess based on what they remember, which skews toward the most recent interactions. A quarterly cycle covers a 90-day window. Raters are describing recent, specific experience rather than reconstructing a year from memory. The signal is narrower in time but more accurate within that window.",
  },
  managersSection: {
    heading: "What changed for managers",
    body: [
      "For the leadership population, the shift from an annual event to a quarterly rhythm changed how feedback functioned in practice. The annual report had been a summative document — a record of a year that had already passed. The quarterly report arrived close enough to the period it described that managers could act on it within the same operating cycle.",
      "Several managers reported using their Q2 reports to inform specific behavioral changes before the Q3 cycle launched — a 90-day feedback loop that the annual process could not produce. The HR Director noted that this was the change she had most hoped for and least expected to see in the first year.",
    ],
  },
};

const intelligence = {
  heading: "What Comes Next",
  sub: "From process improvement to organizational intelligence.",
  body: [
    "After four quarterly cycles, the organization has something it has never had before: a longitudinal view of its leadership population. Each of the 42 leaders now has four data points. Patterns that are invisible in annual snapshots — who is improving, who is plateauing, who responds to feedback and who does not — are visible in the longitudinal record.",
    "Two structural decisions made in the Q4 talent review illustrate what this enables. One leader was reassigned from a management role to an individual contributor role — a decision supported in part by a flat signal across four cycles that suggested the management context was not producing growth. A second leader was identified as a succession candidate for a senior role — a judgment informed by consistent upward movement across the year.",
    "The People team is now using cohort-level pattern data to inform the L&D calendar — identifying shared development themes across the leadership population and building programming around what the data shows rather than what the annual engagement survey approximated.",
  ],
  cards: [
    {
      label: "Pattern recognition",
      body: "The People team could see, for the first time, which leaders improved across cycles and which plateaued. That distinction had never been visible in annual data.",
    },
    {
      label: "Conversational AI advantage",
      body: "Conversational AI captured nuance that Likert scales collapsed. Raters described specific behaviors — not abstract ratings — giving coaches actual material to work with.",
    },
  ],
};

const relatedResources = [
  {
    type: "Case Study",
    title: "Scaling feedback across a global leadership cohort",
    href: "/resources/case-study-global-cohort",
  },
  {
    type: "Playbook",
    title: "Using the What and the How in Promotion Decisions",
    href: "/resources/playbook-what-plus-how",
  },
  {
    type: "Product",
    title: "What the reports include and how to use them",
    href: "/resources",
  },
];

/* ─── PAGE ──────────────────────────────────────────────────────────────── */

export default function SurveyFatigueCaseStudy() {
  return (
    <div style={{ background: "#080808", minHeight: "100vh", color: "#fff" }}>

      {/* ── HERO ── */}
      <section style={{ paddingTop: "clamp(6rem, 12vw, 9rem)", paddingBottom: "clamp(4rem, 8vw, 6rem)" }}>
        <div className="content-wrap page-gutter">

          {/* Breadcrumb */}
          <nav style={{ marginBottom: "2.5rem", fontSize: "var(--text-xs)", color: "rgba(255,255,255,0.35)" }}>
            <Link href="/resources" style={{ color: "rgba(255,255,255,0.35)", textDecoration: "none" }}>
              Resources
            </Link>
            <span style={{ margin: "0 0.5rem" }}>/</span>
            <span>Case studies</span>
          </nav>

          {/* Eyebrow */}
          <p style={{
            display: "flex", alignItems: "center", gap: "8px",
            fontSize: "var(--text-xs)", fontWeight: 700,
            letterSpacing: "0.2em", textTransform: "uppercase",
            color: homeTheme.blue, marginBottom: "1.25rem",
          }}>
            <span style={{ width: 7, height: 7, borderRadius: "50%", background: homeTheme.blue, display: "inline-block", flexShrink: 0 }} />
            Case Study · Healthcare Services · ~900 Employees
          </p>

          {/* Heading */}
          <h1 style={{
            fontFamily: "var(--font-space-grotesk), sans-serif",
            fontSize: "clamp(2.75rem, 9vw, 6rem)",
            fontWeight: 800, lineHeight: 0.95,
            letterSpacing: "-0.03em", color: "#fff",
            marginBottom: "1.5rem", maxWidth: "18ch",
          }}>
            From annual survey fatigue to a{" "}
            <span style={{ color: homeTheme.blue }}>quarterly signal</span>
          </h1>

          {/* Sub */}
          <p style={{
            fontSize: "var(--text-base)", color: "rgba(255,255,255,0.55)",
            lineHeight: 1.7, marginBottom: "2.5rem", maxWidth: "58ch",
          }}>
            Replacing a legacy 360 with a lighter, AI-assisted flow — without sacrificing rigor for talent reviews.
          </p>

          {/* Meta pill */}
          <div style={{
            display: "inline-flex", alignItems: "center", gap: 0,
            background: "rgba(255,255,255,0.05)",
            border: "1px solid rgba(255,255,255,0.1)",
            borderRadius: "8px", padding: "0.6rem 1.1rem",
            fontSize: "var(--text-xs)", fontWeight: 700,
            letterSpacing: "0.12em", textTransform: "uppercase",
            color: "rgba(255,255,255,0.55)", flexWrap: "wrap",
          }}>
            <span style={{ display: "flex", alignItems: "center", gap: "6px" }}>
              <Users size={13} style={{ opacity: 0.7 }} />
              ~900 employees
            </span>
            <span style={{ width: 1, height: 14, background: "rgba(255,255,255,0.15)", margin: "0 1rem" }} />
            <span style={{ display: "flex", alignItems: "center", gap: "6px" }}>
              <BarChart2 size={13} style={{ opacity: 0.7 }} />
              42 managers assessed
            </span>
            <span style={{ width: 1, height: 14, background: "rgba(255,255,255,0.15)", margin: "0 1rem" }} />
            <span style={{ display: "flex", alignItems: "center", gap: "6px" }}>
              Previous cycle: 14–16 weeks
            </span>
            <span style={{ width: 1, height: 14, background: "rgba(255,255,255,0.15)", margin: "0 1rem" }} />
            <span style={{ color: "#fff" }}>Interval 360</span>
          </div>
        </div>
      </section>

      <div style={{ borderTop: "1px solid rgba(255,255,255,0.08)" }} />

      {/* ── STATS ── */}
      <section style={{ background: "#0d0f14", borderBottom: "1px solid rgba(255,255,255,0.07)", padding: "clamp(3rem, 6vw, 4.5rem) 0" }}>
        <div className="content-wrap page-gutter">
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: "1px", background: "rgba(255,255,255,0.06)", border: "1px solid rgba(255,255,255,0.06)", borderRadius: "8px", overflow: "hidden" }}>
            {stats.map((s) => (
              <div key={s.label} style={{ padding: "2rem 1.75rem", background: "#0d0f14" }}>
                <p style={{
                  fontFamily: "var(--font-space-grotesk), sans-serif",
                  fontSize: "clamp(2.5rem, 5vw, 3.5rem)",
                  fontWeight: 800, color: homeTheme.blue,
                  letterSpacing: "-0.03em", marginBottom: "0.35rem", lineHeight: 1,
                }}>
                  {s.value}
                </p>
                <p style={{ fontSize: "var(--text-xs)", fontWeight: 700, color: "#fff", marginBottom: "0.3rem", textTransform: "uppercase", letterSpacing: "0.08em" }}>{s.label}</p>
                <p style={{ fontSize: "var(--text-xs)", color: "rgba(255,255,255,0.4)", lineHeight: 1.5 }}>{s.sub}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── SITUATION ── */}
      <section style={{ borderBottom: "1px solid rgba(255,255,255,0.07)", padding: "clamp(4rem, 7vw, 6rem) 0" }}>
        <div className="content-wrap page-gutter">
          <p style={{ fontSize: "var(--text-xs)", fontWeight: 700, letterSpacing: "0.2em", textTransform: "uppercase", color: homeTheme.blue, marginBottom: "1rem" }}>
            {situation.eyebrow}
          </p>
          <h2 style={{
            fontFamily: "var(--font-space-grotesk), sans-serif",
            fontSize: "clamp(1.75rem, 3.5vw, 2.5rem)",
            fontWeight: 800, lineHeight: 1.1,
            letterSpacing: "-0.03em", color: "#fff",
            marginBottom: "2rem", maxWidth: "52ch",
          }}>
            {situation.heading}
          </h2>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "clamp(2rem, 4vw, 4rem)" }}>
            {situation.body.map((p, i) => (
              <p key={i} style={{ fontSize: "var(--text-base)", color: "rgba(255,255,255,0.5)", lineHeight: 1.85 }}>{p}</p>
            ))}
          </div>
        </div>
      </section>

      {/* ── CHALLENGE ── */}
      <section style={{ borderBottom: "1px solid rgba(255,255,255,0.07)", padding: "clamp(4rem, 7vw, 6rem) 0" }}>
        <div className="content-wrap page-gutter">

          {/* Heading + intro body + quote — 2 col */}
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "clamp(3rem, 6vw, 6rem)", alignItems: "start", marginBottom: "3rem" }}>
            <div>
              <p style={{ fontSize: "var(--text-xs)", fontWeight: 700, letterSpacing: "0.2em", textTransform: "uppercase", color: homeTheme.blue, marginBottom: "1rem" }}>
                {challenge.eyebrow}
              </p>
              <h2 style={{
                fontFamily: "var(--font-space-grotesk), sans-serif",
                fontSize: "clamp(2rem, 4vw, 3rem)",
                fontWeight: 800, lineHeight: 1,
                letterSpacing: "-0.03em", color: "#fff",
                marginBottom: "1.75rem",
                whiteSpace: "pre-line",
              }}>
                {challenge.heading}
              </h2>
              <div style={{ borderLeft: "2px solid rgba(99,102,241,0.4)", paddingLeft: "1.5rem", display: "flex", flexDirection: "column", gap: "1rem" }}>
                {challenge.body.map((p, i) => (
                  <p key={i} style={{ fontSize: "var(--text-base)", color: "rgba(255,255,255,0.5)", lineHeight: 1.85 }}>{p}</p>
                ))}
              </div>
            </div>

            <div style={{
              background: "rgba(99,102,241,0.08)",
              border: "1px solid rgba(99,102,241,0.2)",
              borderRadius: "8px",
              padding: "2.5rem 2rem",
              position: "relative",
              marginTop: "4rem",
            }}>
              <span style={{
                position: "absolute", top: "-1.5rem", left: "2rem",
                fontFamily: "Georgia, serif", fontSize: "5rem",
                lineHeight: 1, color: homeTheme.blue, opacity: 0.4,
                userSelect: "none",
              }}>
                &ldquo;
              </span>
              <p style={{
                fontSize: "var(--text-base)", fontStyle: "italic",
                color: "rgba(255,255,255,0.75)", lineHeight: 1.75,
                marginBottom: "1.5rem",
              }}>
                {challenge.quote.text}
              </p>
              <p style={{ fontSize: "var(--text-xs)", fontWeight: 700, letterSpacing: "0.14em", textTransform: "uppercase", color: homeTheme.blue }}>
                — {challenge.quote.author}
              </p>
            </div>
          </div>

          {/* Sub-sections — full width, 2-col grid */}
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "clamp(2rem, 4vw, 4rem)", borderTop: "1px solid rgba(255,255,255,0.06)", paddingTop: "3rem" }}>
            <div>
              <h3 style={{ fontFamily: "var(--font-space-grotesk), sans-serif", fontSize: "var(--text-lg)", fontWeight: 700, color: "#fff", marginBottom: "1rem" }}>
                {challenge.raterExperience.heading}
              </h3>
              <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
                {challenge.raterExperience.body.map((p, i) => (
                  <p key={i} style={{ fontSize: "var(--text-base)", color: "rgba(255,255,255,0.45)", lineHeight: 1.85 }}>{p}</p>
                ))}
              </div>
            </div>
            <div>
              <h3 style={{ fontFamily: "var(--font-space-grotesk), sans-serif", fontSize: "var(--text-lg)", fontWeight: 700, color: "#fff", marginBottom: "1rem" }}>
                {challenge.dataCosted.heading}
              </h3>
              <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
                {challenge.dataCosted.body.map((p, i) => (
                  <p key={i} style={{ fontSize: "var(--text-base)", color: "rgba(255,255,255,0.45)", lineHeight: 1.85 }}>{p}</p>
                ))}
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* ── SYSTEM COMPARISON ── */}
      <section style={{ background: "#111318", borderBottom: "1px solid rgba(255,255,255,0.07)", padding: "clamp(4rem, 7vw, 6rem) 0" }}>
        <div className="content-wrap page-gutter">
          <p style={{ fontSize: "var(--text-xs)", fontWeight: 700, letterSpacing: "0.2em", textTransform: "uppercase", color: homeTheme.blue, marginBottom: "1rem", textAlign: "center" }}>
            {systemComparison.heading}
          </p>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1.5rem", marginTop: "2rem" }}>
            {/* Legacy */}
            <div style={{ border: "1px solid rgba(255,255,255,0.08)", borderRadius: "6px", padding: "2rem", background: "rgba(255,255,255,0.02)" }}>
              <p style={{ fontSize: "var(--text-xs)", fontWeight: 700, letterSpacing: "0.16em", textTransform: "uppercase", color: "rgba(255,100,100,0.8)", marginBottom: "1.25rem" }}>
                A. {systemComparison.legacy.label}
              </p>
              <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: "0.75rem" }}>
                {systemComparison.legacy.items.map((item) => (
                  <li key={item} style={{ display: "flex", alignItems: "flex-start", gap: "0.65rem", fontSize: "var(--text-base)", color: "rgba(255,255,255,0.5)", lineHeight: 1.55 }}>
                    <span style={{ width: 6, height: 6, borderRadius: "50%", background: "rgba(255,100,100,0.6)", flexShrink: 0, marginTop: "0.45rem" }} />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            {/* Interval */}
            <div style={{ border: `1px solid rgba(99,102,241,0.3)`, borderRadius: "6px", padding: "2rem", background: "rgba(99,102,241,0.06)" }}>
              <p style={{ fontSize: "var(--text-xs)", fontWeight: 700, letterSpacing: "0.16em", textTransform: "uppercase", color: homeTheme.blue, marginBottom: "1.25rem" }}>
                B. {systemComparison.interval.label}
              </p>
              <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: "0.75rem" }}>
                {systemComparison.interval.items.map((item) => (
                  <li key={item} style={{ display: "flex", alignItems: "flex-start", gap: "0.65rem", fontSize: "var(--text-base)", color: "rgba(255,255,255,0.65)", lineHeight: 1.55 }}>
                    <span style={{ width: 6, height: 6, borderRadius: "50%", background: homeTheme.blue, flexShrink: 0, marginTop: "0.45rem" }} />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ── INFLECTION POINT ── */}
      <section style={{ borderBottom: "1px solid rgba(255,255,255,0.07)", padding: "clamp(4rem, 7vw, 6rem) 0" }}>
        <div className="content-wrap page-gutter">
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "clamp(3rem, 6vw, 6rem)", alignItems: "start" }}>
            <div>
              <p style={{ fontSize: "var(--text-xs)", fontWeight: 700, letterSpacing: "0.2em", textTransform: "uppercase", color: homeTheme.blue, marginBottom: "1rem" }}>
                {inflectionPoint.eyebrow}
              </p>
              <h2 style={{
                fontFamily: "var(--font-space-grotesk), sans-serif",
                fontSize: "clamp(1.75rem, 3.5vw, 2.5rem)",
                fontWeight: 800, lineHeight: 1.1,
                letterSpacing: "-0.03em", color: "#fff",
                marginBottom: "1.75rem",
              }}>
                {inflectionPoint.heading}
              </h2>
              <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
                {inflectionPoint.body.map((p, i) => (
                  <p key={i} style={{ fontSize: "var(--text-base)", color: "rgba(255,255,255,0.5)", lineHeight: 1.85 }}>{p}</p>
                ))}
              </div>
            </div>
            <div style={{
              background: "rgba(99,102,241,0.08)",
              border: "1px solid rgba(99,102,241,0.2)",
              borderRadius: "8px",
              padding: "2.5rem 2rem",
              position: "relative",
              marginTop: "4rem",
            }}>
              <span style={{
                position: "absolute", top: "-1.5rem", left: "2rem",
                fontFamily: "Georgia, serif", fontSize: "5rem",
                lineHeight: 1, color: homeTheme.blue, opacity: 0.4,
                userSelect: "none",
              }}>
                &ldquo;
              </span>
              <p style={{
                fontSize: "var(--text-base)", fontStyle: "italic",
                color: "rgba(255,255,255,0.75)", lineHeight: 1.75,
                marginBottom: "1.5rem",
              }}>
                {inflectionPoint.quote.text}
              </p>
              <p style={{ fontSize: "var(--text-xs)", fontWeight: 700, letterSpacing: "0.14em", textTransform: "uppercase", color: homeTheme.blue }}>
                — {inflectionPoint.quote.author}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── APPROACH ── */}
      <section style={{ background: "#0d0f14", borderBottom: "1px solid rgba(255,255,255,0.07)", padding: "clamp(4rem, 7vw, 6rem) 0" }}>
        <div className="content-wrap page-gutter">
          <p style={{ fontSize: "var(--text-xs)", fontWeight: 700, letterSpacing: "0.2em", textTransform: "uppercase", color: homeTheme.blue, marginBottom: "1rem" }}>
            {approach.eyebrow}
          </p>
          <h2 style={{
            fontFamily: "var(--font-space-grotesk), sans-serif",
            fontSize: "clamp(1.75rem, 3.5vw, 2.5rem)",
            fontWeight: 800, lineHeight: 1.1,
            letterSpacing: "-0.03em", color: "#fff",
            marginBottom: "2rem", maxWidth: "44ch",
          }}>
            {approach.heading}
          </h2>

          {/* Pilot paragraphs */}
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "clamp(2rem, 4vw, 4rem)", marginBottom: "3rem" }}>
            {approach.pilotBody.map((p, i) => (
              <p key={i} style={{ fontSize: "var(--text-base)", color: "rgba(255,255,255,0.5)", lineHeight: 1.85 }}>{p}</p>
            ))}
          </div>

          {/* Cadence sub-section */}
          <h3 style={{ fontFamily: "var(--font-space-grotesk), sans-serif", fontSize: "var(--text-lg)", fontWeight: 700, color: "#fff", marginBottom: "1.25rem" }}>
            {approach.cadenceHeading}
          </h3>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: "clamp(2rem, 4vw, 4rem)", marginBottom: "3rem" }}>
            {approach.cadenceBody.map((p, i) => (
              <p key={i} style={{ fontSize: "var(--text-base)", color: "rgba(255,255,255,0.5)", lineHeight: 1.85 }}>{p}</p>
            ))}
          </div>

          {/* Quarterly cadence timeline */}
          <div style={{ position: "relative", marginBottom: "3rem" }}>
            <div style={{ position: "absolute", top: "1.1rem", left: 0, right: 0, height: "2px", background: "rgba(255,255,255,0.06)", zIndex: 0 }} />
            <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: "1.5rem", position: "relative", zIndex: 1 }}>
              {cadence.map((c, i) => (
                <div key={c.quarter}>
                  <div style={{ width: 10, height: 10, borderRadius: "50%", background: i < 2 ? homeTheme.blue : "rgba(99,102,241,0.35)", border: "2px solid #0d0f14", marginBottom: "1.5rem", boxShadow: i < 2 ? `0 0 12px ${homeTheme.blue}66` : "none" }} />
                  <p style={{ fontSize: "var(--text-xs)", fontWeight: 700, letterSpacing: "0.2em", textTransform: "uppercase", color: homeTheme.blue, marginBottom: "0.4rem" }}>{c.quarter}</p>
                  <p style={{ fontFamily: "var(--font-space-grotesk), sans-serif", fontSize: "var(--text-base)", fontWeight: 700, color: "#fff", marginBottom: "0.6rem" }}>{c.title}</p>
                  <p style={{ fontSize: "var(--text-sm)", color: "rgba(255,255,255,0.45)", lineHeight: 1.65 }}>{c.body}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Preparing managers sub-section */}
          <h3 style={{ fontFamily: "var(--font-space-grotesk), sans-serif", fontSize: "var(--text-lg)", fontWeight: 700, color: "#fff", marginBottom: "1.25rem" }}>
            {approach.prepHeading}
          </h3>
          <div style={{ display: "flex", flexDirection: "column", gap: "1rem", maxWidth: "72ch" }}>
            {approach.prepBody.map((p, i) => (
              <p key={i} style={{ fontSize: "var(--text-base)", color: "rgba(255,255,255,0.5)", lineHeight: 1.85 }}>{p}</p>
            ))}
          </div>
        </div>
      </section>

      {/* ── OUTCOMES ── */}
      <section style={{ borderBottom: "1px solid rgba(255,255,255,0.07)", padding: "clamp(4rem, 7vw, 6rem) 0" }}>
        <div className="content-wrap page-gutter">
          <p style={{ fontSize: "var(--text-xs)", fontWeight: 700, letterSpacing: "0.2em", textTransform: "uppercase", color: homeTheme.blue, marginBottom: "1rem" }}>
            {outcomes.eyebrow}
          </p>
          <h2 style={{
            fontFamily: "var(--font-space-grotesk), sans-serif",
            fontSize: "clamp(1.75rem, 3.5vw, 2.5rem)",
            fontWeight: 800, lineHeight: 1.1,
            letterSpacing: "-0.03em", color: "#fff",
            marginBottom: "3rem", maxWidth: "44ch",
          }}>
            {outcomes.heading}
          </h2>

          {/* Data + Rater sections side by side */}
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "clamp(3rem, 5vw, 5rem)", marginBottom: "3rem" }}>
            <div>
              <h3 style={{ fontFamily: "var(--font-space-grotesk), sans-serif", fontSize: "var(--text-lg)", fontWeight: 700, color: "#fff", marginBottom: "1.25rem" }}>
                {outcomes.dataSection.heading}
              </h3>
              <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
                {outcomes.dataSection.body.map((p, i) => (
                  <p key={i} style={{ fontSize: "var(--text-base)", color: "rgba(255,255,255,0.5)", lineHeight: 1.85 }}>{p}</p>
                ))}
              </div>
            </div>
            <div>
              <h3 style={{ fontFamily: "var(--font-space-grotesk), sans-serif", fontSize: "var(--text-lg)", fontWeight: 700, color: "#fff", marginBottom: "1.25rem" }}>
                {outcomes.raterSection.heading}
              </h3>
              <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
                {outcomes.raterSection.body.map((p, i) => (
                  <p key={i} style={{ fontSize: "var(--text-base)", color: "rgba(255,255,255,0.5)", lineHeight: 1.85 }}>{p}</p>
                ))}
              </div>
            </div>
          </div>

          {/* HR section + Quote side by side */}
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "clamp(3rem, 5vw, 5rem)", marginBottom: "3rem" }}>
            <div>
              <h3 style={{ fontFamily: "var(--font-space-grotesk), sans-serif", fontSize: "var(--text-lg)", fontWeight: 700, color: "#fff", marginBottom: "1.25rem" }}>
                {outcomes.hrSection.heading}
              </h3>
              <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
                {outcomes.hrSection.body.map((p, i) => (
                  <p key={i} style={{ fontSize: "var(--text-base)", color: "rgba(255,255,255,0.5)", lineHeight: 1.85 }}>{p}</p>
                ))}
              </div>
            </div>
            <div style={{
              background: "rgba(99,102,241,0.08)",
              border: "1px solid rgba(99,102,241,0.2)",
              borderRadius: "8px",
              padding: "2.5rem 2rem",
              position: "relative",
            }}>
              <span style={{
                position: "absolute", top: "-1.5rem", left: "2rem",
                fontFamily: "Georgia, serif", fontSize: "5rem",
                lineHeight: 1, color: homeTheme.blue, opacity: 0.4,
                userSelect: "none",
              }}>
                &ldquo;
              </span>
              <p style={{
                fontSize: "var(--text-base)", fontStyle: "italic",
                color: "rgba(255,255,255,0.75)", lineHeight: 1.75,
                marginBottom: "1.5rem",
              }}>
                {outcomes.quote.text}
              </p>
              <p style={{ fontSize: "var(--text-xs)", fontWeight: 700, letterSpacing: "0.14em", textTransform: "uppercase", color: homeTheme.blue }}>
                — {outcomes.quote.author}
              </p>
            </div>
          </div>

          {/* Data freshness callout + What changed for managers side by side */}
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "clamp(3rem, 5vw, 5rem)" }}>
            <div style={{
              border: "1px solid rgba(255,255,255,0.08)",
              borderLeft: `3px solid ${homeTheme.blue}`,
              borderRadius: "4px",
              padding: "1.75rem 2rem",
              background: "rgba(255,255,255,0.02)",
              alignSelf: "start",
            }}>
              <p style={{ fontSize: "var(--text-xs)", fontWeight: 700, letterSpacing: "0.18em", textTransform: "uppercase", color: homeTheme.blue, marginBottom: "0.75rem" }}>
                {outcomes.callout.heading}
              </p>
              <p style={{ fontSize: "var(--text-base)", color: "rgba(255,255,255,0.5)", lineHeight: 1.8 }}>
                {outcomes.callout.body}
              </p>
            </div>
            <div>
              <h3 style={{ fontFamily: "var(--font-space-grotesk), sans-serif", fontSize: "var(--text-lg)", fontWeight: 700, color: "#fff", marginBottom: "1.25rem" }}>
                {outcomes.managersSection.heading}
              </h3>
              <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
                {outcomes.managersSection.body.map((p, i) => (
                  <p key={i} style={{ fontSize: "var(--text-base)", color: "rgba(255,255,255,0.5)", lineHeight: 1.85 }}>{p}</p>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── WHAT COMES NEXT / ORGANISATIONAL INTELLIGENCE ── */}
      <section style={{ background: "#0c0e12", borderBottom: "1px solid rgba(255,255,255,0.07)", padding: "clamp(4rem, 7vw, 6rem) 0" }}>
        <div className="content-wrap page-gutter">
          <p style={{ fontSize: "var(--text-xs)", fontWeight: 700, letterSpacing: "0.2em", textTransform: "uppercase", color: homeTheme.blue, marginBottom: "0.75rem" }}>
            {intelligence.heading}
          </p>
          <h2 style={{ fontFamily: "var(--font-space-grotesk), sans-serif", fontSize: "clamp(2rem, 4vw, 3rem)", fontWeight: 800, color: "#fff", lineHeight: 1.1, letterSpacing: "-0.02em", marginBottom: "2rem" }}>
            {intelligence.sub}
          </h2>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: "clamp(2rem, 4vw, 4rem)", marginBottom: "3rem" }}>
            {intelligence.body.map((p, i) => (
              <p key={i} style={{ fontSize: "var(--text-base)", color: "rgba(255,255,255,0.5)", lineHeight: 1.85 }}>{p}</p>
            ))}
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1.5rem" }}>
            {intelligence.cards.map((card) => (
              <div key={card.label} style={{ border: "1px solid rgba(255,255,255,0.07)", borderRadius: "6px", padding: "2rem", background: "rgba(255,255,255,0.02)" }}>
                <p style={{ fontSize: "var(--text-xs)", fontWeight: 700, letterSpacing: "0.18em", textTransform: "uppercase", color: homeTheme.blue, marginBottom: "0.75rem" }}>{card.label}</p>
                <p style={{ fontSize: "var(--text-base)", color: "rgba(255,255,255,0.55)", lineHeight: 1.7 }}>{card.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section style={{ borderTop: "1px solid rgba(255,255,255,0.08)", padding: "clamp(3rem, 6vw, 5rem) 0" }}>
        <div className="content-wrap page-gutter" style={{ maxWidth: "860px" }}>
          <p style={{ display: "flex", alignItems: "center", gap: "6px", fontSize: "var(--text-xs)", fontWeight: 700, letterSpacing: "0.2em", textTransform: "uppercase", color: "rgba(255,255,255,0.3)", marginBottom: "1rem" }}>
            <TrendingUp size={13} style={{ opacity: 0.6 }} />
            Get Started
          </p>
          <h2 style={{ fontFamily: "var(--font-space-grotesk), sans-serif", fontSize: "clamp(1.5rem, 3vw, 2.5rem)", fontWeight: 800, color: "#fff", marginBottom: "0.75rem", lineHeight: 1.1, letterSpacing: "-0.02em" }}>
            Ready to replace your legacy 360?
          </h2>
          <p style={{ fontSize: "var(--text-base)", color: "rgba(255,255,255,0.45)", lineHeight: 1.65, marginBottom: "2rem", maxWidth: "60ch" }}>
            Self-serve assessments start at $150 each, with ten-packs at $125. For organizations running ongoing programs across a larger leadership population, enterprise plans provide unlimited assessments within an annual subscription. Contact us to discuss what that looks like for your organization.
          </p>
          <div style={{ display: "flex", gap: "0.75rem", flexWrap: "wrap" }}>
            <Link href="/buy" style={{ display: "inline-flex", alignItems: "center", gap: "8px", background: homeTheme.blue, color: "#fff", fontSize: "var(--text-xs)", fontWeight: 700, letterSpacing: "0.12em", textTransform: "uppercase", padding: "0.75rem 1.75rem", borderRadius: "4px", textDecoration: "none" }}>
              Buy an Assessment
              <ArrowRight size={14} />
            </Link>
            <Link href="/company#contact" style={{ display: "inline-flex", alignItems: "center", border: "1px solid rgba(255,255,255,0.18)", color: "rgba(255,255,255,0.7)", fontSize: "var(--text-xs)", fontWeight: 700, letterSpacing: "0.12em", textTransform: "uppercase", padding: "0.75rem 1.75rem", borderRadius: "4px", textDecoration: "none" }}>
              Talk to us about Enterprise
            </Link>
          </div>

          {/* Related resources */}
          <div style={{ marginTop: "4rem", paddingTop: "3rem", borderTop: "1px solid rgba(255,255,255,0.07)" }}>
            <p style={{ fontSize: "var(--text-xs)", fontWeight: 700, letterSpacing: "0.2em", textTransform: "uppercase", color: "rgba(255,255,255,0.3)", marginBottom: "1.5rem" }}>
              Related resources
            </p>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: "1rem" }}>
              {relatedResources.map((r) => (
                <Link key={r.title} href={r.href} style={{ textDecoration: "none", display: "block", border: "1px solid rgba(255,255,255,0.08)", borderRadius: "6px", padding: "1.25rem 1.5rem", background: "rgba(255,255,255,0.02)", transition: "border-color 0.2s" }}>
                  <p style={{ fontSize: "var(--text-xs)", fontWeight: 700, letterSpacing: "0.18em", textTransform: "uppercase", color: homeTheme.blue, marginBottom: "0.5rem" }}>{r.type}</p>
                  <p style={{ fontSize: "var(--text-base)", color: "rgba(255,255,255,0.65)", lineHeight: 1.5 }}>{r.title}</p>
                </Link>
              ))}
            </div>
          </div>

          {/* Back link */}
          <div style={{ marginTop: "3rem", paddingTop: "2rem", borderTop: "1px solid rgba(255,255,255,0.07)" }}>
            <Link href="/resources" style={{ display: "inline-flex", alignItems: "center", gap: "6px", fontSize: "var(--text-xs)", color: "rgba(255,255,255,0.35)", textDecoration: "none", letterSpacing: "0.08em" }}>
              ← Back to Resources
            </Link>
          </div>
        </div>
      </section>

    </div>
  );
}
