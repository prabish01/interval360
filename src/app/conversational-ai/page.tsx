import Link from "next/link";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import PageHero from "@/components/PageHero";

const surveyVsConvo = {
  survey: [
    "Fixed questions for every rater — no adaptation based on responses",
    'Rating scales produce scores, not insight — "4 out of 5" says nothing specific',
    "Open text fields produce inconsistent depth — some raters write one word, others write paragraphs",
    "No mechanism to ask for an example when an answer is too general",
    "30–50 items creates fatigue — raters rush through later questions",
    "Output is shaped by what raters chose to volunteer, not by what would be most useful",
  ],
  conversation: [
    "Questions adapt based on what the rater says — the AI probes where it matters",
    "Structured conversation produces specific examples, context, and patterns",
    "Follow-up logic draws out depth consistently — every rater gets the same quality of probing",
    "When a response is too general, the AI asks for a specific example",
    "5–8 focused exchanges — lower burden, higher quality",
    "The AI guides toward the information that makes output useful",
  ],
};

const followUpExample = [
  { speaker: "ai", text: "You mentioned that Sarah tends to communicate well. Can you give me a specific example of a situation in the last few months where you saw that play out — what happened, and what made her communication particularly effective in that moment?" },
  { speaker: "rater", text: "Yeah, there was that product roadmap meeting where there were some real tensions between engineering and product. She came in with a clear framing of the tradeoffs, didn't oversimplify things, but also made it easy for people to understand what we were actually deciding. She got everyone aligned within the hour." },
  { speaker: "ai", text: "That's useful context. Was this a one-time thing, or do you see this kind of structured clarity show up consistently when there's tension or ambiguity in a room?" },
  { speaker: "rater", text: "Consistently. She's actually one of the few people I've worked with who seems to get calmer when things get more complicated. It's like the complexity helps her focus." },
];

const governanceItems = [
  { title: "What the AI does", body: "The AI guides the conversation, probes for specificity, and synthesizes responses into a structured report. It does not interpret the meaning of feedback or make talent decisions." },
  { title: "What the AI does not do", body: "The AI does not make promotion or succession recommendations. It does not filter or rank feedback providers. It does not have visibility into the leader's HR record or performance history." },
  { title: "How anonymity is protected", body: "The AI is designed to avoid surfacing identifying details in synthesis. Individual responses are not attributed to specific raters in the output. Synthesis is built to reflect patterns across all feedback, not individual voices." },
  { title: "How bias is managed", body: "The starting questions are structured to focus on observable behavior and specific examples — not personal attributes. The follow-up logic is designed to draw out patterns across contexts, not to reinforce initial impressions." },
];

