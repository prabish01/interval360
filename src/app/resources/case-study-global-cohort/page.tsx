import Link from "next/link";
import { ArrowRight, TrendingUp, Clock, Users } from "lucide-react";
import { homeTheme } from "@/lib/homeTheme";

export const metadata = {
  title: "Scaling a Global Cohort — Interval 360",
  description: "How a mid-size consulting firm ran 360 assessments across 75 leaders in 12 countries — reducing cycle time from 12 weeks to 14 days and cutting coordination hours by 87%.",
  openGraph: {
    title: "Scaling a Global Cohort — Interval 360",
    description: "How a mid-size consulting firm ran 360 assessments across 75 leaders in 12 countries — reducing cycle time from 12 weeks to 14 days and cutting coordination hours by 87%.",
    image: "/interval360-og-image.png"
  },
  twitter: {
    title: "Scaling a Global Cohort — Interval 360",
    description: "How a mid-size consulting firm ran 360 assessments across 75 leaders in 12 countries — reducing cycle time from 12 weeks to 14 days and cutting coordination hours by 87%.",
    image: "/interval360-og-image.png"
  },
};

/* ─── DATA ──────────────────────────────────────────────────────────────── */

const snapshot = [
  { label: "Industry", value: "Professional Services" },
  { label: "Company size", value: "~1,500 employees" },
  { label: "Leaders assessed", value: "75 across 12 countries" },
  { label: "Assessment cycle", value: "14 days" },
];


const situation = {
  heading: "A firm that had outgrown its feedback process",
  body: [
    "The company is a mid-size management consulting and advisory firm with roughly 1,500 employees operating across North America, Europe, and Asia-Pacific. Over the past decade, the firm had grown steadily through both organic expansion and a series of smaller acquisitions, and its people-manager population had grown with it: somewhere between 150 and 180 managers and senior managers spread across practice areas and geographies, each leading teams of varying size and composition.",
    "The firm had always taken leadership development seriously. It maintained a dedicated L&D function, ran structured onboarding for new managers, and had piloted executive coaching at the senior manager level. Its formal leadership development program, the structured track through which the firm developed its highest-priority managers and senior managers, enrolled a cohort of 75 leaders at any given time. What it had never solved was how to run a meaningful 360 process for that cohort without consuming an unsustainable share of L&D capacity to do it.",
    "The process they had inherited was built around a combination of licensed survey platforms, facilitated debrief sessions delivered by external consultants, and a synthesis workflow that lived largely in spreadsheets and inbox threads. At 25 leaders, it had been manageable, if not elegant. At 75 leaders across 12 countries and multiple time zones, it had become something else entirely.",
  ],
};

const challenge = {
  heading: "When coordination becomes the product",
  body: [
    "The firm's Head of Leadership Development described the previous process simply: \"We were spending more time running the assessment than using it.\"",
    "Each cycle required coordinating rater nominations across 75 leaders, managing survey links and reminder emails across hundreds of individuals in multiple languages and time zones, chasing completion rates manually, and then synthesizing raw survey data into something a manager could actually act on. The L&D team estimated they were absorbing between 300 and 350 hours of internal coordination time per cycle before a single debrief conversation had taken place. That figure did not include the cost of the external facilitation: each debrief session was led by an outside consultant, and with 75 leaders in the cohort, the facilitation fees alone represented a significant line item each cycle.",
    "Rater burden compounded the coordination problem. Each individual survey took a minimum of twenty minutes to complete, and raters who took the process seriously frequently reported spending closer to thirty minutes per person. A senior manager nominated as a rater for four or five leaders in the same cycle could find themselves committing two hours or more to feedback alone, on top of their regular workload. That was before accounting for any context-switching or preparation time. The time ask was not small, and people knew it.",
    "Cycle time had stretched to eleven or twelve weeks by the time the last reports were ready. By that point, the feedback often felt stale to the leaders receiving it. Some managers had changed roles or teams between the time raters were invited and the time the debrief conversation occurred. Others had simply moved on mentally, and the debrief session felt like a retrospective on a period of work they were already past.",
    "Rater fatigue was a growing problem as well. Because the firm ran its full cohort on a single annual cycle, the same senior managers and cross-functional leads were often nominated as raters for multiple leaders simultaneously. Receiving three, four, or five separate survey invitations within the same two-week window, each requiring fifteen to twenty minutes of completion time, had driven rater completion rates down steadily over three cycles. In the most recent cycle before Interval 360, overall completion had dropped to 61 percent.",
    "The downstream effect was predictable. Reports thin on rater responses were less useful in debrief conversations. Leaders began to read the process as a compliance exercise rather than a genuine development investment. Some started declining to participate in optional coaching sessions tied to the assessment, citing the low utility of the reports.",
  ],
  before: {
    label: "Previous process",
    items: [
      "11 to 12 week cycle from launch to final report",
      "300 to 350 hours of L&D coordination per cycle",
      "Manual rater reminders managed via email",
      "Individual surveys taking 20 to 30 minutes each to complete",
      "Rater completion rates declining each cycle",
      "Reports frequently filed rather than used in coaching",
      "External consultants required for debrief facilitation, at significant per-session cost",
    ],
  },
  after: {
    label: "With Interval 360",
    items: [
      "14-day cycle from project launch to report delivery",
      "Coordination time reduced to under 40 hours per cycle, no external facilitation cost",
      "Automated reminders configured at project setup",
      "Rater conversations averaging around five minutes each",
      "84% rater completion rate in first cohort",
      "Reports integrated directly into coaching conversations",
      "Debrief conversations owned by internal managers and coaches",
    ],
  },
};

