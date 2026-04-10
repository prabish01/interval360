import { whyItems } from "./data";

export function HomeWhySection() {
  return (
    <section id="why" className="min-h-screen flex flex-col bg-white">
      <div className="flex-1 flex flex-col content-wrap page-gutter w-full py-20">

        {/* Header */}
        <div className="grid lg:grid-cols-2 gap-12 items-end mb-12">
          <p className="text-[1rem] leading-[1.8] text-[#4a5877] max-w-[44ch] lg:order-1">
            Every design decision in Interval 360 was made to solve a specific failure mode of traditional 360 tools.
          </p>
          <div className="lg:order-2 lg:justify-self-end lg:text-right">
            <p className="text-[0.68rem] font-semibold tracking-[0.28em] uppercase mb-6 text-[#2d6cff]">
              Why Interval 360
            </p>
            <h2 className="text-[clamp(2.8rem,6vw,5rem)] font-extrabold uppercase leading-[0.92] text-[#0b1733]" style={{ fontFamily: "var(--font-space-grotesk)" }}>
              Built<br />Differently,<br />By Design.
            </h2>
          </div>
        </div>

        {/* Feature Grid */}
        <div className="flex-1 grid grid-cols-3 grid-rows-2 border-t border-l border-[#e4eaf5]">

          {/* 01 — wide */}
          <div className="group col-span-2 flex flex-col justify-between p-8 border-r border-b border-[#e4eaf5] hover:bg-[#f5f8ff] transition-colors duration-300 cursor-default">
            <p className="text-[0.65rem] font-bold tracking-[0.2em] uppercase text-[#2d6cff] opacity-60 group-hover:opacity-100 transition-opacity duration-300 mb-6">
              {whyItems[0].num}
            </p>
            <div>
              <h3 className="text-[1.05rem] font-bold uppercase tracking-[0.02em] leading-[1.3] mb-3 text-[#0b1733]" style={{ fontFamily: "var(--font-space-grotesk)" }}>
                {whyItems[0].title}
              </h3>
              <p className="text-[0.88rem] leading-[1.7] text-[#4a5877]">{whyItems[0].body}</p>
            </div>
          </div>

          {/* 02 */}
          <div className="group flex flex-col justify-between p-8 border-r border-b border-[#e4eaf5] hover:bg-[#f5f8ff] transition-colors duration-300 cursor-default">
            <p className="text-[0.65rem] font-bold tracking-[0.2em] uppercase text-[#2d6cff] opacity-60 group-hover:opacity-100 transition-opacity duration-300 mb-6">
              {whyItems[1].num}
            </p>
            <div>
              <h3 className="text-[1.05rem] font-bold uppercase tracking-[0.02em] leading-[1.3] mb-3 text-[#0b1733]" style={{ fontFamily: "var(--font-space-grotesk)" }}>
                {whyItems[1].title}
              </h3>
              <p className="text-[0.88rem] leading-[1.7] text-[#4a5877]">{whyItems[1].body}</p>
            </div>
          </div>

          {/* 03 */}
          <div className="group flex flex-col justify-between p-8 border-r border-b border-[#e4eaf5] hover:bg-[#f5f8ff] transition-colors duration-300 cursor-default">
            <p className="text-[0.65rem] font-bold tracking-[0.2em] uppercase text-[#2d6cff] opacity-60 group-hover:opacity-100 transition-opacity duration-300 mb-6">
              {whyItems[2].num}
            </p>
            <div>
              <h3 className="text-[1.05rem] font-bold uppercase tracking-[0.02em] leading-[1.3] mb-3 text-[#0b1733]" style={{ fontFamily: "var(--font-space-grotesk)" }}>
                {whyItems[2].title}
              </h3>
              <p className="text-[0.88rem] leading-[1.7] text-[#4a5877]">{whyItems[2].body}</p>
            </div>
          </div>

          {/* 04 */}
          <div className="group flex flex-col justify-between p-8 border-r border-b border-[#e4eaf5] hover:bg-[#f5f8ff] transition-colors duration-300 cursor-default">
            <p className="text-[0.65rem] font-bold tracking-[0.2em] uppercase text-[#2d6cff] opacity-60 group-hover:opacity-100 transition-opacity duration-300 mb-6">
              {whyItems[3].num}
            </p>
            <div>
              <h3 className="text-[1.05rem] font-bold uppercase tracking-[0.02em] leading-[1.3] mb-3 text-[#0b1733]" style={{ fontFamily: "var(--font-space-grotesk)" }}>
                {whyItems[3].title}
              </h3>
              <p className="text-[0.88rem] leading-[1.7] text-[#4a5877]">{whyItems[3].body}</p>
            </div>
          </div>

          {/* 05 — highlighted */}
          <div className="group flex flex-col justify-between p-8 border-r border-b border-[#e4eaf5] hover:bg-[#f5f8ff] transition-colors duration-300 cursor-default">
            <p className="text-[0.65rem] font-bold tracking-[0.2em] uppercase text-[#2d6cff] opacity-70 group-hover:opacity-100 transition-opacity duration-300 mb-6">
              {whyItems[4].num}
            </p>
            <div>
              <h3 className="text-[1.05rem] font-bold uppercase tracking-[0.02em] leading-[1.3] mb-3 text-[#0b1733]" style={{ fontFamily: "var(--font-space-grotesk)" }}>
                {whyItems[4].title}
              </h3>
              <p className="text-[0.88rem] leading-[1.7] text-[#4a5877]">{whyItems[4].body}</p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
