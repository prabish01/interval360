import Link from "next/link";
import PageHero from "@/components/PageHero";
import { pricingCards, pricingCopy } from "./data";

export default function PricingSections() {
  return (
    <>
      <PageHero
        eyebrow="Pricing"
        title="Simple pricing. Two lanes. No surprises."
        body="Buy a single assessment or a team pack with a credit card, or talk to us about an enterprise rollout. Both paths use the same platform and produce the same quality of output."
      />
      <section style={{ background: "var(--light-bg)" }}>
        <div className="content-wrap page-gutter py-24">
          <div className="grid lg:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {pricingCards.map((card) => (
              <div key={card.title} className="rounded-lg p-10" style={{ background: card.dark ? "var(--navy-dark)" : "#fff", border: card.dark ? "2px solid var(--teal)" : "1px solid var(--rule)" }}>
                <h3 className="text-[1.4rem] font-bold mb-3" style={{ fontFamily: "var(--font-poppins)", color: card.dark ? "#fff" : "var(--navy-dark)" }}>{card.title}</h3>
                <p className="text-[2.5rem] font-bold" style={{ fontFamily: "var(--font-poppins)", color: card.dark ? "#fff" : "var(--navy-dark)" }}>{card.price}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="relative overflow-hidden" style={{ background: "linear-gradient(135deg, var(--navy-dark) 0%, var(--navy) 100%)" }}>
        <div className="absolute inset-0 pointer-events-none grid-pattern" />
        <div className="relative z-10 content-wrap page-gutter py-28 text-center">
          <h2 className="text-[clamp(1.7rem,3vw,2.3rem)] font-bold leading-[1.2] mb-4 mx-auto max-w-[28ch]" style={{ fontFamily: "var(--font-poppins)", color: "#fff" }}>{pricingCopy.ctaTitle}</h2>
          <div className="flex gap-4 justify-center flex-wrap">
            <Link href="/buy" className="text-[0.9rem] font-semibold px-8 py-3.5 rounded no-underline" style={{ background: "var(--teal)", color: "#fff" }}>Buy an Assessment</Link>
            <Link href="/company#contact" className="text-[0.9rem] font-medium px-8 py-3.5 rounded border-[1.5px] no-underline" style={{ color: "#fff", borderColor: "rgba(255,255,255,0.4)", background: "transparent" }}>Talk to Enterprise Sales</Link>
          </div>
        </div>
      </section>
    </>
  );
}