const approach = {
  heading: "Rebuilding the process around the rater experience",
  intro: [
    "The firm's L&D team had two non-negotiable requirements going into any evaluation of a new platform. The first was that rater burden had to come down significantly. The second was that reports had to be ready fast enough to be useful — which in practice meant within days of the assessment closing, not weeks.",
    "They piloted Interval 360 with a subset of fifteen leaders before committing to a full cohort rollout. The pilot ran over fourteen days with a focus on three things: whether raters would actually complete a conversational assessment rather than a traditional survey, whether the reports were specific enough to support a real coaching conversation, and whether the platform's admin tools were sufficient for a distributed L&D team to manage without significant external support.",
  ],
  pilotHeading: "The pilot findings",
  pilotBody: [
    "Rater completion in the pilot reached 88 percent across the fifteen participants. Post-completion feedback from raters noted that the conversational format felt meaningfully different from a survey: less like filling out a form and more like being asked for an actual opinion. Several raters commented unprompted that they had said things in the Interval 360 conversation that they would not have known how to express in a rating scale. The L&D team took that as a strong signal.",
    "The reports generated at the close of the pilot were, by the team's assessment, more specific than anything their previous process had produced. The synthesis surfaced themes and patterns from conversational input rather than averaging numerical ratings, which meant the reports contained language that was actually useful in a coaching context: specific observations about how the leader communicated under pressure, how their team experienced their approach to delegation, where peers saw consistency between what the leader said and what they did.",
    "Admin coordination for the fifteen-person pilot consumed fewer than eight hours of L&D time. Extrapolated to a full cohort of 75, that pointed toward a total coordination overhead that was a fraction of the previous process.",
  ],
  pilotQuote: {
    text: "The pilot was the easy part to sell internally. When your own L&D team runs a fifteen-person cohort in two weeks and spends eight hours on coordination instead of eighty, the conversation about full rollout is pretty short.",
    attribution: "Head of Leadership Development",
    attributionDetail: "anonymized professional services firm",
  },
  rolloutHeading: "Rollout design",
  rolloutBody: [
    "For the full cohort of 75 leaders, the L&D team made several deliberate decisions about how to structure the rollout rather than simply running a larger version of the pilot.",
    "First, they staggered project launches across three waves of 25 leaders each, spaced two weeks apart. This addressed the rater fatigue problem directly: rather than sending a senior manager five simultaneous rater invitations, invitations arrived in smaller clusters over a six-week window. The same rater might still appear on multiple leaders' lists, but they were no longer receiving all of them at once.",
    "Second, the L&D team invested time before any invitations went out in briefing both participants and their managers on what the assessment was, how it worked, and what leaders would receive at the end. Interval 360's rater invitations do not carry this context on their own, and the team had learned from the pilot that raters who understood what they were contributing to completed at higher rates and provided more substantive input.",
    "Third, they built report delivery directly into existing development infrastructure. Rather than scheduling standalone debrief sessions, reports were distributed ahead of already-scheduled quarterly check-ins between leaders and their managers, or ahead of coaching sessions for those participating in the firm's leadership development program. This meant the data arrived in a conversation that already had a developmental purpose, rather than requiring a separate meeting to be scheduled and attended.",
  ],
  rolloutCallout: {
    label: "On timing",
    text: "The team deliberately aligned the first wave launch with the beginning of Q3, roughly six weeks before the firm's mid-year talent review process. Reports from all three waves were available before that review. For several leaders, the Interval 360 data contributed directly to promotion and succession conversations that had previously relied almost entirely on manager input and informal reputation.",
  },
};

