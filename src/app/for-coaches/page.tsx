import Link from "next/link";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import PageHero from "@/components/PageHero";

const whatYouGet = [
  {
    num: "01 — The Process",
    title: "A structured conversational assessment your clients' raters actually complete",
    body: "Raters receive a link and work through a five-minute guided conversation. No login, no long survey, no open-text boxes to fill from scratch. The low burden means higher completion rates — and the conversational format produces more specific, contextual input than static surveys.",
  },
  {
    num: "02 — The Report",
    title: "A client-ready report you can use directly in a debrief",
    body: "The report includes an executive summary, What/How breakdown, strengths, development areas, and specific next steps. It is formatted for sharing — with the client, with their manager, or as part of a broader talent conversation. No additional processing or interpretation required before you use it.",
  },
  {
    num: "03 — The Speed",
    title: "From launch to report in days, not weeks",
    body: "Set up the assessment in minutes. Raters complete it within a few days. The report is generated automatically when collection is complete. You can go from kickoff conversation to debrief in under two weeks, without any logistics overhead on your end.",
  },
  {
    num: "04 — The Economics",
    title: "Pricing that works at the individual engagement level",
    body: "$150 per assessment for individual clients. $125 per assessment in a 10-pack — ideal for coaches running multiple client engagements simultaneously. No per-seat platform subscription. No minimum commitment.",
  },
];

const compareItems = [
  { feature: "Instrument design required", them: "Build or license separately", us: "Included — no work on your end" },
  { feature: "Cost per engagement", them: "Platform fees + per-seat pricing", us: "$150 single / $125 in 10-pack" },
  { feature: "Time from setup to report", them: "Weeks — often 4–6+", us: "Days — often under 2 weeks" },
  { feature: "Report format", them: "Variable — often requires processing", us: "Client-ready — use directly in debrief" },
  { feature: "Rater experience", them: "Long survey — 20–40 minutes", us: "Guided conversation — ~5 minutes" },
  { feature: "Follow-up for specificity", them: "None", us: "AI probes for examples and context" },
];

