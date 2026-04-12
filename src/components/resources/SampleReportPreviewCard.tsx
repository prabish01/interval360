import { ChevronRight } from "lucide-react";
import { homeTheme } from "@/lib/homeTheme";
import { sampleReportPreview } from "./data";

type Preview = typeof sampleReportPreview;

export function SampleReportPreviewCard({ preview }: { preview: Preview }) {
  return (
    <div
      className="relative overflow-hidden rounded-xl border border-white/12 bg-[#0c0e14] p-6 shadow-[0_28px_90px_rgba(0,0,0,0.55)] md:p-8"
      style={{
        backgroundImage: `radial-gradient(ellipse 90% 80% at 100% 0%, rgba(45,108,255,0.12), transparent 55%)`,
      }}
    >
      {/* Header */}
      <div className="mb-6 flex flex-col gap-2 border-b border-white/10 pb-5 sm:flex-row sm:items-start sm:justify-between sm:gap-4">
        <p className="text-[0.78rem] font-bold leading-snug text-white sm:max-w-[min(100%,20rem)] md:text-[0.85rem]" style={{ fontFamily: "var(--font-space-grotesk)" }}>
          {preview.headerTitle}
        </p>
        <p className="shrink-0 text-[0.62rem] font-semibold uppercase tracking-[0.14em] text-white/45">{preview.headerMeta}</p>
      </div>

      {/* Executive summary */}
      <div className="mb-4">
        <p className="mb-2 text-[0.62rem] font-bold uppercase tracking-[0.2em]" style={{ color: homeTheme.blue }}>
          {preview.executiveSummaryLabel}
        </p>
        <div className="mb-4 flex h-1 overflow-hidden rounded-full bg-white/10">
          <div className="h-full w-[72%] rounded-full" style={{ background: homeTheme.blue }} />
        </div>
        <p className="text-[0.78rem] leading-[1.65] text-white/70 md:text-[0.82rem]">{preview.executiveSummaryBody}</p>
      </div>

      {/* Scores */}
      <div className="mb-8 grid grid-cols-3 gap-3 border-t border-white/10 pt-6">
        <div>
          <p className="text-[1.85rem] font-extrabold leading-none tabular-nums text-white md:text-[2rem]" style={{ fontFamily: "var(--font-space-grotesk)" }}>
            {preview.whatScore}
          </p>
          <p className="mt-2 text-[0.58rem] font-semibold uppercase tracking-[0.16em] text-white/45">What score</p>
        </div>
        <div>
          <p
            className="text-[1.85rem] font-extrabold leading-none tabular-nums md:text-[2rem]"
            style={{ fontFamily: "var(--font-space-grotesk)", color: homeTheme.blueBright }}
          >
            {preview.howScore}
          </p>
          <p className="mt-2 text-[0.58rem] font-semibold uppercase tracking-[0.16em] text-white/45">How score</p>
        </div>
        <div>
          <p className="text-[1.85rem] font-extrabold leading-none tabular-nums text-white md:text-[2rem]" style={{ fontFamily: "var(--font-space-grotesk)" }}>
            {preview.raters}
          </p>
          <p className="mt-2 text-[0.58rem] font-semibold uppercase tracking-[0.16em] text-white/45">Raters</p>
        </div>
      </div>

      {/* Top themes */}
      <div>
        <p className="mb-3 text-[0.58rem] font-semibold uppercase tracking-[0.16em] text-white/45">{preview.topThemesLabel}</p>
        <ul className="space-y-2.5">
          {preview.themes.map((t) => (
            <li
              key={t.line}
              className="flex gap-2.5 rounded-md border border-white/12 bg-black/35 px-3 py-2.5 md:px-3.5 md:py-3"
            >
              <ChevronRight className="mt-0.5 size-3.5 shrink-0" style={{ color: homeTheme.blue }} aria-hidden />
              <div className="min-w-0">
                <p className="text-[0.78rem] font-semibold leading-snug text-white md:text-[0.82rem]">{t.line}</p>
                <p className="mt-0.5 text-[0.68rem] leading-[1.45] text-white/50">{t.detail}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
