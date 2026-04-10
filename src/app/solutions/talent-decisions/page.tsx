import Link from "next/link";
import PageHero from "@/components/PageHero";

const riskItems = [
  "Promotion and succession decisions shaped by one manager's view and last quarter's performance — not by how that leader is experienced across the organization, consistently over time.",
  "HiPo programs that track potential without grounding it in how that person actually leads.",
  "Blind spots that multi-perspective feedback would have surfaced.",
  "Talent reviews conducted without a shared language across candidates — making calibration conversations harder than they need to be.",
];

const revealCards = [
  {
    label: 'The "What" — Results',
    color: "var(--navy)",
    title: "Are they delivering at the level the role requires?",
    body: "Assesses delivery against goals, ownership of outcomes, quality of decisions, and execution under pressure — the core performance signal relevant to promotion and succession readiness.",
  },
  {
    label: 'The "How" — Leadership Experience',
    color: "var(--teal)",
    title: "Are they experienced as a leader — not just a high performer?",
    body: "Assesses how peers, direct reports, and cross-functional partners experience them — communication, trust, accountability, and team development. The signal that predicts whether a strong individual contributor will succeed in a bigger role.",
  },
];

const whenItems = [
  { title: "Pre-promotion evaluation", body: "Get multi-perspective signal before a promotion decision — not just the hiring manager's view." },
  { title: "Succession pool readiness", body: "Assess which leaders on your succession list are ready now vs. who needs a development investment before they step up." },
  { title: "HiPo program validation", body: "Confirm that people on your high-potential list are actually experienced as leaders — not just high-performing individual contributors." },
  { title: "Calibration preparation", body: "Give HR and business leaders a shared evidence base to compare candidates against before a talent review conversation." },
  { title: "Post-hire or post-promotion signal", body: "Validate that a leadership transition is landing well — or surface issues early while there is still time to address them." },
];