export default function ForCoachesPage() {
  return (
    <>
      <Nav />
      <PageHero
        eyebrow="For Coaches and Consultants"
        title={<>A repeatable, <span style={{ color: "var(--sky-blue)" }}>client-ready 360 process</span> — without building one yourself.</>}
        body="Interval 360 gives coaches and consultants a fast, reliable way to run a structured leadership 360 for any client — with professional-quality outputs ready to use in a debrief conversation the same day they arrive."
        buttons={[
          { href: "/company#contact", label: "Talk to Partnerships", variant: "teal" },
          { href: "/pricing", label: "See pricing", variant: "secondary" },
          { href: "/reports-and-outputs", label: "Download sample report →", variant: "ghost" },
        ]}
      />

      {/* PROBLEM FOR COACHES */}
      <section className="py-24 page-gutter" style={{ background: "#fff" }}>
        <div className="grid lg:grid-cols-[5fr_7fr] gap-24 items-start">
          <div>
            <p className="text-[0.72rem] font-semibold tracking-[0.2em] uppercase mb-4" style={{ color: "var(--teal)" }}>The Challenge for Coaches</p>
            <h2 className="text-[clamp(1.7rem,3vw,2.3rem)] font-bold leading-[1.2] tracking-[-0.02em]" style={{ fontFamily: "var(--font-poppins)", color: "var(--navy-dark)" }}>
              360 feedback is valuable — but running it well is expensive and slow.
            </h2>
          </div>
          <div className="flex flex-col gap-5">
            <p className="text-[1rem] leading-[1.75]" style={{ color: "var(--slate)" }}>
              Most executive coaches and consultants want to anchor their work in real, multi-perspective feedback. The problem is that running a credible 360 independently is resource-intensive: it requires designing or licensing an instrument, coordinating raters, chasing completions, and either processing the data manually or paying for a platform that charges per-seat fees that make it uneconomical for individual client engagements.
            </p>
            <p className="text-[1rem] leading-[1.75]" style={{ color: "var(--slate)" }}>
              The workaround most coaches use — informal conversations with a handful of stakeholders — is useful but inconsistent. It depends on who the coach reaches, what they choose to share, and how the coach synthesizes it. The output is not repeatable and is not easily shared with HR or the leader&apos;s organization.
            </p>
            <p className="text-[1rem] leading-[1.75]" style={{ color: "var(--slate)" }}>
              Interval 360 is built to solve both problems. It gives coaches a structured, consistent 360 process they can use for any client — at a price point that works for individual engagements — with professional-quality outputs that are ready to use immediately.
            </p>
            <div
              className="pl-6 py-4 pr-4 rounded-r mt-2"
              style={{ background: "var(--light-bg)", borderLeft: "3px solid var(--teal)" }}
            >
              <p className="italic text-[0.95rem] leading-[1.7]" style={{ color: "var(--navy-dark)" }}>
                &ldquo;The best coaching conversations are anchored in real data. Interval 360 gives coaches a reliable way to get that data without building or managing a process around it.&rdquo;
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* WHAT YOU GET */}
      <section className="py-24 page-gutter" style={{ background: "var(--light-bg)" }}>
        <div className="grid lg:grid-cols-2 gap-16 mb-14 items-end">
          <div>
            <p className="text-[0.72rem] font-semibold tracking-[0.2em] uppercase mb-4" style={{ color: "var(--teal)" }}>What You Get</p>
            <h2 className="text-[clamp(1.7rem,3vw,2.3rem)] font-bold leading-[1.2] tracking-[-0.02em]" style={{ fontFamily: "var(--font-poppins)", color: "var(--navy-dark)" }}>
              Everything you need to run a 360 for any client.
            </h2>
          </div>
          <p className="text-[1.05rem] leading-[1.75]" style={{ color: "var(--slate)" }}>
            Interval 360 handles the instrument, the collection, the synthesis, and the report. You focus on the coaching conversation.
          </p>
        </div>
        <div className="grid lg:grid-cols-2 gap-6">
          {whatYouGet.map((item, i) => (
            <div key={i} className="p-8 rounded-lg" style={{ background: "#fff", border: "1px solid var(--rule)" }}>
              <p className="text-[0.72rem] font-bold tracking-[0.12em] uppercase mb-3" style={{ color: "var(--teal)" }}>
                {item.num}
              </p>
              <h3 className="text-[1.05rem] font-semibold mb-3" style={{ fontFamily: "var(--font-poppins)", color: "var(--navy-dark)" }}>
                {item.title}
              </h3>
              <p className="text-[0.92rem] leading-[1.7]" style={{ color: "var(--slate)" }}>
                {item.body}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* COMPARE */}
      <section className="py-24 page-gutter" style={{ background: "#fff" }}>
        <div className="mb-12">
          <p className="text-[0.72rem] font-semibold tracking-[0.2em] uppercase mb-4" style={{ color: "var(--teal)" }}>How It Compares</p>
          <h2 className="text-[clamp(1.7rem,3vw,2.3rem)] font-bold leading-[1.2] tracking-[-0.02em]" style={{ fontFamily: "var(--font-poppins)", color: "var(--navy-dark)" }}>
            Interval 360 vs. building it yourself.
          </h2>
        </div>
        <div className="rounded-lg overflow-hidden" style={{ border: "1px solid var(--rule)" }}>
          <div className="grid" style={{ gridTemplateColumns: "2fr 1fr 1fr", background: "var(--navy-dark)" }}>
            <div className="px-6 py-4" />
            <div className="px-6 py-4 text-center text-[0.75rem] font-bold tracking-[0.1em] uppercase" style={{ color: "rgba(234,239,243,0.55)" }}>
              DIY / Other Tools
            </div>
            <div className="px-6 py-4 text-center text-[0.75rem] font-bold tracking-[0.1em] uppercase" style={{ color: "var(--teal-light)" }}>
              Interval 360
            </div>
          </div>
          {compareItems.map((row, i) => (
            <div
              key={i}
              className="grid"
              style={{
                gridTemplateColumns: "2fr 1fr 1fr",
                background: i % 2 === 0 ? "#fff" : "var(--off-white)",
                borderTop: "1px solid var(--rule)",
              }}
            >
              <div className="px-6 py-4 text-[0.88rem] font-medium" style={{ color: "var(--charcoal)" }}>
                {row.feature}
              </div>
              <div className="px-6 py-4 text-[0.88rem] text-center" style={{ color: "var(--slate)" }}>
                {row.them}
              </div>
              <div className="px-6 py-4 text-[0.88rem] text-center font-medium" style={{ color: "var(--teal)" }}>
                {row.us}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* PRICING CTA */}
      <section className="py-24 page-gutter" id="pricing" style={{ background: "var(--navy-dark)" }}>
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <p className="text-[0.72rem] font-semibold tracking-[0.2em] uppercase mb-4" style={{ color: "var(--teal-light)" }}>Pricing for Coaches</p>
            <h2 className="text-[clamp(1.7rem,3vw,2.3rem)] font-bold leading-[1.2] tracking-[-0.02em] mb-5" style={{ fontFamily: "var(--font-poppins)", color: "#fff" }}>
              Pay per engagement. No subscription.
            </h2>
            <p className="text-[1.05rem] leading-[1.75] mb-8" style={{ color: "rgba(234,239,243,0.7)" }}>
              Coaches and consultants use the same pricing as individual buyers — $150 per assessment, or $125 per assessment in a 10-pack. No platform subscription, no minimum commitment, no per-seat fees.
            </p>
            <div className="flex gap-4 flex-wrap">
              <Link href="/pricing" className="text-[0.9rem] font-semibold px-7 py-3 rounded no-underline" style={{ background: "var(--teal)", color: "#fff" }}>
                See Full Pricing
              </Link>
              <Link href="/company#contact" className="text-[0.9rem] font-medium px-7 py-3 rounded border-[1.5px] no-underline" style={{ color: "#fff", borderColor: "rgba(255,255,255,0.4)", background: "transparent" }}>
                Talk to Partnerships
              </Link>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4">
            {[
              { val: "$150", label: "Single assessment" },
              { val: "$125", label: "Per assessment, 10-pack" },
              { val: "~5 min", label: "Per feedback provider" },
              { val: "Days", label: "From launch to report" },
            ].map((stat, i) => (
              <div key={i} className="p-6 rounded-lg text-center" style={{ background: "rgba(255,255,255,0.05)", border: "1px solid rgba(187,220,251,0.15)" }}>
                <p className="text-[2rem] font-bold mb-1" style={{ fontFamily: "var(--font-montserrat)", color: "var(--teal-light)" }}>
                  {stat.val}
                </p>
                <p className="text-[0.8rem]" style={{ color: "rgba(234,239,243,0.55)" }}>{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PARTNER CTA */}
      <section className="py-28 page-gutter text-center relative overflow-hidden" id="partner" style={{ background: "linear-gradient(135deg, var(--navy-dark) 0%, var(--navy) 100%)" }}>
        <div className="absolute inset-0 pointer-events-none grid-pattern" />
        <div className="relative z-10">
          <h2 className="text-[clamp(1.7rem,3vw,2.3rem)] font-bold leading-[1.2] mb-5 mx-auto max-w-[28ch]" style={{ fontFamily: "var(--font-poppins)", color: "#fff" }}>
            Ready to add a structured 360 to your practice?
          </h2>
          <p className="text-[1.05rem] leading-[1.75] mb-10 mx-auto max-w-[48ch]" style={{ color: "rgba(234,239,243,0.7)" }}>
            Buy a single assessment for your next client, or talk to us about partnership arrangements for ongoing use.
          </p>
          <div className="flex gap-4 justify-center flex-wrap">
            <Link href="/buy" className="text-[0.9rem] font-semibold px-8 py-3.5 rounded no-underline" style={{ background: "var(--teal)", color: "#fff" }}>
              Buy an Assessment
            </Link>
            <Link href="/company#contact" className="text-[0.9rem] font-medium px-8 py-3.5 rounded border-[1.5px] no-underline" style={{ color: "#fff", borderColor: "rgba(255,255,255,0.4)", background: "transparent" }}>
              Talk to Us
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
