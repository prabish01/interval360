import Link from "next/link";
import { anatomySections } from "./data";
import ReportViewer from "./ReportViewer";

export default function ReportsAndOutputsSections() {
  return (
    <div className="min-h-screen flex flex-col bg-[#0e0e0e]">

      {/* Page header */}
      <div className="content-wrap page-gutter w-full pt-28 pb-12">
        <p className="text-[0.68rem] font-semibold tracking-[0.28em] uppercase text-[#2d6cff] mb-6">
          Reports &amp; Outputs
        </p>
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8">
          <h1 className="text-[clamp(2.8rem,6vw,5rem)] font-extrabold uppercase leading-[0.92] text-white" style={{ fontFamily: "var(--font-space-grotesk)" }}>
            Two Reports.<br />One Assessment.
          </h1>
          <div className="flex flex-col gap-4 max-w-[40ch] lg:text-right">
            <p className="text-[0.95rem] leading-[1.8] text-white/50">
              Every assessment produces two reports — one for the organization, one for the leader. Both designed to be used directly, not filed away.
            </p>
            <div className="flex gap-3 lg:justify-end flex-wrap">
              <Link href="/buy" className="text-[0.82rem] font-semibold px-6 py-2.5 bg-[#2d6cff] text-white hover:bg-[#1a57e8] transition-colors no-underline">
                Buy an Assessment
              </Link>
              <Link href="/company#contact" className="text-[0.82rem] font-medium px-6 py-2.5 border border-white/20 text-white hover:border-white/40 transition-colors no-underline">
                Book a Call
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Stats bar */}
      <div className="content-wrap page-gutter w-full mb-3">
        <div className="grid grid-cols-3 border border-white/6 border-l-[3px] border-l-[#2d6cff]">
          {[
            { label: "Core Alignment",    value: "94.2", tag: "+12% vs LY", benchmark: "Enterprise Benchmark: 82.0", pct: 94.2 },
            { label: "Strategic Impact",  value: "88.5", tag: "Top 1%",     benchmark: "Division Benchmark: 85.1",  pct: 88.5 },
            { label: "Cultural Kinetic",  value: "91.0", tag: "Optimal",    benchmark: "Enterprise Benchmark: 78.4", pct: 91.0 },
          ].map((stat, i) => (
            <div key={i} className={`flex flex-col gap-3 px-6 py-5 ${i < 2 ? "border-r border-white/6" : ""}`}>
              <div className="flex items-center justify-between">
                <span className="text-[0.6rem] font-semibold tracking-[0.2em] uppercase text-white/40">{stat.label}</span>
                <span className="text-[0.75rem] font-bold text-[#2d6cff]">{stat.tag}</span>
              </div>
              <span className="text-[2.6rem] font-extrabold leading-none text-white">{stat.value}</span>
              <div className="flex flex-col gap-1.5">
                <div className="w-full h-1 bg-white/10 rounded-full overflow-hidden">
                  <div className="h-full bg-[#2d6cff] rounded-full" style={{ width: `${stat.pct}%` }} />
                </div>
                <span className="text-[0.58rem] font-semibold tracking-[0.18em] uppercase text-white/30">{stat.benchmark}</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* PDF Viewer */}
      <div className="content-wrap page-gutter w-full flex-1 flex flex-col pb-20">
        <div className="flex-1 flex flex-col border border-white/6">
          <ReportViewer />
        </div>
      </div>

      {/* Report anatomy */}
      <div className="content-wrap page-gutter w-full pb-24">
        <div className="border-t border-white/6 pt-16">
          <p className="text-[0.68rem] font-semibold tracking-[0.28em] uppercase text-[#2d6cff] mb-6">
            Report Structure
          </p>
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            <h2 className="text-[clamp(2rem,4vw,3.5rem)] font-extrabold uppercase leading-[0.92] text-white" style={{ fontFamily: "var(--font-space-grotesk)" }}>
              Six Sections.<br />Nothing Extra.
            </h2>
            <div className="flex flex-col">
              {anatomySections.map((item, i) => (
                <div key={i} className="flex items-start gap-5 py-5 border-b border-white/6 first:border-t first:border-white/6">
                  <span className="text-[0.82rem] font-bold w-8 shrink-0 pt-0.5 text-[#2d6cff]">{item.num}</span>
                  <div>
                    <h4 className="text-[0.95rem] font-bold uppercase mb-1 text-white">{item.title}</h4>
                    <p className="text-[0.88rem] leading-[1.65] text-white/50">{item.body}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

    </div>
  );
}