const outcomeSections = [
  {
    id: "cycle-time",
    heading: "Cycle time",
    body: [
      "The full cohort of 75 leaders completed its first Interval 360 cycle in under four weeks, including the staggered launch schedule. Total elapsed time from the first project launch to the last report delivery was 26 days. The previous process had never closed a full cohort cycle in under eleven weeks.",
      "That difference is not primarily a technology story. The previous cycle stretched across eleven weeks in large part because synthesis was manual and sequential — each leader's report had to be prepared individually, which meant the team was always working through a backlog. Interval 360's automated report generation meant that reports for all 75 leaders were available within hours of each project's close date, with no queue to work through and no synthesis effort required from the L&D team.",
    ],
  },
  {
    id: "rater-completion",
    heading: "Rater completion",
    body: [
      "Overall completion rate across the cohort's first cycle was 84 percent, up from 61 percent in the previous cycle. The team attributed the improvement to two factors roughly equally: the shorter time commitment required by the conversational format (around five minutes per rater, versus fifteen to twenty minutes for the previous survey), and the staggered launch schedule that reduced the burden on raters who appeared on multiple leaders' lists.",
      "A secondary effect was also observed: rater quality, as assessed by the L&D team through a review of report content, improved noticeably. Reports from the Interval 360 cycle were more specific, included more contextual detail, and were more frequently described by leaders as feeling accurate rather than generic.",
    ],
  },
  {
    id: "ld-capacity",
    heading: "L&D capacity",
    body: [
      "The most significant operational change for the L&D team was the recovery of coordination time. Total coordination hours for the 75-leader cohort across all three waves came in under 40 hours, compared to the 300 to 350 hours the previous process required. The team did not simply absorb those hours as savings. They redirected them into the work that the previous process had been crowding out: more time in actual development conversations, more attention to coaching quality, and initial design work on a manager effectiveness program that had been on the roadmap for two years without the capacity to build it.",
    ],
  },
  {
    id: "report-usage",
    heading: "How leaders used the reports",
    body: [
      "Perhaps the clearest signal of a changed process was what leaders did with the reports after receiving them. In the previous cycle, the L&D team's informal estimate was that fewer than half of the leaders who received reports brought them into a substantive coaching or development conversation. The rest filed them.",
      "In the first Interval 360 cycle, the team tracked report usage more deliberately: 68 of the 75 leaders referenced their report in at least one subsequent development conversation, and 41 brought specific data points from their What and the How scores into their mid-year talent review discussion with their manager. Several leaders requested a second assessment cycle before the annual process to track progress on specific development areas identified in the first report.",
    ],
    quote: {
      text: "The reports are specific enough that leaders actually have something to talk about. That sounds like a low bar, but it wasn't where we were before. A number on a scale doesn't give you much to work with. A synthesized pattern with real language from the people you work with every day — that starts a conversation.",
      attribution: "Head of Leadership Development",
      attributionDetail: "anonymized professional services firm",
    },
  },
  {
    id: "group-intelligence",
    heading: "Group-level development intelligence",
    body: [
      "One outcome the L&D team had not fully anticipated was how useful the aggregate data would be across the cohort as a whole. Individual reports are confidential to the participant and their manager, but the patterns visible across 75 assessments revealed something the team had not previously had a systematic way to see: where the leadership population as a whole was strong, and where it was not.",
      "When the team reviewed the synthesis themes across the cohort, several patterns emerged consistently. Communication under pressure was flagged as a development area in a disproportionate share of reports. So was delegation, and the ability to hold direct reports accountable without micromanaging. These were not individual gaps belonging to individual leaders — they were shared patterns across the population.",
      "That insight had direct implications for how the firm allocated its development budget. Rather than defaulting to individual coaching for every leader with a development area in these themes, the team designed three group learning experiences targeted at the patterns the data had surfaced: a workshop series on communication and influence under pressure, a peer cohort on delegation and accountability, and a structured curriculum on developing direct reports. Group interventions cost a fraction of what individual coaching would have required to address the same gaps at scale, and they had the additional benefit of building shared language and cross-cohort relationships among leaders who were working through similar challenges at the same time.",
      "The shift was meaningful. Previously, the L&D team had built development programming based on anecdote, manager requests, and intuition about what the population probably needed. For the first time, they had structured evidence to work from — a clear signal about where group investment would have the highest return across the leadership population.",
    ],
  },
  {
    id: "succession",
    heading: "Succession and talent decisions",
    body: [
      "The alignment of the assessment cycle with the mid-year talent review created an opportunity the L&D team had not fully anticipated. With the What and the How data available for a significant portion of the leadership population, the talent review conversation shifted in character. Rather than relying primarily on manager impressions and informal reputation, reviewers had a consistent framework and a consistent data format for discussing readiness across leaders. Quadrant placements gave the conversation a shared vocabulary. The data did not replace judgment, but it gave judgment something more structured to work with.",
      "Three leaders who had been informally identified as high-potential candidates were confirmed by their Interval 360 data as Performers — high on both dimensions — which supported acceleration of their development investments. Two others showed Driver placements: strong What scores but low How scores that had not previously been visible in the talent data. Both received targeted coaching support as a direct result, with explicit development goals tied to their How score for the following cycle.",
    ],
  },
];

