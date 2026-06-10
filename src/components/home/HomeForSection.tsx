import Link from "next/link";
import { forCards } from "./data";

export function HomeForSection() {
  return (
    <section id="for" className="min-h-screen flex flex-col bg-[#fafafa]">
      <div className="flex-1 flex flex-col content-wrap page-gutter w-full py-20">
        {/* Header */}
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-16">
          <div>
            <p className="text-xs font-semibold tracking-[0.28em] uppercase mb-6 text-[#2d6cff]">Who It&apos;s For</p>
            <h2 className="text-[clamp(2.8rem,6vw,5rem)] font-extrabold uppercase leading-[0.92] text-[#0b1733]" style={{ fontFamily: "var(--font-space-grotesk)" }}>
              Every Role That
              <br />
              Relies On Feedback.
            </h2>
          </div>
          <p className="text-base leading-[1.8] text-[#4a5877] max-w-[30ch] lg:text-right">Built for the people who use and<br />need leadership feedback most.</p>
        </div>

        {/* Row list */}
        <div className="flex flex-col flex-1 justify-between">
          {forCards.map((card, i) => (
            <Link key={i} href={card.href} className="group grid lg:grid-cols-[3rem_1fr_2fr_auto] items-center gap-8 py-7 border-t border-[#e4eaf5] last:border-b no-underline hover:bg-[#f5f8ff] transition-colors duration-300 px-4 -mx-4">
              <span className="text-xs font-bold tracking-[0.15em] text-[#2d6cff] opacity-50 group-hover:opacity-100 transition-opacity duration-300">0{i + 1}</span>
              <h3 className="text-base font-bold uppercase tracking-[0.03em] leading-[1.3] text-[#0b1733]" style={{ fontFamily: "var(--font-space-grotesk)" }}>
                {card.label}
              </h3>
              <p className="text-base leading-[1.7] text-[#4a5877] hidden lg:block">{card.body}</p>
              <span className="text-[#2d6cff] text-base opacity-0 group-hover:opacity-100 transition-all duration-300 group-hover:translate-x-1 transform hidden lg:block">→</span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
