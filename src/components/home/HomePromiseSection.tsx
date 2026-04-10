import { promises } from "./data";

export function HomePromiseSection() {
  return (
    <section className="min-h-screen flex flex-col bg-[#131313]">
      <div className="flex-1 grid lg:grid-cols-[2fr_3fr] content-wrap page-gutter w-full">
        {/* Left — heading */}
        <div className="flex flex-col justify-center py-20 lg:pr-16" style={{ borderRight: "1px solid rgba(187,220,251,0.08)" }}>
          <p className="text-[0.68rem] font-semibold tracking-[0.28em] uppercase mb-8 text-[#2d6cff]">Visionary Outcome</p>
          <h2 className="text-[clamp(3.5rem,7vw,5.5rem)] font-extrabold uppercase leading-[0.92] mb-10" style={{ fontFamily: "var(--font-space-grotesk)", color: "#fff" }}>
            The
            <br />
            Promise
          </h2>
          <p className="text-[1.1rem] font-semibold leading-normal mb-5" style={{ color: "#fff" }}>
            Clear visibility. Smarter decisions. Stronger leaders.
          </p>
          <p className="text-[0.95rem] leading-[1.8]" style={{ color: "rgba(234,239,243,0.55)" }}>
            Interval 360 is built to help organizations understand leadership more clearly and use feedback more effectively.
          </p>
        </div>

        {/* Right — promise items */}
        <div className="flex flex-col justify-center py-20 lg:pl-16 gap-0">
          {promises.map((card, i) => {
            const [num, label] = card.num.split(" — ");
            return (
              <div key={i} className="group flex gap-8 py-8 px-4 -mx-4 rounded transition-colors duration-300 hover:bg-[rgba(45,108,255,0.06)] cursor-default" style={{ borderBottom: i < promises.length - 1 ? "1px solid rgba(187,220,251,0.08)" : "none" }}>
                <span className="text-[1.1rem] font-bold shrink-0 w-8 pt-0.5 transition-colors duration-300 group-hover:text-[#2d6cff]" style={{ color: "rgba(234,239,243,0.25)" }}>
                  {num}
                </span>
                <div>
                  <h3 className="text-[1rem] font-bold uppercase tracking-[0.04em] mb-1 transition-colors duration-300 group-hover:text-[#6b93ff]" style={{ color: "#fff" }}>
                    {card.title}
                  </h3>
                  {label && <p className="text-[0.82rem] font-medium italic mb-3 text-[#2d6cff] ">{label}</p>}
                  <p className="text-[0.9rem] leading-[1.7]" style={{ color: "rgba(234,239,243,0.55)" }}>
                    {card.body}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
