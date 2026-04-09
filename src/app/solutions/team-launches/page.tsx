import Link from "next/link";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import PageHero from "@/components/PageHero";

const transitions = [
  {
    label: "First-Time Manager",
    title: "From individual contributor to leading others",
    body: "The most common and most challenging transition in leadership. What made someone successful as an individual contributor is often not what makes them effective as a manager. Early feedback surfaces the specific gaps before they compound.",
  },
  {
    label: "Promotion or Expanded Scope",
    title: "More responsibility, a wider stage",
    body: "A promotion changes the context in which leadership is evaluated. Strengths that were sufficient at the previous level may not be enough at the next one. A fresh 360 captures how the leader is experienced in their new scope — not just their previous role.",
  },
  {
    label: "Executive Transition",
    title: "New organization, new team, higher stakes",
    body: "An executive stepping into a new organization or a significantly new role needs to understand quickly how they are landing with peers, the board, and direct reports. A structured 360 early in the transition provides the multi-perspective signal they cannot get from internal observation alone.",
  },
];

const helpItems = [
  { title: "Baseline in the first 60 days", body: "Run the assessment early enough that early patterns can still be shaped." },
  { title: "Coach-ready output", body: "Reports are formatted for direct use in a transition coaching conversation." },
  { title: "Clear focus areas", body: "Development areas are prioritized and specific — not generic leadership advice." },
  { title: "Manager alignment", body: "The assessment report gives the manager and leader a shared starting point for the first 90-day conversation." },
];

