export function HomeProblemShowcaseSection() {
  return (
    <section className="min-h-screen flex flex-col" style={{ background: "#f7f9fc" }}>
      <div className="flex-1 flex flex-col content-wrap page-gutter w-full">
        <div className="flex-1 grid lg:grid-cols-2">
          {/* Left — The Problem */}
          <div className="flex flex-col justify-center px-12 py-20 lg:pr-20" style={{ borderRight: "1px solid #d9e2f3" }}>

            <h2 className="text-[clamp(3rem,7vw,5.5rem)] leading-[0.92] font-extrabold uppercase text-[#0b1733] mb-10" style={{ fontFamily: "var(--font-space-grotesk)" }}>
              The
              <br />
              Problem.
            </h2>
            <p className="text-lg leading-[1.65] text-[#3b4a6a] mb-8 max-w-[36ch]">
              Traditional 360 tools are <span className="text-[#0b1733] font-bold">too burdensome</span>, too limited, and not useful enough.
            </p>
            <div className="h-px max-w-32 bg-[#d9e2f3] mb-8" />
            <p className="text-base leading-[1.8] text-[#4a5877] max-w-[44ch]">
              Long, repetitive surveys create friction for participants and make broad deployment harder than it should be. Traditional tools are often expensive to run widely and produce outputs that are difficult to interpret and disconnected from real decisions.
            </p>
          </div>

          {/* Right — The Answer */}
          <div className="flex flex-col justify-center px-12 py-20 bg-slate-100 lg:pl-20">

            <h3 className="text-[clamp(2rem,3.5vw,3rem)] leading-[1.05] uppercase font-extrabold text-[#0b1733] mb-6" style={{ fontFamily: "var(--font-space-grotesk)" }}>
              Interval 360
              <br />
              <span className="text-[#2d6cff] italic">Changes That.</span>
            </h3>
            <p className="text-base leading-[1.8] text-[#4a5877] mb-10 max-w-[44ch]">
              Providing feedback takes just a few minutes. Results are easier to interpret, outputs are more actionable, and organizations can finally run meaningful assessments across <span className="text-[#2d6cff] font-medium">more leaders and more moments.</span>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