const nextSection = {
  heading: "Building toward a repeatable cadence",
  body: [
    "Following the first full cohort cycle, the firm has moved to a twice-annual assessment cadence for its full leadership population. The staggered launch model has been retained and refined: waves are now structured around business unit rather than arbitrary grouping, which makes the data more immediately useful in business-unit-level talent conversations.",
    "The L&D team has also begun using cohort-level patterns from Interval 360 data in its annual report to firm leadership on leadership health across the organization. While individual reports remain confidential to the participant and their manager, aggregate signal — the distribution of quadrant placements, the average How score across the cohort, the prevalence of specific themes in peer and direct report feedback — has become part of the firm's organizational intelligence on its leadership population.",
    "The firm is currently evaluating whether to extend Interval 360 to a broader population that includes client-facing managers and project leads who are not yet part of the formal leadership development program. The primary question is not whether the platform will work at that scale — the first cycle answered that — but whether the organization is ready to act on the data it generates.",
  ],
  callout: {
    label: "A note on what made this work",
    text: "The technology was necessary but not sufficient. The rollout decisions that drove the outcomes — the staggered launch schedule, the pre-briefing of raters, the integration of reports into existing development touchpoints, the timing relative to the talent review — were deliberate choices made by the L&D team, not features of the platform. Interval 360 gave them the capability. The team knew what to do with it.",
  },
};

const related = [
  {
    label: "Playbook",
    title: "How to Run a 360 in 14 Days",
    href: "/resources/how-to-run-a-360-in-14-days",
  },
  {
    label: "Playbook",
    title: "Using the What and the How in Promotion Decisions",
    href: "/resources/using-what-and-how-in-promotion-decisions",
  },
  {
    label: "Solutions",
    title: "Leadership Development Programs, Cohorts, and Coaching",
    href: "/solutions/leadership-development",
  },
];

/* ─── PAGE ──────────────────────────────────────────────────────────────── */

