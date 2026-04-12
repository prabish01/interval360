import Link from "next/link";

const reportCards = [
  {
    num: "01",
    type: "Assessment Report",
    audience: "For HR, managers & talent decisions",
    title: "Leadership Assessment Report",
    desc: "A structured summary for managers and HR teams: executive summary, What/How breakdown, strengths, development areas, and succession readiness signal.",
  },
  {
    num: "02",
    type: "Development Report",
    audience: "For the leader themselves",
    title: "Leadership Development Report",
    desc: "A personal development guide for the leader: deep-dive analysis on each strength and development area, curated resources, and a structured action plan.",
  },
];

export function HomeSampleReportsSection() {
  return (
    <section id="sample" className="min-h-screen flex flex-col bg-[#131313]">
      <div className="flex-1 grid lg:grid-cols-[2fr_3fr] content-wrap page-gutter w-full">

        {/* Left */}
        <div className="flex flex-col justify-center py-20 lg:pr-16" style={{ borderRight: "1px solid rgba(255,255,255,0.06)" }}>
          <p className="text-[0.68rem] font-semibold tracking-[0.28em] uppercase text-[#2d6cff] mb-8">
            Sample Reports
          </p>
          <h2 className="text-[clamp(3rem,6vw,5rem)] font-extrabold uppercase leading-[0.92] text-white mb-8" style={{ fontFamily: "var(--font-space-grotesk)" }}>
            Two Reports.<br />One Assessment.
          </h2>
          <p className="text-[0.95rem] leading-[1.8] text-white/50 max-w-[34ch] mb-10">
            Every assessment produces two reports — one for the organization, one for the leader. Both designed to be used, not filed away.
          </p>
          <Link href="/reports-and-outputs" className="text-[0.85rem] font-semibold no-underline border-b border-[#2d6cff] pb-0.5 w-fit text-[#2d6cff] transition-opacity hover:opacity-70">
            View sample reports →
          </Link>
        </div>

        {/* Right */}
        <div className="flex flex-col justify-center py-20 lg:pl-16 gap-0">
          {reportCards.map((card, i) => (
            <div key={i} className="group flex gap-8 py-8 border-b border-white/6 first:border-t first:border-white/6 px-2 -mx-2 hover:bg-white/2 transition-colors duration-300 cursor-default">
              <span className="text-[1.1rem] font-bold shrink-0 w-8 pt-0.5 text-white/20 group-hover:text-[#2d6cff] transition-colors duration-300">
                {card.num}
              </span>
              <div>
                <p className="text-[0.65rem] font-bold tracking-[0.2em] uppercase text-[#2d6cff] opacity-60 group-hover:opacity-100 transition-opacity duration-300 mb-2">
                  {card.type}
                </p>
                <h3 className="text-[1rem] font-bold uppercase tracking-[0.02em] leading-[1.3] mb-2 text-white" style={{ fontFamily: "var(--font-space-grotesk)" }}>
                  {card.title}
                </h3>
                <p className="text-[0.82rem] italic text-white/30 mb-3">{card.audience}</p>
                <p className="text-[0.88rem] leading-[1.7] text-white/50">{card.desc}</p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
