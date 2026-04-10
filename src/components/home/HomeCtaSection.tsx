import Link from "next/link";

const stats = [
  {
    value: "5 Min",
    label: "Feedback Completion",
    desc: "Most participants finish in around five minutes — no login required, no long rating scales.",
  },
  {
    value: "2×",
    label: "Reports Per Assessment",
    desc: "Every assessment produces both an organizational report and a personal development report for the leader.",
  },
];

export function HomeCtaSection() {
  return (
    <section className="min-h-screen flex flex-col bg-[#0a0e1a]">
      <div className="flex-1 grid lg:grid-cols-2 content-wrap page-gutter w-full py-20">

        {/* Left — heading + stats */}
        <div className="flex flex-col justify-center lg:pr-16 py-10" style={{ borderRight: "1px solid rgba(255,255,255,0.06)" }}>
          <p className="text-[0.68rem] font-semibold tracking-[0.28em] uppercase text-[#2d6cff] mb-8">
            Get Started
          </p>
          <h2 className="text-[clamp(2.6rem,5.5vw,4.5rem)] font-extrabold uppercase leading-[0.92] text-white mb-14" style={{ fontFamily: "var(--font-space-grotesk)" }}>
            Ready To See<br />Better Feedback.
          </h2>

          <div className="flex flex-col gap-0">
            {stats.map((stat, i) => (
              <div key={i} className="flex items-start gap-8 py-8 border-t border-white/6 last:border-b last:border-white/6">
                <span className="text-[3rem] font-extrabold leading-none text-[#2d6cff] shrink-0 w-24">
                  {stat.value}
                </span>
                <div>
                  <p className="text-[0.75rem] font-bold tracking-[0.15em] uppercase text-white mb-1">
                    {stat.label}
                  </p>
                  <p className="text-[0.85rem] leading-[1.7] text-white/50">
                    {stat.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Right — quote + CTA */}
        <div className="flex flex-col justify-center lg:pl-16 py-10 gap-10">

          {/* Quote card */}
          <div className="bg-[#2d6cff] p-8">
            <p className="text-[1.05rem] leading-[1.75] text-white font-medium italic mb-6">
              &ldquo;Interval 360 changed how we run talent reviews. The feedback is more specific, the outputs are actually usable, and leaders take the results seriously because the process felt credible.&rdquo;
            </p>
            <div className="flex items-center gap-3">
              <div className="w-6 h-px bg-white/50" />
              <p className="text-[0.68rem] font-semibold tracking-[0.2em] uppercase text-white/70">
                Head of Talent, Mid-Market Technology Co.
              </p>
            </div>
          </div>

          {/* CTA buttons */}
          <div>
            <p className="text-[0.88rem] leading-[1.7] text-white/50 mb-6 max-w-[38ch]">
              Try a single assessment, buy a team pack, or talk to us about an enterprise rollout.
            </p>
            <div className="flex gap-4 flex-wrap">
              <Link
                href="/company#contact"
                className="text-[0.9rem] font-semibold px-8 py-3.5 no-underline bg-[#2d6cff] text-white hover:bg-[#1a57e8] transition-colors duration-200"
              >
                Book a Call
              </Link>
              <Link
                href="/buy"
                className="text-[0.9rem] font-medium px-8 py-3.5 no-underline border border-white/20 text-white hover:border-white/40 transition-colors duration-200"
              >
                Buy an Assessment
              </Link>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