export default function TalentDecisionsPage() {
  return (
    <>
      <PageHero
        eyebrow=""
        tag="Use Case — Talent Decisions"
        title="Make smarter promotion and succession decisions — with real leadership signal, not anecdotes."
        body="Most promotion and succession conversations rely on performance reviews, gut feel, and whoever was most visible in the last quarter. Interval 360 gives HR and business leaders the structured, multi-perspective feedback needed to make those decisions with more confidence and less politics."
        buttons={[
          { href: "/company#contact", label: "Book a Call", variant: "teal" },
          { href: "/reports-and-outputs", label: "See Sample Report →", variant: "ghost" },
        ]}
        breadcrumb={{ href: "/solutions", label: "Solutions" }}
        breadcrumbCurrent="Talent Decisions & Succession"
      />

      {/* PROBLEM */}
      <section style={{ background: "#fff" }}>
        <div className="content-wrap page-gutter py-24">
          <div className="grid lg:grid-cols-[5fr_7fr] gap-24 items-start">
            <div>
              <p className="text-[0.72rem] font-semibold tracking-[0.2em] uppercase mb-4" style={{ color: "var(--teal)" }}>The Problem</p>
              <h2 className="text-[clamp(1.7rem,3vw,2.3rem)] font-bold leading-[1.2] tracking-[-0.02em]" style={{ fontFamily: "var(--font-poppins)", color: "var(--navy-dark)" }}>
                Talent decisions made without enough signal are high-stakes guesses.
              </h2>
            </div>
            <div className="flex flex-col gap-5">
              <p className="text-[1rem] leading-[1.75]" style={{ color: "var(--slate)" }}>
                Promotion and succession decisions are among the most consequential things an organization does. A leader placed incorrectly — or not given the role they were ready for — has compounding costs that extend well beyond that individual.
              </p>
              <p className="text-[1rem] leading-[1.75]" style={{ color: "var(--slate)" }}>
                Yet most organizations make these decisions with limited, one-dimensional information. Performance reviews capture what a manager observed. Interviews capture how someone presents. Neither captures how a leader is experienced by peers, direct reports, and cross-functional partners — which is often what determines whether they succeed in a bigger role.
              </p>
              <p className="text-[0.92rem] font-medium mb-2" style={{ color: "var(--charcoal)" }}>The result is a familiar set of failure modes:</p>
              <div className="flex flex-col gap-3">
                {riskItems.map((item, i) => (
                  <div key={i} className="flex items-start gap-4">
                    <span className="font-bold shrink-0 mt-0.5" style={{ color: "var(--slate)" }}>—</span>
                    <p className="text-[0.92rem] leading-[1.7]" style={{ color: "var(--slate)" }}>{item}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* WHAT IT REVEALS */}
      <section style={{ background: "var(--light-bg)" }}>
        <div className="content-wrap page-gutter py-24">
          <div className="grid lg:grid-cols-2 gap-16 mb-14 items-end">
            <div>
              <p className="text-[0.72rem] font-semibold tracking-[0.2em] uppercase mb-4" style={{ color: "var(--teal)" }}>What Interval 360 Reveals</p>
              <h2 className="text-[clamp(1.7rem,3vw,2.3rem)] font-bold leading-[1.2] tracking-[-0.02em]" style={{ fontFamily: "var(--font-poppins)", color: "var(--navy-dark)" }}>
                The two dimensions that matter most for talent decisions.
              </h2>
            </div>
            <p className="text-[1.05rem] leading-[1.75]" style={{ color: "var(--slate)" }}>
              Interval 360 assesses both performance against expectations and how leadership is experienced by others. Combined, they give decision-makers a complete picture — not just what a leader delivers, but whether they can lead at the next level.
            </p>
          </div>
          <div className="grid lg:grid-cols-2 gap-6">
            {revealCards.map((card) => (
              <div key={card.label} className="p-8 rounded-lg" style={{ background: "#fff", border: "1px solid var(--rule)", borderTop: `3px solid ${card.color}` }}>
                <p className="text-[0.72rem] font-bold tracking-[0.12em] uppercase mb-4" style={{ color: card.color }}>
                  {card.label}
                </p>
                <h4 className="text-[1.1rem] font-semibold mb-4" style={{ fontFamily: "var(--font-poppins)", color: "var(--navy-dark)" }}>
                  {card.title}
                </h4>
                <p className="text-[0.92rem] leading-[1.7]" style={{ color: "var(--slate)" }}>
                  {card.body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WHEN TO USE */}
      <section style={{ background: "#fff" }}>
        <div className="content-wrap page-gutter py-24">
          <div className="grid lg:grid-cols-2 gap-16 mb-14 items-end">
            <div>
              <p className="text-[0.72rem] font-semibold tracking-[0.2em] uppercase mb-4" style={{ color: "var(--teal)" }}>When to Use It</p>
              <h2 className="text-[clamp(1.7rem,3vw,2.3rem)] font-bold leading-[1.2] tracking-[-0.02em]" style={{ fontFamily: "var(--font-poppins)", color: "var(--navy-dark)" }}>
                Five moments where it makes the biggest difference.
              </h2>
            </div>
            <p className="text-[1.05rem] leading-[1.75]" style={{ color: "var(--slate)" }}>
              Interval 360 is not a replacement for all talent assessment. It is the tool you use when you need structured multi-perspective feedback and do not have the time or budget for a full assessment center.
            </p>
          </div>
          <div className="grid lg:grid-cols-3 gap-6">
            {whenItems.map((item, i) => (
              <div key={i} className="p-7 rounded-lg" style={{ background: "var(--light-bg)" }}>
                <h4 className="text-[0.95rem] font-semibold mb-3" style={{ fontFamily: "var(--font-poppins)", color: "var(--navy-dark)" }}>
                  {item.title}
                </h4>
                <p className="text-[0.88rem] leading-[1.65]" style={{ color: "var(--slate)" }}>
                  {item.body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative overflow-hidden" style={{ background: "linear-gradient(135deg, var(--navy-dark) 0%, var(--navy) 100%)" }}>
        <div className="absolute inset-0 pointer-events-none grid-pattern" />
        <div className="relative z-10 content-wrap page-gutter py-28 text-center">
          <h2 className="text-[clamp(1.7rem,3vw,2.3rem)] font-bold leading-[1.2] mb-5 mx-auto max-w-[28ch]" style={{ fontFamily: "var(--font-poppins)", color: "#fff" }}>
            Make your next talent decision with real signal.
          </h2>
          <p className="text-[1.05rem] leading-[1.75] mb-10 mx-auto max-w-[48ch]" style={{ color: "rgba(234,239,243,0.7)" }}>
            Talk to us about how Interval 360 fits into your promotion and succession process.
          </p>
          <div className="flex gap-4 justify-center flex-wrap">
            <Link href="/company#contact" className="text-[0.9rem] font-semibold px-8 py-3.5 rounded no-underline" style={{ background: "var(--teal)", color: "#fff" }}>
              Book a Call
            </Link>
            <Link href="/buy" className="text-[0.9rem] font-medium px-8 py-3.5 rounded border-[1.5px] no-underline" style={{ color: "#fff", borderColor: "rgba(255,255,255,0.4)", background: "transparent" }}>
              Buy an Assessment
            </Link>
          </div>
        </div>
      </section>

    </>
  );
}
