import Link from "next/link";
import { ArrowRight, Clock, TrendingUp } from "lucide-react";
import { homeTheme } from "@/lib/homeTheme";

export const metadata = {
  title: "Using What + How in Promotion Decisions — Interval 360",
  description: "How to combine performance signal with leadership experience data in promotion and succession conversations. A framework for HR leaders and talent teams.",
  openGraph: {
    title: "Using What + How in Promotion Decisions — Interval 360",
    description: "How to combine performance signal with leadership experience data in promotion and succession conversations. A framework for HR leaders and talent teams.",
    images: "/interval360-og-image.png"
  },
  twitter: {
    title: "Using What + How in Promotion Decisions — Interval 360",
    description: "How to combine performance signal with leadership experience data in promotion and succession conversations. A framework for HR leaders and talent teams.",
    images: "/interval360-og-image.png"
  },
};

/* ─── DATA ─────────────────────────────────────────────────────────────────── */

const introParagraphs = [
  "Most promotion decisions fail in a predictable way. Someone delivers strong results, earns visibility, and builds advocates in the right places. The case for promoting them seems obvious. Then six months into the new role, the wheels come off: their team is disengaged, cross-functional partners are frustrated, and the results that made them look ready turn out to have been built on dynamics that don't scale.",
  "The problem is not that organizations promote bad people. The problem is that they promote on incomplete evidence. Results data is almost always present in promotion conversations. Leadership experience data, meaning how the person is actually experienced by the people around them, is usually absent, anecdotal, or handled through informal reputation rather than structured signal.",
  "The What and the How gives you both dimensions in a single assessment. This playbook explains what each score captures, how to interpret the four quadrant placements that result from combining them, and how to bring that data into a promotion conversation in a way that is useful rather than mechanical.",
];

const dimensions = [
  {
    label: "The What",
    name: "Results Score",
    description:
      "A manager-calibrated rating of the participant's performance against their OKRs. The manager scores each objective and weights it by importance. The resulting number reflects how well the leader delivered on what was expected of them.",
    captures: "Accountability, delivery, and execution against defined expectations.",
    doesNotCapture:
      "How results were achieved, the impact on the people around them, or whether the behaviors that produced those results will hold up at the next level.",
  },
  {
    label: "The How",
    name: "Intelligent NPS",
    description:
      "An aggregate signal drawn from conversational feedback provided by peers and direct reports. Rather than asking raters to rate abstract competencies, the platform asks a single NPS-style question and then follows up with open-ended conversation to understand the reasoning behind it. The result is a score that reflects how the leader's approach actually lands with the people around them.",
    captures:
      "Leadership experience, relational impact, how the person shows up in collaboration and team dynamics.",
    doesNotCapture:
      "Whether goals were met or what external factors shaped the results.",
  },
];

const whyBothMatter =
  "A leader who delivers results but damages the people around them in the process is a short-term asset and a long-term liability. A leader who is beloved by their team but cannot convert that goodwill into outcomes is not yet ready for greater responsibility. Promotion decisions that rely on only one of these dimensions will eventually produce the wrong answer.";

const calibrationNote =
  "High and low thresholds are relative to your organization's calibration. Use score distributions across your population to set meaningful benchmarks.";

