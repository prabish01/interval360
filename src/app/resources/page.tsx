import Link from "next/link";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import PageHero from "@/components/PageHero";

const filters = ["All", "Sample Reports", "Playbooks", "Talent Decisions", "Leadership Development", "Feedback Quality", "AI Governance"];

const playbooks = [
  { type: "Playbook", title: "How to Run a 360 in 14 Days", body: "A launch-to-report timeline for HR leaders and managers who want to move fast without cutting corners.", tags: ["Leadership Development", "Feedback Quality"] },
  { type: "Playbook", title: "Using 360 Feedback in Succession Planning", body: "How to integrate multi-perspective feedback into your succession and HiPo conversations — without creating new process overhead.", tags: ["Talent Decisions"] },
  { type: "Playbook", title: "360 Feedback for Coaches: A Practical Guide", body: "How to use a structured 360 process as the foundation for coaching engagements — from setup through debrief.", tags: ["Leadership Development"] },
  { type: "Field Notes", title: "What Makes a 360 Report Actually Useful", body: "The common reasons 360 reports get filed and forgotten — and the design principles that make them worth reading.", tags: ["Feedback Quality"] },
];

const fieldNotes = [
  { type: "Framework", title: "The What/How Leadership Model", body: "A closer look at the two dimensions Interval 360 uses to assess leadership — and why both are required for a complete picture.", tags: ["Feedback Quality"] },
  { type: "Field Notes", title: "Why Most 360 Processes Fail at Collection", body: "The survey format problem is upstream. Here is why the collection method shapes everything that follows — and what conversational AI changes.", tags: ["Feedback Quality", "AI Governance"] },
  { type: "Field Notes", title: "How to Debrief a 360 Report", body: "A structured approach to delivering 360 feedback to a leader — what to lead with, what to hold back, and how to turn insight into a development commitment.", tags: ["Leadership Development"] },
  { type: "Framework", title: "AI and 360 Feedback: What's Appropriate", body: "Where AI belongs in the 360 process, where it does not, and how to evaluate whether a tool's AI use is responsible.", tags: ["AI Governance"] },
];

type Resource = {
  type: string;
  title: string;
  body: string;
  tags: string[];
};

function ResourceCard({ resource }: { resource: Resource }) {
  return (
    <div
      className="flex flex-col p-7 rounded-lg transition-shadow hover:shadow-md"
      style={{ background: "#fff", border: "1px solid var(--rule)" }}
    >
      <div className="flex items-center gap-3 mb-4">
        <span
          className="text-[0.68rem] font-bold tracking-[0.1em] uppercase px-2.5 py-1 rounded"
          style={{ background: "rgba(5,79,154,0.07)", color: "var(--navy)" }}
        >
          {resource.type}
        </span>
        <div className="flex gap-1.5 flex-wrap">
          {resource.tags.map((tag) => (
            <span key={tag} className="text-[0.68rem] px-2 py-0.5 rounded" style={{ background: "rgba(44,166,164,0.08)", color: "var(--teal)" }}>
              {tag}
            </span>
          ))}
        </div>
      </div>
      <h3 className="text-[1rem] font-semibold mb-3 flex-1" style={{ fontFamily: "var(--font-poppins)", color: "var(--navy-dark)" }}>
        {resource.title}
      </h3>
      <p className="text-[0.88rem] leading-[1.65] mb-5" style={{ color: "var(--slate)" }}>
        {resource.body}
      </p>
      <Link href="#" className="text-[0.85rem] font-semibold no-underline border-b border-current pb-0.5 w-fit transition-opacity hover:opacity-75" style={{ color: "var(--navy)" }}>
        Read →
      </Link>
    </div>
  );
}

