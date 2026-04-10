import Link from "next/link";
import PageHero from "@/components/PageHero";
import { anatomySections } from "./data";

export default function ReportsAndOutputsSections() {
  return (
    <>
      <PageHero
        eyebrow="Reports and Outputs"
        title={<>Concise, actionable outputs — <span style={{ color: "var(--sky-blue)" }}>built for decisions, not binders.</span></>}
        body="Interval 360 synthesizes feedback into a structured report you can read in minutes and use directly — in a coaching conversation, a development plan, or a talent decision."
        buttons={[
          { href: "/buy", label: "Buy an Assessment", variant: "teal" },
          { href: "/company#contact", label: "Book a Call", variant: "secondary" },
          { href: "#report", label: "See the report structure →", variant: "ghost" },
        ]}
      />
      <section className="py-24 page-gutter" id="report" style={{ background: "#fff" }}>
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          <div>
            <p className="text-[0.72rem] font-semibold tracking-[0.2em] uppercase mb-4" style={{ color: "var(--teal)" }}>Report Structure</p>
            <h2 className="text-[clamp(1.7rem,3vw,2.3rem)] font-bold leading-[1.2] tracking-[-0.02em] mb-5" style={{ fontFamily: "var(--font-poppins)", color: "var(--navy-dark)" }}>
              Six sections. Everything you need — nothing you don&apos;t.
            </h2>
            <div className="flex flex-col">
              {anatomySections.map((item, i) => (
                <div key={i} className="flex items-start gap-5 py-4" style={{ borderTop: i === 0 ? "1px solid var(--rule)" : "none", borderBottom: "1px solid var(--rule)" }}>
                  <span className="text-[0.82rem] font-bold w-8 shrink-0 pt-0.5" style={{ fontFamily: "var(--font-montserrat)", color: "var(--teal)" }}>{item.num}</span>
                  <div>
                    <h4 className="text-[0.95rem] font-semibold mb-1" style={{ color: "var(--navy-dark)" }}>{item.title}</h4>
                    <p className="text-[0.88rem] leading-[1.65]" style={{ color: "var(--slate)" }}>{item.body}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="rounded-lg overflow-hidden shadow-xl sticky top-24" style={{ border: "1px solid var(--rule)" }}>
            <div className="p-6" style={{ background: "#fff" }}>
              <p className="text-[0.9rem]" style={{ color: "var(--slate)" }}>Sample report preview area</p>
            </div>
          </div>
        </div>
      </section>
      <section className="py-28 page-gutter text-center relative overflow-hidden" style={{ background: "linear-gradient(135deg, var(--navy-dark) 0%, var(--navy) 100%)" }}>
        <div className="absolute inset-0 pointer-events-none grid-pattern" />
        <div className="relative z-10">
          <h2 className="text-[clamp(1.7rem,3vw,2.3rem)] font-bold leading-[1.2] mb-5 mx-auto max-w-[28ch]" style={{ fontFamily: "var(--font-poppins)", color: "#fff" }}>Ready to see an actual report?</h2>
          <div className="flex gap-4 justify-center flex-wrap">
            <Link href="/buy" className="text-[0.9rem] font-semibold px-8 py-3.5 rounded no-underline" style={{ background: "var(--teal)", color: "#fff" }}>Buy an Assessment</Link>
            <Link href="/company#contact" className="text-[0.9rem] font-medium px-8 py-3.5 rounded border-[1.5px] no-underline" style={{ color: "#fff", borderColor: "rgba(255,255,255,0.4)", background: "transparent" }}>Book a Call</Link>
          </div>
        </div>
      </section>
    </>
  );
}