const quadrants = [
  {
    id: "performer",
    label: "Performer",
    what: "High",
    how: "High",
    accent: "#22c55e",
    tagline: "Results and leadership experience aligned. Ready for broader responsibility.",
    description:
      "Performers deliver on their objectives and are experienced positively by the people around them. Their results are not a byproduct of burning through goodwill or leaving damage in their wake. They are generating outcomes and building the kind of relationships and team dynamics that make those outcomes sustainable.",
    notes: [
      {
        label: "In a promotion conversation",
        text: "a Performer placement is the clearest green light the data can produce. These are the leaders the organization should be moving deliberately. The risk to manage is not readiness. It is retention. Performers who are not given a visible path forward will find one elsewhere.",
      },
      {
        label: "One thing to look for",
        text: "in the assessment data beyond the scores: are peers and direct reports describing the same person? A Performer whose team loves them but whose cross-functional partners find them difficult is not a full Performer. The How score is obscuring a gap. Read the synthesis, not just the number.",
      },
    ],
    questions: [
      "What is the next role, and how soon do we want to move?",
      "Are there specific development investments that would prepare them for a broader scope?",
      "What does retention look like if we are not ready to promote yet?",
      "Is the How score consistent across peer and direct report groups, or is there variation worth exploring?",
    ],
  },
  {
    id: "driver",
    label: "Driver",
    what: "High",
    how: "Low",
    accent: homeTheme.blue,
    tagline: "Delivering results, but how they lead is not landing. Promotable with eyes open.",
    description:
      "Drivers are effective at delivering results but are not landing well with the people around them. Peers find them difficult to work with. Direct reports may describe someone who sets high expectations but does not invest in their team, communicates poorly under pressure, or generates results through force of will rather than through the kind of leadership that builds lasting capability.",
    notes: [
      {
        label: "The Driver placement",
        text: "is the most dangerous one in a promotion conversation, because the signal that is easiest to see (results) argues for moving them forward, while the signal that is harder to see argues for pausing. Organizations that routinely promote Drivers into senior leadership build cultures that produce numbers and erode people.",
      },
      {
        label: "The right development investment",
        text: "for a Driver is coaching, not training. The gap is not knowledge or technical skill. It is behavioral: how they show up, how they communicate, how they make the people around them feel. A training program will not move that needle. A skilled executive coach, working with the leader on specific behavioral patterns over time, is what actually changes it.\n\nA Driver can absolutely be promoted. But the decision should be made with clear eyes about what is being promoted and what will need to change. The How score is telling you something real. It deserves a real conversation, not a footnote.",
      },
    ],
    questions: [
      "Does the candidate know their How score is low, and have they received direct feedback about their impact on others?",
      "Is the low How score consistent across rater groups, or concentrated in one (peers vs. direct reports)?",
      "What is the next role, and does it require leading through others in a way that will amplify the current gap?",
      "What development is in place, and is it sufficient to address the gap before a promotion takes effect?",
      "What happens to the team if this person is promoted without addressing the How?",
    ],
  },
  {
    id: "facilitator",
    label: "Facilitator",
    what: "Low",
    how: "High",
    accent: "#f59e0b",
    tagline: "Strong leadership experience, developing results. High potential with a performance gap to close.",
    description:
      "Facilitators are experienced positively as leaders: their teams are engaged, their peers trust them, and they show up in a way that makes working with them feel collaborative and productive. The gap is in results. They are not yet converting their relational strengths into the delivery and accountability that sustained performance at a senior level requires.",
    notes: [
      {
        label: "This placement is worth reading carefully",
        text: "before drawing conclusions. A low What score in one cycle is not necessarily a signal of chronic underperformance. Look at what the OKRs were, how the manager calibrated them, and what external factors may have shaped the outcomes. A Facilitator who delivered 90% of a genuinely ambitious set of goals is a different conversation than one who delivered 60% of modest expectations.",
      },
      {
        label: "Where a Driver needs coaching",
        text: "to change how they lead, a Facilitator typically needs training: building the skills, frameworks, and habits that translate good intentions and relational credibility into measurable outcomes. Stretch assignments with clear accountability markers, structured goal-setting work, and targeted skill development in areas like prioritization, execution discipline, or financial acumen are more likely to move the needle than behavioral coaching alone.\n\nFacilitators are real candidates for future roles and succession pipelines. The question is not whether they are capable of growth (the How score suggests they often are), but whether the performance gap is understood, has a clear development path, and is being addressed with the same seriousness as any other readiness criterion.",
      },
    ],
    questions: [
      "Is the low What score a pattern or a single cycle? What was the context?",
      "Does the candidate understand that the path to promotion runs through results, not just relationships?",
      "What specific OKRs or outcomes would demonstrate readiness for a larger role?",
      "Are there stretch assignments or expanded scope that would let us test their delivery at the next level before committing to a promotion?",
    ],
  },
  {
    id: "atRisk",
    label: "At Risk",
    what: "Low",
    how: "Low",
    accent: "#ef4444",
    tagline: "Struggling on both dimensions. Needs intervention before any promotion conversation.",
    description:
      "The At Risk placement means the data is telling a consistent story on both dimensions: this leader is not delivering expected results and is not experienced positively by the people around them. That combination calls for a different kind of conversation: not a promotion conversation, but a performance conversation.",
    notes: [
      {
        label: "Before acting on an At Risk placement",
        text: "it is worth asking whether this is a role fit problem or a capability problem. Some leaders who struggle in one context find clear footing in another. The assessment data tells you what is happening in the current role. It does not tell you what is possible in a different one.\n\nWhat the At Risk placement does clearly signal is that immediate intervention is appropriate. Waiting through another cycle without a direct, structured conversation about expectations and consequences is rarely productive and sometimes damaging to the team around them.",
      },
    ],
    questions: [
      "Has the leader received direct, documented feedback about both the results gap and their impact on others?",
      "Is this a role fit issue? Would a different scope or function be a better match?",
      "What is the timeline and criteria for meaningful improvement?",
      "What is the cost to the team of allowing this to continue without intervention?",
    ],
  },
];