export default function TeamLaunchesPage() {
  return (
    <>
      <Nav />
      <PageHero
        eyebrow=""
        tag="Use Case — Role Transitions"
        title="Give leaders stepping into new roles a clear baseline — and a focused starting point."
        body="The first 90 days in a new leadership role sets patterns that are hard to undo. Interval 360 gives leaders, their managers, and their coaches a structured, evidence-based starting point for that transition — while there is still time to shape it."
        buttons={[
          { href: "/buy", label: "Buy an Assessment", variant: "teal" },
          { href: "/company#contact", label: "Book a Call", variant: "secondary" },
        ]}
        breadcrumb={{ href: "/solutions", label: "Solutions" }}
        breadcrumbCurrent="Team Launches & Role Transitions"
      />

      {/* TRANSITIONS */}
      <section className="py-24 page-gutter" style={{ background: "var(--light-bg)" }}>
        <div className="grid lg:grid-cols-2 gap-16 mb-14 items-end">
          <div>
            <p className="text-[0.72rem] font-semibold tracking-[0.2em] uppercase mb-4" style={{ color: "var(--teal)" }}>Three Transition Moments</p>
            <h2 className="text-[clamp(1.7rem,3vw,2.3rem)] font-bold leading-[1.2] tracking-[-0.02em]" style={{ fontFamily: "var(--font-poppins)", color: "var(--navy-dark)" }}>
              The transitions where early feedback matters most.
            </h2>
          </div>
          <p className="text-[1.05rem] leading-[1.75]" style={{ color: "var(--slate)" }}>
            Each of these transitions carries distinct risks and distinct development needs. A 360 at the right moment — early in the transition — helps leaders and their coaches understand what they are walking into and where to focus first.
          </p>
        </div>
        <div className="grid lg:grid-cols-3 gap-6">
          {transitions.map((t, i) => (
            <div
              key={i}
              className="p-8 rounded-lg"
              style={{ background: "#fff", border: "1px solid var(--rule)" }}
            >
              <p className="text-[0.72rem] font-bold tracking-[0.15em] uppercase mb-3" style={{ color: "var(--teal)" }}>
                {t.label}
              </p>
              <h3 className="text-[1.05rem] font-semibold mb-3" style={{ fontFamily: "var(--font-poppins)", color: "var(--navy-dark)" }}>
                {t.title}
              </h3>
              <p className="text-[0.92rem] leading-[1.7]" style={{ color: "var(--slate)" }}>
                {t.body}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* WHY TIMING */}
      <section className="py-24 page-gutter" style={{ background: "#fff" }}>
        <div className="grid lg:grid-cols-[5fr_7fr] gap-24 items-start">
          <div>
            <p className="text-[0.72rem] font-semibold tracking-[0.2em] uppercase mb-4" style={{ color: "var(--teal)" }}>Why Timing Matters</p>
            <h2 className="text-[clamp(1.7rem,3vw,2.3rem)] font-bold leading-[1.2] tracking-[-0.02em]" style={{ fontFamily: "var(--font-poppins)", color: "var(--navy-dark)" }}>
              The window for early-transition feedback is short.
            </h2>
          </div>
          <div className="flex flex-col gap-5">
            <p className="text-[1rem] leading-[1.75]" style={{ color: "var(--slate)" }}>
              The most useful moment to run a 360 during a role transition is early — typically within the first 60–90 days. At this point, the leader is still forming habits, relationships are still being established, and early patterns can still be shaped intentionally.
            </p>
            <p className="text-[1rem] leading-[1.75]" style={{ color: "var(--slate)" }}>
              By the time most organizations think to run a 360, the transition is over. The patterns have set. The relationships have hardened. The feedback is still useful for development — but the high-leverage early window has passed.
            </p>
            <p className="text-[1rem] leading-[1.75]" style={{ color: "var(--slate)" }}>
              Interval 360 is fast enough and low-burden enough to be used at this early stage — without requiring months of lead time or a heavy organizational commitment to set up and run.
            </p>
            <div
              className="pl-6 py-4 pr-4 rounded-r mt-2"
              style={{ background: "var(--light-bg)", borderLeft: "3px solid var(--teal)" }}
            >
              <p className="italic text-[0.95rem] leading-[1.7]" style={{ color: "var(--navy-dark)" }}>
                &ldquo;The first 90 days establishes leadership patterns that persist for years. Feedback at that stage, while there&apos;s still time to respond to it, is worth more than feedback at any other point in the role.&rdquo;
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* HOW IT HELPS */}
      <section className="py-24 page-gutter" style={{ background: "var(--light-bg)" }}>
        <div className="mb-12">
          <p className="text-[0.72rem] font-semibold tracking-[0.2em] uppercase mb-4" style={{ color: "var(--teal)" }}>How It Helps</p>
          <h2 className="text-[clamp(1.7rem,3vw,2.3rem)] font-bold leading-[1.2] tracking-[-0.02em]" style={{ fontFamily: "var(--font-poppins)", color: "var(--navy-dark)" }}>
            What you get from an early-transition 360.
          </h2>
        </div>
        <div className="grid lg:grid-cols-2 gap-6">
          {helpItems.map((item, i) => (
            <div
              key={i}
              className="flex items-start gap-5 p-7 rounded-lg"
              style={{ background: "#fff", border: "1px solid var(--rule)" }}
            >
              <div className="w-8 h-8 rounded-full flex items-center justify-center shrink-0" style={{ background: "var(--teal)" }}>
                <svg width="14" height="14" viewBox="0 0 10 10" fill="none">
                  <path d="M2 5l2.5 2.5L8 3" stroke="#fff" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <div>
                <h4 className="text-[1rem] font-semibold mb-2" style={{ fontFamily: "var(--font-poppins)", color: "var(--navy-dark)" }}>{item.title}</h4>
                <p className="text-[0.92rem] leading-[1.65]" style={{ color: "var(--slate)" }}>{item.body}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="py-28 page-gutter text-center relative overflow-hidden" style={{ background: "linear-gradient(135deg, var(--navy-dark) 0%, var(--navy) 100%)" }}>
        <div className="absolute inset-0 pointer-events-none grid-pattern" />
        <div className="relative z-10">
          <h2 className="text-[clamp(1.7rem,3vw,2.3rem)] font-bold leading-[1.2] mb-5 mx-auto max-w-[28ch]" style={{ fontFamily: "var(--font-poppins)", color: "#fff" }}>
            Start the transition with clear signal.
          </h2>
          <p className="text-[1.05rem] leading-[1.75] mb-10 mx-auto max-w-[48ch]" style={{ color: "rgba(234,239,243,0.7)" }}>
            Buy a single assessment for a leader in transition, or talk to us about a cohort rollout.
          </p>
          <div className="flex gap-4 justify-center flex-wrap">
            <Link href="/buy" className="text-[0.9rem] font-semibold px-8 py-3.5 rounded no-underline" style={{ background: "var(--teal)", color: "#fff" }}>
              Buy an Assessment
            </Link>
            <Link href="/company#contact" className="text-[0.9rem] font-medium px-8 py-3.5 rounded border-[1.5px] no-underline" style={{ color: "#fff", borderColor: "rgba(255,255,255,0.4)", background: "transparent" }}>
              Book a Call
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
