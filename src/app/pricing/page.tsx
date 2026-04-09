import Link from "next/link";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import PageHero from "@/components/PageHero";

const selfServeFeatures = [
  "Full conversational 360 assessment",
  "Up to 10 feedback providers",
  "What + How leadership report",
  "Executive summary + actionable next steps",
  "Results delivered within days",
  "Shareable PDF report",
];

const teamPackFeatures = [
  "Everything in Single Assessment",
  "10 full assessments — use across any leaders",
  "Cohort-level admin dashboard",
  "Bulk rater management",
  "Priority support",
  "Team-level theme reporting",
];

const enterpriseItems = [
  "Volume pricing across the leadership population",
  "Centralized admin dashboard and cohort management",
  "SSO / SAML integration",
  "Custom focus areas by role or program",
  "Coach access configuration",
  "Security documentation and data agreements",
  "Dedicated onboarding and program support",
];

const faqItems = [
  { q: "Can I buy more than one assessment at a time?", a: "Yes. The Team Pack includes 10 assessments at $125 each ($1,250 total). For larger volumes, contact us about enterprise pricing." },
  { q: "Do I need an account to get started?", a: "No account is required to purchase a single assessment or team pack. You can complete checkout and begin setup immediately with a credit card." },
  { q: "How quickly will I receive the report?", a: "Reports are generated automatically once feedback collection is complete. Most organizations receive results within 2–5 days of launch, depending on rater response time." },
  { q: "What if I need more than 10 assessments?", a: "Contact us to discuss enterprise pricing. We work with organizations running assessments across cohorts of any size, with volume discounts and centralized management tools." },
  { q: "Is the platform secure?", a: "Yes. All data is encrypted in transit and at rest. Rater anonymity is protected through platform design, not just policy. Enterprise customers can request full security documentation." },
];