const section03 = [
  {
    heading: "Frame the scores before you share them",
    body: "Before sharing a candidate's What and How scores with senior leaders or a calibration panel, spend thirty seconds explaining what each score represents. The What score is the manager's calibrated assessment of performance against OKRs, not a rating of the person's overall worth. The How score reflects how the leader's approach is experienced by peers and direct reports. Not whether people like them, but whether their leadership lands.\n\nWithout that framing, people will interpret the numbers through whatever lens they already have. A senior leader who has always liked a candidate will read a low How score as a measurement problem. A quick, clear explanation of what the data actually measures makes that harder to dismiss.",
  },
  {
    heading: "When the data and gut instinct disagree",
    body: "This will happen. Someone with a strong reputation and visible advocates will come in with a Driver or Facilitator placement. Someone who has been quietly developing will come in as a Performer. The temptation is to trust the instinct and question the data.\n\nThe more useful question is: what would it take for the data to be right? If someone has a low How score, is there any direct evidence that the score reflects something real? Have their direct reports been unusually quiet in other settings? Have there been friction points in cross-functional work that were explained away? The data is not always right. But it is always worth asking the question honestly rather than dismissing it because it conflicts with a prior view.",
  },
  {
    heading: "What to document",
    body: "Promotion decisions benefit from a paper trail that reflects the evidence considered, not just the conclusion reached. For each candidate, note their quadrant placement, the key themes from the assessment synthesis, the questions that were raised in the calibration conversation, and the rationale for the final decision. If you promote a Driver with a known development gap, document what was discussed and what commitments were made. That documentation protects the organization and creates accountability for the development plan to actually happen.",
  },
  {
    heading: "A note on timing",
    body: "Assessment data is most useful when it is recent. A Performer placement from twelve months ago, run in a different role or scope, does not tell you much about readiness today. Ideally, Interval 360 assessments are run close enough to the promotion cycle to reflect current behavior. If there is a significant gap between when the assessment was run and when the promotion decision is being made, use the data as context rather than as primary evidence.",
  },
];

const section04Paragraphs = [
  "The What and the How does not evaluate potential, predict future performance, assess culture fit, or account for the specific demands of the role being considered. A Performer placement means someone is delivering results and leading well in their current context. Whether that translates to a more senior, more complex, or fundamentally different scope requires judgment that the data cannot substitute for.",
  "The framework is also style-agnostic by design. A high How score does not mean a leader leads in a particular way. It means that however they lead, it is landing. This is intentional. The goal is to measure whether a leader's approach is working, not whether it matches a prescribed model. Different organizations, teams, and contexts call for different leadership behaviors. The Intelligent NPS captures effectiveness, not style conformity.",
  "What the data does well is sharpen the conversation. It surfaces signal that would otherwise depend on who spoke up in a calibration meeting. It gives the people in the room something concrete to react to rather than trading impressions. And it creates a shared vocabulary (the What, the How, and quadrant placement) that makes it easier to compare candidates consistently rather than letting each one be evaluated through a different informal lens.",
  "Used that way, it makes promotion decisions better. Not by replacing the judgment of the people making them, but by giving that judgment better material to work with.",
];

const section05 = [
  {
    heading: "Promoting on What alone",
    body: "Results are the most visible and easiest-to-quantify input in any promotion conversation. They are also incomplete. A What score without a How score tells you what happened. It does not tell you whether it is repeatable, at what cost to the people around the leader, or whether it will scale. Organizations that systematically promote on results alone tend to develop a senior leadership population that is very good at delivering and very bad at building teams around them.",
  },
  {
    heading: "Explaining away a low How score",
    body: "The most common response to a Driver placement is a narrative about why the low How score does not really count: the raters were biased, the role required a hard-driving style, the team just needed someone to raise the bar. Sometimes these explanations are legitimate. But they are also very easy to construct, and organizations that routinely accept them are not using the data. They are using the data to confirm decisions they have already made on other grounds.",
  },
  {
    heading: "Treating a single cycle as definitive",
    body: "One assessment cycle reflects one period of time in one role. A low What score in a quarter where the business missed its targets is not the same as chronic underperformance. A high How score from a team that has been together for three years may not predict how a leader will land with a new team in a different function. Use the data as one input, and over time, use patterns across multiple cycles as the more reliable signal.",
  },
  {
    heading: "Using the quadrant as a label rather than a starting point",
    body: "Telling someone they are a Driver or a Facilitator and leaving it there is not a useful talent conversation. The quadrant placement is a starting point for inquiry, not a conclusion. The value is in what it prompts you to ask, what it surfaces in the calibration room, and what it leads to in terms of development and decision-making. A placement without a conversation attached to it is data that did not do any work.",
  },
];

