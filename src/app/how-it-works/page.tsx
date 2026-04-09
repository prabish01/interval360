import Link from "next/link";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import PageHero from "@/components/PageHero";

const stats = [
  { num: "~5 min", label: "Per feedback provider" },
  { num: "5–8", label: "Guided exchanges per conversation" },
  { num: "Days", label: "From launch to final report" },
  { num: "100%", label: "Automated synthesis — no manual work" },
];

const steps = [
  {
    num: "01",
    title: "Set up the assessment",
    body: "The leader or admin configures the assessment — selecting raters, setting the timeline, and choosing any role-specific focus areas. For self-serve users, setup takes minutes. For enterprise accounts, admins can configure and launch across a cohort from a single dashboard.",
    time: "Less than 10 minutes to launch",
  },
  {
    num: "02",
    title: "Raters complete a guided conversation",
    body: "Each feedback provider receives a link and works through a five-minute text based chat — not a long survey. The AI guides them through 5–8 exchanges, asking structured questions about the leader's performance and leadership. When responses are vague, it follows up with a targeted question to draw out specifics and context.",
    time: "~5 minutes per rater",
  },
  {
    num: "03",
    title: "Feedback is synthesized automatically",
    body: "Once feedback collection is complete, the platform synthesizes all responses into a structured report. There is no manual processing or analysis required. The synthesis identifies themes, strengths, development areas, and actionable next steps — across both the What and How dimensions.",
    time: "Automated — no wait time for processing",
  },
  {
    num: "04",
    title: "Leader and HR receive the report",
    body: "The completed report is delivered to the appropriate parties based on the access configuration. Leaders receive their individual report. HR admins can view individual reports and cohort analytics. Coaches receive a client-ready summary they can use directly in a debrief conversation.",
    time: "Available immediately on completion",
  },
  {
    num: "05",
    title: "Use it for development or decisions",
    body: "The report is designed to be used immediately — in a coaching conversation, a development planning session, a talent review, or a succession discussion. No interpretation layer required. No consultant needed to debrief it. Just results you can act on.",
    time: "Results ready to use the same day",
  },
];

const conversationExample = [
  { speaker: "ai", text: "Thank you for taking the time to share feedback. To start, can you describe one or two moments from the last six months where you observed this leader at their best — situations where their leadership made a real difference?" },
  { speaker: "rater", text: "Yeah, there were a few. The Q3 delivery crunch comes to mind. Everyone was stressed, timelines were slipping, and she just stayed calm, reset expectations with stakeholders really clearly, and kept the team focused. It didn't feel like the wheels were coming off even when they kind of were." },
  { speaker: "ai", text: "That's a useful example — it speaks to how she manages pressure and stakeholder communication. You mentioned she kept the team focused. How did she do that specifically? Was it through communication, structure, presence, or something else?" },
  { speaker: "rater", text: "More communication than anything. She ran a daily standup during that stretch, not to micromanage but just to surface blockers early. People knew what was happening. And she was transparent about what was at risk, which I think actually helped. No one was in the dark." },
];

