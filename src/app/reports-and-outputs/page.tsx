import Link from "next/link";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import PageHero from "@/components/PageHero";

const anatomySections = [
  { num: "01", title: "Executive Summary", body: "A plain-language overview of the most important themes across all feedback — written to be read first and shared widely." },
  { num: "02", title: "What — Performance Signal", body: "How the leader performs against expectations: delivery, ownership, decision-making, and execution against goals." },
  { num: "03", title: "How — Leadership Experience", body: "How the leader is experienced by others: communication, trust, team development, accountability, and influence." },
  { num: "04", title: "Strengths", body: "The leadership qualities that are consistently showing up well — with the specific themes and patterns that support them." },
  { num: "05", title: "Development Areas", body: "Where the most meaningful opportunities for growth are, based on patterns across all feedback providers." },
  { num: "06", title: "Actionable Next Steps", body: "Concrete, prioritized actions the leader can take based on the feedback — not generic advice, but specific to what this leader needs." },
];

const reports = [
  {
    label: "Assessment Report",
    color: "var(--navy)",
    audience: "For managers, HR, and talent decisions",
    title: "Built to inform decisions, not just development.",
    body: "The Assessment Report is the version HR teams, managers, and business leaders use. It includes an executive summary, What/How analysis, strengths, development areas, and succession readiness signal — all in a format that can be shared across a talent review or succession conversation.",
    items: ["Can be shared with the leader's manager or HR team", "Includes a succession readiness signal", "Formatted for talent review and calibration use", "Delivered as a shareable PDF"],
  },
  {
    label: "Development Report",
    color: "var(--teal)",
    audience: "For the leader themselves",
    title: "Built to drive real development, not just awareness.",
    body: "The Development Report is the version the leader receives. It includes everything in the Assessment Report plus structured deep dives on each theme — with specific examples from the feedback, curated development resources, and a detailed action plan the leader can work from directly.",
    items: ["Deep-dive analysis on each strength and development area", "Specific examples from feedback (anonymized)", "Curated resources and reading recommendations", "Structured action plan with prioritized next steps"],
  },
];

