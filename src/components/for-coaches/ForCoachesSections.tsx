import Link from "next/link";
import PageHero from "@/components/PageHero";
import { forCoachesCopy } from "./data";

export default function ForCoachesSections() {
  return (
    <>
      <PageHero
        eyebrow="For Coaches and Consultants"
        title={<>A repeatable, <span style={{ color: "var(--sky-blue)" }}>client-ready 360 process</span> — without building one yourself.</>}
        body="Interval 360 gives coaches and consultants a fast, reliable way to run a structured leadership 360 for any client — with professional-quality outputs ready to use in a debrief conversation the same day they arrive."
        buttons={[
          { href: "/company#contact", label: "Talk to Partnerships", variant: "teal" },
          { href: "/pricing", label: "See pricing", variant: "secondary" },
          { href: "/reports-and-outputs", label: "Download sample report →", variant: "ghost" },
        ]}
      />
      <section className="py-24 page-gutter" style={{ background: "#fff" }}>
        <p className="text-[1rem] leading-[1.75]" style={{ color: "var(--slate)" }}>
          {forCoachesCopy.intro}
        </p>
      </section>
      <section className="py-28 page-gutter text-center relative overflow-hidden" id="partner" style={{ background: "linear-gradient(135deg, var(--navy-dark) 0%, var(--navy) 100%)" }}>
        <div className="absolute inset-0 pointer-events-none grid-pattern" />
        <div className="relative z-10">
          <h2 className="text-[clamp(1.7rem,3vw,2.3rem)] font-bold leading-[1.2] mb-5 mx-auto max-w-[28ch]" style={{ fontFamily: "var(--font-poppins)", color: "#fff" }}>
            {forCoachesCopy.ctaTitle}
          </h2>
          <div className="flex gap-4 justify-center flex-wrap">
            <Link href="/buy" className="text-[0.9rem] font-semibold px-8 py-3.5 rounded no-underline" style={{ background: "var(--teal)", color: "#fff" }}>Buy an Assessment</Link>
            <Link href="/company#contact" className="text-[0.9rem] font-medium px-8 py-3.5 rounded border-[1.5px] no-underline" style={{ color: "#fff", borderColor: "rgba(255,255,255,0.4)", background: "transparent" }}>Talk to Us</Link>
          </div>
        </div>
      </section>
    </>
  );
}
