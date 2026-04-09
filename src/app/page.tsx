import Link from "next/link";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import SoftAurora from "@/components/SoftAurora";

const steps = [
  {
    num: "01",
    title: "Gather feedback through conversation",
    body: "Instead of asking people to complete long, static surveys, Interval 360 uses conversational AI to guide feedback providers through thoughtful questions that probe for examples, context, and specificity. Most people finish in around five minutes.",
  },
  {
    num: "02",
    title: "Turn feedback into usable insight",
    body: "Responses are synthesized into concise outputs that highlight themes, strengths, risks, and actionable takeaways without burying the reader in pages of reporting.",
  },
  {
    num: "03",
    title: "Use it for development and decisions",
    body: "Leaders, HR teams, and business leaders can use the results to support coaching, development planning, promotions, succession, and leadership placement decisions.",
  },
];

const promises = [
  { num: "01 — Clear Visibility", title: "Understand the full picture", body: "Understand both what leaders deliver and how they are experienced across the organization." },
  { num: "02 — Smarter Decisions", title: "Insight that drives action", body: "Use better insight to support promotion, development, succession, and leadership placement decisions." },
  { num: "03 — Stronger Leaders", title: "Development that compounds", body: "Turn regular, repeatable feedback into focused development and better leadership over time." },
];

const whyItems = [
  { num: "01", title: "Better feedback collection", body: "Conversational AI produces more specific, contextual input than traditional survey formats can deliver." },
  { num: "02", title: "Less burden on participants", body: "Five minutes, no login required, no long rating scales. Completion rates go up. Response quality goes up." },
  { num: "03", title: "Concise, actionable outputs", body: "Reports are built to be read in one sitting and used immediately — not filed away." },
  { num: "04", title: "Scalable across more leaders", body: "Fast enough and affordable enough to run across a full leadership population, not just a handful of senior leaders." },
  { num: "05", title: "What and How — both matter", body: "Every assessment covers both performance against expectations and leadership experience — the two dimensions that drive talent decisions." },
];

const forCards = [
  { label: "For HR & Talent Teams", title: "Scalable 360 feedback across leadership populations", body: "Run assessments across development programs, talent reviews, and succession cycles — without the overhead of traditional 360 processes.", href: "/solutions" },
  {
    label: "For Coaches & Consultants",
    title: "A repeatable client-ready 360 process",
    body: "Stop building your own 360 instruments or paying per-seat fees on platforms designed for HR teams. Interval 360 gives coaches a structured, professional-quality process for any client.",
    href: "/for-coaches",
  },
  {
    label: "For Business Leaders",
    title: "Real leadership signal for your most important decisions",
    body: "Promotions, succession, and high-stakes leadership decisions require better information than a single manager's view. Get structured, multi-perspective feedback.",
    href: "/solutions/talent-decisions",
  },
  {
    label: "For Managers and Leaders",
    title: "Feedback you can actually use for development",
    body: "Whether coaching a direct report, investing in your own development, or trying to understand how your leadership is landing — get specific, contextualized feedback.",
    href: "/solutions/leadership-development",
  },
];

const credList = [
  "Built by practitioners who have run assessments and coached leaders across major organizations",
  "Process designed specifically around the feedback collection problem — not adapted from an older model",
  "AI used to improve signal quality, not replace professional judgment",
  "Outputs designed around how feedback is actually used — in coaching conversations, talent reviews, and development planning",
  "Confidentiality protections built into the platform design, not just the policy language",
];