export default function ReportsAndOutputsPage() {
  return (
    <>
      <Nav />
      <PageHero
        eyebrow="Reports and Outputs"
        title={<>Concise, actionable outputs — <span style={{ color: "var(--sky-blue)" }}>built for decisions, not binders.</span></>}
        body="Interval 360 synthesizes feedback into a structured report you can read in minutes and use directly — in a coaching conversation, a development plan, or a talent decision."
        buttons={[
          { href: "/buy", label: "Buy an Assessment", variant: "teal" },
          { href: "/company#contact", label: "Book a Call", variant: "secondary" },
          { href: "#report", label: "See the report structure →", variant: "ghost" },
        ]}
      />

      {/* ANATOMY */}
      <section className="py-24 page-gutter" id="report" style={{ background: "#fff" }}>
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          <div>
            <p className="text-[0.72rem] font-semibold tracking-[0.2em] uppercase mb-4" style={{ color: "var(--teal)" }}>Report Structure</p>
            <h2 className="text-[clamp(1.7rem,3vw,2.3rem)] font-bold leading-[1.2] tracking-[-0.02em] mb-5" style={{ fontFamily: "var(--font-poppins)", color: "var(--navy-dark)" }}>
              Six sections. Everything you need — nothing you don&apos;t.
            </h2>
            <p className="text-[1.05rem] leading-[1.75] mb-8" style={{ color: "var(--slate)" }}>
              Every Interval 360 report follows the same structure, designed to move from context to action in a single read.
            </p>
            <div className="flex flex-col">
              {anatomySections.map((item, i) => (
                <div
                  key={i}
                  className="flex items-start gap-5 py-4"
                  style={{ borderTop: i === 0 ? "1px solid var(--rule)" : "none", borderBottom: "1px solid var(--rule)" }}
                >
                  <span className="text-[0.82rem] font-bold w-8 shrink-0 pt-0.5" style={{ fontFamily: "var(--font-montserrat)", color: "var(--teal)" }}>
                    {item.num}
                  </span>
                  <div>
                    <h4 className="text-[0.95rem] font-semibold mb-1" style={{ color: "var(--navy-dark)" }}>{item.title}</h4>
                    <p className="text-[0.88rem] leading-[1.65]" style={{ color: "var(--slate)" }}>{item.body}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Report mock */}
          <div className="rounded-lg overflow-hidden shadow-xl sticky top-24" style={{ border: "1px solid var(--rule)" }}>
            <div className="flex items-center gap-2 px-4 py-3" style={{ background: "var(--navy-dark)" }}>
              <div className="w-2.5 h-2.5 rounded-full" style={{ background: "#ff5f57" }} />
              <div className="w-2.5 h-2.5 rounded-full" style={{ background: "#febc2e" }} />
              <div className="w-2.5 h-2.5 rounded-full" style={{ background: "#28c840" }} />
            </div>
            <div className="p-0">
              <div className="flex items-center justify-between px-5 py-3" style={{ background: "var(--off-white)", borderBottom: "1px solid var(--rule)" }}>
                <span className="text-[0.8rem] font-bold" style={{ fontFamily: "var(--font-montserrat)", color: "var(--navy-dark)" }}>Interval 360</span>
                <span className="text-[0.7rem] px-2 py-0.5 rounded" style={{ background: "rgba(5,79,154,0.08)", color: "var(--navy)" }}>Leadership Summary · Confidential</span>
              </div>
              <div className="p-5 flex flex-col gap-4">
                <div className="flex items-start justify-between">
                  <div>
                    <h3 className="text-[0.95rem] font-bold" style={{ color: "var(--navy-dark)" }}>Jordan K. — VP, Engineering</h3>
                    <p className="text-[0.75rem]" style={{ color: "var(--slate)" }}>8 feedback providers · Q2 2025 · Confidential</p>
                  </div>
                  <div className="flex gap-2">
                    <span className="text-[0.65rem] font-bold px-2 py-0.5 rounded" style={{ background: "rgba(5,79,154,0.08)", color: "var(--navy)" }}>What + How</span>
                    <span className="text-[0.65rem] font-bold px-2 py-0.5 rounded" style={{ background: "rgba(5,79,154,0.08)", color: "var(--navy)" }}>Full Report</span>
                  </div>
                </div>
                <div className="h-px" style={{ background: "var(--rule)" }} />
                <div>
                  <p className="text-[0.65rem] font-bold tracking-[0.12em] uppercase mb-2" style={{ color: "var(--slate)" }}>01 — Executive Summary</p>
                  <div className="rounded p-3" style={{ background: "var(--light-bg)" }}>
                    <p className="text-[0.82rem] leading-[1.6]" style={{ color: "var(--charcoal)" }}>
                      Strong operational credibility and consistent follow-through. Growth edge: creating space for others to lead — raters observe a tendency to stay too close to execution rather than delegating with confidence.
                    </p>
                  </div>
                </div>
                <div className="grid grid-cols-3 gap-3">
                  {[{ val: "4.2", label: "What Score" }, { val: "3.6", label: "How Score" }, { val: "8", label: "Raters" }].map((s) => (
                    <div key={s.label} className="rounded p-3 text-center" style={{ background: "var(--light-bg)" }}>
                      <p className="text-[1.3rem] font-bold" style={{ fontFamily: "var(--font-montserrat)", color: "var(--navy-dark)" }}>{s.val}</p>
                      <p className="text-[0.7rem]" style={{ color: "var(--slate)" }}>{s.label}</p>
                    </div>
                  ))}
                </div>
                <div>
                  <p className="text-[0.65rem] font-bold tracking-[0.12em] uppercase mb-2" style={{ color: "var(--slate)" }}>Top Themes</p>
                  <div className="flex flex-col gap-2">
                    {[
                      "Operational reliability — mentioned by 7 of 8 raters",
                      "Strong under pressure — consistent across manager and peer feedback",
                      "Delegation gap — noted in 5 of 8 conversations as a growth area",
                    ].map((theme, i) => (
                      <div key={i} className="flex items-center gap-2.5 text-[0.8rem]" style={{ color: "var(--charcoal)" }}>
                        <span className="w-2 h-2 rounded-full shrink-0" style={{ background: "var(--teal)" }} />
                        {theme}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* TWO REPORTS */}
      <section className="py-24 page-gutter" style={{ background: "var(--light-bg)" }}>
        <div className="mb-12">
          <p className="text-[0.72rem] font-semibold tracking-[0.2em] uppercase mb-4" style={{ color: "var(--teal)" }}>Two Reports, Two Purposes</p>
          <h2 className="text-[clamp(1.7rem,3vw,2.3rem)] font-bold leading-[1.2] tracking-[-0.02em]" style={{ fontFamily: "var(--font-poppins)", color: "var(--navy-dark)" }}>
            One assessment. Two distinct outputs.
          </h2>
        </div>
        <div className="grid lg:grid-cols-2 gap-6">
          {reports.map((report) => (
            <div
              key={report.label}
              className="rounded-lg overflow-hidden"
              style={{ background: "#fff", border: "1px solid var(--rule)" }}
            >
              <div className="h-1" style={{ background: report.color }} />
              <div className="p-9">
                <div className="flex items-center gap-3 mb-5">
                  <span
                    className="text-[0.68rem] font-bold tracking-[0.1em] uppercase px-2.5 py-1 rounded-full"
                    style={{ background: report.color === "var(--navy)" ? "rgba(5,79,154,0.08)" : "rgba(44,166,164,0.1)", color: report.color }}
                  >
                    {report.label}
                  </span>
                  <span className="text-[0.78rem] italic" style={{ color: "var(--slate)" }}>{report.audience}</span>
                </div>
                <h3 className="text-[1.15rem] font-bold leading-[1.3] mb-4" style={{ fontFamily: "var(--font-poppins)", color: "var(--navy-dark)" }}>
                  {report.title}
                </h3>
                <p className="text-[0.92rem] leading-[1.7] mb-6" style={{ color: "var(--slate)" }}>
                  {report.body}
                </p>
                <ul className="flex flex-col gap-2.5">
                  {report.items.map((item) => (
                    <li key={item} className="flex items-start gap-3 text-[0.88rem]" style={{ color: "var(--charcoal)" }}>
                      <div className="rounded-full flex items-center justify-center shrink-0 mt-0.5" style={{ background: report.color, width: 18, height: 18, minWidth: 18 }}>
                        <svg width="10" height="10" viewBox="0 0 10 10" fill="none">
                          <path d="M2 5l2.5 2.5L8 3" stroke="#fff" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                      </div>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="py-28 page-gutter text-center relative overflow-hidden" style={{ background: "linear-gradient(135deg, var(--navy-dark) 0%, var(--navy) 100%)" }}>
        <div className="absolute inset-0 pointer-events-none grid-pattern" />
        <div className="relative z-10">
          <h2 className="text-[clamp(1.7rem,3vw,2.3rem)] font-bold leading-[1.2] mb-5 mx-auto max-w-[28ch]" style={{ fontFamily: "var(--font-poppins)", color: "#fff" }}>
            Ready to see an actual report?
          </h2>
          <p className="text-[1.05rem] leading-[1.75] mb-10 mx-auto max-w-[48ch]" style={{ color: "rgba(234,239,243,0.7)" }}>
            Buy a single assessment and experience the full process — or book a call to discuss enterprise use.
          </p>
          <div className="flex gap-4 justify-center flex-wrap">
            <Link href="/buy" className="text-[0.9rem] font-semibold px-8 py-3.5 rounded no-underline" style={{ background: "var(--teal)", color: "#fff" }}>
              Buy an Assessment
            </Link>
            <Link href="/company#contact" className="text-[0.9rem] font-medium px-8 py-3.5 rounded border-[1.5px] no-underline" style={{ color: "#fff", borderColor: "rgba(255,255,255,0.4)", background: "transparent" }}>
              Book a Call
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
