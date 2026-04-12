"use client";

import { useState } from "react";

const reports = [
  {
    id: "assessment",
    tab: "Assessment Report",
    label: "For HR, managers & talent decisions",
    title: "Leadership Assessment Report",
    pdf: "/George_Burdell_assessment_report_20260127125454.pdf",
  },
  {
    id: "development",
    tab: "Development Report",
    label: "For the leader themselves",
    title: "Leadership Development Report",
    pdf: "/George_P__Burdell_development_report_20251224.pdf",
  },
];

export default function ReportViewer() {
  const [active, setActive] = useState(0);
  const report = reports[active];

  return (
    <div className="flex flex-col flex-1">

      {/* Tab switcher */}
      <div className="flex gap-0 border-b border-white/6">
        {reports.map((r, i) => (
          <button
            key={r.id}
            onClick={() => setActive(i)}
            className={`px-6 py-3 text-[0.78rem] font-semibold tracking-[0.1em] uppercase transition-colors duration-200 border-b-2 -mb-px ${
              active === i
                ? "text-[#2d6cff] border-[#2d6cff]"
                : "text-white/40 border-transparent hover:text-white/70"
            }`}
          >
            {r.tab}
          </button>
        ))}
      </div>

      {/* Chrome header */}
      <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4 px-8 py-5 border-b border-white/6 bg-[#0a0c14]">
        <div>
          <p className="text-[0.6rem] font-semibold tracking-[0.25em] uppercase text-[#2d6cff] mb-1">
            Interval 360 — {report.tab}
          </p>
          <h3 className="text-[1.1rem] font-extrabold uppercase leading-[1.1] text-white" style={{ fontFamily: "var(--font-space-grotesk)" }}>
            {report.title}
          </h3>
          <p className="text-[0.72rem] text-white/30 italic mt-0.5">{report.label}</p>
        </div>
        <div className="flex gap-3 shrink-0">
          <a
            href={report.pdf}
            download
            className="text-[0.72rem] font-semibold tracking-[0.08em] uppercase px-4 py-2 border border-white/15 text-white/60 hover:text-white hover:border-white/30 transition-colors duration-200 no-underline"
          >
            Download PDF
          </a>
          <a
            href={report.pdf}
            target="_blank"
            rel="noreferrer"
            className="text-[0.72rem] font-semibold tracking-[0.08em] uppercase px-4 py-2 bg-[#2d6cff] text-white hover:bg-[#1a57e8] transition-colors duration-200 no-underline"
          >
            Open Full Screen
          </a>
        </div>
      </div>

      {/* PDF iframe */}
      <div className="flex-1 min-h-[80vh] bg-[#0a0c14]">
        <iframe
          src={`${report.pdf}#toolbar=0&navpanes=0`}
          className="w-full h-full min-h-[80vh] border-0"
          title={report.title}
        />
      </div>

    </div>
  );
}