export default function ResourcesPage() {
  return (
    <>
      <Nav />
      <PageHero
        eyebrow="Resources"
        title={<>Practical thinking on <span style={{ color: "var(--sky-blue)" }}>leadership feedback that works.</span></>}
        body="Playbooks, sample reports, field notes, and frameworks — built for HR leaders, coaches, and managers who want to make better use of 360 feedback."
      />

      {/* FILTER BAR */}
      <div style={{ background: "#fff", borderBottom: "1px solid var(--rule)" }}>
        <div className="page-gutter py-4 flex items-center gap-3 flex-wrap">
          <span className="text-[0.75rem] font-semibold" style={{ color: "var(--slate)" }}>Browse by</span>
          {filters.map((f, i) => (
            <button
              key={f}
              className="text-[0.78rem] px-3 py-1.5 rounded transition-all"
              style={
                i === 0
                  ? { background: "var(--navy)", color: "#fff", border: "1.5px solid var(--navy)" }
                  : { background: "transparent", color: "var(--slate)", border: "1.5px solid var(--rule)" }
              }
            >
              {f}
            </button>
          ))}
        </div>
      </div>

      {/* FEATURED REPORT */}
      <section className="py-20 page-gutter" style={{ background: "var(--light-bg)" }}>
        <div
          className="grid lg:grid-cols-2 gap-12 rounded-xl overflow-hidden"
          style={{ background: "#fff", border: "1px solid var(--rule)" }}
        >
          <div className="p-10 lg:p-14">
            <span
              className="inline-block text-[0.68rem] font-bold tracking-[0.1em] uppercase px-3 py-1 rounded mb-5"
              style={{ background: "rgba(44,166,164,0.1)", color: "var(--teal)" }}
            >
              Featured Resource
            </span>
            <h2 className="text-[1.6rem] font-bold leading-[1.25] mb-5" style={{ fontFamily: "var(--font-poppins)", color: "var(--navy-dark)" }}>
              See what a real Interval 360 report looks like.
            </h2>
            <p className="text-[1rem] leading-[1.75] mb-8" style={{ color: "var(--slate)" }}>
              The best way to evaluate any 360 tool is to look at the output. Every Interval 360 assessment produces two reports — one for the organization, one for the leader. Both are available as samples.
            </p>
            <div className="flex gap-4 flex-wrap">
              <Link href="/reports-and-outputs" className="text-[0.9rem] font-semibold px-6 py-3 rounded no-underline" style={{ background: "var(--teal)", color: "#fff" }}>
                View sample assessment report
              </Link>
              <Link href="/reports-and-outputs" className="text-[0.9rem] font-medium no-underline border-b border-current pb-0.5" style={{ color: "var(--navy)" }}>
                View sample development report →
              </Link>
            </div>
          </div>

          {/* Mini report mock */}
          <div className="p-8 flex flex-col gap-4" style={{ background: "var(--off-white)", borderLeft: "1px solid var(--rule)" }}>
            <div>
              <p className="text-[0.68rem] font-bold tracking-[0.12em] uppercase mb-2" style={{ color: "var(--slate)" }}>Executive Summary</p>
              <p className="text-[0.85rem] leading-[1.65]" style={{ color: "var(--charcoal)" }}>
                Strong operational credibility and consistent follow-through. Growth edge: creating space for others to lead — raters observe a tendency to stay too close to execution rather than delegating with confidence.
              </p>
            </div>
            <div className="grid grid-cols-3 gap-3">
              {[{ val: "4.2", label: "What Score" }, { val: "3.6", label: "How Score" }, { val: "8", label: "Raters" }].map((s) => (
                <div key={s.label} className="rounded p-3 text-center" style={{ background: "#fff", border: "1px solid var(--rule)" }}>
                  <p className="text-[1.2rem] font-bold" style={{ fontFamily: "var(--font-montserrat)", color: "var(--navy-dark)" }}>{s.val}</p>
                  <p className="text-[0.7rem]" style={{ color: "var(--slate)" }}>{s.label}</p>
                </div>
              ))}
            </div>
            <div>
              <p className="text-[0.68rem] font-bold tracking-[0.12em] uppercase mb-2" style={{ color: "var(--slate)" }}>Top Themes</p>
              {["Operational reliability — mentioned by 7 of 8 raters", "Strong under pressure — consistent across all rater groups", "Delegation gap — noted in 5 of 8 conversations"].map((t, i) => (
                <div key={i} className="flex items-center gap-2 text-[0.82rem] mb-1.5" style={{ color: "var(--charcoal)" }}>
                  <span className="w-2 h-2 rounded-full shrink-0" style={{ background: "var(--teal)" }} />
                  {t}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* PLAYBOOKS */}
      <section className="py-20 page-gutter" style={{ background: "#fff" }}>
        <div className="grid lg:grid-cols-2 gap-16 mb-12 items-end">
          <div>
            <p className="text-[0.72rem] font-semibold tracking-[0.2em] uppercase mb-4" style={{ color: "var(--teal)" }}>Playbooks</p>
            <h2 className="text-[clamp(1.7rem,3vw,2.3rem)] font-bold leading-[1.2] tracking-[-0.02em]" style={{ fontFamily: "var(--font-poppins)", color: "var(--navy-dark)" }}>
              Step-by-step guides for common 360 scenarios.
            </h2>
          </div>
          <p className="text-[1.05rem] leading-[1.75]" style={{ color: "var(--slate)" }}>
            Practical, opinionated guidance on how to run, interpret, and act on 360 feedback — without the jargon.
          </p>
        </div>
        <div className="grid lg:grid-cols-2 gap-6">
          {playbooks.map((pb) => <ResourceCard key={pb.title} resource={pb} />)}
        </div>
      </section>

      {/* FIELD NOTES */}
      <section className="py-20 page-gutter" style={{ background: "var(--light-bg)" }}>
        <div className="mb-12">
          <p className="text-[0.72rem] font-semibold tracking-[0.2em] uppercase mb-4" style={{ color: "var(--teal)" }}>Field Notes & Frameworks</p>
          <h2 className="text-[clamp(1.7rem,3vw,2.3rem)] font-bold leading-[1.2] tracking-[-0.02em]" style={{ fontFamily: "var(--font-poppins)", color: "var(--navy-dark)" }}>
            Thinking on 360 feedback, AI, and leadership.
          </h2>
        </div>
        <div className="grid lg:grid-cols-2 gap-6">
          {fieldNotes.map((fn) => <ResourceCard key={fn.title} resource={fn} />)}
        </div>
      </section>

      {/* CTA */}
      <section className="py-28 page-gutter text-center relative overflow-hidden" style={{ background: "linear-gradient(135deg, var(--navy-dark) 0%, var(--navy) 100%)" }}>
        <div className="absolute inset-0 pointer-events-none grid-pattern" />
        <div className="relative z-10">
          <h2 className="text-[clamp(1.7rem,3vw,2.3rem)] font-bold leading-[1.2] mb-5 mx-auto max-w-[28ch]" style={{ fontFamily: "var(--font-poppins)", color: "#fff" }}>
            Ready to put it into practice?
          </h2>
          <p className="text-[1.05rem] leading-[1.75] mb-10 mx-auto max-w-[48ch]" style={{ color: "rgba(234,239,243,0.7)" }}>
            Start with a single assessment or talk to us about running a full program.
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