export default function GlobalCohortCaseStudy() {
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

          {/* Meta pill — unified design */}
          <div style={{
            display: "inline-flex", alignItems: "center", gap: 0,
            background: "rgba(255,255,255,0.05)",
            border: "1px solid rgba(255,255,255,0.1)",
            borderRadius: "8px", padding: "0.6rem 1.1rem",
            fontSize: "var(--text-xs)", fontWeight: 700,
            letterSpacing: "0.12em", textTransform: "uppercase",
            color: "rgba(255,255,255,0.55)", marginBottom: "1.25rem",
            flexWrap: "wrap",
          }}>
            <span style={{ display: "flex", alignItems: "center", gap: "6px" }}>
              <Clock size={13} style={{ opacity: 0.7 }} />
              ~18 min read
            </span>
            <span style={{ width: 1, height: 14, background: "rgba(255,255,255,0.15)", margin: "0 1rem" }} />
            <span style={{ display: "flex", alignItems: "center", gap: "6px" }}>
              <Users size={13} style={{ opacity: 0.7 }} />
              HR Stakeholders &amp; L&amp;D Leaders
            </span>
            <span style={{ width: 1, height: 14, background: "rgba(255,255,255,0.15)", margin: "0 1rem" }} />
            <span style={{ color: "#fff" }}>Interval 360</span>
          </div>

          {/* Heading */}
          <h1 style={{
            fontFamily: "var(--font-space-grotesk), sans-serif",
            fontSize: "clamp(2.75rem, 9vw, 6rem)",
            fontWeight: 800, lineHeight: 0.95,
            letterSpacing: "-0.03em", color: "#fff",
            marginBottom: "1.5rem", maxWidth: "18ch",
          }}>
            Scaling feedback across a{" "}
            <span style={{ color: homeTheme.blue }}>global leadership cohort</span>
          </h1>

          {/* Sub */}
          <p style={{
            fontSize: "var(--text-base)", color: "rgba(255,255,255,0.55)",
            lineHeight: 1.7, marginBottom: "2.5rem", maxWidth: "58ch",
          }}>
            Fewer coordination hours, faster cycles, and reports leaders actually use in development conversations.
          </p>

          {/* Snapshot grid */}
          <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: "1px", background: "rgba(255,255,255,0.08)", border: "1px solid rgba(255,255,255,0.08)", borderRadius: "8px", overflow: "hidden", marginTop: "2.5rem" }}>
            {snapshot.map((s) => (
              <div key={s.label} style={{ padding: "1.5rem 1.75rem", background: "#080808" }}>
                <p style={{ fontSize: "var(--text-xs)", fontWeight: 700, letterSpacing: "0.18em", textTransform: "uppercase", color: "rgba(255,255,255,0.3)", marginBottom: "0.5rem" }}>{s.label}</p>
                <p style={{
                  fontFamily: "var(--font-space-grotesk), sans-serif",
                  fontSize: "clamp(1rem, 2vw, 1.25rem)",
                  fontWeight: 800, color: "#fff",
                  letterSpacing: "-0.02em", lineHeight: 1.25,
                }}>
                  {s.value}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <div style={{ borderTop: "1px solid rgba(255,255,255,0.08)" }} />

      {/* ── OUTCOMES STATS ── */}
      <section style={{ background: "#fff", borderBottom: "1px solid rgba(0,0,0,0.08)", padding: "clamp(4rem, 8vw, 7rem) 0" }}>
        <div className="content-wrap page-gutter">
          <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "clamp(2rem, 5vw, 5rem)" }}>

            {/* 11 wks */}
            <div>
              <p style={{
                fontFamily: "var(--font-space-grotesk), sans-serif",
                fontSize: "clamp(3.5rem, 8vw, 7rem)",
                fontWeight: 800, color: "#0a0a0a",
                letterSpacing: "-0.04em", lineHeight: 0.9,
                marginBottom: "1.5rem", whiteSpace: "nowrap",
              }}>
                11 wks
              </p>
              <div style={{ height: 1, background: "rgba(0,0,0,0.12)", marginBottom: "1rem" }} />
              <p style={{ fontSize: "var(--text-base)", color: "rgba(0,0,0,0.5)", lineHeight: 1.6 }}>
                Average cycle time reduction, from 12 weeks to under one
              </p>
            </div>

            {/* 84% */}
            <div>
              <p style={{
                fontFamily: "var(--font-space-grotesk), sans-serif",
                fontSize: "clamp(3.5rem, 8vw, 7rem)",
                fontWeight: 800, color: "#0a0a0a",
                letterSpacing: "-0.04em", lineHeight: 0.9,
                marginBottom: "1.5rem",
              }}>
                84%
              </p>
              <div style={{ height: 1, background: "rgba(0,0,0,0.12)", marginBottom: "1rem" }} />
              <p style={{ fontSize: "var(--text-base)", color: "rgba(0,0,0,0.5)", lineHeight: 1.6 }}>
                Rater completion rate across the cohort
              </p>
            </div>

            {/* 300+ */}
            <div>
              <p style={{
                fontFamily: "var(--font-space-grotesk), sans-serif",
                fontSize: "clamp(3.5rem, 8vw, 7rem)",
                fontWeight: 800, color: homeTheme.blue,
                letterSpacing: "-0.04em", lineHeight: 0.9,
                marginBottom: "1.5rem",
              }}>
                300+
              </p>
              <div style={{ height: 1, background: "rgba(0,0,0,0.12)", marginBottom: "1rem" }} />
              <p style={{ fontSize: "var(--text-base)", color: "rgba(0,0,0,0.5)", lineHeight: 1.6 }}>
                L&D coordination hours recovered per cycle
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* ── SITUATION ── */}
      <section style={{ borderBottom: "1px solid rgba(255,255,255,0.07)", padding: "clamp(4rem, 7vw, 6rem) 0" }}>
        <div className="content-wrap page-gutter">
          <p style={{ fontSize: "var(--text-xs)", fontWeight: 700, letterSpacing: "0.2em", textTransform: "uppercase", color: homeTheme.blue, marginBottom: "1rem" }}>
            Situation
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
              <p key={i} style={{ fontSize: "var(--text-base)", color: "rgba(255,255,255,0.5)", lineHeight: 1.85, gridColumn: i === situation.body.length - 1 && situation.body.length % 2 !== 0 ? "1 / -1" : undefined }}>{p}</p>
            ))}
          </div>
        </div>
      </section>

      {/* ── CHALLENGE ── */}
      <section style={{ borderBottom: "1px solid rgba(255,255,255,0.07)", padding: "clamp(4rem, 7vw, 6rem) 0" }}>
        <div className="content-wrap page-gutter">
          <p style={{ fontSize: "var(--text-xs)", fontWeight: 700, letterSpacing: "0.2em", textTransform: "uppercase", color: homeTheme.blue, marginBottom: "1rem" }}>
            The Challenge
          </p>
          <h2 style={{
            fontFamily: "var(--font-space-grotesk), sans-serif",
            fontSize: "clamp(2rem, 4vw, 3rem)",
            fontWeight: 800, lineHeight: 1,
            letterSpacing: "-0.03em", color: "#fff",
            marginBottom: "2.5rem", maxWidth: "44ch",
          }}>
            {challenge.heading}
          </h2>

          {/* Body paragraphs */}
          <div style={{ display: "flex", flexDirection: "column", gap: "1rem", marginBottom: "3.5rem" }}>
            {challenge.body.map((p, i) => (
              <p key={i} style={{ fontSize: "var(--text-base)", color: "rgba(255,255,255,0.5)", lineHeight: 1.85 }}>{p}</p>
            ))}
          </div>

          {/* Before / After comparison */}
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1.5rem" }}>
            <div style={{ border: "1px solid rgba(255,255,255,0.08)", borderRadius: "6px", padding: "2rem", background: "rgba(255,255,255,0.02)" }}>
              <p style={{ fontSize: "var(--text-xs)", fontWeight: 700, letterSpacing: "0.16em", textTransform: "uppercase", color: "rgba(255,100,100,0.8)", marginBottom: "1.25rem" }}>
                A. {challenge.before.label}
              </p>
              <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: "0.75rem" }}>
                {challenge.before.items.map((item) => (
                  <li key={item} style={{ display: "flex", alignItems: "flex-start", gap: "0.65rem", fontSize: "var(--text-base)", color: "rgba(255,255,255,0.5)", lineHeight: 1.55 }}>
                    <span style={{ width: 6, height: 6, borderRadius: "50%", background: "rgba(255,100,100,0.6)", flexShrink: 0, marginTop: "0.45rem" }} />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div style={{ border: "1px solid rgba(99,102,241,0.3)", borderRadius: "6px", padding: "2rem", background: "rgba(99,102,241,0.06)" }}>
              <p style={{ fontSize: "var(--text-xs)", fontWeight: 700, letterSpacing: "0.16em", textTransform: "uppercase", color: homeTheme.blue, marginBottom: "1.25rem" }}>
                B. {challenge.after.label}
              </p>
              <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: "0.75rem" }}>
                {challenge.after.items.map((item) => (
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

      {/* ── APPROACH ── */}
      <section style={{ background: "#0d0f14", borderBottom: "1px solid rgba(255,255,255,0.07)", padding: "clamp(4rem, 7vw, 6rem) 0" }}>
        <div className="content-wrap page-gutter">
          <p style={{ fontSize: "var(--text-xs)", fontWeight: 700, letterSpacing: "0.2em", textTransform: "uppercase", color: homeTheme.blue, marginBottom: "1rem" }}>
            The Approach
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

          {/* Intro */}
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "clamp(2rem, 4vw, 4rem)", marginBottom: "3.5rem" }}>
            {approach.intro.map((p, i) => (
              <p key={i} style={{ fontSize: "var(--text-base)", color: "rgba(255,255,255,0.5)", lineHeight: 1.85 }}>{p}</p>
            ))}
          </div>

          {/* Pilot findings */}
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "clamp(3rem, 6vw, 6rem)", alignItems: "start", marginBottom: "3.5rem", borderTop: "1px solid rgba(255,255,255,0.06)", paddingTop: "3rem" }}>
            <div>
              <h3 style={{ fontFamily: "var(--font-space-grotesk), sans-serif", fontSize: "var(--text-lg)", fontWeight: 700, color: "#fff", marginBottom: "1.25rem" }}>
                {approach.pilotHeading}
              </h3>
              <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
                {approach.pilotBody.map((p, i) => (
                  <p key={i} style={{ fontSize: "var(--text-base)", color: "rgba(255,255,255,0.45)", lineHeight: 1.85 }}>{p}</p>
                ))}
              </div>
            </div>
            <div style={{
              background: "rgba(99,102,241,0.08)",
              border: "1px solid rgba(99,102,241,0.2)",
              borderRadius: "8px",
              padding: "2.5rem 2rem",
              position: "relative",
              marginTop: "2rem",
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
                {approach.pilotQuote.text}
              </p>
              <p style={{ fontSize: "var(--text-xs)", fontWeight: 700, letterSpacing: "0.14em", textTransform: "uppercase", color: homeTheme.blue }}>
                — {approach.pilotQuote.attribution}
              </p>
              <p style={{ fontSize: "var(--text-xs)", color: "rgba(255,255,255,0.3)", marginTop: "0.25rem" }}>
                {approach.pilotQuote.attributionDetail}
              </p>
            </div>
          </div>

          {/* Rollout design */}
          <div style={{ borderTop: "1px solid rgba(255,255,255,0.06)", paddingTop: "3rem" }}>
            <h3 style={{ fontFamily: "var(--font-space-grotesk), sans-serif", fontSize: "var(--text-lg)", fontWeight: 700, color: "#fff", marginBottom: "1.25rem" }}>
              {approach.rolloutHeading}
            </h3>
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "clamp(2rem, 4vw, 4rem)", marginBottom: "2rem" }}>
              {approach.rolloutBody.map((p, i) => (
                <p key={i} style={{ fontSize: "var(--text-base)", color: "rgba(255,255,255,0.45)", lineHeight: 1.85 }}>{p}</p>
              ))}
            </div>
            <div style={{
              border: "1px solid rgba(255,255,255,0.08)",
              borderLeft: `3px solid ${homeTheme.blue}`,
              borderRadius: "4px",
              padding: "1.75rem 2rem",
              background: "rgba(255,255,255,0.02)",
            }}>
              <p style={{ fontSize: "var(--text-xs)", fontWeight: 700, letterSpacing: "0.18em", textTransform: "uppercase", color: homeTheme.blue, marginBottom: "0.75rem" }}>
                {approach.rolloutCallout.label}
              </p>
              <p style={{ fontSize: "var(--text-base)", color: "rgba(255,255,255,0.5)", lineHeight: 1.8 }}>
                {approach.rolloutCallout.text}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── OUTCOMES ── */}
      <section style={{ borderBottom: "1px solid rgba(255,255,255,0.07)", padding: "clamp(4rem, 7vw, 6rem) 0" }}>
        <div className="content-wrap page-gutter">
          <p style={{ fontSize: "var(--text-xs)", fontWeight: 700, letterSpacing: "0.2em", textTransform: "uppercase", color: homeTheme.blue, marginBottom: "1rem" }}>
            Outcomes
          </p>
          <h2 style={{
            fontFamily: "var(--font-space-grotesk), sans-serif",
            fontSize: "clamp(1.75rem, 3.5vw, 2.5rem)",
            fontWeight: 800, lineHeight: 1.1,
            letterSpacing: "-0.03em", color: "#fff",
            marginBottom: "3rem", maxWidth: "44ch",
          }}>
            What changed, and what it meant
          </h2>

          {/* Cycle time + Rater completion */}
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "clamp(3rem, 5vw, 5rem)", marginBottom: "3rem" }}>
            {outcomeSections.slice(0, 2).map((s) => (
              <div key={s.id}>
                <h3 style={{ fontFamily: "var(--font-space-grotesk), sans-serif", fontSize: "var(--text-lg)", fontWeight: 700, color: "#fff", marginBottom: "1.25rem" }}>
                  {s.heading}
                </h3>
                <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
                  {s.body.map((p, i) => (
                    <p key={i} style={{ fontSize: "var(--text-base)", color: "rgba(255,255,255,0.5)", lineHeight: 1.85 }}>{p}</p>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* L&D capacity */}
          <div style={{ borderTop: "1px solid rgba(255,255,255,0.06)", paddingTop: "3rem", marginBottom: "3rem" }}>
            <h3 style={{ fontFamily: "var(--font-space-grotesk), sans-serif", fontSize: "var(--text-lg)", fontWeight: 700, color: "#fff", marginBottom: "1.25rem" }}>
              {outcomeSections[2].heading}
            </h3>
            <div>
              {outcomeSections[2].body.map((p, i) => (
                <p key={i} style={{ fontSize: "var(--text-base)", color: "rgba(255,255,255,0.5)", lineHeight: 1.85 }}>{p}</p>
              ))}
            </div>
          </div>

          {/* How leaders used the reports + quote */}
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "clamp(3rem, 5vw, 5rem)", marginBottom: "3rem", borderTop: "1px solid rgba(255,255,255,0.06)", paddingTop: "3rem" }}>
            <div>
              <h3 style={{ fontFamily: "var(--font-space-grotesk), sans-serif", fontSize: "var(--text-lg)", fontWeight: 700, color: "#fff", marginBottom: "1.25rem" }}>
                {outcomeSections[3].heading}
              </h3>
              <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
                {outcomeSections[3].body.map((p, i) => (
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
                {outcomeSections[3].quote!.text}
              </p>
              <p style={{ fontSize: "var(--text-xs)", fontWeight: 700, letterSpacing: "0.14em", textTransform: "uppercase", color: homeTheme.blue }}>
                — {outcomeSections[3].quote!.attribution}
              </p>
              <p style={{ fontSize: "var(--text-xs)", color: "rgba(255,255,255,0.3)", marginTop: "0.25rem" }}>
                {outcomeSections[3].quote!.attributionDetail}
              </p>
            </div>
          </div>

          {/* Group-level development intelligence */}
          <div style={{ borderTop: "1px solid rgba(255,255,255,0.06)", paddingTop: "3rem", marginBottom: "3rem" }}>
            <h3 style={{ fontFamily: "var(--font-space-grotesk), sans-serif", fontSize: "var(--text-lg)", fontWeight: 700, color: "#fff", marginBottom: "1.25rem" }}>
              {outcomeSections[4].heading}
            </h3>
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "clamp(2rem, 4vw, 4rem)" }}>
              {outcomeSections[4].body.map((p, i) => (
                <p key={i} style={{ fontSize: "var(--text-base)", color: "rgba(255,255,255,0.5)", lineHeight: 1.85 }}>{p}</p>
              ))}
            </div>
          </div>

          {/* Succession and talent decisions */}
          <div style={{ borderTop: "1px solid rgba(255,255,255,0.06)", paddingTop: "3rem" }}>
            <h3 style={{ fontFamily: "var(--font-space-grotesk), sans-serif", fontSize: "var(--text-lg)", fontWeight: 700, color: "#fff", marginBottom: "1.25rem" }}>
              {outcomeSections[5].heading}
            </h3>
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "clamp(2rem, 4vw, 4rem)" }}>
              {outcomeSections[5].body.map((p, i) => (
                <p key={i} style={{ fontSize: "var(--text-base)", color: "rgba(255,255,255,0.5)", lineHeight: 1.85 }}>{p}</p>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── WHAT COMES NEXT ── */}
      <section style={{ background: "#0c0e12", borderBottom: "1px solid rgba(255,255,255,0.07)", padding: "clamp(4rem, 7vw, 6rem) 0" }}>
        <div className="content-wrap page-gutter">
          <p style={{ fontSize: "var(--text-xs)", fontWeight: 700, letterSpacing: "0.2em", textTransform: "uppercase", color: homeTheme.blue, marginBottom: "1rem" }}>
            What Comes Next
          </p>
          <h2 style={{
            fontFamily: "var(--font-space-grotesk), sans-serif",
            fontSize: "clamp(1.75rem, 3.5vw, 2.5rem)",
            fontWeight: 800, lineHeight: 1.1,
            letterSpacing: "-0.03em", color: "#fff",
            marginBottom: "2rem", maxWidth: "44ch",
          }}>
            {nextSection.heading}
          </h2>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: "clamp(2rem, 4vw, 4rem)", marginBottom: "2.5rem" }}>
            {nextSection.body.map((p, i) => (
              <p key={i} style={{ fontSize: "var(--text-base)", color: "rgba(255,255,255,0.5)", lineHeight: 1.85 }}>{p}</p>
            ))}
          </div>
          <div style={{
            border: "1px solid rgba(255,255,255,0.08)",
            borderLeft: `3px solid ${homeTheme.blue}`,
            borderRadius: "4px",
            padding: "1.75rem 2rem",
            background: "rgba(255,255,255,0.02)",
          }}>
            <p style={{ fontSize: "var(--text-xs)", fontWeight: 700, letterSpacing: "0.18em", textTransform: "uppercase", color: homeTheme.blue, marginBottom: "0.75rem" }}>
              {nextSection.callout.label}
            </p>
            <p style={{ fontSize: "var(--text-base)", color: "rgba(255,255,255,0.5)", lineHeight: 1.8 }}>
              {nextSection.callout.text}
            </p>
          </div>
        </div>
      </section>

      {/* ── CTA + RELATED ── */}
      <section style={{ borderTop: "1px solid rgba(255,255,255,0.08)", padding: "clamp(3rem, 6vw, 5rem) 0" }}>
        <div className="content-wrap page-gutter" style={{ maxWidth: "860px" }}>
          <p style={{ display: "flex", alignItems: "center", gap: "6px", fontSize: "var(--text-xs)", fontWeight: 700, letterSpacing: "0.2em", textTransform: "uppercase", color: "rgba(255,255,255,0.3)", marginBottom: "1rem" }}>
            <TrendingUp size={13} style={{ opacity: 0.6 }} />
            Get Started
          </p>
          <h2 style={{ fontFamily: "var(--font-space-grotesk), sans-serif", fontSize: "clamp(1.5rem, 3vw, 2.5rem)", fontWeight: 800, color: "#fff", marginBottom: "0.75rem", lineHeight: 1.1, letterSpacing: "-0.02em" }}>
            Running a leadership cohort?
          </h2>
          <p style={{ fontSize: "var(--text-base)", color: "rgba(255,255,255,0.45)", lineHeight: 1.65, marginBottom: "2rem", maxWidth: "60ch" }}>
            Individual assessments are $150. A pack of ten starts at $125 each. Enterprise pricing is available for larger cohorts and ongoing programs.
          </p>
          <div style={{ display: "flex", gap: "0.75rem", flexWrap: "wrap" }}>
            <Link
              href="/company#contact"
              style={{
                display: "inline-flex", alignItems: "center", gap: "8px",
                background: homeTheme.blue, color: "#fff",
                fontSize: "var(--text-xs)", fontWeight: 700,
                letterSpacing: "0.12em", textTransform: "uppercase",
                padding: "0.75rem 1.75rem", borderRadius: "4px", textDecoration: "none",
              }}
            >
              Talk to the team
              <ArrowRight size={14} />
            </Link>
            <Link
              href="/buy"
              style={{
                display: "inline-flex", alignItems: "center",
                border: "1px solid rgba(255,255,255,0.18)",
                color: "rgba(255,255,255,0.7)",
                fontSize: "var(--text-xs)", fontWeight: 700,
                letterSpacing: "0.12em", textTransform: "uppercase",
                padding: "0.75rem 1.75rem", borderRadius: "4px", textDecoration: "none",
              }}
            >
              Buy an Assessment
            </Link>
          </div>

          {/* Related */}
          <div style={{ marginTop: "4rem", paddingTop: "3rem", borderTop: "1px solid rgba(255,255,255,0.07)" }}>
            <p style={{ fontSize: "var(--text-xs)", fontWeight: 700, letterSpacing: "0.2em", textTransform: "uppercase", color: "rgba(255,255,255,0.3)", marginBottom: "1.5rem" }}>
              Related resources
            </p>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: "1rem" }}>
              {related.map((r) => (
                <Link key={r.title} href={r.href} style={{ textDecoration: "none", display: "block", border: "1px solid rgba(255,255,255,0.08)", borderRadius: "6px", padding: "1.25rem 1.5rem", background: "rgba(255,255,255,0.02)" }}>
                  <p style={{ fontSize: "var(--text-xs)", fontWeight: 700, letterSpacing: "0.18em", textTransform: "uppercase", color: homeTheme.blue, marginBottom: "0.5rem" }}>{r.label}</p>
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
