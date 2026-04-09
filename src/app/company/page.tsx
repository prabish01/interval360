import Link from "next/link";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import PageHero from "@/components/PageHero";

const principles = [
  { num: "Principle 01", title: "Measure impact, not just intent", body: "Leaders are not experienced through their intentions. They are experienced through their behavior and its effect on other people. Interval 360 is built to capture that real-world impact, because that is what drives trust, performance, and better talent decisions." },
  { num: "Principle 02", title: "Confidentiality is non-negotiable", body: "People give better feedback when they trust the process. We are explicit about what will and will not be shared, and we protect anonymity through the design of the platform, not just through policy language. Trust is a prerequisite for honest data." },
  { num: "Principle 03", title: "AI should strengthen judgment, not replace it", body: "AI is excellent at gathering signal, organizing patterns, and reducing administrative burden. It should not be the final decision-maker on people. Our role is to surface sharper insight so managers, HR leaders, and executives can apply human judgment with better information." },
  { num: "Principle 04", title: "Speed should increase quality, not reduce it", body: "Most 360 processes are slow, expensive, and difficult to repeat. We believe speed matters because feedback is more useful when it is timely and easier to deploy at scale. The goal is not to make feedback lighter. It is to make strong feedback easier to access." },
  { num: "Principle 05", title: "What gets delivered and how it gets delivered both matter", body: "Performance is not one-dimensional. Results matter, and so does the way a leader creates those results. Interval 360 is built around that distinction so organizations can make better development, promotion, and succession decisions with a fuller picture." },
  { num: "Principle 06", title: "Specificity over scores", body: "A number can flag an issue, but it rarely explains it. Real development happens when feedback includes examples, context, and patterns people can actually understand and act on. We design every part of the process to produce signal, not just ratings." },
];

const credentials = [
  { label: "Executive Assessment", title: "Experience evaluating leaders across industries and company stages", body: "The team has direct experience conducting structured leadership assessments for executive hiring, succession planning, and high-potential identification — including the kind of qualitative interviews that Interval 360 now automates." },
  { label: "Leadership Coaching", title: "Years using 360 outputs as the foundation for coaching engagements", body: "We know what makes a 360 report useful in a coaching context — and what makes it a document that gets filed and forgotten. The output structure in Interval 360 reflects what actually surfaces productive coaching conversations." },
  { label: "Succession and Talent Planning", title: "Helps organizations see leadership readiness more clearly", body: "High-stakes talent decisions should not rely on instinct alone. By capturing structured feedback on both results and leadership approach, Interval 360 gives organizations better visibility into who is ready now, who is growing, and where development support may be needed." },
  { label: "HR and Talent Partnerships", title: "Collaborated with HR and talent teams on high-stakes people decisions", body: "We understand the organizational dynamics around 360 feedback — who sees what, how results get used in calibration conversations, and the political realities that determine whether feedback gets acted on or not." },
];

const whatItIs = [
  "A fast, structured 360 assessment process that takes minutes to complete — not hours",
  "A platform that produces two professional-quality outputs: one for the organization, one for the leader",
  "An AI-assisted collection layer that produces more specific, contextual input than static surveys can deliver",
  "A scalable tool that works for one leader buying independently, or for enterprise teams running hundreds of assessments",
  "A complement to, not a replacement for, human judgment in talent decisions",
];

const whatItIsNot = [
  "A full HRIS or talent management platform",
  "A psychometric assessment or personality instrument",
  "A replacement for structured executive assessment or competency-based interviews",
  "A tool for continuous performance management or OKR tracking",
  "An anonymous forum or peer review system without structure",
];