export default function HomePage() {
  return (
    <>
      <Nav />

      {/* HERO */}
      <section className="min-h-screen flex items-center justify-center relative overflow-hidden text-center" style={{ background: "linear-gradient(180deg, #061027 0%, #040a1a 56%, #030816 100%)" }}>
        <div className="absolute inset-0 pointer-events-none opacity-70">
          <SoftAurora speed={0.7} scale={0.1} brightness={1} color1="#006af5" color2="#0a70fe" noiseFrequency={5} noiseAmplitude={5.5} bandHeight={0.35} bandSpread={1.1} octaveDecay={0.27} layerOffset={0.15} colorSpeed={0.7} enableMouseInteraction={false} mouseInfluence={0.25} />
        </div>
        <div className="absolute inset-0 pointer-events-none grid-pattern" style={{ opacity: 0.16 }} />
        <div className="absolute inset-0 pointer-events-none hero-vignette" />

        <div className="relative z-10 content-wrap w-full page-gutter pt-28 pb-16">
          <div className="max-w-5xl mx-auto">
            <p className="inline-flex items-center gap-2.5 text-[0.7rem] font-semibold tracking-[0.26em] uppercase mb-6" style={{ color: "rgba(187,220,251,0.78)" }}>
              <span className="block w-7 h-px" style={{ background: "rgba(187,220,251,0.65)" }} />
              Leadership Feedback, Reimagined
            </p>
            <h1 className="text-[clamp(2.35rem,8.6vw,6.3rem)] font-extrabold leading-[0.98] tracking-[-0.03em] text-white uppercase mb-7" style={{ fontFamily: "var(--font-space-grotesk)" }}>
              <span className="text-[#006af5]">360</span> Feedback That Powers <span className="text-[#006af5]">Leadership</span> Strategy
            </h1>
            <p className="text-[clamp(1rem,1.7vw,1.25rem)] leading-[1.7] mb-11 mx-auto max-w-[62ch]" style={{ color: "rgba(234,239,243,0.72)" }}>
              Interval 360 uses conversational AI to gather better leadership feedback with less burden, then turns it into concise, actionable insight for development and talent decisions.
            </p>
            <div className="flex gap-4 flex-wrap justify-center items-center">
              <Link href="/company#contact" className="text-[0.95rem] font-semibold px-10 py-3.5 rounded-sm no-underline transition-transform hover:-translate-y-0.5" style={{ background: "#2d6cff", color: "#fff", boxShadow: "0 10px 36px rgba(45,108,255,0.35)" }}>
                Book a Call
              </Link>
              <Link href="/buy" className="text-[0.95rem] font-semibold px-10 py-3.5 rounded-sm border no-underline transition-colors" style={{ color: "#fff", borderColor: "rgba(255,255,255,0.22)", background: "rgba(255,255,255,0.02)" }}>
                Buy an Assessment
              </Link>
            </div>
            <div className="mt-5">
              <Link href="#sample" className="text-[0.9rem] font-medium no-underline border-b border-current pb-0.5" style={{ color: "rgba(234,239,243,0.68)" }}>
                See sample reports →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* PROBLEM SHOWCASE */}
      <section style={{ background: "#f7f9fc" }}>
        <div className="content-wrap page-gutter py-20">
          <div className="grid lg:grid-cols-2 border border-[#d9e2f3] bg-white">
            <div className="p-10 lg:p-12 border-r border-[#d9e2f3]">
              <p className="text-[0.68rem] tracking-[0.32em] uppercase mb-6 text-[#1f5fff]">The Stalemate</p>
              <h2
                className="text-[clamp(2.5rem,6.6vw,5rem)] leading-[0.95] font-bold uppercase text-[#0b1733] mb-8"
                style={{ fontFamily: "var(--font-space-grotesk)" }}
              >
                The Problem
              </h2>
              <p className="text-[1.05rem] leading-[1.6] text-[#3b4a6a] mb-8 max-w-[32ch]">
                Traditional 360 tools are <span className="text-[#0b1733] font-semibold">too burdensome</span>, too limited, and not useful enough.
              </p>
              <div className="h-px w-full bg-[#d9e2f3] mb-7" />
              <p className="text-[1.02rem] leading-[1.7] text-[#4a5877] max-w-[46ch]">
                Long, repetitive surveys create friction for participants and make broad deployment harder than it should be. Traditional tools are often expensive to run widely and produce outputs that are difficult to interpret and disconnected from real decisions.
              </p>
            </div>

            <div className="p-10 lg:p-12 flex items-center justify-center">
              <div className="w-full max-w-[28rem] bg-[#f6f9ff] border border-[#d9e2f3] px-10 py-12">
                <p className="text-[2.5rem] leading-none text-[#bed0f6] mb-4">“</p>
                <h3 className="text-[2.2rem] leading-[1.02] uppercase font-bold text-[#0b1733] mb-6" style={{ fontFamily: "var(--font-space-grotesk)" }}>
                  Interval 360
                  <br />
                  <span className="text-[#2d6cff] italic">Changes That.</span>
                </h3>
                <p className="text-[1.02rem] leading-[1.7] text-[#3f4d6b] mb-8">
                  Providing feedback takes just a few minutes. Results are easier to interpret, outputs are more actionable, and organizations can finally run meaningful assessments across{" "}
                  <span className="text-[#6b93ff]">more leaders and more moments.</span>
                </p>
                <p className="text-[0.66rem] tracking-[0.32em] uppercase text-[#2d6cff]">
                  Clarity Reclaimed
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* PROBLEM */}
      <section style={{ background: "#fff" }}>
        <div className="content-wrap page-gutter py-24">
          <div className="grid lg:grid-cols-[5fr_7fr] gap-24 items-start">
            <div>
              <p className="text-[0.72rem] font-semibold tracking-[0.2em] uppercase mb-4" style={{ color: "var(--teal)" }}>
                The Problem
              </p>
              <h2 className="text-[clamp(1.7rem,3vw,2.5rem)] font-bold leading-[1.2] tracking-[-0.02em] mb-5" style={{ fontFamily: "var(--font-poppins)", color: "var(--navy-dark)" }}>
                Traditional 360 tools are often too burdensome, too limited, and not useful enough.
              </h2>
            </div>
            <div>
              <p className="text-[1.05rem] leading-[1.75] mb-6" style={{ color: "var(--slate)" }}>
                Long, repetitive surveys create friction for participants and make broad deployment harder than it should be. Traditional 360 tools are often expensive to run widely and tend to produce outputs that are difficult to interpret, hard to act on, and disconnected from real development or
                talent decisions.
              </p>
              <div className="pl-6 py-4 pr-4 rounded-r" style={{ background: "var(--light-bg)", borderLeft: "3px solid var(--teal)" }}>
                <p className="italic text-[1rem] leading-[1.7]" style={{ color: "var(--navy-dark)" }}>
                  Interval 360 changes that. Providing feedback takes just a few minutes. Results are easier to interpret, outputs are more actionable, and organizations can finally run meaningful assessments across more leaders and more moments.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section id="how" style={{ background: "var(--light-bg)" }}>
        <div className="content-wrap page-gutter py-24">
          <div className="grid lg:grid-cols-2 gap-16 mb-16 items-end">
            <div>
              <p className="text-[0.72rem] font-semibold tracking-[0.2em] uppercase mb-4" style={{ color: "var(--teal)" }}>
                How It Works
              </p>
              <h2 className="text-[clamp(1.7rem,3vw,2.5rem)] font-bold leading-[1.2] tracking-[-0.02em]" style={{ fontFamily: "var(--font-poppins)", color: "var(--navy-dark)" }}>
                A better process creates better inputs and more impactful outputs.
              </h2>
            </div>
            <div className="text-right">
              <Link href="/how-it-works" className="text-[0.9rem] font-medium border-b border-current no-underline" style={{ color: "var(--navy)" }}>
                See how it works →
              </Link>
            </div>
          </div>
          <div className="flex flex-col">
            {steps.map((step, i) => (
              <div
                key={i}
                className="grid items-start py-9 gap-8"
                style={{
                  gridTemplateColumns: "4rem 1fr",
                  borderTop: "1px solid var(--rule)",
                  borderBottom: i === steps.length - 1 ? "1px solid var(--rule)" : "none",
                }}
              >
                <p className="text-[0.85rem] font-bold tracking-[0.06em] pt-0.5" style={{ fontFamily: "var(--font-montserrat)", color: "var(--teal)" }}>
                  {step.num}
                </p>
                <div>
                  <h3 className="text-[1.05rem] font-semibold mb-2" style={{ fontFamily: "var(--font-poppins)", color: "var(--navy-dark)" }}>
                    {step.title}
                  </h3>
                  <p className="text-[0.92rem] leading-[1.7]" style={{ color: "var(--slate)" }}>
                    {step.body}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* BRAND PROMISE */}
      <section style={{ background: "var(--navy-dark)" }}>
        <div className="content-wrap page-gutter py-24">
          <p className="text-[0.72rem] font-semibold tracking-[0.2em] uppercase mb-4" style={{ color: "var(--teal-light)" }}>
            The Promise
          </p>
          <h2 className="text-[clamp(1.7rem,3vw,2.5rem)] font-bold leading-[1.2] tracking-[-0.02em] mb-5 max-w-[24ch]" style={{ fontFamily: "var(--font-poppins)", color: "#fff" }}>
            Clear visibility. Smarter decisions. Stronger leaders.
          </h2>
          <p className="text-[1.05rem] leading-[1.75] mb-14 max-w-[58ch]" style={{ color: "rgba(234,239,243,0.65)" }}>
            Interval 360 is built to help organizations understand leadership more clearly and use feedback more effectively.
          </p>
          <div className="grid lg:grid-cols-3 gap-6">
            {promises.map((card, i) => (
              <div key={i} className="p-9 rounded transition-all" style={{ background: "rgba(255,255,255,0.05)", border: "1px solid rgba(187,220,251,0.15)", borderRadius: 6 }}>
                <p className="text-[0.7rem] font-bold tracking-[0.15em] uppercase mb-4" style={{ color: "var(--teal)" }}>
                  {card.num}
                </p>
                <h3 className="text-[1.1rem] font-semibold mb-3" style={{ fontFamily: "var(--font-poppins)", color: "#fff" }}>
                  {card.title}
                </h3>
                <p className="text-[0.9rem] leading-[1.65]" style={{ color: "rgba(234,239,243,0.6)" }}>
                  {card.body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WHY INTERVAL 360 */}
      <section id="why" style={{ background: "#fff" }}>
        <div className="content-wrap page-gutter py-24">
          <div className="grid lg:grid-cols-2 gap-16 mb-14 items-end">
            <div>
              <p className="text-[0.72rem] font-semibold tracking-[0.2em] uppercase mb-4" style={{ color: "var(--teal)" }}>
                Why Interval 360
              </p>
              <h2 className="text-[clamp(1.7rem,3vw,2.5rem)] font-bold leading-[1.2] tracking-[-0.02em]" style={{ fontFamily: "var(--font-poppins)", color: "var(--navy-dark)" }}>
                Built differently, by design.
              </h2>
            </div>
            <p className="text-[1.05rem] leading-[1.75]" style={{ color: "var(--slate)" }}>
              Every design decision in Interval 360 was made to solve a specific failure mode of traditional 360 tools.
            </p>
          </div>
          <div className="grid lg:grid-cols-3 overflow-hidden rounded" style={{ border: "1px solid var(--rule)" }}>
            {whyItems.map((item, i) => (
              <div
                key={i}
                className="p-8"
                style={{
                  borderRight: (i + 1) % 3 !== 0 ? "1px solid var(--rule)" : "none",
                  borderBottom: i < 3 ? "1px solid var(--rule)" : "none",
                }}
              >
                <p className="text-[0.65rem] font-bold tracking-[0.15em] uppercase mb-3" style={{ color: "var(--teal)" }}>
                  {item.num}
                </p>
                <h3 className="text-[0.95rem] font-semibold mb-2" style={{ fontFamily: "var(--font-poppins)", color: "var(--navy-dark)" }}>
                  {item.title}
                </h3>
                <p className="text-[0.875rem] leading-[1.65]" style={{ color: "var(--slate)" }}>
                  {item.body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FOR SECTION */}
      <section id="for" style={{ background: "var(--light-bg)" }}>
        <div className="content-wrap page-gutter py-24">
          <p className="text-[0.72rem] font-semibold tracking-[0.2em] uppercase mb-4" style={{ color: "var(--teal)" }}>
            Who It&apos;s For
          </p>
          <h2 className="text-[clamp(1.7rem,3vw,2.5rem)] font-bold leading-[1.2] tracking-[-0.02em] mb-3 max-w-[24ch]" style={{ fontFamily: "var(--font-poppins)", color: "var(--navy-dark)" }}>
            Built for the people who use and need leadership feedback most.
          </h2>
          <div className="grid lg:grid-cols-2 gap-6 mt-12">
            {forCards.map((card, i) => (
              <div key={i} className="p-10 rounded-lg transition-shadow hover:shadow-lg" style={{ background: "#fff", border: "1px solid var(--rule)" }}>
                <p className="text-[0.72rem] font-semibold tracking-[0.18em] uppercase mb-4" style={{ color: "var(--teal)" }}>
                  {card.label}
                </p>
                <h3 className="text-[1.25rem] font-semibold leading-[1.3] mb-3" style={{ fontFamily: "var(--font-poppins)", color: "var(--navy-dark)" }}>
                  {card.title}
                </h3>
                <p className="text-[0.92rem] leading-[1.7] mb-8" style={{ color: "var(--slate)" }}>
                  {card.body}
                </p>
                <Link href={card.href} className="text-[0.88rem] font-semibold no-underline border-b border-current pb-0.5 transition-opacity hover:opacity-75" style={{ color: "var(--navy)" }}>
                  Learn more →
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CREDIBILITY */}
      <section style={{ background: "var(--navy-dark)" }}>
        <div className="content-wrap page-gutter py-24">
          <p className="text-[0.72rem] font-semibold tracking-[0.2em] uppercase mb-4" style={{ color: "var(--teal-light)" }}>
            Why Trust It
          </p>
          <h2 className="text-[clamp(1.7rem,3vw,2.5rem)] font-bold leading-[1.2] tracking-[-0.02em] max-w-[24ch]" style={{ fontFamily: "var(--font-poppins)", color: "#fff" }}>
            Built by people who understand the problem from the inside.
          </h2>
          <div className="flex flex-col mt-12">
            {credList.map((item, i) => (
              <div
                key={i}
                className="flex items-start gap-4 py-4"
                style={{
                  borderTop: i === 0 ? "1px solid rgba(187,220,251,0.12)" : "none",
                  borderBottom: "1px solid rgba(187,220,251,0.12)",
                }}
              >
                <div className="w-5 h-5 rounded-full flex items-center justify-center shrink-0 mt-0.5" style={{ background: "var(--teal)" }}>
                  <svg className="w-2.5 h-2.5" viewBox="0 0 10 10" fill="none">
                    <path d="M2 5l2.5 2.5L8 3" stroke="#fff" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </div>
                <span className="text-[0.92rem] leading-[1.5]" style={{ color: "rgba(234,239,243,0.8)" }}>
                  {item}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SAMPLE REPORTS */}
      <section id="sample" style={{ background: "#fff" }}>
        <div className="content-wrap page-gutter py-24 text-center">
          <p className="text-[0.72rem] font-semibold tracking-[0.2em] uppercase mb-4" style={{ color: "var(--teal)" }}>
            Sample Reports
          </p>
          <h2 className="text-[clamp(1.7rem,3vw,2.5rem)] font-bold leading-[1.2] tracking-[-0.02em] mb-4 mx-auto max-w-[24ch]" style={{ fontFamily: "var(--font-poppins)", color: "var(--navy-dark)" }}>
            See what a real Interval 360 report looks like.
          </h2>
          <p className="text-[1.05rem] leading-[1.75] mb-12 mx-auto max-w-[58ch]" style={{ color: "var(--slate)" }}>
            Every assessment produces two reports — one for the organization, one for the leader. Both are designed to be used directly, not filed away.
          </p>
          <div className="grid lg:grid-cols-2 gap-6 max-w-3xl mx-auto text-left">
            {[
              {
                type: "Assessment Report",
                audience: "For HR, managers, and talent decisions",
                title: "Leadership Assessment Report",
                desc: "A structured summary for managers and HR teams: executive summary, What/How breakdown, strengths, development areas, and succession readiness signal.",
                color: "var(--navy)",
              },
              {
                type: "Development Report",
                audience: "For the leader themselves",
                title: "Leadership Development Report",
                desc: "A personal development guide for the leader: deep-dive analysis on each strength and development area, curated resources, and a structured action plan.",
                color: "var(--teal)",
              },
            ].map((card) => (
              <div key={card.type} className="rounded-xl p-8 flex flex-col gap-3 transition-shadow hover:shadow-lg" style={{ border: "1px solid var(--rule)", borderTop: `3px solid ${card.color}` }}>
                <div className="flex items-center gap-3 flex-wrap mb-1">
                  <span className="text-[0.68rem] font-bold tracking-[0.1em] uppercase px-2.5 py-1 rounded-full" style={{ background: card.color === "var(--navy)" ? "rgba(5,79,154,0.08)" : "rgba(44,166,164,0.1)", color: card.color }}>
                    {card.type}
                  </span>
                  <span className="text-[0.78rem] italic" style={{ color: "var(--slate)" }}>
                    {card.audience}
                  </span>
                </div>
                <h3 className="text-[1.1rem] font-bold leading-[1.3]" style={{ fontFamily: "var(--font-poppins)", color: "var(--navy-dark)" }}>
                  {card.title}
                </h3>
                <p className="text-[0.88rem] leading-[1.7] flex-1" style={{ color: "var(--slate)" }}>
                  {card.desc}
                </p>
                <Link href="/reports-and-outputs" className="text-[0.88rem] font-semibold no-underline border-b border-current pb-0.5 mt-2 inline-block transition-opacity hover:opacity-75" style={{ color: card.color }}>
                  See report structure →
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="relative overflow-hidden" style={{ background: "linear-gradient(135deg, var(--navy-dark) 0%, var(--navy) 100%)" }}>
        <div className="absolute inset-0 pointer-events-none grid-pattern" />
        <div className="relative z-10 content-wrap page-gutter py-32 text-center">
          <p className="text-[0.72rem] font-semibold tracking-[0.2em] uppercase mb-4" style={{ color: "var(--teal-light)" }}>
            Get Started
          </p>
          <h2 className="text-[clamp(1.7rem,3vw,2.5rem)] font-bold leading-[1.2] tracking-[-0.02em] mb-4 mx-auto max-w-[28ch]" style={{ fontFamily: "var(--font-poppins)", color: "#fff" }}>
            Ready to see what better 360 feedback looks like?
          </h2>
          <p className="text-[1.05rem] leading-[1.75] mb-12 mx-auto max-w-[52ch]" style={{ color: "rgba(234,239,243,0.7)" }}>
            Try a single assessment, buy a team pack, or talk to us about an enterprise rollout.
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

      <Footer />
    </>
  );
}
