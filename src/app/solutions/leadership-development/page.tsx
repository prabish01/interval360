import Link from "next/link";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import PageHero from "@/components/PageHero";

const cadenceItems = [
  {
    moment: "Program Start",
    title: "Establish a clear baseline",
    body: "Begin the program with a 360 assessment for each participant. This anchors their development focus on real evidence — not self-perception — and gives coaches and facilitators structured context for every conversation.",
  },
  {
    moment: "Mid-Program",
    title: "Check whether development is landing",
    body: "Run a second round at the midpoint to see whether the development priorities identified at the start are shifting. This creates accountability, focuses coaching conversations, and gives participants a progress signal.",
  },
  {
    moment: "Program Close",
    title: "Demonstrate what changed",
    body: "A final assessment at the close gives program sponsors and participants a concrete before/after comparison. This is the evidence base for demonstrating program impact — and for setting the next development focus.",
  },
];

const scaleItems = [
  "Launch across a full cohort in minutes — not weeks of coordination",
  "Raters complete their input in ~5 minutes, dramatically reducing participant fatigue",
  "Automated synthesis means no manual processing or analyst time",
  "HR admins can monitor completion and access all reports from a single dashboard",
  "Cohort-level analytics available for program sponsors and facilitators",
];

export default function LeadershipDevelopmentPage() {
  return (
    <>
      <Nav />
      <PageHero
        eyebrow=""
        tag="Use Case — Leadership Development"
        title="Build a repeatable feedback cadence into your leadership programs — without the overhead of traditional 360s."
        body="Leadership development programs work better when they are anchored to real feedback. Interval 360 makes it practical to run meaningful 360 assessments as a core part of your program — at a cost and scale that makes a recurring cadence feasible."
        buttons={[
          { href: "/company#contact", label: "Book a Call", variant: "teal" },
          { href: "/reports-and-outputs", label: "See Sample Report →", variant: "ghost" },
        ]}
        breadcrumb={{ href: "/solutions", label: "Solutions" }}
        breadcrumbCurrent="Leadership Development Programs"
      />

      {/* PROBLEM */}
      <section className="py-24 px-[4vw]" style={{ background: "#fff" }}>
        <div className="grid lg:grid-cols-[5fr_7fr] gap-24 items-start">
          <div>
            <p className="text-[0.72rem] font-semibold tracking-[0.2em] uppercase mb-4" style={{ color: "var(--teal)" }}>The Problem</p>
            <h2 className="text-[clamp(1.7rem,3vw,2.3rem)] font-bold leading-[1.2] tracking-[-0.02em]" style={{ fontFamily: "var(--font-poppins)", color: "var(--navy-dark)" }}>
              Most programs lack consistent, reliable feedback at their core.
            </h2>
          </div>
          <div className="flex flex-col gap-5">
            <p className="text-[1rem] leading-[1.75]" style={{ color: "var(--slate)" }}>
              Leadership development programs often invest heavily in curriculum, coaching, and cohort experiences — but the feedback layer is an afterthought. When 360 assessments are included at all, they are typically run once, at the start or end of the program, using traditional survey tools that produce long reports few participants actually read and use.
            </p>
            <p className="text-[1rem] leading-[1.75]" style={{ color: "var(--slate)" }}>
              The result is a program that invests in developing leaders without a reliable mechanism for understanding whether that development is working. Participants do not know clearly what to focus on. Coaches do not have structured baseline data. And program sponsors cannot demonstrate what changed.
            </p>
            <p className="text-[1rem] leading-[1.75]" style={{ color: "var(--slate)" }}>
              Interval 360 is designed to close that gap — by making high-quality feedback fast enough, low-burden enough, and affordable enough to use as a consistent, repeatable layer within any leadership development program.
            </p>
          </div>
        </div>
      </section>

      {/* CADENCE */}
      <section className="py-24 px-[4vw]" style={{ background: "var(--light-bg)" }}>
        <div className="grid lg:grid-cols-2 gap-16 mb-16 items-end">
          <div>
            <p className="text-[0.72rem] font-semibold tracking-[0.2em] uppercase mb-4" style={{ color: "var(--teal)" }}>How It Fits a Development Program</p>
            <h2 className="text-[clamp(1.7rem,3vw,2.3rem)] font-bold leading-[1.2] tracking-[-0.02em]" style={{ fontFamily: "var(--font-poppins)", color: "var(--navy-dark)" }}>
              Three moments where feedback makes the biggest difference.
            </h2>
          </div>
          <p className="text-[1.05rem] leading-[1.75]" style={{ color: "var(--slate)" }}>
            Interval 360 can be used at any point in a development program. These are the three moments where it most consistently adds value.
          </p>
        </div>
        <div className="grid lg:grid-cols-3 gap-6">
          {cadenceItems.map((item, i) => (
            <div
              key={i}
              className="p-8 rounded-lg"
              style={{ background: "#fff", border: "1px solid var(--rule)" }}
            >
              <p className="text-[0.72rem] font-bold tracking-[0.15em] uppercase mb-3" style={{ color: "var(--teal)" }}>
                {item.moment}
              </p>
              <h3 className="text-[1.05rem] font-semibold mb-3" style={{ fontFamily: "var(--font-poppins)", color: "var(--navy-dark)" }}>
                {item.title}
              </h3>
              <p className="text-[0.92rem] leading-[1.7]" style={{ color: "var(--slate)" }}>
                {item.body}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* SCALE */}
      <section className="py-24 px-[4vw]" style={{ background: "#fff" }}>
        <div className="grid lg:grid-cols-2 gap-24 items-center">
          <div>
            <p className="text-[0.72rem] font-semibold tracking-[0.2em] uppercase mb-4" style={{ color: "var(--teal)" }}>Built for Program Scale</p>
            <h2 className="text-[clamp(1.7rem,3vw,2.3rem)] font-bold leading-[1.2] tracking-[-0.02em] mb-5" style={{ fontFamily: "var(--font-poppins)", color: "var(--navy-dark)" }}>
              Run 360 feedback across a full cohort — without the overhead.
            </h2>
            <p className="text-[1.05rem] leading-[1.75] mb-8" style={{ color: "var(--slate)" }}>
              Traditional 360 programs require significant coordination, follow-up, and processing time. Interval 360 handles all of that automatically — so program managers can run a full cohort assessment with a fraction of the effort.
            </p>
            <div className="flex gap-4">
              <Link href="/company#contact" className="inline-block text-[0.9rem] font-semibold px-7 py-3 rounded no-underline" style={{ background: "var(--navy)", color: "#fff" }}>
                Talk to Us
              </Link>
              <Link href="/pricing" className="inline-block text-[0.9rem] font-medium px-7 py-3 rounded border-[1.5px] no-underline" style={{ color: "var(--navy)", borderColor: "var(--navy)", background: "transparent" }}>
                See Pricing
              </Link>
            </div>
          </div>
          <div
            className="flex flex-col rounded overflow-hidden"
            style={{ border: "1px solid var(--rule)" }}
          >
            {scaleItems.map((item, i) => (
              <div
                key={i}
                className="flex items-start gap-4 px-6 py-4"
                style={{ background: i % 2 === 0 ? "#fff" : "var(--off-white)", borderBottom: i < scaleItems.length - 1 ? "1px solid var(--rule)" : "none" }}
              >
                <div className="w-5 h-5 rounded-full flex items-center justify-center shrink-0 mt-0.5" style={{ background: "var(--teal)" }}>
                  <svg width="10" height="10" viewBox="0 0 10 10" fill="none">
                    <path d="M2 5l2.5 2.5L8 3" stroke="#fff" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
                <p className="text-[0.92rem] leading-[1.6]" style={{ color: "var(--charcoal)" }}>{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-28 px-[4vw] text-center relative overflow-hidden" style={{ background: "linear-gradient(135deg, var(--navy-dark) 0%, var(--navy) 100%)" }}>
        <div className="absolute inset-0 pointer-events-none grid-pattern" />
        <div className="relative z-10">
          <h2 className="text-[clamp(1.7rem,3vw,2.3rem)] font-bold leading-[1.2] mb-5 mx-auto max-w-[28ch]" style={{ fontFamily: "var(--font-poppins)", color: "#fff" }}>
            Build feedback into your next program from the start.
          </h2>
          <p className="text-[1.05rem] leading-[1.75] mb-10 mx-auto max-w-[48ch]" style={{ color: "rgba(234,239,243,0.7)" }}>
            Talk to us about how to integrate Interval 360 into your development program design.
          </p>
          <div className="flex gap-4 justify-center flex-wrap">
            <Link href="/company#contact" className="text-[0.9rem] font-semibold px-8 py-3.5 rounded no-underline" style={{ background: "var(--teal)", color: "#fff" }}>
              Book a Call
            </Link>
            <Link href="/buy" className="text-[0.9rem] font-medium px-8 py-3.5 rounded border-[1.5px] no-underline" style={{ color: "#fff", borderColor: "rgba(255,255,255,0.4)", background: "transparent" }}>
              Buy an Assessment
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