export default function ConversationalAIPage() {
  return (
    <>
      <Nav />
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

      {/* THESIS */}
      <section className="py-24 page-gutter" style={{ background: "#fff" }}>
        <div className="grid lg:grid-cols-[5fr_7fr] gap-24 items-start">
          <div>
            <p className="text-[0.72rem] font-semibold tracking-[0.2em] uppercase mb-4" style={{ color: "var(--teal)" }}>Why Conversation Produces Better Data</p>
            <h2 className="text-[clamp(1.7rem,3vw,2.3rem)] font-bold leading-[1.2] tracking-[-0.02em]" style={{ fontFamily: "var(--font-poppins)", color: "var(--navy-dark)" }}>
              The problem with static surveys is the format itself.
            </h2>
          </div>
          <div className="flex flex-col gap-5">
            <p className="text-[1rem] leading-[1.75]" style={{ color: "var(--slate)" }}>
              Traditional 360 surveys ask every rater the same fixed questions regardless of what they say. A rating of 4 out of 5 on &ldquo;communicates effectively&rdquo; tells you almost nothing useful — there is no context, no example, no pattern. Multiply that across 30 questions and 8 raters and you have a lot of data that is difficult to interpret and hard to act on.
            </p>
            <p className="text-[1rem] leading-[1.75]" style={{ color: "var(--slate)" }}>
              The issue is not the questions. It is the format. Surveys cannot probe. They cannot say &ldquo;can you give me a specific example?&rdquo; or &ldquo;is this a recent pattern or something you&apos;ve observed over time?&rdquo; A conversation can.
            </p>
            <p className="text-[1rem] leading-[1.75]" style={{ color: "var(--slate)" }}>
              Interval 360 replaces the static survey with a structured conversation guided by AI. The starting questions are designed to elicit useful input — anchored to the What/How framework — and the follow-up logic is designed to dig deeper when responses are vague.
            </p>
            <div
              className="pl-6 py-4 pr-4 rounded-r mt-2"
              style={{ background: "var(--light-bg)", borderLeft: "3px solid var(--teal)" }}
            >
              <p className="italic text-[0.95rem] leading-[1.7]" style={{ color: "var(--navy-dark)" }}>
                &ldquo;The quality of insight you get from a 360 is determined upstream — at the point of collection. Better conversations produce better data. Better data produces better outputs.&rdquo;
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* SURVEY VS CONVERSATION */}
      <section className="py-24 page-gutter" style={{ background: "var(--light-bg)" }}>
        <div className="grid lg:grid-cols-2 gap-16 mb-14 items-end">
          <div>
            <p className="text-[0.72rem] font-semibold tracking-[0.2em] uppercase mb-4" style={{ color: "var(--teal)" }}>Survey vs. Conversation</p>
            <h2 className="text-[clamp(1.7rem,3vw,2.3rem)] font-bold leading-[1.2] tracking-[-0.02em]" style={{ fontFamily: "var(--font-poppins)", color: "var(--navy-dark)" }}>
              Why the format change matters.
            </h2>
          </div>
          <p className="text-[1.05rem] leading-[1.75]" style={{ color: "var(--slate)" }}>
            These are not two versions of the same thing. The format shapes the kind of feedback you get — and the kind of report you can produce from it.
          </p>
        </div>
        <div className="grid lg:grid-cols-2 gap-6">
          {/* Survey column */}
          <div className="rounded-lg overflow-hidden" style={{ border: "1px solid var(--rule)" }}>
            <div className="px-6 py-4" style={{ background: "var(--warm-gray)" }}>
              <span className="text-[0.75rem] font-bold tracking-[0.1em] uppercase" style={{ color: "#fff" }}>Traditional Survey</span>
            </div>
            <div className="flex flex-col">
              {surveyVsConvo.survey.map((item, i) => (
                <div key={i} className="flex items-start gap-3 px-6 py-4" style={{ background: "#fff", borderBottom: i < surveyVsConvo.survey.length - 1 ? "1px solid var(--rule)" : "none" }}>
                  <span className="text-[1rem] shrink-0 mt-0.5" style={{ color: "#d9534f" }}>✗</span>
                  <p className="text-[0.88rem] leading-[1.65]" style={{ color: "var(--slate)" }}>{item}</p>
                </div>
              ))}
            </div>
          </div>
          {/* Conversation column */}
          <div className="rounded-lg overflow-hidden" style={{ border: "2px solid var(--teal)" }}>
            <div className="px-6 py-4" style={{ background: "var(--teal)" }}>
              <span className="text-[0.75rem] font-bold tracking-[0.1em] uppercase" style={{ color: "#fff" }}>Interval 360 Conversation</span>
            </div>
            <div className="flex flex-col">
              {surveyVsConvo.conversation.map((item, i) => (
                <div key={i} className="flex items-start gap-3 px-6 py-4" style={{ background: "#fff", borderBottom: i < surveyVsConvo.conversation.length - 1 ? "1px solid var(--rule)" : "none" }}>
                  <span className="text-[1rem] shrink-0 mt-0.5" style={{ color: "var(--teal)" }}>✓</span>
                  <p className="text-[0.88rem] leading-[1.65]" style={{ color: "var(--charcoal)" }}>{item}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* FOLLOW-UP EXAMPLE */}
      <section className="py-24 page-gutter" id="followup" style={{ background: "#fff" }}>
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          <div>
            <p className="text-[0.72rem] font-semibold tracking-[0.2em] uppercase mb-4" style={{ color: "var(--teal)" }}>The Follow-Up Logic</p>
            <h2 className="text-[clamp(1.7rem,3vw,2.3rem)] font-bold leading-[1.2] tracking-[-0.02em] mb-5" style={{ fontFamily: "var(--font-poppins)", color: "var(--navy-dark)" }}>
              What an AI probe looks like in practice.
            </h2>
            <p className="text-[1.05rem] leading-[1.75] mb-5" style={{ color: "var(--slate)" }}>
              When a rater gives a general response — something like &ldquo;she communicates well&rdquo; — the AI does not accept that and move on. It asks for something specific: an example, a context, a pattern.
            </p>
            <p className="text-[1.05rem] leading-[1.75]" style={{ color: "var(--slate)" }}>
              This follow-up logic is what produces the kind of specific, rich feedback that makes a 360 report genuinely useful.
            </p>
          </div>
          {/* Chat mock */}
          <div className="rounded-lg overflow-hidden shadow-xl" style={{ background: "#fff", border: "1px solid var(--rule)" }}>
            <div className="flex items-center gap-2 px-4 py-3" style={{ background: "var(--navy-dark)" }}>
              <div className="w-2.5 h-2.5 rounded-full" style={{ background: "#ff5f57" }} />
              <div className="w-2.5 h-2.5 rounded-full" style={{ background: "#febc2e" }} />
              <div className="w-2.5 h-2.5 rounded-full" style={{ background: "#28c840" }} />
              <span className="ml-3 text-[0.75rem]" style={{ color: "rgba(234,239,243,0.5)" }}>AI Follow-Up Example</span>
            </div>
            <div className="p-6 flex flex-col gap-4">
              {followUpExample.map((msg, i) => (
                <div key={i} className={`flex ${msg.speaker === "rater" ? "justify-end" : "justify-start"}`}>
                  <div
                    className="max-w-[85%] px-4 py-3 text-[0.88rem] leading-[1.65]"
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
      </section>

      {/* AI GOVERNANCE */}
      <section className="py-24 page-gutter" id="governance" style={{ background: "var(--light-bg)" }}>
        <div className="mb-12">
          <p className="text-[0.72rem] font-semibold tracking-[0.2em] uppercase mb-4" style={{ color: "var(--teal)" }}>AI Governance</p>
          <h2 className="text-[clamp(1.7rem,3vw,2.3rem)] font-bold leading-[1.2] tracking-[-0.02em] mb-5 max-w-[28ch]" style={{ fontFamily: "var(--font-poppins)", color: "var(--navy-dark)" }}>
            Transparent about what AI does and doesn&apos;t do here.
          </h2>
          <p className="text-[1.05rem] leading-[1.75] max-w-[60ch]" style={{ color: "var(--slate)" }}>
            AI is excellent at gathering signal, organizing patterns, and reducing administrative burden. It is not the final decision-maker on people.
          </p>
        </div>
        <div className="grid lg:grid-cols-2 gap-6">
          {governanceItems.map((item, i) => (
            <div key={i} className="p-8 rounded-lg" style={{ background: "#fff", border: "1px solid var(--rule)" }}>
              <h3 className="text-[1rem] font-semibold mb-3" style={{ fontFamily: "var(--font-poppins)", color: "var(--navy-dark)" }}>
                {item.title}
              </h3>
              <p className="text-[0.92rem] leading-[1.7]" style={{ color: "var(--slate)" }}>
                {item.body}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="py-28 page-gutter text-center relative overflow-hidden" style={{ background: "linear-gradient(135deg, var(--navy-dark) 0%, var(--navy) 100%)" }}>
        <div className="absolute inset-0 pointer-events-none grid-pattern" />
        <div className="relative z-10">
          <h2 className="text-[clamp(1.7rem,3vw,2.3rem)] font-bold leading-[1.2] mb-5 mx-auto max-w-[28ch]" style={{ fontFamily: "var(--font-poppins)", color: "#fff" }}>
            See what better data produces.
          </h2>
          <p className="text-[1.05rem] leading-[1.75] mb-10 mx-auto max-w-[48ch]" style={{ color: "rgba(234,239,243,0.7)" }}>
            Buy a single assessment and see the full process — from conversation to report.
          </p>
          <div className="flex gap-4 justify-center flex-wrap">
            <Link href="/buy" className="text-[0.9rem] font-semibold px-8 py-3.5 rounded no-underline" style={{ background: "var(--teal)", color: "#fff" }}>
              Buy an Assessment
            </Link>
            <Link href="/reports-and-outputs" className="text-[0.9rem] font-medium px-8 py-3.5 rounded border-[1.5px] no-underline" style={{ color: "#fff", borderColor: "rgba(255,255,255,0.4)", background: "transparent" }}>
              See Sample Reports
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
