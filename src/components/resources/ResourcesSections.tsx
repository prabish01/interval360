import Image from "next/image";
import Link from "next/link";
import { ArrowRight, ChevronDown } from "lucide-react";
import { homeTheme, marketingTypography } from "@/lib/homeTheme";
import { NewsletterSignup } from "./NewsletterSignup";
import { ResourceFilterBar } from "./ResourceFilterBar";
import { SampleReportPreviewCard } from "./SampleReportPreviewCard";
import {
  caseStudiesSection,
  featuredSample,
  fieldNotesSection,
  intelligenceFaq,
  newsletterCopy,
  playbooksSection,
  resourceFilters,
  resourcesHero,
  sampleReportPreview,
} from "./data";

export default function ResourcesSections() {
  return (
    <div className="min-h-screen bg-black text-white">
      {/* Hero */}
      <section className="border-b border-white/10 pt-28 pb-16 md:pb-20">
        <div className="content-wrap page-gutter">
          <p className={`mb-6 text-[0.7rem] font-semibold uppercase tracking-[0.22em]`} style={{ color: homeTheme.blue }}>
            {resourcesHero.breadcrumb}
          </p>
          <h1
            className="mb-8 max-w-[14ch] text-[clamp(3rem,10vw,6rem)] font-bold leading-[0.95] tracking-[-0.03em] text-white"
            style={{ fontFamily: "var(--font-space-grotesk)" }}
          >
            {resourcesHero.title}
          </h1>
          <div className="mb-12 max-w-[52ch] space-y-3 text-[1.05rem] leading-[1.65] text-white/85 md:text-[1.12rem]">
            {resourcesHero.sublines.map((line) => (
              <p key={line}>{line}</p>
            ))}
          </div>
          <ResourceFilterBar filters={resourceFilters} />
        </div>
      </section>

      {/* Featured sample report */}
      <section
        id="featured-sample"
        className="scroll-mt-24 border-b border-white/10 py-16 md:py-24"
        style={{ background: "linear-gradient(180deg, #111318 0%, #0c0e12 100%)" }}
      >
        <div className="content-wrap page-gutter">
          <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
            <div>
              <p className={`mb-4 ${marketingTypography.heroEyebrow}`} style={{ color: homeTheme.blue }}>
                {featuredSample.eyebrow}
              </p>
              <h2
                className="mb-6 text-[clamp(1.75rem,3.5vw,2.5rem)] font-bold leading-[1.1] tracking-tight text-white"
                style={{ fontFamily: "var(--font-space-grotesk)" }}
              >
                {featuredSample.title}
              </h2>
              <p className="mb-8 max-w-[48ch] text-[1rem] leading-[1.75]" style={{ color: homeTheme.textMuted }}>
                {featuredSample.body}
              </p>
              <Link
                href={featuredSample.href}
                className="inline-flex items-center gap-2 text-[0.78rem] font-bold uppercase tracking-[0.14em] no-underline transition-opacity hover:opacity-85"
                style={{ color: homeTheme.blue }}
              >
                {featuredSample.cta}
                <ArrowRight className="size-4" aria-hidden />
              </Link>
            </div>
            <SampleReportPreviewCard preview={sampleReportPreview} />
          </div>
        </div>
      </section>

      {/* Playbooks */}
      <section id="playbooks" className="scroll-mt-24 border-b border-black/10 bg-white py-16 text-[#0b1733] md:py-24">
        <div className="content-wrap page-gutter">
          <div className="mb-12 flex flex-col justify-between gap-6 sm:flex-row sm:items-end">
            <div>
              <h2 className="text-[clamp(2rem,4vw,3.25rem)] font-extrabold leading-none tracking-tight" style={{ fontFamily: "var(--font-space-grotesk)" }}>
                {playbooksSection.title}
              </h2>
              <p className="mt-3 max-w-[48ch] text-[1rem] leading-relaxed" style={{ color: homeTheme.lightBody }}>
                {playbooksSection.sub}
              </p>
            </div>
            <span
              className="select-none text-right text-[clamp(4rem,12vw,7rem)] font-extrabold leading-none text-[#e2e8f0]"
              style={{ fontFamily: "var(--font-space-grotesk)" }}
              aria-hidden
            >
              {playbooksSection.num}
            </span>
          </div>
          <div className="grid gap-8 md:grid-cols-3 md:gap-6">
            {playbooksSection.items.map((item) => (
              <article
                key={item.title}
                className="flex flex-col border-t border-black/10 pt-6 group transition-all duration-300 hover:-translate-y-1 hover:shadow-sm bg-white hover:bg-black/[0.01] px-4 -mx-4 pb-4 rounded-sm"
              >
                <h3 className="mb-3 text-[1.05rem] font-bold uppercase leading-snug tracking-wide" style={{ fontFamily: "var(--font-space-grotesk)" }}>
                  {item.title}
                </h3>
                <p className="mb-6 flex-1 text-[0.9rem] leading-[1.65]" style={{ color: homeTheme.lightBody }}>
                  {item.body}
                </p>
                <Link
                  href={item.href}
                  className="mt-auto inline-flex items-center gap-2 text-[0.72rem] font-bold uppercase tracking-[0.12em] no-underline transition-opacity hover:opacity-75"
                  style={{ color: homeTheme.blue }}
                >
                  Read playbook
                  <ArrowRight className="size-4" aria-hidden />
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Case studies */}
      <section
        id="case-studies"
        className="scroll-mt-24 border-b border-black/10 bg-white py-16 text-[#0b1733] md:py-20"
      >
        <div className="content-wrap page-gutter">
          <div className="mb-10">
            <h2 className="text-[clamp(1.75rem,3.5vw,2.5rem)] font-extrabold leading-tight text-[#0b1733]" style={{ fontFamily: "var(--font-space-grotesk)" }}>
              {caseStudiesSection.title}
            </h2>
            <p className="mt-2 text-[1rem]" style={{ color: homeTheme.lightBody }}>
              {caseStudiesSection.sub}
            </p>
          </div>
          <div className="grid gap-8 md:grid-cols-2">
            {caseStudiesSection.items.map((item) => (
              <article key={item.title} className="border border-black/10 bg-[#fafbfc] p-8 group transition-all duration-300 hover:-translate-y-1.5 hover:shadow-xl rounded-sm">
                <h3 className="mb-3 text-[1.05rem] font-bold" style={{ fontFamily: "var(--font-space-grotesk)" }}>
                  {item.title}
                </h3>
                <p className="mb-5 text-[0.92rem] leading-[1.65]" style={{ color: homeTheme.lightBody }}>
                  {item.body}
                </p>
                <Link href={item.href} className="text-[0.72rem] font-bold uppercase tracking-[0.12em] no-underline" style={{ color: homeTheme.blue }}>
                  Read more →
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Field notes - Updated Grid layout */}
      <section
        id="field-notes"
        className="scroll-mt-24 py-16 md:py-24 font-sans border-t border-b border-white/5"
        style={{ background: "#0c0d12" }}
      >
        <div className="content-wrap page-gutter">
          {/* Header row */}
          <div className="mb-12 flex flex-col md:flex-row md:items-center justify-between gap-6">
            <div className="flex items-center gap-4">
              <span className="h-[3px] w-10 lg:w-14" style={{ background: homeTheme.blue }} aria-hidden />
              <h2 className="text-[clamp(1.75rem,4vw,3.5rem)] font-extrabold uppercase leading-none tracking-tight text-white mb-0" style={{ fontFamily: "var(--font-space-grotesk)" }}>
                {fieldNotesSection.header.title}
              </h2>
            </div>
            <p className="text-[0.65rem] font-bold uppercase tracking-[0.2em] md:pt-2" style={{ color: homeTheme.blue }}>
              {fieldNotesSection.header.subtitle}
            </p>
          </div>

          {/* Sub grid container */}
          <div className="flex flex-col gap-6">
            {/* ROW 1 */}
            <div className="flex flex-col lg:flex-row gap-6">
              {/* Card 1 */}
              <div className="group relative overflow-hidden flex flex-col p-8 md:p-12 border border-white/5 bg-[#121318] lg:w-[60%] shrink-0 hover:border-white/10 transition-colors cursor-pointer rounded-[4px]">
                <div className="absolute -top-[10%] -right-[5%] text-[14rem] font-extrabold leading-none tracking-tighter opacity-[0.03] select-none pointer-events-none" style={{ fontFamily: "var(--font-space-grotesk)" }}>
                  {fieldNotesSection.cards[0].number}
                </div>
                
                <div className="mb-12 flex items-center gap-4 z-10">
                  <span className="rounded px-2.5 py-1 text-[0.6rem] font-bold uppercase tracking-wider" style={{ background: homeTheme.blue, color: "white" }}>
                    {fieldNotesSection.cards[0].tag}
                  </span>
                  <span className="text-[0.6rem] font-bold uppercase tracking-wider text-white/50">{fieldNotesSection.cards[0].readTime}</span>
                </div>
                
                <h3 className="mb-6 max-w-[19ch] text-[clamp(2.1rem,3.5vw,3rem)] font-bold leading-[1.1] tracking-tight text-white z-10" style={{ fontFamily: "var(--font-space-grotesk)" }}>
                  {fieldNotesSection.cards[0].title}
                </h3>
                
                <p className="mb-16 max-w-[48ch] text-[1.05rem] leading-[1.6] text-white/60 z-10 font-[400]">
                  {fieldNotesSection.cards[0].body}
                </p>
                
                <div className="mt-auto flex items-center justify-between z-10 border-b border-white/10 pb-4">
                  <span className="text-[0.7rem] font-bold uppercase tracking-widest text-[#f5f6f8]">
                    {fieldNotesSection.cards[0].cta}
                  </span>
                  <ArrowRight className="size-5 text-white/90 group-hover:translate-x-1.5 transition-transform" />
                </div>
              </div>

              {/* Card 2 */}
              <div className="group relative flex flex-col p-8 md:p-10 border border-white/5 bg-[#17171a] lg:w-[40%] shrink-0 hover:border-white/10 transition-colors cursor-pointer rounded-[4px]">
                <div className="flex justify-between items-start mb-10">
                  <div className="text-[3.5rem] font-bold leading-none tracking-tight" style={{ color: "#2d3e66", fontFamily: "var(--font-space-grotesk)" }}>
                    {fieldNotesSection.cards[1].number}
                  </div>
                  <div className="text-right mt-1">
                    <p className="text-[0.6rem] font-black uppercase tracking-widest text-white/40 mb-1.5">{fieldNotesSection.cards[1].tag}</p>
                    <p className="text-[0.65rem] font-bold uppercase tracking-widest" style={{ color: homeTheme.blue }}>{fieldNotesSection.cards[1].readTime}</p>
                  </div>
                </div>

                <h3 className="mb-6 max-w-[20ch] text-[1.5rem] font-bold leading-[1.15] tracking-tight text-white mt-2" style={{ fontFamily: "var(--font-space-grotesk)" }}>
                  {fieldNotesSection.cards[1].title}
                </h3>
                <p className="text-[0.95rem] leading-[1.65] text-white/50 max-w-[32ch]">
                  {fieldNotesSection.cards[1].body}
                </p>
                
                <div className="mt-auto pt-16">
                  <div className="h-px bg-white/5 w-full flex relative">
                    <div className="h-full bg-white/20 w-0 group-hover:w-full transition-all duration-700" />
                  </div>
                </div>
              </div>
            </div>

            {/* ROW 2 */}
            <div className="flex flex-col lg:flex-row gap-6">
              {/* Card 3 */}
              <div className="group flex flex-col p-8 md:p-10 border border-white/5 bg-[#1c1d22] lg:w-[40%] shrink-0 hover:border-white/10 transition-colors cursor-pointer rounded-[4px]">
                <p className="text-[0.65rem] font-bold uppercase tracking-widest text-[#567bf5] mb-8">
                  {fieldNotesSection.cards[2].tag}
                </p>
                
                <h3 className="mb-6 max-w-[17ch] text-[1.8rem] font-bold leading-[1.1] tracking-tight text-white" style={{ fontFamily: "var(--font-space-grotesk)" }}>
                  {fieldNotesSection.cards[2].title}
                </h3>
                
                <div className="pl-5 border-l-2 border-white/10 mb-10 mt-4 py-1">
                  <p className="text-[0.95rem] leading-[1.6] text-white/50 font-serif italic pr-4">
                    {fieldNotesSection.cards[2].body}
                  </p>
                </div>
                
                <div className="mt-auto flex items-center justify-between pt-10">
                  <span className="text-[0.6rem] font-bold uppercase tracking-widest text-white/40 group-hover:text-white/60 transition-colors">
                    {fieldNotesSection.cards[2].readTime}
                  </span>
                  <div className="flex-1 h-px bg-white/5 mx-5 relative overflow-hidden">
                    <div className="absolute top-0 left-0 h-full w-0 bg-white/20 group-hover:w-full transition-all duration-700" />
                  </div>
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-white/30 group-hover:text-white/60 transition-colors"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path><polyline points="7 10 12 15 17 10"></polyline><line x1="12" y1="15" x2="12" y2="3"></line></svg>
                </div>
              </div>

              {/* Card 4 */}
              <div className="group relative flex flex-col p-8 md:p-12 border border-white/5 bg-[#0e1017] lg:w-[60%] shrink-0 overflow-hidden hover:border-white/10 transition-colors cursor-pointer rounded-[4px]">
                <div className="absolute -right-[15%] top-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-[#1a4099]/15 blur-[80px] rounded-full pointer-events-none group-hover:bg-[#1a4099]/25 transition-colors duration-1000" />
                
                <div className="flex justify-between items-stretch h-full">
                  <div className="max-w-[32ch] z-10 flex flex-col h-full">
                    <div className="flex items-center gap-3 mb-8">
                      <div className="size-[6px] rounded-full" style={{ background: homeTheme.blue }} />
                      <p className="text-[0.65rem] font-bold uppercase tracking-widest" style={{ color: homeTheme.blue }}>
                        {fieldNotesSection.cards[3].tag}
                      </p>
                    </div>
                    
                    <h3 className="mb-6 text-[2rem] font-bold leading-[1.1] tracking-tight text-white mt-2" style={{ fontFamily: "var(--font-space-grotesk)" }}>
                      {fieldNotesSection.cards[3].title}
                    </h3>
                    
                    <p className="text-[0.98rem] leading-[1.65] text-white/50 mb-8 pr-4">
                      {fieldNotesSection.cards[3].body}
                    </p>
                    
                    <div className="mt-auto pt-8">
                      <span className="text-[0.6rem] font-bold uppercase tracking-widest text-[#f5f6f8]/40 group-hover:text-[#f5f6f8]/70 transition-colors">
                        {fieldNotesSection.cards[3].readTime}
                      </span>
                    </div>
                  </div>
                  
                  {/* Icon Box */}
                  <div className="hidden md:flex flex-col items-center justify-center border-l border-white/5 pl-14 md:pr-4 z-10 ml-4 max-h-[80%] my-auto">
                    <div className="border border-white/5 w-[100px] h-[100px] flex items-center justify-center bg-[#07080b] mb-6 rounded shadow-2xl group-hover:border-white/10 transition-colors duration-500">
                      <div className="" style={{ color: homeTheme.blue }}>
                        <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="11" width="18" height="10" rx="2"></rect><circle cx="12" cy="5" r="2"></circle><path d="M12 7v4"></path><line x1="8" y1="16" x2="8" y2="16"></line><line x1="16" y1="16" x2="16" y2="16"></line></svg>
                      </div>
                    </div>
                    <span className="text-[0.55rem] font-black uppercase tracking-[0.2em] text-white/50 text-center">
                      {fieldNotesSection.cards[3].iconLabel}
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* ROW 3 */}
            <div className="flex flex-col lg:flex-row gap-6">
              {/* Card 5 */}
              <div className="group flex flex-col p-8 md:p-10 border border-white/5 bg-[#0b0c0f] lg:w-[40%] shrink-0 hover:border-white/10 transition-colors cursor-pointer rounded-[4px]">
                <div className="flex items-center gap-4 mb-8">
                  <span className="text-[0.65rem] font-bold uppercase tracking-widest" style={{ color: homeTheme.blue }}>
                    {fieldNotesSection.cards[4].tag}
                  </span>
                  <span className="text-[0.65rem] font-bold uppercase tracking-widest text-white/30">{fieldNotesSection.cards[4].readTime}</span>
                </div>
                
                <h3 className="mb-6 max-w-[19ch] text-[1.8rem] font-bold leading-[1.1] tracking-tight text-white mt-1" style={{ fontFamily: "var(--font-space-grotesk)" }}>
                  {fieldNotesSection.cards[4].title}
                </h3>
                
                 <p className="text-[0.95rem] leading-[1.65] text-white/50 mb-12">
                  {fieldNotesSection.cards[4].body}
                </p>
                
                <div className="mt-auto flex items-center justify-between pt-8">
                  <div className="flex -space-x-[0.35rem]">
                    <div className="w-[1.7rem] h-[1.7rem] rounded-full bg-white/10 text-[0.45rem] font-bold flex items-center justify-center border border-[#0b0c0f] text-white/70">IN</div>
                    <div className="w-[1.7rem] h-[1.7rem] rounded-full text-[0.45rem] font-bold flex items-center justify-center border border-[#0b0c0f] text-white" style={{ background: homeTheme.blue }}>IM</div>
                  </div>
                  <div className="p-1.5 rounded bg-transparent group-hover:bg-white/5 transition-colors border border-transparent group-hover:border-white/10">
                    <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" className="text-white/40 group-hover:text-white transition-colors" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path><polyline points="15 3 21 3 21 9"></polyline><line x1="10" y1="14" x2="21" y2="3"></line></svg> 
                  </div>
                </div>
              </div>

              {/* Card 6 */}
              <div className="group flex flex-col p-8 md:p-12 border border-white/5 bg-[#121215] lg:w-[60%] shrink-0 hover:border-white/10 transition-colors cursor-pointer rounded-[4px]">
                <div className="flex justify-between items-center mb-10">
                  <p className="text-[0.65rem] font-bold uppercase tracking-widest text-[#567bf5]">
                    {fieldNotesSection.cards[5].tag}
                  </p>
                  <div className="px-3 py-1.5 bg-black/40 rounded-sm text-[0.6rem] font-bold uppercase tracking-widest text-white/70">
                    {fieldNotesSection.cards[5].readTime}
                  </div>
                </div>
                
                <h3 className="mb-6 text-[clamp(1.75rem,3vw,2.25rem)] font-bold leading-[1.15] tracking-tight text-white max-w-[26ch]" style={{ fontFamily: "var(--font-space-grotesk)" }}>
                  {fieldNotesSection.cards[5].title}
                </h3>
                
                <p className="text-[1rem] leading-[1.65] text-white/50 max-w-[48ch] mb-16">
                  {fieldNotesSection.cards[5].body}
                </p>
                
                <div className="mt-auto flex items-center gap-6 z-10 pt-6">
                  <div className="flex-1 h-[2px] bg-white/5 relative overflow-hidden">
                    <div className="absolute left-0 top-0 h-full w-[25%] opacity-70 group-hover:w-[100%] transition-all duration-[800ms] ease-out" style={{ background: homeTheme.blue }} />
                  </div>
                  <span className="text-[0.65rem] font-bold uppercase tracking-[0.14em] text-white whitespace-nowrap flex items-center gap-3">
                    {fieldNotesSection.cards[5].cta} <ArrowRight className="size-3 -rotate-45 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Intelligence FAQ */}
      <section id="intelligence-faq" className="scroll-mt-24 border-b border-black/10 bg-white py-16 text-[#0b1733] md:py-24">
        <div className="content-wrap page-gutter">
          <h2
            className="mb-10 text-[clamp(1.75rem,3.5vw,2.5rem)] font-extrabold uppercase leading-tight tracking-tight text-[#0b1733]"
            style={{ fontFamily: "var(--font-space-grotesk)" }}
          >
            Intelligence FAQ.
          </h2>
          <div className="mx-auto max-w-3xl divide-y divide-black/10 border-y border-black/10">
            {intelligenceFaq.map((item) => (
              <details key={item.q} className="group">
                <summary className="flex cursor-pointer list-none items-center justify-between gap-4 py-5 pr-2 text-[0.82rem] font-bold uppercase leading-snug tracking-[0.06em] text-[#0b1733] [&::-webkit-details-marker]:hidden">
                  {item.q}
                  <ChevronDown className="size-5 shrink-0 text-[#64748b] transition-transform duration-200 group-open:rotate-180" aria-hidden />
                </summary>
                <p className="pb-5 pt-1 text-[0.92rem] leading-[1.7]" style={{ color: homeTheme.lightBody }}>
                  {item.a}
                </p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="border-b border-white/10 py-16 md:py-20" style={{ background: "#141418" }}>
        <div className="content-wrap page-gutter">
          <div className="grid gap-10 lg:grid-cols-2 lg:items-start lg:gap-16">
            <div>
              <h2 className="mb-3 text-[clamp(1.5rem,3vw,2.25rem)] font-bold leading-tight text-white" style={{ fontFamily: "var(--font-space-grotesk)" }}>
                {newsletterCopy.title}
              </h2>
              <p className="max-w-[40ch] text-[0.95rem] leading-relaxed" style={{ color: homeTheme.textMuted }}>
                {newsletterCopy.sub}
              </p>
            </div>
            <NewsletterSignup placeholder={newsletterCopy.placeholder} buttonLabel={newsletterCopy.button} />
          </div>
        </div>
      </section>
    </div>
  );
}
