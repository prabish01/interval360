import Link from "next/link";

const reportCards = [
  {
    type: "Assessment Report",
    audience: "For HR, managers & talent decisions",
    title: "Leadership\nAssessment\nReport",
    desc: "A structured summary for managers and HR teams: executive summary, What/How breakdown, strengths, development areas, and succession readiness signal.",
    num: "01",
  },
  {
    type: "Development Report",
    audience: "For the leader themselves",
    title: "Leadership\nDevelopment\nReport",
    desc: "A personal development guide for the leader: deep-dive analysis on each strength and development area, curated resources, and a structured action plan.",
    num: "02",
  },
];

export function HomeSampleReportsSection() {
  return (
    <section id="sample" className="min-h-screen flex flex-col bg-[#131313]">

      {/* Top bar */}
      <div className="content-wrap page-gutter w-full pt-20 pb-10">
        <p className="text-[0.68rem] font-semibold tracking-[0.28em] uppercase text-[#2d6cff] mb-6">
          Sample Reports
        </p>
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6">
          <h2 className="text-[clamp(2.8rem,6vw,5rem)] font-extrabold uppercase leading-[0.92] text-white" style={{ fontFamily: "var(--font-space-grotesk)" }}>
            Two Reports.<br />One Assessment.
          </h2>
          <p className="text-[0.95rem] leading-[1.8] text-white/50 max-w-[38ch] lg:text-right">
            Every assessment produces two reports — one for the organization, one for the leader. Both designed to be used directly, not filed away.
          </p>
        </div>
      </div>

      {/* Split panels — fill remaining height */}
      <div className="flex-1 grid lg:grid-cols-2 content-wrap page-gutter w-full pb-20 gap-3">
        {reportCards.map((card) => (
          <div
            key={card.num}
            className="group flex flex-col justify-between p-10 border border-white/6 hover:border-[#2d6cff]/40 hover:bg-[#131929] transition-all duration-300"
          >
            <div>
              <div className="flex items-center justify-between mb-10">
                <span className="text-[0.65rem] font-bold tracking-[0.2em] uppercase text-[#2d6cff] opacity-60 group-hover:opacity-100 transition-opacity duration-300">
                  {card.type}
                </span>
                <span className="text-[2.5rem] font-extrabold text-white/6 leading-none">
                  {card.num}
                </span>
              </div>
              <h3 className="text-[clamp(1.6rem,3vw,2.5rem)] font-extrabold uppercase leading-[0.95] text-white mb-6 whitespace-pre-line" style={{ fontFamily: "var(--font-space-grotesk)" }}>
                {card.title}
              </h3>
              <p className="text-[0.85rem] italic text-white/30 mb-6">{card.audience}</p>
              <p className="text-[0.88rem] leading-[1.7] text-white/50">{card.desc}</p>
            </div>
            <Link href="/reports-and-outputs" className="mt-10 text-[0.82rem] font-semibold no-underline border-b border-[#2d6cff] pb-0.5 w-fit text-[#2d6cff] transition-opacity hover:opacity-70">
              See report structure →
            </Link>
          </div>
        ))}
      </div>

    </section>
  );
}
