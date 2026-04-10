import Link from "next/link";
import SoftAurora from "@/components/SoftAurora";

export function HomeHeroSection() {
  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden text-center" style={{ background: "linear-gradient(180deg, #061027 0%, #040a1a 56%, #030816 100%)" }}>
      <div className="absolute inset-0 pointer-events-none opacity-70">
        <SoftAurora speed={0.7} scale={0.1} brightness={1} color1="#006af5" color2="#0a70fe" noiseFrequency={5} noiseAmplitude={5.5} bandHeight={0.35} bandSpread={1.1} octaveDecay={0.27} layerOffset={0.15} colorSpeed={0.7} enableMouseInteraction={false} mouseInfluence={0.25} />
      </div>
      <div className="absolute inset-0 pointer-events-none grid-pattern" style={{ opacity: 0.16 }} />
      <div className="absolute inset-0 pointer-events-none hero-vignette" />
      <div className="relative z-10 content-wrap w-full page-gutter pt-28 pb-16">
        <div className="max-w-5xl mx-auto">
          <p className="inline-flex items-center gap-2.5 text-[0.7rem] font-semibold tracking-[0.26em] uppercase mb-6" style={{ color: "rgba(187,220,251,0.78)" }}>
            <span className="block w-7 h-px" style={{ background: "rgba(187,220,251,0.65)" }} />
            Leadership Feedback, Reimagined
          </p>
          <h1 className="text-[clamp(2.35rem,8.6vw,6.3rem)] font-extrabold leading-[0.98] tracking-[-0.03em] text-white uppercase mb-7" style={{ fontFamily: "var(--font-space-grotesk)" }}>
            <span className="text-[#006af5]">360</span> Feedback That Powers <span className="text-[#006af5]">Leadership</span> Strategy
          </h1>
          <p className="text-[clamp(1rem,1.7vw,1.25rem)] leading-[1.7] mb-11 mx-auto max-w-[62ch]" style={{ color: "rgba(234,239,243,0.72)" }}>
            Interval 360 uses conversational AI to gather better leadership feedback with less burden, then turns it into concise, actionable insight for development and talent decisions.
          </p>
          <div className="flex gap-4 flex-wrap justify-center items-center">
            <Link href="/company#contact" className="text-[0.95rem] font-semibold px-10 py-3.5 rounded-sm no-underline transition-transform hover:-translate-y-0.5" style={{ background: "#2d6cff", color: "#fff", boxShadow: "0 10px 36px rgba(45,108,255,0.35)" }}>
              Book a Call
            </Link>
            <Link href="/buy" className="text-[0.95rem] font-semibold px-10 py-3.5 rounded-sm border no-underline transition-colors" style={{ color: "#fff", borderColor: "rgba(255,255,255,0.22)", background: "rgba(255,255,255,0.02)" }}>
              Buy an Assessment
            </Link>
          </div>
          <div className="mt-5">
            <Link href="#sample" className="text-[0.9rem] font-medium no-underline border-b border-current pb-0.5" style={{ color: "rgba(234,239,243,0.68)" }}>
              See sample reports →
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
