import Link from "next/link";
import PageHero from "@/components/PageHero";
import { resourcesCopy } from "./data";

export default function ResourcesSections() {
  return (
    <>
      <PageHero
        eyebrow="Resources"
        title={<>Practical thinking on <span style={{ color: "var(--sky-blue)" }}>leadership feedback that works.</span></>}
        body="Playbooks, sample reports, field notes, and frameworks — built for HR leaders, coaches, and managers who want to make better use of 360 feedback."
      />
      <section className="py-20 page-gutter" style={{ background: "#fff" }}>
        <h2 className="text-[1.6rem] font-bold leading-[1.25] mb-5" style={{ fontFamily: "var(--font-poppins)", color: "var(--navy-dark)" }}>
          {resourcesCopy.heading}
        </h2>
        <p className="text-[1rem] leading-[1.75]" style={{ color: "var(--slate)" }}>
          {resourcesCopy.body}
        </p>
      </section>
      <section className="py-28 page-gutter text-center relative overflow-hidden" style={{ background: "linear-gradient(135deg, var(--navy-dark) 0%, var(--navy) 100%)" }}>
        <div className="absolute inset-0 pointer-events-none grid-pattern" />
        <div className="relative z-10">
          <h2 className="text-[clamp(1.7rem,3vw,2.3rem)] font-bold leading-[1.2] mb-5 mx-auto max-w-[28ch]" style={{ fontFamily: "var(--font-poppins)", color: "#fff" }}>
            {resourcesCopy.ctaTitle}
          </h2>
          <div className="flex gap-4 justify-center flex-wrap">
            <Link href="/buy" className="text-[0.9rem] font-semibold px-8 py-3.5 rounded no-underline" style={{ background: "var(--teal)", color: "#fff" }}>Buy an Assessment</Link>
            <Link href="/company#contact" className="text-[0.9rem] font-medium px-8 py-3.5 rounded border-[1.5px] no-underline" style={{ color: "#fff", borderColor: "rgba(255,255,255,0.4)", background: "transparent" }}>Book a Call</Link>
          </div>
        </div>
      </section>
    </>
  );
}
