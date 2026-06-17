import Link from "next/link";
import { ArrowRight, Clock, Users, TrendingUp } from "lucide-react";
import { homeTheme } from "@/lib/homeTheme";

export const metadata = {
  title: "How to Choose the Right Raters — Interval 360",
  description: "A practical guide to building a 360 rater list that produces credible, useful feedback. What to look for in peers, direct reports, and managers — and what to avoid.",
  openGraph: {
    title: "How to Choose the Right Raters — Interval 360",
    description: "A practical guide to building a 360 rater list that produces credible, useful feedback. What to look for in peers, direct reports, and managers — and what to avoid.",
    image: "/interval360-og-image.png"
  },
  twitter: {
    title: "How to Choose the Right Raters — Interval 360",
    description: "A practical guide to building a 360 rater list that produces credible, useful feedback. What to look for in peers, direct reports, and managers — and what to avoid.",
    image: "/interval360-og-image.png"
  },
};

export default function HowToChooseRatersPage() {
  return (
    <div style={{ background: "#080808", minHeight: "100vh", color: "#fff" }}>
      {/* ── HERO ── */}
      <section style={{ paddingTop: "clamp(6rem, 12vw, 9rem)", paddingBottom: "clamp(4rem, 8vw, 6rem)" }}>
        <div className="content-wrap page-gutter">
          <nav style={{ marginBottom: "2.5rem", fontSize: "var(--text-xs)", color: "rgba(255,255,255,0.35)" }}>
            <Link href="/resources" style={{ color: "rgba(255,255,255,0.35)", textDecoration: "none" }}>
              Resources
            </Link>
            <span style={{ margin: "0 0.5rem" }}>/</span>
            <span>Playbooks</span>
          </nav>

          <p
            style={{
              display: "flex",
              alignItems: "center",
              gap: "8px",
              fontSize: "var(--text-xs)",
              fontWeight: 700,
              letterSpacing: "0.2em",
              textTransform: "uppercase",
              color: homeTheme.blue,
              marginBottom: "1.25rem",
            }}
          >
            <span style={{ width: 7, height: 7, borderRadius: "50%", background: homeTheme.blue, display: "inline-block", flexShrink: 0 }} />
            Playbook
          </p>

          <h1
            style={{
              fontFamily: "var(--font-space-grotesk), sans-serif",
              fontSize: "clamp(3rem, 9vw, 6.5rem)",
              fontWeight: 800,
              lineHeight: 0.95,
              letterSpacing: "-0.03em",
              color: "#fff",
              marginBottom: "1.5rem",
              maxWidth: "16ch",
            }}
          >
            How to Choose the <span style={{ color: homeTheme.blue }}>Right Raters</span>
          </h1>

          <p
            style={{
              fontSize: "var(--text-base)",
              color: "rgba(255,255,255,0.55)",
              lineHeight: 1.7,
              marginBottom: "2.5rem",
              maxWidth: "58ch",
            }}
          >
            Balance perspective, credibility, and burden so feedback reflects how the leader is actually experienced — not how they wish to be seen.
          </p>

          <div
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: 0,
              background: "rgba(255,255,255,0.05)",
              border: "1px solid rgba(255,255,255,0.1)",
              borderRadius: "8px",
              padding: "0.6rem 1.1rem",
              fontSize: "var(--text-xs)",
              fontWeight: 700,
              letterSpacing: "0.12em",
              textTransform: "uppercase",
              color: "rgba(255,255,255,0.55)",
            }}
          >
            <span style={{ display: "flex", alignItems: "center", gap: "6px" }}>
              <Clock size={13} style={{ opacity: 0.7 }} />
              ~12 min read
            </span>
            <span style={{ width: 1, height: 14, background: "rgba(255,255,255,0.15)", margin: "0 1rem" }} />
            <span style={{ display: "flex", alignItems: "center", gap: "6px" }}>
              <Users size={13} style={{ opacity: 0.7 }} />
              Participants &amp; HR stakeholders
            </span>
            <span style={{ width: 1, height: 14, background: "rgba(255,255,255,0.15)", margin: "0 1rem" }} />
            <span style={{ color: "#fff" }}>Interval 360</span>
          </div>
        </div>
      </section>

      <div style={{ borderTop: "1px solid rgba(255,255,255,0.08)" }} />

      {/* ── INTRO ── */}
      <section style={{ borderBottom: "1px solid rgba(255,255,255,0.07)", padding: "clamp(4rem, 7vw, 6rem) 0" }}>
        <div className="content-wrap page-gutter">
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "clamp(3rem, 6vw, 6rem)", alignItems: "start" }}>
            <div style={{ borderLeft: "2px solid rgba(99,102,241,0.4)", paddingLeft: "1.5rem", display: "flex", flexDirection: "column", gap: "1.1rem" }}>
              <p style={{ fontSize: "var(--text-base)", color: "rgba(255,255,255,0.5)", lineHeight: 1.85 }}>
                Most of the variance in 360 quality comes not from the assessment tool itself, but from the rater list. A well-constructed list of people who know the participant well, have observed their leadership recently, and represent genuinely different vantage points produces feedback that is
                specific, credible, and useful. A poorly constructed list produces data that is either too thin to act on or too skewed to trust.
              </p>
              <p style={{ fontSize: "var(--text-base)", color: "rgba(255,255,255,0.5)", lineHeight: 1.85 }}>
                Rater selection in Interval 360 is a two-step process. The participant nominates the people they want to hear from. The HR stakeholder or team leader who set up the project then reviews and approves that list before any invitations go out. Both steps matter. This playbook covers what
                to look for, and what to watch out for, at each one.
              </p>
            </div>

            {/* Minimums card */}
            <div style={{ border: "1px solid rgba(99,102,241,0.25)", borderRadius: "8px", overflow: "hidden" }}>
              <div style={{ padding: "1.25rem 1.75rem", background: "rgba(99,102,241,0.1)", borderBottom: "1px solid rgba(99,102,241,0.2)" }}>
                <p style={{ fontSize: "var(--text-xs)", fontWeight: 700, letterSpacing: "0.2em", textTransform: "uppercase", color: homeTheme.blue }}>Minimum requirements for report generation</p>
              </div>
              {[
                { num: "1", label: "Manager who completes the assessment" },
                { num: "3", label: "Peers who complete the assessment" },
                { num: "3", label: "Direct reports who complete the assessment" },
              ].map((item, i, arr) => (
                <div key={item.label} style={{ display: "flex", alignItems: "center", gap: "1.25rem", padding: "1.1rem 1.75rem", borderBottom: i < arr.length - 1 ? "1px solid rgba(255,255,255,0.06)" : "none", background: "#080808" }}>
                  <span style={{ fontFamily: "var(--font-space-grotesk), sans-serif", fontSize: "var(--text-2xl)", fontWeight: 800, color: homeTheme.blue, lineHeight: 1, minWidth: "2rem", textAlign: "center" }}>{item.num}</span>
                  <span style={{ fontSize: "var(--text-base)", color: "rgba(255,255,255,0.65)", lineHeight: 1.5 }}>{item.label}</span>
                </div>
              ))}
              <div style={{ padding: "1.1rem 1.75rem", background: "rgba(255,255,255,0.02)", borderTop: "1px solid rgba(255,255,255,0.06)" }}>
                <p style={{ fontSize: "var(--text-xs)", color: "rgba(255,255,255,0.35)", lineHeight: 1.65 }}>
                  These are completion minimums, not nomination minimums. Participants can nominate up to 10 peers and 10 direct reports. The more nominations, the more resilient the assessment is if some raters don&apos;t complete. Nominate generously.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── 01: THE MANAGER ── */}
      <section style={{ background: "#fff", borderBottom: "1px solid rgba(0,0,0,0.08)", padding: "clamp(4rem, 7vw, 6rem) 0" }}>
        <div className="content-wrap page-gutter">
          <div style={{ display: "grid", gridTemplateColumns: "120px 1fr", gap: "clamp(2rem, 4vw, 4rem)" }}>
            <p style={{ fontFamily: "var(--font-space-grotesk), sans-serif", fontSize: "3.5rem", fontWeight: 800, color: "rgba(0,0,0,0.08)", lineHeight: 1, letterSpacing: "-0.04em" }}>01</p>
            <div>
              <h2 style={{ fontFamily: "var(--font-space-grotesk), sans-serif", fontSize: "clamp(1.75rem, 3.5vw, 2.5rem)", fontWeight: 800, color: "#0a0a0a", letterSpacing: "-0.03em", lineHeight: 1.1, marginBottom: "2rem" }}>The manager</h2>
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "clamp(2rem, 4vw, 4rem)", marginBottom: "2.5rem" }}>
                <p style={{ fontSize: "var(--text-base)", color: "rgba(0,0,0,0.55)", lineHeight: 1.85 }}>
                  The manager&apos;s role in Interval 360 is distinct from every other rater. Rather than participating in the conversational feedback exchange, the manager provides the Results Score: a calibrated rating of the participant&apos;s performance against their OKRs, weighted by the
                  importance of each objective. This score forms the &ldquo;What&rdquo; dimension of the assessment.
                </p>
                <p style={{ fontSize: "var(--text-base)", color: "rgba(0,0,0,0.55)", lineHeight: 1.85 }}>
                  There is only one manager per assessment. The right person is whoever has primary accountability for evaluating the participant&apos;s performance: the person who owns the OKR conversation and can speak to what was delivered, not just observed.
                </p>
                <p style={{ fontSize: "var(--text-base)", color: "rgba(0,0,0,0.55)", lineHeight: 1.85, gridColumn: "1 / -1" }}>
                  In most cases this is the participant&apos;s direct manager. But if the participant has recently changed roles, or if their day-to-day work is primarily accountable to a different leader than their org-chart manager, use judgment. A manager who does not have genuine visibility into
                  the participant&apos;s OKRs will not be able to rate them credibly, which degrades the Results Score.
                </p>
              </div>
              <div style={{ border: "1px solid rgba(180,120,0,0.2)", borderLeft: "3px solid rgba(180,120,0,0.5)", borderRadius: "4px", padding: "1.5rem 2rem", background: "rgba(255,180,0,0.06)" }}>
                <p style={{ fontSize: "var(--text-xs)", fontWeight: 700, letterSpacing: "0.18em", textTransform: "uppercase", color: "rgba(140,90,0,0.9)", marginBottom: "0.65rem" }}>One thing to avoid</p>
                <p style={{ fontSize: "var(--text-base)", color: "rgba(0,0,0,0.55)", lineHeight: 1.8 }}>
                  Do not assign a manager who is too senior to have direct knowledge of the participant&apos;s work. A skip-level manager who has not been closely involved in setting or evaluating the participant&apos;s objectives will produce a Results Score that reflects second-hand impressions,
                  not calibrated performance data. That number will look precise in the report but will not actually mean anything.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── 02: PEERS ── */}
      <section style={{ borderBottom: "1px solid rgba(255,255,255,0.07)", padding: "clamp(4rem, 7vw, 6rem) 0" }}>
        <div className="content-wrap page-gutter">
          <div style={{ display: "grid", gridTemplateColumns: "120px 1fr", gap: "clamp(2rem, 4vw, 4rem)" }}>
            <p style={{ fontFamily: "var(--font-space-grotesk), sans-serif", fontSize: "3.5rem", fontWeight: 800, color: "rgba(255,255,255,0.08)", lineHeight: 1, letterSpacing: "-0.04em" }}>02</p>
            <div>
              <h2 style={{ fontFamily: "var(--font-space-grotesk), sans-serif", fontSize: "clamp(1.75rem, 3.5vw, 2.5rem)", fontWeight: 800, color: "#fff", letterSpacing: "-0.03em", lineHeight: 1.1, marginBottom: "2rem" }}>Peers</h2>
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "clamp(2rem, 4vw, 4rem)", marginBottom: "3rem" }}>
                <p style={{ fontSize: "var(--text-base)", color: "rgba(255,255,255,0.5)", lineHeight: 1.85 }}>
                  Peers are one of the most important sources of &ldquo;How&rdquo; signal. They see the participant in the contexts that matter most for leadership experience: cross-functional collaboration, influence without authority, how the participant shows up in shared work, how they handle
                  disagreement, and whether they make the people around them more or less effective.
                </p>
                <p style={{ fontSize: "var(--text-base)", color: "rgba(255,255,255,0.5)", lineHeight: 1.85 }}>
                  The goal is not to find people who will say nice things. The goal is to find people who have genuine, recent, firsthand experience of the participant as a leader, and who have enough psychological safety and professional confidence to be honest.
                </p>
              </div>

              <h3 style={{ fontFamily: "var(--font-space-grotesk), sans-serif", fontSize: "var(--text-lg)", fontWeight: 700, color: "#fff", marginBottom: "1.25rem" }}>What makes a strong peer rater</h3>
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1.25rem", marginBottom: "3rem" }}>
                <div style={{ border: "1px solid rgba(99,102,241,0.25)", borderRadius: "6px", padding: "1.75rem", background: "rgba(99,102,241,0.05)" }}>
                  <p style={{ fontSize: "var(--text-xs)", fontWeight: 700, letterSpacing: "0.18em", textTransform: "uppercase", color: homeTheme.blue, marginBottom: "1rem" }}>Look for</p>
                  <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: "0.7rem" }}>
                    {[
                      "Has worked directly with the participant in the last 12 months",
                      "Has observed the participant leading, not just delivering",
                      "Comes from a different function or team, since a cross-functional lens captures more than lateral peers doing similar work",
                      "Has experienced friction or challenge with the participant, not just smooth collaboration",
                      "Is senior enough to have context on the participant's scope and decisions",
                    ].map((item) => (
                      <li key={item} style={{ display: "flex", alignItems: "flex-start", gap: "0.6rem", fontSize: "var(--text-sm)", color: "rgba(255,255,255,0.6)", lineHeight: 1.55 }}>
                        <span style={{ width: 6, height: 6, borderRadius: "50%", background: homeTheme.blue, flexShrink: 0, marginTop: "0.42rem" }} />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
                <div style={{ border: "1px solid rgba(255,255,255,0.08)", borderRadius: "6px", padding: "1.75rem", background: "rgba(255,255,255,0.02)" }}>
                  <p style={{ fontSize: "var(--text-xs)", fontWeight: 700, letterSpacing: "0.18em", textTransform: "uppercase", color: "rgba(255,150,100,0.8)", marginBottom: "1rem" }}>Be cautious of</p>
                  <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: "0.7rem" }}>
                    {[
                      "Close personal friends or allies who may not provide candid input",
                      "People with minimal recent interaction, since surface-level familiarity produces surface-level feedback",
                      "Peers who are currently in conflict with the participant, where active tension can skew feedback toward grievance rather than observation",
                      "People who only know the participant's outputs, not their process or behavior",
                    ].map((item) => (
                      <li key={item} style={{ display: "flex", alignItems: "flex-start", gap: "0.6rem", fontSize: "var(--text-sm)", color: "rgba(255,255,255,0.5)", lineHeight: 1.55 }}>
                        <span style={{ width: 6, height: 6, borderRadius: "50%", background: "rgba(255,150,100,0.6)", flexShrink: 0, marginTop: "0.42rem" }} />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <h3 style={{ fontFamily: "var(--font-space-grotesk), sans-serif", fontSize: "var(--text-lg)", fontWeight: 700, color: "#fff", marginBottom: "1.25rem" }}>How many to nominate</h3>
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "clamp(2rem, 4vw, 4rem)" }}>
                <p style={{ fontSize: "var(--text-base)", color: "rgba(255,255,255,0.5)", lineHeight: 1.85 }}>
                  Nominate the maximum you can. Ten peer nominations does not mean ten conversations you are obligated to host. It means ten people who have been invited to contribute voluntarily. Even if four or five decline or don&apos;t complete, you still have enough for a meaningful signal.
                  Nominating exactly three peers is a single non-completion away from a report that cannot run.
                </p>
                <p style={{ fontSize: "var(--text-base)", color: "rgba(255,255,255,0.5)", lineHeight: 1.85 }}>
                  When reviewing nominations as the HR stakeholder, look at the list as a whole. Does it represent different functions? Different tenures? People who have both benefited from and been challenged by this leader? If the list reads like a collection of the participant&apos;s closest
                  allies, that is a signal worth acting on.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── 03: DIRECT REPORTS ── */}
      <section style={{ background: "#fff", borderBottom: "1px solid rgba(0,0,0,0.08)", padding: "clamp(4rem, 7vw, 6rem) 0" }}>
        <div className="content-wrap page-gutter">
          <div style={{ display: "grid", gridTemplateColumns: "120px 1fr", gap: "clamp(2rem, 4vw, 4rem)" }}>
            <p style={{ fontFamily: "var(--font-space-grotesk), sans-serif", fontSize: "3.5rem", fontWeight: 800, color: "rgba(0,0,0,0.08)", lineHeight: 1, letterSpacing: "-0.04em" }}>03</p>
            <div>
              <h2 style={{ fontFamily: "var(--font-space-grotesk), sans-serif", fontSize: "clamp(1.75rem, 3.5vw, 2.5rem)", fontWeight: 800, color: "#0a0a0a", letterSpacing: "-0.03em", lineHeight: 1.1, marginBottom: "2rem" }}>Direct reports</h2>
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "clamp(2rem, 4vw, 4rem)", marginBottom: "3rem" }}>
                <p style={{ fontSize: "var(--text-base)", color: "rgba(0,0,0,0.55)", lineHeight: 1.85 }}>
                  Direct report feedback is often the most revealing and the most sensitive. People who report to the participant experience their leadership in the most direct way: how they set expectations, how they develop their team, how they handle performance conversations, and whether they
                  create conditions where people can do their best work.
                </p>
                <p style={{ fontSize: "var(--text-base)", color: "rgba(0,0,0,0.55)", lineHeight: 1.85 }}>
                  Direct reports also face the highest psychological stakes in any feedback process. They are being asked to evaluate someone who has influence over their career. Interval 360&apos;s conversational format is designed to make this feel less like a formal assessment and more like an
                  honest conversation, but that does not eliminate the underlying dynamic. The rater list needs to be constructed with that reality in mind.
                </p>
              </div>

              <h3 style={{ fontFamily: "var(--font-space-grotesk), sans-serif", fontSize: "var(--text-lg)", fontWeight: 700, color: "#0a0a0a", marginBottom: "1.25rem" }}>What makes a strong direct report rater</h3>
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1.25rem", marginBottom: "3rem" }}>
                <div style={{ border: "1px solid rgba(99,102,241,0.25)", borderRadius: "6px", padding: "1.75rem", background: "rgba(99,102,241,0.05)" }}>
                  <p style={{ fontSize: "var(--text-xs)", fontWeight: 700, letterSpacing: "0.18em", textTransform: "uppercase", color: homeTheme.blue, marginBottom: "1rem" }}>Look for</p>
                  <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: "0.7rem" }}>
                    {[
                      "Has reported to this leader for at least a few months. New direct reports lack enough context to contribute meaningfully",
                      "Covers a range of tenures. A mix of newer and longer-tenured reports gives a more complete picture",
                      "Represents different levels of the team where possible. Senior ICs and people managers experience leadership differently",
                      "Has been involved in both successes and difficult stretches. Raters who have only seen smooth periods miss the most revealing data",
                    ].map((item) => (
                      <li key={item} style={{ display: "flex", alignItems: "flex-start", gap: "0.6rem", fontSize: "var(--text-sm)", color: "rgba(0,0,0,0.6)", lineHeight: 1.55 }}>
                        <span style={{ width: 6, height: 6, borderRadius: "50%", background: homeTheme.blue, flexShrink: 0, marginTop: "0.42rem" }} />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
                <div style={{ border: "1px solid rgba(0,0,0,0.1)", borderRadius: "6px", padding: "1.75rem", background: "rgba(0,0,0,0.02)" }}>
                  <p style={{ fontSize: "var(--text-xs)", fontWeight: 700, letterSpacing: "0.18em", textTransform: "uppercase", color: "rgba(180,60,20,0.85)", marginBottom: "1rem" }}>Be cautious of</p>
                  <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: "0.7rem" }}>
                    {[
                      "Raters who are very new and have little direct experience of this leader's patterns",
                      "A list that over-represents the participant's closest or most loyal reports, which introduces systematic positive bias",
                      "People currently in a difficult or unresolved situation with the participant, since active grievances can color responses in ways that aren't representative",
                    ].map((item) => (
                      <li key={item} style={{ display: "flex", alignItems: "flex-start", gap: "0.6rem", fontSize: "var(--text-sm)", color: "rgba(0,0,0,0.5)", lineHeight: 1.55 }}>
                        <span style={{ width: 6, height: 6, borderRadius: "50%", background: "rgba(180,60,20,0.6)", flexShrink: 0, marginTop: "0.42rem" }} />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <h3 style={{ fontFamily: "var(--font-space-grotesk), sans-serif", fontSize: "var(--text-lg)", fontWeight: 700, color: "#0a0a0a", marginBottom: "1.25rem" }}>On confidentiality</h3>
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "clamp(2rem, 4vw, 4rem)" }}>
                <p style={{ fontSize: "var(--text-base)", color: "rgba(0,0,0,0.55)", lineHeight: 1.85 }}>
                  Direct reports are often the rater group most concerned about being identified. It is worth understanding how Interval 360 handles this. The platform does not include raw quotes or individually attributed responses in the reports. Instead, conversational input is synthesized across
                  all raters in a category and surfaced as themes, patterns, and aggregate signals. Nothing in the output points back to a specific individual or a specific exchange.
                </p>
                <p style={{ fontSize: "var(--text-base)", color: "rgba(0,0,0,0.55)", lineHeight: 1.85 }}>
                  Before the assessment runs, it helps to briefly explain this to the direct reports who will be participating. People who understand that their response feeds into a synthesis rather than appearing verbatim in a report are more likely to engage honestly. That honesty is exactly what
                  makes direct report feedback valuable.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── 04: THE APPROVAL STEP ── */}
      <section style={{ borderBottom: "1px solid rgba(255,255,255,0.07)", padding: "clamp(4rem, 7vw, 6rem) 0" }}>
        <div className="content-wrap page-gutter">
          <div style={{ display: "grid", gridTemplateColumns: "120px 1fr", gap: "clamp(2rem, 4vw, 4rem)" }}>
            <p style={{ fontFamily: "var(--font-space-grotesk), sans-serif", fontSize: "3.5rem", fontWeight: 800, color: "rgba(255,255,255,0.08)", lineHeight: 1, letterSpacing: "-0.04em" }}>04</p>
            <div>
              <h2 style={{ fontFamily: "var(--font-space-grotesk), sans-serif", fontSize: "clamp(1.75rem, 3.5vw, 2.5rem)", fontWeight: 800, color: "#fff", letterSpacing: "-0.03em", lineHeight: 1.1, marginBottom: "2rem" }}>The approval step: what HR stakeholders should actually look for</h2>
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "clamp(2rem, 4vw, 4rem)", marginBottom: "3rem" }}>
                <p style={{ fontSize: "var(--text-base)", color: "rgba(255,255,255,0.5)", lineHeight: 1.85 }}>
                  When the participant submits their nominations, the HR stakeholder or team leader reviews the list before any invitations go out. This is not a formality. It is one of the most important quality-control moments in the entire process.
                </p>
                <p style={{ fontSize: "var(--text-base)", color: "rgba(255,255,255,0.5)", lineHeight: 1.85 }}>
                  You have two levers: you can remove a nominee you do not believe will provide objective or useful input, and you can add raters the participant did not nominate whose perspective you think belongs in the data.
                </p>
              </div>

              <h3 style={{ fontFamily: "var(--font-space-grotesk), sans-serif", fontSize: "var(--text-lg)", fontWeight: 700, color: "#fff", marginBottom: "1.25rem" }}>When to remove a nominee</h3>
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "clamp(2rem, 4vw, 4rem)", marginBottom: "3rem" }}>
                <p style={{ fontSize: "var(--text-base)", color: "rgba(255,255,255,0.5)", lineHeight: 1.85 }}>
                  Remove someone if you have genuine reason to believe their input will not be objective. Not because they are unlikely to say flattering things, but because their relationship to the participant (or a current situation between them) would compromise the quality of their response. An
                  active conflict, a performance issue involving the person, or a personal relationship that is too close to produce honest professional feedback are all legitimate grounds.
                </p>
                <p style={{ fontSize: "var(--text-base)", color: "rgba(255,255,255,0.5)", lineHeight: 1.85 }}>
                  Be careful not to remove nominees simply because you anticipate they will give critical feedback. Critical feedback, delivered honestly and based on real experience, is exactly what a 360 is designed to surface. Removing people to protect a participant from uncomfortable data
                  defeats the purpose of the assessment.
                </p>
              </div>

              <h3 style={{ fontFamily: "var(--font-space-grotesk), sans-serif", fontSize: "var(--text-lg)", fontWeight: 700, color: "#fff", marginBottom: "1.25rem" }}>When to add a rater</h3>
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "clamp(2rem, 4vw, 4rem)", marginBottom: "3rem" }}>
                <p style={{ fontSize: "var(--text-base)", color: "rgba(255,255,255,0.5)", lineHeight: 1.85 }}>
                  Add a rater when there is a perspective missing from the list that you believe is important: a key cross-functional partner the participant overlooked, a longer-tenured direct report who was not nominated, or someone who has had a particularly revealing working relationship with
                  the participant that the nominations do not capture.
                </p>
                <p style={{ fontSize: "var(--text-base)", color: "rgba(255,255,255,0.5)", lineHeight: 1.85 }}>
                  If you add raters the participant did not nominate, a brief conversation with the participant about why is worth the two minutes it takes. Surprises in the rater list can create anxiety that spills into the collection window. Transparency here is usually better than efficiency.
                </p>
              </div>

              <h3 style={{ fontFamily: "var(--font-space-grotesk), sans-serif", fontSize: "var(--text-lg)", fontWeight: 700, color: "#fff", marginBottom: "1.25rem" }}>Reading the list as a whole</h3>
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "clamp(2rem, 4vw, 4rem)", marginBottom: "2rem" }}>
                <p style={{ fontSize: "var(--text-base)", color: "rgba(255,255,255,0.5)", lineHeight: 1.85 }}>
                  Beyond individual nominees, look at the list as a system. Does it represent a genuine cross-section of how this person leads, or a curated version of their best relationships? Does the peer list include people from outside the participant&apos;s immediate circle? Does the direct
                  report list include people at different levels and tenures?
                </p>
                <p style={{ fontSize: "var(--text-base)", color: "rgba(255,255,255,0.5)", lineHeight: 1.85 }}>
                  A list that is technically compliant with the minimums but composed entirely of the participant&apos;s most favorable relationships will produce data that is technically valid but practically useless. The job of the approval step is to catch that before invitations go out.
                </p>
              </div>
              <div style={{ border: "1px solid rgba(255,255,255,0.08)", borderLeft: `3px solid ${homeTheme.blue}`, borderRadius: "4px", padding: "1.75rem 2rem", background: "rgba(255,255,255,0.02)" }}>
                <p style={{ fontSize: "var(--text-xs)", fontWeight: 700, letterSpacing: "0.18em", textTransform: "uppercase", color: homeTheme.blue, marginBottom: "0.65rem" }}>A useful frame</p>
                <p style={{ fontSize: "var(--text-base)", color: "rgba(255,255,255,0.5)", lineHeight: 1.8 }}>
                  Ask yourself: if the report comes back with a very high &ldquo;How&rdquo; score, will you trust it? If the answer is &ldquo;not really, because the rater list was too friendly,&rdquo; the list needs work. A 360 only has value if the people running it are willing to act on what it
                  surfaces. That starts with constructing a rater list that makes the data worth acting on.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── 05: COMMON MISTAKES ── */}
      <section style={{ background: "#fff", borderBottom: "1px solid rgba(0,0,0,0.08)", padding: "clamp(4rem, 7vw, 6rem) 0" }}>
        <div className="content-wrap page-gutter">
          <div style={{ display: "grid", gridTemplateColumns: "120px 1fr", gap: "clamp(2rem, 4vw, 4rem)" }}>
            <p style={{ fontFamily: "var(--font-space-grotesk), sans-serif", fontSize: "3.5rem", fontWeight: 800, color: "rgba(0,0,0,0.08)", lineHeight: 1, letterSpacing: "-0.04em" }}>05</p>
            <div>
              <h2 style={{ fontFamily: "var(--font-space-grotesk), sans-serif", fontSize: "clamp(1.75rem, 3.5vw, 2.5rem)", fontWeight: 800, color: "#0a0a0a", letterSpacing: "-0.03em", lineHeight: 1.1, marginBottom: "0.75rem" }}>Common mistakes and how to recognize them</h2>
              <p style={{ fontSize: "var(--text-base)", color: "rgba(0,0,0,0.45)", lineHeight: 1.7, marginBottom: "2.5rem" }}>Most rater list problems follow recognizable patterns. Here are the ones that come up most often.</p>
              <div style={{ display: "flex", flexDirection: "column" }}>
                {[
                  {
                    title: "Nominating exactly the minimum",
                    text: "Three peers and three direct reports leaves zero margin. One person who changes their mind, one who is traveling, one who misses the deadline — and the report doesn't run. Nominate as many qualified people as you can. The platform supports up to ten in each category for a reason.",
                  },
                  {
                    title: 'Choosing people who will be "supportive"',
                    text: "Participants sometimes interpret rater selection as an opportunity to curate a favorable outcome. A list full of advocates produces a report that confirms what the participant already believes about themselves. It does not help them grow, and it does not help the organization make better decisions. Participants should be encouraged to include people from whom they have received critical feedback before; those perspectives tend to be the most valuable.",
                  },
                  {
                    title: "Over-representing one function or team",
                    text: "A participant whose peer list is composed entirely of people from their own department is not getting a 360 view. They are getting a 90-degree view. Leadership is often expressed differently across functions, and a rater list that reflects only one context will miss that variation. Aim for diversity of working relationship, not just diversity of name.",
                  },
                  {
                    title: "Including people who barely know the participant",
                    text: "A rater who has had two or three interactions with the participant over the past year does not have enough data to provide useful input. They will either default to surface impressions or complete the process superficially. Neither adds value. Every rater on the list should be someone whose perspective is grounded in real, recurring experience of the participant's leadership.",
                  },
                  {
                    title: "Treating the approval step as a rubber stamp",
                    text: "The HR stakeholder's review is the last meaningful quality check before the assessment runs. If the list goes through without real scrutiny, any problems with its composition get locked in. Take five minutes to actually read the list and ask whether it represents a genuine cross-section of the participant's leadership experience. That five minutes is worth more than any amount of follow-up after a report comes back with data no one trusts.",
                  },
                ].map((flag, i, arr) => (
                  <div key={flag.title} style={{ display: "grid", gridTemplateColumns: "28px 1fr", gap: "1.25rem", padding: "2rem 0", borderTop: "1px solid rgba(0,0,0,0.07)", borderBottom: i === arr.length - 1 ? "1px solid rgba(0,0,0,0.07)" : "none" }}>
                    <span style={{ fontFamily: "var(--font-space-grotesk), sans-serif", fontSize: "var(--text-xs)", fontWeight: 700, color: "rgba(180,40,40,0.65)", paddingTop: "0.2rem" }}>{String(i + 1).padStart(2, "0")}</span>
                    <div>
                      <h4 style={{ fontFamily: "var(--font-space-grotesk), sans-serif", fontSize: "var(--text-base)", fontWeight: 700, color: "#0a0a0a", marginBottom: "0.65rem" }}>{flag.title}</h4>
                      <p style={{ fontSize: "var(--text-base)", color: "rgba(0,0,0,0.5)", lineHeight: 1.8 }}>{flag.text}</p>
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
            <Link
              href="/buy"
              style={{ display: "inline-flex", alignItems: "center", gap: "8px", background: homeTheme.blue, color: "#fff", fontSize: "var(--text-xs)", fontWeight: 700, letterSpacing: "0.12em", textTransform: "uppercase", padding: "0.75rem 1.75rem", borderRadius: "4px", textDecoration: "none" }}
            >
              Buy an Assessment
              <ArrowRight size={14} />
            </Link>
            <Link
              href="/company#contact"
              style={{
                display: "inline-flex",
                alignItems: "center",
                border: "1px solid rgba(255,255,255,0.18)",
                color: "rgba(255,255,255,0.7)",
                fontSize: "var(--text-xs)",
                fontWeight: 700,
                letterSpacing: "0.12em",
                textTransform: "uppercase",
                padding: "0.75rem 1.75rem",
                borderRadius: "4px",
                textDecoration: "none",
              }}
            >
              Talk to Us
            </Link>
          </div>

          <div style={{ marginTop: "4rem", paddingTop: "3rem", borderTop: "1px solid rgba(255,255,255,0.07)" }}>
            <p style={{ fontSize: "var(--text-xs)", fontWeight: 700, letterSpacing: "0.2em", textTransform: "uppercase", color: "rgba(255,255,255,0.3)", marginBottom: "1.5rem" }}>Related resources</p>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: "1rem" }}>
              {[
                { label: "Playbook", title: "How to Run a 360 in 14 Days", href: "/resources/how-to-run-a-360-in-14-days" },
                { label: "Playbook", title: "Using the What and the How in Promotion Decisions", href: "#" },
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
