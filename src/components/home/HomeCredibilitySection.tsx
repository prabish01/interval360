import { credList } from "./data";

export function HomeCredibilitySection() {
  return (
    <section className="min-h-screen flex flex-col bg-[#0e0e0e]">
      <div className="flex-1 grid lg:grid-cols-[2fr_3fr] content-wrap page-gutter w-full">

        {/* Right — heading */}
        <div className="flex flex-col justify-center py-20 lg:order-2 lg:pl-16 lg:text-right" style={{ borderLeft: "1px solid rgba(255,255,255,0.06)" }}>
          <p className="text-[0.68rem] font-semibold tracking-[0.28em] uppercase mb-8 text-[#2d6cff]">
            Why Trust It
          </p>
          <h2 className="text-[clamp(3rem,6vw,5rem)] font-extrabold uppercase leading-[0.92] text-white" style={{ fontFamily: "var(--font-space-grotesk)" }}>
            Built<br />From The<br />Inside.
          </h2>
          <p className="text-[0.95rem] leading-[1.8] text-white/50 mt-8 max-w-[32ch] lg:ml-auto">
            Built by practitioners who understand how leadership feedback actually works — and where it fails.
          </p>
        </div>

        {/* Left — cred list */}
        <div className="flex flex-col justify-center py-20 lg:order-1 lg:pr-16">
          {credList.map((item, i) => (
            <div key={i} className="group flex items-start gap-5 py-6 border-b border-white/6 first:border-t first:border-white/6 hover:bg-white/2 transition-colors duration-300 px-2 -mx-2">
              <div className="w-1.5 h-1.5 rounded-full bg-[#2d6cff] shrink-0 mt-2 opacity-60 group-hover:opacity-100 transition-opacity duration-300" />
              <span className="text-[0.92rem] leading-[1.7] text-white/60 group-hover:text-white/80 transition-colors duration-300">
                {item}
              </span>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