/* ─── PAGE ──────────────────────────────────────────────────────────────────── */

export default function UsingWhatAndHowPage() {
  return (
    <div style={{ background: "#080808", minHeight: "100vh", color: "#fff" }}>

      {/* ── HERO ── */}
      <section style={{ paddingTop: "clamp(6rem, 12vw, 9rem)", paddingBottom: "clamp(4rem, 8vw, 6rem)" }}>
        <div className="content-wrap page-gutter">
          <nav style={{ marginBottom: "2.5rem", fontSize: "var(--text-xs)", color: "rgba(255,255,255,0.35)" }}>
            <Link href="/resources" style={{ color: "rgba(255,255,255,0.35)", textDecoration: "none" }}>Resources</Link>
            <span style={{ margin: "0 0.5rem" }}>/</span>
            <span>Playbooks</span>
          </nav>

          <p style={{ display: "flex", alignItems: "center", gap: "8px", fontSize: "var(--text-xs)", fontWeight: 700, letterSpacing: "0.2em", textTransform: "uppercase", color: homeTheme.blue, marginBottom: "1.25rem" }}>
            <span style={{ width: 7, height: 7, borderRadius: "50%", background: homeTheme.blue, display: "inline-block", flexShrink: 0 }} />
            Playbook
          </p>

          <h1 style={{ fontFamily: "var(--font-space-grotesk), sans-serif", fontSize: "clamp(3rem, 9vw, 6.5rem)", fontWeight: 800, lineHeight: 0.95, letterSpacing: "-0.03em", color: "#fff", marginBottom: "1.5rem", maxWidth: "18ch" }}>
            Using <span style={{ color: homeTheme.blue }}>the What and the How</span> in Promotion Decisions
          </h1>

          <p style={{ fontSize: "var(--text-base)", color: "rgba(255,255,255,0.55)", lineHeight: 1.7, marginBottom: "2.5rem", maxWidth: "58ch" }}>
            Pair performance signal with leadership experience so talent conversations stay grounded in evidence rather than instinct.
          </p>

          <div style={{ display: "inline-flex", alignItems: "center", gap: 0, background: "rgba(255,255,255,0.05)", border: "1px solid rgba(255,255,255,0.1)", borderRadius: "8px", padding: "0.6rem 1.1rem", fontSize: "var(--text-xs)", fontWeight: 700, letterSpacing: "0.12em", textTransform: "uppercase", color: "rgba(255,255,255,0.55)" }}>
            <span style={{ display: "flex", alignItems: "center", gap: "6px" }}>
              <Clock size={13} style={{ opacity: 0.7 }} />
              ~15 min read
            </span>
            <span style={{ width: 1, height: 14, background: "rgba(255,255,255,0.15)", margin: "0 1rem" }} />
            <span>HR stakeholders</span>
            <span style={{ width: 1, height: 14, background: "rgba(255,255,255,0.15)", margin: "0 1rem" }} />
            <span style={{ color: "#fff" }}>Interval 360</span>
          </div>
        </div>
      </section>

      <div style={{ borderTop: "1px solid rgba(255,255,255,0.08)" }} />

      {/* ── INTRO ── */}
      <section style={{ borderBottom: "1px solid rgba(255,255,255,0.07)", padding: "clamp(4rem, 7vw, 6rem) 0" }}>
        <div className="content-wrap page-gutter">
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "clamp(3rem, 6vw, 6rem)" }}>
            <p style={{ fontSize: "var(--text-base)", color: "rgba(255,255,255,0.5)", lineHeight: 1.85 }}>{introParagraphs[0]}</p>
            <p style={{ fontSize: "var(--text-base)", color: "rgba(255,255,255,0.5)", lineHeight: 1.85 }}>
              {introParagraphs[1]} Explore <Link href="/solutions/talent-decisions" className="underline hover:opacity-80" style={{ color: "rgba(255,255,255,0.7)" }}>talent and succession decisions</Link> in depth.
            </p>
            <p style={{ fontSize: "var(--text-base)", color: "rgba(255,255,255,0.5)", lineHeight: 1.85, gridColumn: "1 / -1" }}>{introParagraphs[2]}</p>
          </div>
        </div>
      </section>

      {/* ── 01: UNDERSTANDING THE TWO DIMENSIONS (white) ── */}
      <section style={{ background: "#fff", borderBottom: "1px solid rgba(0,0,0,0.08)", padding: "clamp(4rem, 7vw, 6rem) 0" }}>
        <div className="content-wrap page-gutter">
          <div style={{ display: "grid", gridTemplateColumns: "120px 1fr", gap: "clamp(2rem, 4vw, 4rem)" }}>
            <p style={{ fontFamily: "var(--font-space-grotesk), sans-serif", fontSize: "3.5rem", fontWeight: 800, color: "rgba(0,0,0,0.08)", lineHeight: 1, letterSpacing: "-0.04em" }}>01</p>
            <div>
              <h2 style={{ fontFamily: "var(--font-space-grotesk), sans-serif", fontSize: "clamp(1.75rem, 3.5vw, 2.5rem)", fontWeight: 800, color: "#0a0a0a", letterSpacing: "-0.03em", lineHeight: 1.1, marginBottom: "1rem" }}>Understanding the two dimensions</h2>
              <p style={{ fontSize: "var(--text-base)", color: "rgba(0,0,0,0.5)", lineHeight: 1.85, marginBottom: "3rem" }}>
                Interval 360 produces two scores for every assessed leader. They measure different things, draw from different sources, and tell different parts of the story. Neither one is sufficient on its own.
              </p>

              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1.5rem", marginBottom: "3rem" }}>
                {dimensions.map((d) => (
                  <div key={d.label} style={{ border: "1px solid rgba(99,102,241,0.2)", borderTop: `3px solid ${homeTheme.blue}`, borderRadius: "6px", padding: "2rem" }}>
                    <p style={{ fontSize: "var(--text-xs)", fontWeight: 700, letterSpacing: "0.2em", textTransform: "uppercase", color: homeTheme.blue, marginBottom: "0.4rem" }}>{d.label}</p>
                    <p style={{ fontFamily: "var(--font-space-grotesk), sans-serif", fontSize: "var(--text-lg)", fontWeight: 700, color: "#0a0a0a", marginBottom: "1.25rem" }}>{d.name}</p>
                    <p style={{ fontSize: "var(--text-base)", color: "rgba(0,0,0,0.55)", lineHeight: 1.75, marginBottom: "1.25rem" }}>{d.description}</p>
                    <div style={{ display: "flex", flexDirection: "column", gap: "0.75rem", borderTop: "1px solid rgba(0,0,0,0.07)", paddingTop: "1.25rem" }}>
                      <div>
                        <p style={{ fontSize: "var(--text-xs)", fontWeight: 700, letterSpacing: "0.15em", textTransform: "uppercase", color: "rgba(0,0,0,0.35)", marginBottom: "0.3rem" }}>Captures</p>
                        <p style={{ fontSize: "var(--text-sm)", color: "rgba(0,0,0,0.6)", lineHeight: 1.6 }}>{d.captures}</p>
                      </div>
                      <div>
                        <p style={{ fontSize: "var(--text-xs)", fontWeight: 700, letterSpacing: "0.15em", textTransform: "uppercase", color: "rgba(0,0,0,0.35)", marginBottom: "0.3rem" }}>Does not capture</p>
                        <p style={{ fontSize: "var(--text-sm)", color: "rgba(0,0,0,0.6)", lineHeight: 1.6 }}>{d.doesNotCapture}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              <div style={{ border: "1px solid rgba(0,0,0,0.1)", borderLeft: `3px solid ${homeTheme.blue}`, borderRadius: "4px", padding: "1.75rem 2rem", background: "rgba(99,102,241,0.04)" }}>
                <p style={{ fontSize: "var(--text-xs)", fontWeight: 700, letterSpacing: "0.18em", textTransform: "uppercase", color: homeTheme.blue, marginBottom: "0.65rem" }}>Why both matter</p>
                <p style={{ fontSize: "var(--text-base)", color: "rgba(0,0,0,0.55)", lineHeight: 1.8 }}>{whyBothMatter}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── 02: THE FOUR QUADRANT PLACEMENTS (dark) ── */}
      <section style={{ borderBottom: "1px solid rgba(255,255,255,0.07)", padding: "clamp(4rem, 7vw, 6rem) 0" }}>
        <div className="content-wrap page-gutter">
          <div style={{ display: "grid", gridTemplateColumns: "120px 1fr", gap: "clamp(2rem, 4vw, 4rem)" }}>
            <p style={{ fontFamily: "var(--font-space-grotesk), sans-serif", fontSize: "3.5rem", fontWeight: 800, color: "rgba(255,255,255,0.08)", lineHeight: 1, letterSpacing: "-0.04em" }}>02</p>
            <div>
              <h2 style={{ fontFamily: "var(--font-space-grotesk), sans-serif", fontSize: "clamp(1.75rem, 3.5vw, 2.5rem)", fontWeight: 800, color: "#fff", letterSpacing: "-0.03em", lineHeight: 1.1, marginBottom: "1rem" }}>The four quadrant placements</h2>
              <p style={{ fontSize: "var(--text-base)", color: "rgba(255,255,255,0.5)", lineHeight: 1.85, marginBottom: "1rem" }}>
                Plotting the What score against the How score places each leader in one of four quadrants. Each placement tells a different story and calls for a different conversation in a talent review.
              </p>
              <p style={{ fontSize: "var(--text-sm)", color: "rgba(255,255,255,0.28)", lineHeight: 1.65, marginBottom: "3rem", fontStyle: "italic" }}>{calibrationNote}</p>

              <div style={{ display: "flex", flexDirection: "column" }}>
                {quadrants.map((q, qi) => (
                  <div key={q.id} style={{ borderTop: qi === 0 ? `2px solid ${q.accent}` : "1px solid rgba(255,255,255,0.06)", paddingTop: "2.5rem", paddingBottom: "2.5rem", paddingLeft: qi > 0 ? "1.5rem" : 0, borderLeft: qi > 0 ? `2px solid ${q.accent}` : "none", marginTop: qi > 0 ? "1.5rem" : 0 }}>
                    <div style={{ display: "flex", alignItems: "center", gap: "1rem", marginBottom: "1.25rem", flexWrap: "wrap" }}>
                      <p style={{ fontFamily: "var(--font-space-grotesk), sans-serif", fontSize: "var(--text-xl)", fontWeight: 800, color: "#fff", letterSpacing: "-0.02em" }}>{q.label}</p>
                      <div style={{ display: "flex", gap: "0.5rem" }}>
                        <span style={{ fontSize: "var(--text-xs)", fontWeight: 700, letterSpacing: "0.15em", textTransform: "uppercase", color: q.accent, background: `${q.accent}18`, border: `1px solid ${q.accent}40`, borderRadius: "4px", padding: "0.25rem 0.6rem" }}>{q.what} What</span>
                        <span style={{ fontSize: "var(--text-xs)", fontWeight: 700, letterSpacing: "0.15em", textTransform: "uppercase", color: q.accent, background: `${q.accent}18`, border: `1px solid ${q.accent}40`, borderRadius: "4px", padding: "0.25rem 0.6rem" }}>{q.how} How</span>
                      </div>
                    </div>
                    <p style={{ fontSize: "var(--text-base)", fontWeight: 600, color: "rgba(255,255,255,0.4)", lineHeight: 1.5, marginBottom: "1.25rem", fontStyle: "italic" }}>{q.tagline}</p>
                    <p style={{ fontSize: "var(--text-base)", color: "rgba(255,255,255,0.5)", lineHeight: 1.85, marginBottom: "2rem" }}>{q.description}</p>

                    <div style={{ display: "flex", flexDirection: "column", gap: "1rem", marginBottom: "2rem" }}>
                      {q.notes.map((note, ni) => (
                        <div key={ni}>
                          {note.text.split("\n\n").map((para, pi) => (
                            <p key={pi} style={{ fontSize: "var(--text-base)", color: "rgba(255,255,255,0.45)", lineHeight: 1.8, marginBottom: pi < note.text.split("\n\n").length - 1 ? "0.75rem" : 0 }}>
                              {pi === 0
                                ? <><strong style={{ color: "rgba(255,255,255,0.65)", fontWeight: 600 }}>{note.label} </strong>{para}</>
                                : para}
                            </p>
                          ))}
                        </div>
                      ))}
                    </div>

                    <div style={{ borderTop: "1px solid rgba(255,255,255,0.06)", paddingTop: "1.5rem" }}>
                      <p style={{ fontSize: "var(--text-xs)", fontWeight: 700, letterSpacing: "0.18em", textTransform: "uppercase", color: "rgba(255,255,255,0.25)", marginBottom: "1rem" }}>Discussion questions</p>
                      <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: "0.6rem" }}>
                        {q.questions.map((qu) => (
                          <li key={qu} style={{ display: "flex", alignItems: "flex-start", gap: "0.7rem", fontSize: "var(--text-base)", color: "rgba(255,255,255,0.4)", lineHeight: 1.6 }}>
                            <span style={{ width: 5, height: 5, borderRadius: "50%", background: q.accent, flexShrink: 0, marginTop: "0.5rem", opacity: 0.7 }} />
                            {qu}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── 03: BRINGING THE DATA INTO A PROMOTION CONVERSATION (white) ── */}
      <section style={{ background: "#fff", borderBottom: "1px solid rgba(0,0,0,0.08)", padding: "clamp(4rem, 7vw, 6rem) 0" }}>
        <div className="content-wrap page-gutter">
          <div style={{ display: "grid", gridTemplateColumns: "120px 1fr", gap: "clamp(2rem, 4vw, 4rem)" }}>
            <p style={{ fontFamily: "var(--font-space-grotesk), sans-serif", fontSize: "3.5rem", fontWeight: 800, color: "rgba(0,0,0,0.08)", lineHeight: 1, letterSpacing: "-0.04em" }}>03</p>
            <div>
              <h2 style={{ fontFamily: "var(--font-space-grotesk), sans-serif", fontSize: "clamp(1.75rem, 3.5vw, 2.5rem)", fontWeight: 800, color: "#0a0a0a", letterSpacing: "-0.03em", lineHeight: 1.1, marginBottom: "1rem" }}>Bringing the data into an actual promotion conversation</h2>
              <p style={{ fontSize: "var(--text-base)", color: "rgba(0,0,0,0.5)", lineHeight: 1.85, marginBottom: "3rem" }}>
                Having the data is not the same as knowing how to use it. Promotion conversations involve multiple stakeholders, competing priorities, and the accumulated weight of people&apos;s prior impressions. Interval 360 data does not walk into that room and make the case for itself. You do.
              </p>

              <div style={{ display: "flex", flexDirection: "column" }}>
                {section03.map((sub, i, arr) => (
                  <div key={sub.heading} style={{ padding: "2rem 0", borderTop: "1px solid rgba(0,0,0,0.07)", borderBottom: i === arr.length - 1 ? "1px solid rgba(0,0,0,0.07)" : "none" }}>
                    <h3 style={{ fontFamily: "var(--font-space-grotesk), sans-serif", fontSize: "var(--text-base)", fontWeight: 700, color: "#0a0a0a", marginBottom: "1rem", lineHeight: 1.2 }}>{sub.heading}</h3>
                    {sub.body.split("\n\n").map((para, pi, parts) => (
                      <p key={pi} style={{ fontSize: "var(--text-base)", color: "rgba(0,0,0,0.5)", lineHeight: 1.8, marginBottom: pi < parts.length - 1 ? "0.75rem" : 0 }}>{para}</p>
                    ))}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── 04: WHAT THIS FRAMEWORK DOES NOT DO (dark) ── */}
      <section style={{ borderBottom: "1px solid rgba(255,255,255,0.07)", padding: "clamp(4rem, 7vw, 6rem) 0" }}>
        <div className="content-wrap page-gutter">
          <div style={{ display: "grid", gridTemplateColumns: "120px 1fr", gap: "clamp(2rem, 4vw, 4rem)" }}>
            <p style={{ fontFamily: "var(--font-space-grotesk), sans-serif", fontSize: "3.5rem", fontWeight: 800, color: "rgba(255,255,255,0.08)", lineHeight: 1, letterSpacing: "-0.04em" }}>04</p>
            <div>
              <h2 style={{ fontFamily: "var(--font-space-grotesk), sans-serif", fontSize: "clamp(1.75rem, 3.5vw, 2.5rem)", fontWeight: 800, color: "#fff", letterSpacing: "-0.03em", lineHeight: 1.1, marginBottom: "1rem" }}>What this framework does not do</h2>
              <p style={{ fontSize: "var(--text-base)", color: "rgba(255,255,255,0.5)", lineHeight: 1.85, marginBottom: "2.5rem" }}>
                Interval 360 produces data that informs promotion decisions. It does not make them.
              </p>
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "clamp(2rem, 4vw, 4rem)" }}>
                {section04Paragraphs.map((para, i) => (
                  <p key={i} style={{ fontSize: "var(--text-base)", color: "rgba(255,255,255,0.5)", lineHeight: 1.85, gridColumn: i === section04Paragraphs.length - 1 && section04Paragraphs.length % 2 !== 0 ? "1 / -1" : undefined }}>{para}</p>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── 05: COMMON MISTAKES (white) ── */}
      <section style={{ background: "#fff", borderBottom: "1px solid rgba(0,0,0,0.08)", padding: "clamp(4rem, 7vw, 6rem) 0" }}>
        <div className="content-wrap page-gutter">
          <div style={{ display: "grid", gridTemplateColumns: "120px 1fr", gap: "clamp(2rem, 4vw, 4rem)" }}>
            <p style={{ fontFamily: "var(--font-space-grotesk), sans-serif", fontSize: "3.5rem", fontWeight: 800, color: "rgba(0,0,0,0.08)", lineHeight: 1, letterSpacing: "-0.04em" }}>05</p>
            <div>
              <h2 style={{ fontFamily: "var(--font-space-grotesk), sans-serif", fontSize: "clamp(1.75rem, 3.5vw, 2.5rem)", fontWeight: 800, color: "#0a0a0a", letterSpacing: "-0.03em", lineHeight: 1.1, marginBottom: "0.75rem" }}>Common mistakes to avoid</h2>
              <p style={{ fontSize: "var(--text-base)", color: "rgba(0,0,0,0.45)", lineHeight: 1.7, marginBottom: "2.5rem" }}>Most problems with the framework come from how it is used, not what it measures.</p>
              <div style={{ display: "flex", flexDirection: "column" }}>
                {section05.map((flag, i, arr) => (
                  <div key={flag.heading} style={{ display: "grid", gridTemplateColumns: "28px 1fr", gap: "1.25rem", padding: "2rem 0", borderTop: "1px solid rgba(0,0,0,0.07)", borderBottom: i === arr.length - 1 ? "1px solid rgba(0,0,0,0.07)" : "none" }}>
                    <span style={{ fontFamily: "var(--font-space-grotesk), sans-serif", fontSize: "var(--text-xs)", fontWeight: 700, color: "rgba(180,40,40,0.65)", paddingTop: "0.2rem" }}>{String(i + 1).padStart(2, "0")}</span>
                    <div>
                      <h4 style={{ fontFamily: "var(--font-space-grotesk), sans-serif", fontSize: "var(--text-base)", fontWeight: 700, color: "#0a0a0a", marginBottom: "0.65rem" }}>{flag.heading}</h4>
                      <p style={{ fontSize: "var(--text-base)", color: "rgba(0,0,0,0.5)", lineHeight: 1.8 }}>{flag.body}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
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
          <h2 style={{ fontFamily: "var(--font-space-grotesk), sans-serif", fontSize: "clamp(1.5rem, 3vw, 2.5rem)", fontWeight: 800, color: "#fff", marginBottom: "0.75rem", lineHeight: 1.1, letterSpacing: "-0.02em" }}>Ready to run your first assessment?</h2>
          <p style={{ fontSize: "var(--text-base)", color: "rgba(255,255,255,0.45)", lineHeight: 1.65, marginBottom: "2rem", maxWidth: "60ch" }}>Individual assessments are $150. A pack of ten starts at $125 each. Reports generate automatically on your project close date, no waiting.</p>
          <div style={{ display: "flex", gap: "0.75rem", flexWrap: "wrap" }}>
            <Link href="/buy" style={{ display: "inline-flex", alignItems: "center", gap: "8px", background: homeTheme.blue, color: "#fff", fontSize: "var(--text-xs)", fontWeight: 700, letterSpacing: "0.12em", textTransform: "uppercase", padding: "0.75rem 1.75rem", borderRadius: "4px", textDecoration: "none" }}>
              Buy an Assessment
              <ArrowRight size={14} />
            </Link>
            <Link href="/company#contact" style={{ display: "inline-flex", alignItems: "center", border: "1px solid rgba(255,255,255,0.18)", color: "rgba(255,255,255,0.7)", fontSize: "var(--text-xs)", fontWeight: 700, letterSpacing: "0.12em", textTransform: "uppercase", padding: "0.75rem 1.75rem", borderRadius: "4px", textDecoration: "none" }}>
              Talk to Us
            </Link>
          </div>

          <div style={{ marginTop: "4rem", paddingTop: "3rem", borderTop: "1px solid rgba(255,255,255,0.07)" }}>
            <p style={{ fontSize: "var(--text-xs)", fontWeight: 700, letterSpacing: "0.2em", textTransform: "uppercase", color: "rgba(255,255,255,0.3)", marginBottom: "1.5rem" }}>Related resources</p>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: "1rem" }}>
              {[
                { label: "Playbook", title: "How to Run a 360 in 14 Days", href: "/resources/how-to-run-a-360-in-14-days" },
                { label: "Playbook", title: "How to Choose the Right Raters", href: "/resources/how-to-choose-the-right-raters" },
                { label: "Product", title: "What the reports include and how to use them", href: "/reports-and-outputs" },
              ].map((r) => (
                <Link key={r.title} href={r.href} style={{ textDecoration: "none", display: "block", border: "1px solid rgba(255,255,255,0.08)", borderRadius: "6px", padding: "1.25rem 1.5rem", background: "rgba(255,255,255,0.02)" }}>
                  <p style={{ fontSize: "var(--text-xs)", fontWeight: 700, letterSpacing: "0.18em", textTransform: "uppercase", color: homeTheme.blue, marginBottom: "0.5rem" }}>{r.label}</p>
                  <p style={{ fontSize: "var(--text-base)", color: "rgba(255,255,255,0.65)", lineHeight: 1.5 }}>{r.title}</p>
                </Link>
              ))}
            </div>
          </div>

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