export default function PricingPage() {
  return (
    <>
      <Nav />
      <PageHero
        eyebrow="Pricing"
        title="Simple pricing. Two lanes. No surprises."
        body="Buy a single assessment or a team pack with a credit card, or talk to us about an enterprise rollout. Both paths use the same platform and produce the same quality of output."
      />

      {/* SELF-SERVE CARDS */}
      <section style={{ background: "var(--light-bg)" }}>
        <div className="content-wrap page-gutter py-24">
        <div className="text-center mb-14">
          <p className="text-[0.72rem] font-semibold tracking-[0.2em] uppercase mb-4" style={{ color: "var(--teal)" }}>Self-Serve</p>
          <h2 className="text-[clamp(1.7rem,3vw,2.3rem)] font-bold leading-[1.2] tracking-[-0.02em] mb-4" style={{ fontFamily: "var(--font-poppins)", color: "var(--navy-dark)" }}>
            Buy now — no sales conversation required.
          </h2>
          <p className="text-[1.05rem] leading-[1.75] max-w-[52ch] mx-auto" style={{ color: "var(--slate)" }}>
            Start immediately with a credit card. Set up your assessment, invite raters, and receive your report within days.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {/* Single */}
          <div
            className="rounded-lg p-10 flex flex-col"
            style={{ background: "#fff", border: "1px solid var(--rule)" }}
          >
            <p className="text-[0.72rem] font-semibold tracking-[0.18em] uppercase mb-3" style={{ color: "var(--slate)" }}>Single Assessment</p>
            <h3 className="text-[1.4rem] font-bold mb-3" style={{ fontFamily: "var(--font-poppins)", color: "var(--navy-dark)" }}>One leader</h3>
            <p className="text-[0.92rem] leading-[1.7] mb-6" style={{ color: "var(--slate)" }}>
              A complete 360 assessment for one leader. Ideal for individual development, a promotion discussion, or a coaching engagement.
            </p>
            <div className="mb-6">
              <span className="text-[2.5rem] font-bold" style={{ fontFamily: "var(--font-poppins)", color: "var(--navy-dark)" }}>$150</span>
              <span className="text-[0.88rem] ml-2" style={{ color: "var(--slate)" }}>per assessment</span>
            </div>
            <Link
              href="/buy"
              className="block text-center text-[0.9rem] font-semibold py-3.5 rounded no-underline transition-colors mb-8"
              style={{ background: "var(--navy)", color: "#fff" }}
            >
              Buy Now
            </Link>
            <hr style={{ borderColor: "var(--rule)", marginBottom: "1.5rem" }} />
            <ul className="flex flex-col gap-3 flex-1">
              {selfServeFeatures.map((f) => (
                <li key={f} className="flex items-start gap-3 text-[0.88rem] leading-[1.5]" style={{ color: "var(--charcoal)" }}>
                  <div className="w-4.5 h-4.5 rounded-full flex items-center justify-center shrink-0 mt-0.5" style={{ background: "var(--teal)", width: 18, height: 18 }}>
                    <svg width="10" height="10" viewBox="0 0 10 10" fill="none">
                      <path d="M2 5l2.5 2.5L8 3" stroke="#fff" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>
                  {f}
                </li>
              ))}
            </ul>
            <p className="text-[0.78rem] mt-6" style={{ color: "var(--slate)" }}>Credit card checkout. No account required to get started.</p>
          </div>

          {/* Team Pack — featured */}
          <div
            className="rounded-lg p-10 flex flex-col relative"
            style={{ background: "var(--navy-dark)", border: "2px solid var(--teal)" }}
          >
            <div
              className="absolute -top-3.5 left-8 text-[0.7rem] font-bold tracking-[0.1em] uppercase px-3 py-1 rounded"
              style={{ background: "var(--teal)", color: "#fff" }}
            >
              Most Popular
            </div>
            <p className="text-[0.72rem] font-semibold tracking-[0.18em] uppercase mb-3" style={{ color: "var(--teal-light)" }}>Team Pack</p>
            <h3 className="text-[1.4rem] font-bold mb-3" style={{ fontFamily: "var(--font-poppins)", color: "#fff" }}>10 assessments</h3>
            <p className="text-[0.92rem] leading-[1.7] mb-6" style={{ color: "rgba(234,239,243,0.7)" }}>
              Assess a full team or cohort. Ideal for leadership programs, new manager cohorts, or preparing a group for succession conversations.
            </p>
            <div className="mb-1">
              <span className="text-[2.5rem] font-bold" style={{ fontFamily: "var(--font-poppins)", color: "#fff" }}>$125</span>
              <span className="text-[0.88rem] ml-2" style={{ color: "rgba(234,239,243,0.6)" }}>per assessment</span>
            </div>
            <p className="text-[0.82rem] mb-1" style={{ color: "rgba(234,239,243,0.6)" }}>$1,250 total · Save $250 vs. individual</p>
            <span className="inline-block text-[0.7rem] font-bold tracking-[0.1em] uppercase px-2.5 py-0.5 rounded mb-6 w-fit" style={{ background: "rgba(44,166,164,0.25)", color: "var(--teal-light)" }}>
              17% savings
            </span>
            <Link
              href="/buy"
              className="block text-center text-[0.9rem] font-semibold py-3.5 rounded no-underline transition-colors mb-8"
              style={{ background: "var(--teal)", color: "#fff" }}
            >
              Buy Now
            </Link>
            <hr style={{ borderColor: "rgba(187,220,251,0.15)", marginBottom: "1.5rem" }} />
            <ul className="flex flex-col gap-3 flex-1">
              {teamPackFeatures.map((f) => (
                <li key={f} className="flex items-start gap-3 text-[0.88rem] leading-[1.5]" style={{ color: "rgba(234,239,243,0.85)" }}>
                  <div className="rounded-full flex items-center justify-center shrink-0 mt-0.5" style={{ background: "var(--teal)", width: 18, height: 18, minWidth: 18 }}>
                    <svg width="10" height="10" viewBox="0 0 10 10" fill="none">
                      <path d="M2 5l2.5 2.5L8 3" stroke="#fff" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>
                  {f}
                </li>
              ))}
            </ul>
          </div>
        </div>
        </div>
      </section>

      {/* ENTERPRISE */}
      <section style={{ background: "#fff" }}>
        <div className="content-wrap page-gutter py-24">
        <div className="grid lg:grid-cols-2 gap-24 items-center max-w-6xl mx-auto">
          <div>
            <p className="text-[0.72rem] font-semibold tracking-[0.2em] uppercase mb-4" style={{ color: "var(--teal)" }}>Enterprise</p>
            <h2 className="text-[clamp(1.7rem,3vw,2.3rem)] font-bold leading-[1.2] tracking-[-0.02em] mb-5" style={{ fontFamily: "var(--font-poppins)", color: "var(--navy-dark)" }}>
              Running 360s across a full organization?
            </h2>
            <p className="text-[1.05rem] leading-[1.75] mb-8" style={{ color: "var(--slate)" }}>
              Enterprise accounts include volume pricing, centralized administration, SSO integration, and dedicated onboarding support — designed for organizations assessing 20+ leaders at once or running recurring assessment cadences.
            </p>
            <Link
              href="/company#contact"
              className="inline-block text-[0.9rem] font-semibold px-8 py-3.5 rounded no-underline transition-colors"
              style={{ background: "var(--navy)", color: "#fff" }}
            >
              Talk to Us
            </Link>
          </div>
          <div
            className="flex flex-col rounded overflow-hidden"
            style={{ border: "1px solid var(--rule)" }}
          >
            {enterpriseItems.map((item, i) => (
              <div
                key={i}
                className="flex items-center gap-4 px-6 py-4"
                style={{ background: i % 2 === 0 ? "#fff" : "var(--off-white)", borderBottom: i < enterpriseItems.length - 1 ? "1px solid var(--rule)" : "none" }}
              >
                <div className="w-1.5 h-1.5 rounded-full shrink-0" style={{ background: "var(--teal)" }} />
                <span className="text-[0.92rem]" style={{ color: "var(--charcoal)" }}>{item}</span>
              </div>
            ))}
          </div>
        </div>
        </div>
      </section>

      {/* FAQ */}
      <section style={{ background: "var(--light-bg)" }}>
        <div className="content-wrap page-gutter py-24">
        <div className="max-w-3xl mx-auto">
          <p className="text-[0.72rem] font-semibold tracking-[0.2em] uppercase mb-4" style={{ color: "var(--teal)" }}>Common Questions</p>
          <h2 className="text-[clamp(1.7rem,3vw,2.3rem)] font-bold leading-[1.2] tracking-[-0.02em] mb-12" style={{ fontFamily: "var(--font-poppins)", color: "var(--navy-dark)" }}>
            Frequently asked questions.
          </h2>
          <div className="flex flex-col">
            {faqItems.map((item, i) => (
              <div
                key={i}
                className="py-7"
                style={{ borderTop: "1px solid var(--rule)", borderBottom: i === faqItems.length - 1 ? "1px solid var(--rule)" : "none" }}
              >
                <h3 className="text-[1rem] font-semibold mb-3" style={{ fontFamily: "var(--font-poppins)", color: "var(--navy-dark)" }}>
                  {item.q}
                </h3>
                <p className="text-[0.92rem] leading-[1.75]" style={{ color: "var(--slate)" }}>
                  {item.a}
                </p>
              </div>
            ))}
          </div>
        </div>
        </div>
      </section>

      {/* CTA */}
      <section
        className="relative overflow-hidden"
        style={{ background: "linear-gradient(135deg, var(--navy-dark) 0%, var(--navy) 100%)" }}
      >
        <div className="absolute inset-0 pointer-events-none grid-pattern" />
        <div className="relative z-10 content-wrap page-gutter py-28 text-center">
          <h2 className="text-[clamp(1.7rem,3vw,2.3rem)] font-bold leading-[1.2] mb-4 mx-auto max-w-[28ch]" style={{ fontFamily: "var(--font-poppins)", color: "#fff" }}>
            Start with one leader, or a whole cohort.
          </h2>
          <p className="text-[1.05rem] leading-[1.75] mb-10 mx-auto max-w-[48ch]" style={{ color: "rgba(234,239,243,0.7)" }}>
            Both paths start immediately and produce the same quality of output.
          </p>
          <div className="flex gap-4 justify-center flex-wrap">
            <Link href="/buy" className="text-[0.9rem] font-semibold px-8 py-3.5 rounded no-underline" style={{ background: "var(--teal)", color: "#fff" }}>
              Buy an Assessment
            </Link>
            <Link href="/company#contact" className="text-[0.9rem] font-medium px-8 py-3.5 rounded border-[1.5px] no-underline" style={{ color: "#fff", borderColor: "rgba(255,255,255,0.4)", background: "transparent" }}>
              Talk to Enterprise Sales
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
