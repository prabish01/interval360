import Link from "next/link";
import { whyItems } from "./data";

export function HomeWhySection() {
  return (
    <section id="why" className="min-h-screen flex flex-col bg-white">
      <div className="flex-1 flex flex-col content-wrap page-gutter w-full py-20">
        {/* Header */}
        <div className="grid lg:grid-cols-2 gap-12 items-end mb-12">
          <p className="text-base leading-[1.8] text-[#4a5877] max-w-[44ch] lg:order-1">Every design decision in Interval 360 was made to solve a specific failure mode of traditional 360 tools. Discover <Link href="/conversational-ai" className="underline hover:opacity-80" style={{ color: "#2d6cff" }}>why a conversation beats a survey</Link>.</p>
          <div className="lg:order-2 lg:justify-self-end lg:text-right">
            <p className="text-xs font-semibold tracking-[0.28em] uppercase mb-6 text-[#2d6cff]">Why Interval 360</p>
            <h2 className="text-[clamp(2.8rem,6vw,5rem)] font-extrabold uppercase leading-[0.92] text-[#0b1733]" style={{ fontFamily: "var(--font-space-grotesk)" }}>
              Built
              <br />
              Differently,
              <br />
              By Design.
            </h2>
          </div>
        </div>

        {/* Feature Grid */}
        <div className="flex-1 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 border-t border-l border-[#e4eaf5]">
          {whyItems.slice(0, 6).map((item) => (
            <div key={item.num} className="group flex flex-col justify-between p-5 sm:p-6 lg:p-8 border-r border-b border-[#e4eaf5] hover:bg-[#f5f8ff] transition-colors duration-300 cursor-default">
              <p className="text-xs font-bold tracking-[0.2em] uppercase text-[#2d6cff] opacity-60 group-hover:opacity-100 transition-opacity duration-300 mb-6">{item.num}</p>
              <div>
                <h3 className="text-base font-bold uppercase tracking-[0.02em] leading-[1.3] mb-3 text-[#0b1733]" style={{ fontFamily: "var(--font-space-grotesk)" }}>
                  {item.title}
                </h3>
                <p className="text-base leading-[1.7] text-[#4a5877]">{item.body}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
