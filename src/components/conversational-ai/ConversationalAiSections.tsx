import Link from "next/link";
import PageHero from "@/components/PageHero";
import { followUpExample, governanceItems, surveyVsConvo } from "./data";

export default function ConversationalAiSections() {
  return (
    <>
      <PageHero
        eyebrow="Conversational AI Quality"
        title={<>AI that improves signal quality — <span style={{ color: "var(--sky-blue)" }}>without creating a black box.</span></>}
        body="The quality of a 360 report is only as good as the quality of the feedback collected. Interval 360 uses conversational AI to gather more specific, more contextual input than static surveys can produce — and does it transparently."
        buttons={[
          { href: "#followup", label: "See it in action", variant: "teal" },
          { href: "#governance", label: "AI governance ↓", variant: "secondary" },
          { href: "/reports-and-outputs", label: "View sample report →", variant: "ghost" },
        ]}
      />

      <section className="py-24 page-gutter" style={{ background: "#fff" }}>
        <div className="grid lg:grid-cols-[5fr_7fr] gap-24 items-start">
          <div>
            <p className="text-[0.72rem] font-semibold tracking-[0.2em] uppercase mb-4" style={{ color: "var(--teal)" }}>Why Conversation Produces Better Data</p>
            <h2 className="text-[clamp(1.7rem,3vw,2.3rem)] font-bold leading-[1.2] tracking-[-0.02em]" style={{ fontFamily: "var(--font-poppins)", color: "var(--navy-dark)" }}>
              The problem with static surveys is the format itself.
            </h2>
          </div>
          <div className="flex flex-col gap-5">
            <p className="text-[1rem] leading-[1.75]" style={{ color: "var(--slate)" }}>Traditional 360 surveys ask every rater the same fixed questions regardless of what they say. A rating of 4 out of 5 on &ldquo;communicates effectively&rdquo; tells you almost nothing useful — there is no context, no example, no pattern.</p>
            <p className="text-[1rem] leading-[1.75]" style={{ color: "var(--slate)" }}>The issue is not the questions. It is the format. Surveys cannot probe. A conversation can.</p>
            <p className="text-[1rem] leading-[1.75]" style={{ color: "var(--slate)" }}>Interval 360 replaces the static survey with a structured conversation guided by AI.</p>
          </div>
        </div>
      </section>

      <section className="py-24 page-gutter" style={{ background: "var(--light-bg)" }}>
        <div className="grid lg:grid-cols-2 gap-6">
          <div className="rounded-lg overflow-hidden" style={{ border: "1px solid var(--rule)" }}>
            <div className="px-6 py-4" style={{ background: "var(--warm-gray)" }}><span className="text-[0.75rem] font-bold tracking-[0.1em] uppercase" style={{ color: "#fff" }}>Traditional Survey</span></div>
            <div className="flex flex-col">{surveyVsConvo.survey.map((item, i) => <div key={i} className="flex items-start gap-3 px-6 py-4" style={{ background: "#fff", borderBottom: i < surveyVsConvo.survey.length - 1 ? "1px solid var(--rule)" : "none" }}><span className="text-[1rem] shrink-0 mt-0.5" style={{ color: "#d9534f" }}>✗</span><p className="text-[0.88rem] leading-[1.65]" style={{ color: "var(--slate)" }}>{item}</p></div>)}</div>
          </div>
          <div className="rounded-lg overflow-hidden" style={{ border: "2px solid var(--teal)" }}>
            <div className="px-6 py-4" style={{ background: "var(--teal)" }}><span className="text-[0.75rem] font-bold tracking-[0.1em] uppercase" style={{ color: "#fff" }}>Interval 360 Conversation</span></div>
            <div className="flex flex-col">{surveyVsConvo.conversation.map((item, i) => <div key={i} className="flex items-start gap-3 px-6 py-4" style={{ background: "#fff", borderBottom: i < surveyVsConvo.conversation.length - 1 ? "1px solid var(--rule)" : "none" }}><span className="text-[1rem] shrink-0 mt-0.5" style={{ color: "var(--teal)" }}>✓</span><p className="text-[0.88rem] leading-[1.65]" style={{ color: "var(--charcoal)" }}>{item}</p></div>)}</div>
          </div>
        </div>
      </section>

      <section className="py-24 page-gutter" id="followup" style={{ background: "#fff" }}>
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          <div>
            <p className="text-[0.72rem] font-semibold tracking-[0.2em] uppercase mb-4" style={{ color: "var(--teal)" }}>The Follow-Up Logic</p>
            <h2 className="text-[clamp(1.7rem,3vw,2.3rem)] font-bold leading-[1.2] tracking-[-0.02em] mb-5" style={{ fontFamily: "var(--font-poppins)", color: "var(--navy-dark)" }}>What an AI probe looks like in practice.</h2>
          </div>
          <div className="rounded-lg overflow-hidden shadow-xl" style={{ background: "#fff", border: "1px solid var(--rule)" }}>
            <div className="flex items-center gap-2 px-4 py-3" style={{ background: "var(--navy-dark)" }}><div className="w-2.5 h-2.5 rounded-full" style={{ background: "#ff5f57" }} /><div className="w-2.5 h-2.5 rounded-full" style={{ background: "#febc2e" }} /><div className="w-2.5 h-2.5 rounded-full" style={{ background: "#28c840" }} /></div>
            <div className="p-6 flex flex-col gap-4">
              {followUpExample.map((msg, i) => (
                <div key={i} className={`flex ${msg.speaker === "rater" ? "justify-end" : "justify-start"}`}>
                  <div className="max-w-[85%] px-4 py-3 text-[0.88rem] leading-[1.65]" style={msg.speaker === "ai" ? { background: "var(--light-bg)", color: "var(--charcoal)", borderRadius: "4px 16px 16px 16px" } : { background: "var(--navy)", color: "#fff", borderRadius: "16px 4px 16px 16px" }}>
                    {msg.text}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 page-gutter" id="governance" style={{ background: "var(--light-bg)" }}>
        <div className="grid lg:grid-cols-2 gap-6">
          {governanceItems.map((item, i) => (
            <div key={i} className="p-8 rounded-lg" style={{ background: "#fff", border: "1px solid var(--rule)" }}>
              <h3 className="text-[1rem] font-semibold mb-3" style={{ fontFamily: "var(--font-poppins)", color: "var(--navy-dark)" }}>{item.title}</h3>
              <p className="text-[0.92rem] leading-[1.7]" style={{ color: "var(--slate)" }}>{item.body}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="py-28 page-gutter text-center relative overflow-hidden" style={{ background: "linear-gradient(135deg, var(--navy-dark) 0%, var(--navy) 100%)" }}>
        <div className="absolute inset-0 pointer-events-none grid-pattern" />
        <div className="relative z-10">
          <h2 className="text-[clamp(1.7rem,3vw,2.3rem)] font-bold leading-[1.2] mb-5 mx-auto max-w-[28ch]" style={{ fontFamily: "var(--font-poppins)", color: "#fff" }}>See what better data produces.</h2>
          <div className="flex gap-4 justify-center flex-wrap">
            <Link href="/buy" className="text-[0.9rem] font-semibold px-8 py-3.5 rounded no-underline" style={{ background: "var(--teal)", color: "#fff" }}>Buy an Assessment</Link>
            <Link href="/reports-and-outputs" className="text-[0.9rem] font-medium px-8 py-3.5 rounded border-[1.5px] no-underline" style={{ color: "#fff", borderColor: "rgba(255,255,255,0.4)", background: "transparent" }}>See Sample Reports</Link>
          </div>
        </div>
      </section>
    </>
  );
}
