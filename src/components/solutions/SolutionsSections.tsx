import Link from "next/link";
import PageHero from "@/components/PageHero";
import { useCases } from "./data";

export default function SolutionsSections() {
  return (
    <>
      <PageHero
        eyebrow="Solutions"
        title={<>Better leadership feedback for <span style={{ color: "var(--sky-blue)" }}>the moments that matter most.</span></>}
        body="Interval 360 is built for the specific moments where leadership insight is most valuable — talent decisions, development programs, and leadership transitions. Find your use case below."
      />

      <section style={{ background: "var(--light-bg)" }}>
        <div className="content-wrap page-gutter py-24">
          <div className="mb-12">
            <p className="text-[0.72rem] font-semibold tracking-[0.2em] uppercase mb-4" style={{ color: "var(--teal)" }}>Use Cases</p>
            <h2 className="text-[clamp(1.7rem,3vw,2.3rem)] font-bold leading-[1.2] tracking-[-0.02em]" style={{ fontFamily: "var(--font-poppins)", color: "var(--navy-dark)" }}>Where Interval 360 makes the biggest difference.</h2>
          </div>
          <div className="grid lg:grid-cols-3 gap-6 mb-12">
            {useCases.map((uc) => (
              <div key={uc.num} className="rounded-lg overflow-hidden flex flex-col transition-shadow hover:shadow-lg" style={{ background: "#fff", border: "1px solid var(--rule)" }}>
                <div className="h-1" style={{ background: uc.accent }} />
                <div className="p-8 flex flex-col flex-1">
                  <p className="text-[0.7rem] font-bold tracking-[0.15em] uppercase mb-3" style={{ color: "var(--slate)" }}>{uc.num}</p>
                  <h3 className="text-[1.15rem] font-bold mb-3" style={{ fontFamily: "var(--font-poppins)", color: "var(--navy-dark)" }}>{uc.title}</h3>
                  <p className="text-[0.92rem] leading-[1.7] mb-6 flex-1" style={{ color: "var(--slate)" }}>{uc.body}</p>
                  <div className="mb-6">
                    <p className="text-[0.72rem] font-semibold uppercase tracking-[0.1em] mb-2" style={{ color: "var(--slate)" }}>Who uses this</p>
                    <div className="flex flex-wrap gap-2">
                      {uc.who.map((tag) => (
                        <span key={tag} className="text-[0.72rem] font-semibold px-2.5 py-1 rounded" style={{ background: "var(--light-bg)", color: "var(--slate)" }}>{tag}</span>
                      ))}
                    </div>
                  </div>
                  <Link href={uc.href} className="text-[0.88rem] font-semibold no-underline" style={{ color: uc.accent }}>See how it works →</Link>
                </div>
              </div>
            ))}
          </div>

          <div className="flex items-center gap-4 my-16">
            <div className="flex-1" style={{ height: 1, background: "var(--rule)" }} />
            <span className="text-[0.75rem] font-semibold tracking-[0.15em] uppercase px-4" style={{ color: "var(--slate)", whiteSpace: "nowrap" }}>For Coaches &amp; Consultants</span>
            <div className="flex-1" style={{ height: 1, background: "var(--rule)" }} />
          </div>

          <div className="rounded-xl overflow-hidden" style={{ background: "#fff", border: "1px solid var(--rule)" }}>
            <div className="h-1" style={{ background: "var(--teal)" }} />
            <div className="p-10 lg:p-14 grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <p className="text-[0.7rem] font-bold tracking-[0.15em] uppercase mb-3" style={{ color: "var(--teal)" }}>For Coaches</p>
                <h3 className="text-[1.5rem] font-bold leading-[1.25] mb-4" style={{ fontFamily: "var(--font-poppins)", color: "var(--navy-dark)" }}>A repeatable, client-ready 360 process — without building one yourself.</h3>
                <p className="text-[1rem] leading-[1.75] mb-8" style={{ color: "var(--slate)" }}>
                  Interval 360 gives coaches and consultants a fast, reliable way to run a structured leadership 360 for any client — with professional-quality outputs ready to use in a debrief conversation the same day they arrive.
                </p>
                <Link href="/for-coaches" className="inline-block text-[0.9rem] font-semibold px-7 py-3 rounded no-underline transition-colors" style={{ background: "var(--teal)", color: "#fff" }}>Learn more →</Link>
              </div>
              <div className="flex flex-col gap-4">
                {[
                  { title: "No instrument to build or license", body: "Interval 360 handles the assessment design, question structure, and follow-up logic." },
                  { title: "Professional outputs on the same day", body: "Reports are formatted for immediate use in a coaching debrief — no additional processing needed." },
                  { title: "Pricing that works at the individual engagement level", body: "No per-seat platform fees. Pay per assessment, use it for any client." },
                ].map((item, i) => (
                  <div key={i} className="flex items-start gap-4 p-5 rounded" style={{ background: "var(--light-bg)" }}>
                    <div className="w-5 h-5 rounded-full flex items-center justify-center shrink-0 mt-0.5" style={{ background: "var(--teal)" }}>
                      <svg width="10" height="10" viewBox="0 0 10 10" fill="none"><path d="M2 5l2.5 2.5L8 3" stroke="#fff" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
                    </div>
                    <div>
                      <h4 className="text-[0.9rem] font-semibold mb-1" style={{ color: "var(--navy-dark)" }}>{item.title}</h4>
                      <p className="text-[0.85rem] leading-[1.6]" style={{ color: "var(--slate)" }}>{item.body}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden" style={{ background: "linear-gradient(135deg, var(--navy-dark) 0%, var(--navy) 100%)" }}>
        <div className="absolute inset-0 pointer-events-none grid-pattern" />
        <div className="relative z-10 content-wrap page-gutter py-28 text-center">
          <h2 className="text-[clamp(1.7rem,3vw,2.3rem)] font-bold leading-[1.2] mb-5 mx-auto max-w-[28ch]" style={{ fontFamily: "var(--font-poppins)", color: "#fff" }}>Find the use case that fits your organization.</h2>
          <p className="text-[1.05rem] leading-[1.75] mb-10 mx-auto max-w-[48ch]" style={{ color: "rgba(234,239,243,0.7)" }}>All use cases start with the same process. Talk to us about which one fits your immediate need.</p>
          <div className="flex gap-4 justify-center flex-wrap">
            <Link href="/company#contact" className="text-[0.9rem] font-semibold px-8 py-3.5 rounded no-underline" style={{ background: "var(--teal)", color: "#fff" }}>Book a Call</Link>
            <Link href="/buy" className="text-[0.9rem] font-medium px-8 py-3.5 rounded border-[1.5px] no-underline" style={{ color: "#fff", borderColor: "rgba(255,255,255,0.4)", background: "transparent" }}>Buy an Assessment</Link>
          </div>
        </div>
      </section>
    </>
  );
}