export default function CompanyPage() {
  return (
    <>
      <Nav />
      <PageHero
        eyebrow="Company"
        title={<>Built by people who have <span style={{ color: "var(--sky-blue)" }}>run assessments, not just designed them.</span></>}
        body="Interval 360 was founded by executive assessors and coaches who spent years collecting leadership feedback the slow way — and decided there had to be a better process."
      />

      {/* OUR STORY */}
      <section style={{ background: "#fff" }}>
        <div className="content-wrap page-gutter py-24">
        <div className="grid lg:grid-cols-[5fr_7fr] gap-24 items-start">
          <div>
            <p className="text-[0.72rem] font-semibold tracking-[0.2em] uppercase mb-4" style={{ color: "var(--teal)" }}>Our Story</p>
            <h2 className="text-[clamp(1.7rem,3vw,2.3rem)] font-bold leading-[1.2] tracking-[-0.02em]" style={{ fontFamily: "var(--font-poppins)", color: "var(--navy-dark)" }}>
              Why we reimagined the 360.
            </h2>
          </div>
          <div className="flex flex-col gap-5">
            <p className="text-[1rem] leading-[1.75]" style={{ color: "var(--slate)" }}>
              After fifteen years running executive assessments and leadership development programs inside some of the world&apos;s largest organizations, the founders of Interval 360 clearly understood that 360 assessments worked. When done well, 360s can accelerate development, sharpen self-awareness, and provide HR teams with the kind of data that actually informs talent decisions.
            </p>
            <p className="text-[1rem] leading-[1.75]" style={{ color: "var(--slate)" }}>
              The problem wasn&apos;t the concept. It was everything around it.
            </p>
            <p className="text-[1rem] leading-[1.75]" style={{ color: "var(--slate)" }}>
              360s were expensive and complex to run, so they got reserved for senior leaders, leaving the majority of the organization without meaningful feedback. When they were deployed more broadly, the process was cumbersome enough to tank participation rates and produce shallow responses. The reports that came back were dense and hard to act on. And because the whole thing took months to execute, it happened once — maybe twice — and then stopped. No cadence. No trend data. No continuity.
            </p>
            <p className="text-[1rem] leading-[1.75]" style={{ color: "var(--slate)" }}>
              The result: 360 assessments were being done in pockets, sporadically, and often not well. The organizations that needed it most — running talent reviews, building bench strength, developing managers at scale — couldn&apos;t operationalize it.
            </p>
            <p className="text-[1rem] leading-[1.75]" style={{ color: "var(--slate)" }}>
              That&apos;s where Interval 360 comes from. A platform designed to collect meaningful feedback in five minutes, synthesize it into a focused and actionable report, and run cheaply enough to deploy across the full enterprise — not just the C-suite — at regular intervals.
            </p>
            <div
              className="pl-6 py-4 pr-4 rounded-r mt-2"
              style={{ background: "var(--light-bg)", borderLeft: "3px solid var(--teal)" }}
            >
              <p className="italic text-[0.95rem] leading-[1.7]" style={{ color: "var(--navy-dark)" }}>
                &ldquo;We didn&apos;t set out to build another assessment tool. We set out to solve the puzzle — why something this valuable gets used so rarely. The answer turned out to be cost, burden, and outputs that didn&apos;t earn their keep. So we fixed those things.&rdquo;
              </p>
            </div>
          </div>
        </div>
        </div>
      </section>

      {/* PRINCIPLES */}
      <section style={{ background: "var(--light-bg)" }}>
        <div className="content-wrap page-gutter py-24">
        <div className="grid lg:grid-cols-2 gap-16 mb-14 items-end">
          <div>
            <p className="text-[0.72rem] font-semibold tracking-[0.2em] uppercase mb-4" style={{ color: "var(--teal)" }}>Our Approach</p>
            <h2 className="text-[clamp(1.7rem,3vw,2.3rem)] font-bold leading-[1.2] tracking-[-0.02em]" style={{ fontFamily: "var(--font-poppins)", color: "var(--navy-dark)" }}>
              A few principles we won&apos;t compromise on.
            </h2>
          </div>
          <p className="text-[1.05rem] leading-[1.75]" style={{ color: "var(--slate)" }}>
            These are not values written for a wall. They are the specific choices that shape how we have built the product and how we work with customers.
          </p>
        </div>
        <div className="grid lg:grid-cols-2 gap-6">
          {principles.map((p, i) => (
            <div key={i} className="p-8 rounded-lg" style={{ background: "#fff", border: "1px solid var(--rule)" }}>
              <p className="text-[0.72rem] font-bold tracking-[0.12em] uppercase mb-3" style={{ color: "var(--teal)" }}>
                {p.num}
              </p>
              <h3 className="text-[1.05rem] font-semibold mb-3" style={{ fontFamily: "var(--font-poppins)", color: "var(--navy-dark)" }}>
                {p.title}
              </h3>
              <p className="text-[0.92rem] leading-[1.7]" style={{ color: "var(--slate)" }}>
                {p.body}
              </p>
            </div>
          ))}
        </div>
        </div>
      </section>

      {/* BACKGROUND */}
      <section style={{ background: "#fff" }}>
        <div className="content-wrap page-gutter py-24">
        <div className="mb-12">
          <p className="text-[0.72rem] font-semibold tracking-[0.2em] uppercase mb-4" style={{ color: "var(--teal)" }}>Our Background</p>
          <h2 className="text-[clamp(1.7rem,3vw,2.3rem)] font-bold leading-[1.2] tracking-[-0.02em] mb-5" style={{ fontFamily: "var(--font-poppins)", color: "var(--navy-dark)" }}>
            Built by practitioners, not theorists.
          </h2>
          <p className="text-[1.05rem] leading-[1.75] max-w-[60ch]" style={{ color: "var(--slate)" }}>
            The founding team brings direct experience running executive assessments, leadership development programs, and organizational coaching engagements across a range of industries and company stages.
          </p>
        </div>
        <div className="grid lg:grid-cols-2 gap-6">
          {credentials.map((cred, i) => (
            <div key={i} className="p-8 rounded-lg" style={{ background: "var(--light-bg)" }}>
              <p className="text-[0.72rem] font-bold tracking-[0.12em] uppercase mb-3" style={{ color: "var(--teal)" }}>
                {cred.label}
              </p>
              <h3 className="text-[1.05rem] font-semibold mb-3" style={{ fontFamily: "var(--font-poppins)", color: "var(--navy-dark)" }}>
                {cred.title}
              </h3>
              <p className="text-[0.92rem] leading-[1.7]" style={{ color: "var(--slate)" }}>
                {cred.body}
              </p>
            </div>
          ))}
        </div>
        </div>
      </section>

      {/* WHAT IT IS / IS NOT */}
      <section style={{ background: "var(--light-bg)" }}>
        <div className="content-wrap page-gutter py-24">
        <div className="mb-12">
          <p className="text-[0.72rem] font-semibold tracking-[0.2em] uppercase mb-4" style={{ color: "var(--teal)" }}>Clarity on Scope</p>
          <h2 className="text-[clamp(1.7rem,3vw,2.3rem)] font-bold leading-[1.2] tracking-[-0.02em]" style={{ fontFamily: "var(--font-poppins)", color: "var(--navy-dark)" }}>
            What Interval 360 is — and is not.
          </h2>
        </div>
        <div className="grid lg:grid-cols-2 gap-6">
          <div className="rounded-lg overflow-hidden" style={{ border: "1px solid var(--rule)" }}>
            <div className="px-6 py-4" style={{ background: "var(--teal)" }}>
              <span className="text-[0.75rem] font-bold tracking-[0.1em] uppercase" style={{ color: "#fff" }}>What It Is</span>
            </div>
            <div className="flex flex-col">
              {whatItIs.map((item, i) => (
                <div key={i} className="flex items-start gap-3 px-6 py-4" style={{ background: "#fff", borderBottom: i < whatItIs.length - 1 ? "1px solid var(--rule)" : "none" }}>
                  <div className="rounded-full flex items-center justify-center shrink-0 mt-0.5" style={{ background: "var(--teal)", width: 18, height: 18, minWidth: 18 }}>
                    <svg width="10" height="10" viewBox="0 0 10 10" fill="none">
                      <path d="M2 5l2.5 2.5L8 3" stroke="#fff" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>
                  <p className="text-[0.88rem] leading-[1.65]" style={{ color: "var(--charcoal)" }}>{item}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="rounded-lg overflow-hidden" style={{ border: "1px solid var(--rule)" }}>
            <div className="px-6 py-4" style={{ background: "var(--warm-gray)" }}>
              <span className="text-[0.75rem] font-bold tracking-[0.1em] uppercase" style={{ color: "#fff" }}>What It Is Not</span>
            </div>
            <div className="flex flex-col">
              {whatItIsNot.map((item, i) => (
                <div key={i} className="flex items-start gap-3 px-6 py-4" style={{ background: "#fff", borderBottom: i < whatItIsNot.length - 1 ? "1px solid var(--rule)" : "none" }}>
                  <span className="text-[1rem] shrink-0 mt-0.5" style={{ color: "var(--warm-gray)" }}>—</span>
                  <p className="text-[0.88rem] leading-[1.65]" style={{ color: "var(--slate)" }}>{item}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" style={{ background: "#fff" }}>
        <div className="content-wrap page-gutter py-24">
        <div className="grid lg:grid-cols-[5fr_7fr] gap-24 items-start">
          <div>
            <p className="text-[0.72rem] font-semibold tracking-[0.2em] uppercase mb-4" style={{ color: "var(--teal)" }}>Get in Touch</p>
            <h2 className="text-[clamp(1.7rem,3vw,2.3rem)] font-bold leading-[1.2] tracking-[-0.02em] mb-5" style={{ fontFamily: "var(--font-poppins)", color: "var(--navy-dark)" }}>
              We&apos;d like to hear from you.
            </h2>
            <p className="text-[1.05rem] leading-[1.75]" style={{ color: "var(--slate)" }}>
              Whether you&apos;re exploring Interval 360 for your organization, interested in a coach partner arrangement, or have a question about the platform — reach out and we&apos;ll get back to you within one business day.
            </p>
          </div>
          <div className="flex flex-col gap-5">
            <div
              className="p-7 rounded-lg flex flex-col gap-3"
              style={{ background: "var(--light-bg)" }}
            >
              <p className="text-[0.72rem] font-bold tracking-[0.12em] uppercase" style={{ color: "var(--teal)" }}>Enterprise Inquiries</p>
              <p className="text-[0.92rem]" style={{ color: "var(--slate)" }}>Volume pricing, security docs, enterprise rollout</p>
              <a href="mailto:enterprise@interval360.com" className="text-[0.9rem] font-semibold no-underline" style={{ color: "var(--navy)" }}>
                enterprise@interval360.com
              </a>
            </div>
            <div
              className="p-7 rounded-lg flex flex-col gap-3"
              style={{ background: "var(--light-bg)" }}
            >
              <p className="text-[0.72rem] font-bold tracking-[0.12em] uppercase" style={{ color: "var(--teal)" }}>Coaching & Partnerships</p>
              <p className="text-[0.92rem]" style={{ color: "var(--slate)" }}>Coach partnerships, white-label, consultant arrangements</p>
              <a href="mailto:partners@interval360.com" className="text-[0.9rem] font-semibold no-underline" style={{ color: "var(--navy)" }}>
                partners@interval360.com
              </a>
            </div>
            <div
              className="p-7 rounded-lg flex flex-col gap-3"
              style={{ background: "var(--light-bg)" }}
            >
              <p className="text-[0.72rem] font-bold tracking-[0.12em] uppercase" style={{ color: "var(--teal)" }}>General Questions</p>
              <p className="text-[0.92rem]" style={{ color: "var(--slate)" }}>Product questions, media, anything else</p>
              <a href="mailto:hello@interval360.com" className="text-[0.9rem] font-semibold no-underline" style={{ color: "var(--navy)" }}>
                hello@interval360.com
              </a>
            </div>
            <div className="pt-2">
              <Link
                href="/company#contact"
                className="inline-block text-[0.9rem] font-semibold px-8 py-3.5 rounded no-underline"
                style={{ background: "var(--teal)", color: "#fff" }}
              >
                Book a Call
              </Link>
            </div>
          </div>
        </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