export default function HowItWorksPage() {
  return (
    <>
      <Nav />
      <PageHero
        eyebrow="How It Works"
        title={<>From launch to insight in <span style={{ color: "var(--sky-blue)" }}>days — not weeks.</span></>}
        body="Interval 360 is designed to reduce friction at every stage of the 360 process — for the people providing feedback, for the leader receiving it, and for the HR team or coach running it."
        buttons={[
          { href: "/buy", label: "Buy an Assessment", variant: "teal" },
          { href: "/company#contact", label: "Book a Call", variant: "secondary" },
          { href: "#conversation", label: "See the conversation →", variant: "ghost" },
        ]}
      />

      {/* TIME STATS STRIP */}
      <div style={{ background: "var(--navy-dark)", borderBottom: "1px solid rgba(187,220,251,0.1)" }}>
        <div className="grid grid-cols-2 lg:grid-cols-4 px-[4vw] py-8">
          {stats.map((stat, i) => (
            <div
              key={i}
              className="flex flex-col items-center text-center py-4 px-6"
              style={{ borderRight: i < stats.length - 1 ? "1px solid rgba(187,220,251,0.12)" : "none" }}
            >
              <span className="text-[2rem] font-bold mb-1" style={{ fontFamily: "var(--font-montserrat)", color: "var(--teal-light)" }}>
                {stat.num}
              </span>
              <span className="text-[0.8rem] text-center" style={{ color: "rgba(234,239,243,0.55)" }}>
                {stat.label}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* STEPS */}
      <section style={{ background: "#fff" }}>
        <div className="content-wrap page-gutter py-24">
        <div className="grid lg:grid-cols-2 gap-16 mb-16 items-end">
          <div>
            <p className="text-[0.72rem] font-semibold tracking-[0.2em] uppercase mb-4" style={{ color: "var(--teal)" }}>The Process</p>
            <h2 className="text-[clamp(1.7rem,3vw,2.3rem)] font-bold leading-[1.2] tracking-[-0.02em]" style={{ fontFamily: "var(--font-poppins)", color: "var(--navy-dark)" }}>
              A better process from start to finish.
            </h2>
          </div>
          <p className="text-[1.05rem] leading-[1.75]" style={{ color: "var(--slate)" }}>
            Traditional 360 processes fail at both ends — the collection is burdensome, and the output is hard to use. Interval 360 is built to fix both.
          </p>
        </div>
        <div className="flex flex-col">
          {steps.map((step, i) => (
            <div
              key={i}
              className="grid items-start py-10 gap-8"
              style={{
                gridTemplateColumns: "4rem 1fr",
                borderTop: "1px solid var(--rule)",
                borderBottom: i === steps.length - 1 ? "1px solid var(--rule)" : "none",
              }}
            >
              <p className="text-[0.85rem] font-bold tracking-[0.06em] pt-0.5" style={{ fontFamily: "var(--font-montserrat)", color: "var(--teal)" }}>
                {step.num}
              </p>
              <div>
                <h3 className="text-[1.05rem] font-semibold mb-3" style={{ fontFamily: "var(--font-poppins)", color: "var(--navy-dark)" }}>
                  {step.title}
                </h3>
                <p className="text-[0.92rem] leading-[1.7] mb-4" style={{ color: "var(--slate)" }}>
                  {step.body}
                </p>
                <span
                  className="inline-block text-[0.72rem] font-semibold tracking-[0.1em] uppercase px-3 py-1 rounded"
                  style={{ background: "rgba(44,166,164,0.1)", color: "var(--teal)" }}
                >
                  {step.time}
                </span>
              </div>
            </div>
          ))}
        </div>
        </div>
      </section>

      {/* CONVERSATION EXAMPLE */}
      <section id="conversation" style={{ background: "var(--light-bg)" }}>
        <div className="content-wrap page-gutter py-24">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          <div>
            <p className="text-[0.72rem] font-semibold tracking-[0.2em] uppercase mb-4" style={{ color: "var(--teal)" }}>The Conversation</p>
            <h2 className="text-[clamp(1.7rem,3vw,2.3rem)] font-bold leading-[1.2] tracking-[-0.02em] mb-5" style={{ fontFamily: "var(--font-poppins)", color: "var(--navy-dark)" }}>
              What it actually looks like.
            </h2>
            <p className="text-[1.05rem] leading-[1.75] mb-6" style={{ color: "var(--slate)" }}>
              The AI starts with structured opening questions designed to elicit useful, specific input. When a response is general, it follows up with a targeted probe — the same way a skilled interviewer would.
            </p>
            <p className="text-[1.05rem] leading-[1.75]" style={{ color: "var(--slate)" }}>
              The result is feedback that is richer, more specific, and more useful than anything a static survey can produce — in the same amount of time.
            </p>
          </div>

          {/* Chat mock */}
          <div className="rounded-lg overflow-hidden shadow-xl" style={{ background: "#fff", border: "1px solid var(--rule)" }}>
            <div className="flex items-center gap-2 px-4 py-3" style={{ background: "var(--navy-dark)", borderBottom: "1px solid rgba(187,220,251,0.1)" }}>
              <div className="w-2.5 h-2.5 rounded-full" style={{ background: "#ff5f57" }} />
              <div className="w-2.5 h-2.5 rounded-full" style={{ background: "#febc2e" }} />
              <div className="w-2.5 h-2.5 rounded-full" style={{ background: "#28c840" }} />
              <span className="ml-3 text-[0.75rem]" style={{ color: "rgba(234,239,243,0.5)" }}>Interval 360 — Feedback Conversation</span>
            </div>
            <div className="p-6 flex flex-col gap-4">
              {conversationExample.map((msg, i) => (
                <div key={i} className={`flex ${msg.speaker === "rater" ? "justify-end" : "justify-start"}`}>
                  <div
                    className="max-w-[85%] px-4 py-3 rounded-lg text-[0.88rem] leading-[1.65]"
                    style={
                      msg.speaker === "ai"
                        ? { background: "var(--light-bg)", color: "var(--charcoal)", borderRadius: "4px 16px 16px 16px" }
                        : { background: "var(--navy)", color: "#fff", borderRadius: "16px 4px 16px 16px" }
                    }
                  >
                    {msg.speaker === "ai" && (
                      <span className="block text-[0.68rem] font-bold tracking-[0.1em] uppercase mb-1.5" style={{ color: "var(--teal)" }}>
                        Interval 360 AI
                      </span>
                    )}
                    {msg.text}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
        </div>
      </section>

      {/* WHAT YOU GET */}
      <section style={{ background: "var(--navy-dark)" }}>
        <div className="content-wrap page-gutter py-24">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <p className="text-[0.72rem] font-semibold tracking-[0.2em] uppercase mb-4" style={{ color: "var(--teal-light)" }}>What You Receive</p>
            <h2 className="text-[clamp(1.7rem,3vw,2.3rem)] font-bold leading-[1.2] tracking-[-0.02em] mb-5" style={{ fontFamily: "var(--font-poppins)", color: "#fff" }}>
              Two purpose-built reports.
            </h2>
            <p className="text-[1.05rem] leading-[1.75] mb-8" style={{ color: "rgba(234,239,243,0.7)" }}>
              Every Interval 360 assessment produces two distinct reports — one for the organization and one for the leader. Both are designed to be used directly, without additional interpretation.
            </p>
            <div className="flex gap-4 flex-wrap">
              <Link href="/reports-and-outputs" className="text-[0.9rem] font-semibold px-6 py-3 rounded no-underline" style={{ background: "var(--teal)", color: "#fff" }}>
                See report structure →
              </Link>
            </div>
          </div>
          <div className="flex flex-col gap-4">
            {[
              { label: "Assessment Report", title: "For managers, HR, and talent decisions", items: ["Executive summary across all feedback", "What + How leadership analysis", "Strengths and development areas", "Succession and placement signal"] },
              { label: "Development Report", title: "For the leader themselves", items: ["Structured deep-dive on each theme", "Specific examples and patterns", "Curated development resources", "Actionable next steps and focus areas"] },
            ].map((report, i) => (
              <div key={i} className="rounded-lg p-6" style={{ background: "rgba(255,255,255,0.05)", border: "1px solid rgba(187,220,251,0.15)" }}>
                <p className="text-[0.68rem] font-bold tracking-[0.1em] uppercase mb-2" style={{ color: "var(--teal)" }}>{report.label}</p>
                <h4 className="text-[1rem] font-semibold mb-4" style={{ color: "#fff" }}>{report.title}</h4>
                <ul className="flex flex-col gap-2">
                  {report.items.map((item) => (
                    <li key={item} className="flex items-center gap-2.5 text-[0.85rem]" style={{ color: "rgba(234,239,243,0.7)" }}>
                      <span className="w-1 h-1 rounded-full shrink-0" style={{ background: "var(--teal)" }} />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative overflow-hidden" style={{ background: "linear-gradient(135deg, var(--navy-dark) 0%, var(--navy) 100%)" }}>
        <div className="absolute inset-0 pointer-events-none grid-pattern" />
        <div className="relative z-10 content-wrap page-gutter py-28 text-center">
          <h2 className="text-[clamp(1.7rem,3vw,2.3rem)] font-bold leading-[1.2] mb-5 mx-auto max-w-[28ch]" style={{ fontFamily: "var(--font-poppins)", color: "#fff" }}>
            Ready to see the process in action?
          </h2>
          <p className="text-[1.05rem] leading-[1.75] mb-10 mx-auto max-w-[48ch]" style={{ color: "rgba(234,239,243,0.7)" }}>
            Buy a single assessment and experience the full process — from setup to report.
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
