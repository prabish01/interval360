import Image from "next/image";
import Link from "next/link";
import { homeTheme, marketingTypography } from "@/lib/homeTheme";
import {
  companyHero,
  reimaginingSection,
  corePrinciplesSection,
  leadershipTeam,
  boardOfAdvisors,
  definitionOfScope,
  joinIntelligence,
} from "./data";

export default function CompanySections() {
  return (
    <div className="font-sans bg-black">
      {/* 1. Hero Section */}
      <section className="relative overflow-hidden min-h-screen flex flex-col justify-end pt-48 pb-24 lg:pb-32 border-b border-white/10" style={{ background: "radial-gradient(ellipse at 50% -20%, #171d2b 0%, #08090d 100%)" }}>
        {/* Abstract Grid Mesh background representation */}
        <div 
          className="absolute inset-0 opacity-[0.15] mix-blend-screen pointer-events-none"
          style={{
            backgroundImage: "linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)",
            backgroundSize: "60px 20px",
            transform: "perspective(500px) rotateX(60deg) scale(2)",
            transformOrigin: "top text-center"
          }}
        />
        <div className="w-full px-6 md:px-12 lg:px-20 xl:px-[8%] relative z-10 flex flex-col gap-6">
          <div className="flex items-center gap-4">
            <span className="h-[2px] w-10 origin-left" style={{ background: homeTheme.blue }} aria-hidden />
            <p className="text-xs font-bold uppercase tracking-[0.2em]" style={{ color: homeTheme.blue }}>
              {companyHero.eyebrow}
            </p>
          </div>
          <h1 className="text-[clamp(3.5rem,8vw,7rem)] font-bold leading-[0.9] tracking-tight text-white m-0 max-w-[12ch]" style={{ fontFamily: "var(--font-space-grotesk)" }}>
            {companyHero.titlePart1}<br />
            <span className="font-serif italic font-light opacity-90">{companyHero.titlePart2}</span>
          </h1>
          <p className="text-lg leading-[1.6] text-white/60 max-w-[45ch] mt-4 font-[400] font-sans">
            {companyHero.body}
          </p>
        </div>
      </section>

      {/* 2. Reimagining the 360 */}
      <section className="py-24 md:py-32 border-b border-white/5" style={{ background: "#0c0d12" }}>
        <div className="content-wrap page-gutter grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          <div className="flex flex-col gap-8">
            <h2 className="text-[clamp(2.5rem,5vw,3.5rem)] font-bold leading-[1.05] tracking-tight text-white whitespace-pre-line" style={{ fontFamily: "var(--font-space-grotesk)" }}>
              {reimaginingSection.title}
            </h2>
            <div className="flex flex-col gap-6 text-base leading-[1.65] text-white/50 max-w-[48ch]">
              {reimaginingSection.paragraphs.map((p, idx) => (
                <p key={idx}>{p}</p>
              ))}
            </div>
          </div>
          <div className="relative aspect-square md:aspect-[4/3] lg:aspect-square w-full rounded-sm overflow-hidden bg-[#111218] border border-white/5">
            <Image 
              src="/assessment-preview-results.png" 
              alt="Abstract representation" 
              fill 
              className="object-cover opacity-50 grayscale mix-blend-luminosity" 
            />
            {/* Dark gradient overlay for atmosphere */}
            <div className="absolute inset-0 bg-gradient-to-tr from-black/60 via-black/20 to-transparent pointer-events-none" />
            
            {/* Floating Blue Block */}
            <div className="absolute bottom-8 right-8 p-6 md:p-8 max-w-[280px]" style={{ background: homeTheme.blue }}>
              <p className="text-xs font-black uppercase tracking-[0.2em] text-white/70 mb-3">
                {reimaginingSection.overlayTag}
              </p>
              <p className="text-xs font-bold uppercase leading-[1.45] tracking-wider text-white">
                "{reimaginingSection.overlayText}"
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 3. The Core Principles */}
      <section className="py-24 md:py-32 border-b border-black/10 text-black" style={{ background: "#ffffff" }}>
        <div className="content-wrap page-gutter">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-20 pb-12 border-b border-black/10">
            <h2 className="text-[clamp(2.5rem,4.5vw,3.5rem)] font-bold leading-[1.05] tracking-tight whitespace-pre-line" style={{ fontFamily: "var(--font-space-grotesk)", color: "#111" }}>
              {corePrinciplesSection.title}
            </h2>
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#888] md:pb-2">
              {corePrinciplesSection.subtitle}
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-y-16 gap-x-12">
            {corePrinciplesSection.principles.map((p, idx) => (
              <div key={idx} className="flex flex-col group border-l border-black/5 pl-6 hover:border-black/20 transition-colors">
                <span className="text-xs font-bold text-[#888] mb-6">
                  {p.num}
                </span>
                <h3 className="text-xl font-bold leading-[1.2] tracking-tight mb-4 whitespace-pre-line" style={{ fontFamily: "var(--font-space-grotesk)", color: "#111" }}>
                  {p.title}
                </h3>
                <p className="text-base leading-[1.65] text-[#666] max-w-[32ch]">
                  {p.body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. Leadership Team */}
      <section className="py-24 md:py-32 border-b border-white/5 text-white" style={{ background: "#16171b" }}>
        <div className="content-wrap page-gutter">
          <div className="flex flex-col gap-6 mb-16">
            <p className="text-xs font-bold uppercase tracking-[0.2em]" style={{ color: homeTheme.blue }}>
              {leadershipTeam.tag}
            </p>
            <h2 className="text-[clamp(2.5rem,4.5vw,3.5rem)] font-bold leading-[1.05] tracking-tight whitespace-pre-line" style={{ fontFamily: "var(--font-space-grotesk)" }}>
              {leadershipTeam.title}
            </h2>
          </div>
          
          <div className="grid md:grid-cols-3 gap-6">
            {leadershipTeam.cards.map((member, i) => (
              <div key={i} className="bg-[#121316] border border-white/5 p-8 md:p-10 flex flex-col group hover:bg-[#15161a] transition-all duration-300 relative overflow-hidden rounded-sm h-full">
                {/* Subtle top accent line */}
                <div className="absolute top-0 left-0 w-full h-[2px] opacity-0 group-hover:opacity-100 transition-opacity" style={{ background: homeTheme.blue }} />
                
                <h3 className="text-xl font-bold mb-1 tracking-tight text-white" style={{ fontFamily: "var(--font-space-grotesk)" }}>
                  {member.name}
                </h3>
                <p className="text-xs font-semibold uppercase tracking-wider mb-6" style={{ color: homeTheme.blue }}>
                  {member.role}
                </p>
                <p className="text-sm leading-[1.6] text-white/50">
                  {member.body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. Board of Advisors */}
      <section className="py-24 md:py-32 border-b border-black/10 text-black" style={{ background: "#ffffff" }}>
        <div className="content-wrap page-gutter">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16 pb-12 border-b border-black/10">
            <div>
              <h2 className="text-[clamp(2.5rem,4.5vw,3.5rem)] font-bold leading-[1.05] tracking-tight" style={{ fontFamily: "var(--font-space-grotesk)", color: "#111" }}>
                Board of Advisors
              </h2>
            </div>
            <p className="text-base leading-[1.6] text-black/60 max-w-[40ch]">
              {boardOfAdvisors.intro}
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {boardOfAdvisors.members.map((member, i) => (
              <div key={i} className="border border-black/5 hover:border-black/10 transition-colors p-8 rounded-sm bg-[#f9fafc] flex flex-col justify-center min-h-[120px]">
                <h3 className="text-lg font-bold text-[#111] mb-1" style={{ fontFamily: "var(--font-space-grotesk)" }}>
                  {member.name}
                </h3>
                <p className="text-sm text-black/60 leading-snug">
                  {member.title}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. Definition of Scope */}
      <section className="py-24 md:py-32 border-b border-white/5 text-white" style={{ background: "#111215" }}>
        <div className="content-wrap page-gutter max-w-[70rem]">
          <div className="text-center flex flex-col items-center gap-4 mb-20 pb-16 border-b border-white/10">
            <h2 className="text-[clamp(2.5rem,4.5vw,3.5rem)] font-bold tracking-tight" style={{ fontFamily: "var(--font-space-grotesk)" }}>
              {definitionOfScope.title}
            </h2>
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-white/40">
              {definitionOfScope.subtitle}
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-[1px] bg-white/5 border border-white/5 overflow-hidden rounded-sm">
            {/* What It Is */}
            <div className="bg-[#15161a] p-10 md:p-14">
              <div className="flex items-center gap-4 mb-14">
                <div className="size-5 rounded-full flex items-center justify-center shrink-0" style={{ background: homeTheme.blue }}>
                   <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
                </div>
                <h3 className="text-xl font-black italic tracking-wider mt-1" style={{ fontFamily: "var(--font-space-grotesk)" }}>
                  INTERVAL 360 IS
                </h3>
              </div>
              <ul className="flex flex-col gap-10">
                {definitionOfScope.whatItIs.map((item, i) => (
                  <li key={i} className="flex gap-5">
                    <div className="size-[5px] rounded-full mt-2.5 shrink-0 bg-white/40" />
                    <div>
                      <p className="font-bold text-base leading-snug mb-1.5 tracking-tight" style={{ fontFamily: "var(--font-space-grotesk)" }}>{item.title}</p>
                      <p className="text-base leading-[1.6] text-white/50">{item.body}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
            
            {/* What It Is Not */}
            <div className="bg-[#121316] p-10 md:p-14">
              <div className="flex items-center gap-4 mb-14">
                <div className="size-5 rounded-full flex items-center justify-center shrink-0 bg-white/5 border border-white/10">
                   <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="#e11d48" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
                </div>
                <h3 className="text-xl font-black italic tracking-wider mt-1 text-white/60" style={{ fontFamily: "var(--font-space-grotesk)" }}>
                  INTERVAL 360 IS NOT
                </h3>
              </div>
              <ul className="flex flex-col gap-10">
                {definitionOfScope.whatItIsNot.map((item, i) => (
                  <li key={i} className="flex gap-5">
                     <div className="size-[5px] rounded-full mt-2.5 shrink-0 bg-white/20" />
                    <div>
                      <p className="font-bold text-base leading-snug mb-1.5 text-white/60 tracking-tight" style={{ fontFamily: "var(--font-space-grotesk)" }}>{item.title}</p>
                      <p className="text-base leading-[1.6] text-white/30">{item.body}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* 6. Contact Section */}
      <section id="contact" className="py-24 md:py-32 text-black scroll-mt-24" style={{ background: "#ffffff" }}>
        <div className="content-wrap page-gutter">
          <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-start">
            <div className="flex flex-col gap-8 lg:max-w-[40ch]">
              <h2 className="text-[clamp(3.5rem,5vw,4.5rem)] font-bold leading-[1] tracking-tight whitespace-pre-line" style={{ fontFamily: "var(--font-space-grotesk)", color: "#111" }}>
                {joinIntelligence.title}
              </h2>
              <p className="text-base leading-[1.65] text-[#555]">
                {joinIntelligence.body}
              </p>
              
              <div className="flex flex-col gap-4 mt-8">
                <div className="flex items-center gap-4 bg-[#f9fafc] p-4 pr-6 rounded-sm w-fit border border-black/5">
                  <div className="w-10 h-10 bg-[#111] text-white flex items-center justify-center rounded-[3px]">
                     <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></svg>
                  </div>
                  <a href={`mailto:${joinIntelligence.email}`} className="text-sm font-bold tracking-wide mt-0.5">
                    {joinIntelligence.email}
                  </a>
                </div>
                
                <div className="flex items-center gap-4 bg-[#f9fafc] p-4 pr-6 rounded-sm w-fit border border-black/5">
                  <div className="w-10 h-10 bg-[#111] text-white flex items-center justify-center rounded-[3px]">
                     <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path><circle cx="12" cy="10" r="3"></circle></svg>
                  </div>
                  <p className="text-sm font-bold tracking-wide mt-0.5">
                    {joinIntelligence.location}
                  </p>
                </div>
              </div>
            </div>
            
            {/* Streamlined Form Box */}
            <div className="bg-white border border-black/10 p-10 md:p-14 lg:mt-4 shadow-sm rounded-sm">
              <form className="flex flex-col gap-10">
                <div className="grid md:grid-cols-2 gap-10 md:gap-8">
                  <div className="flex flex-col gap-4">
                    <label className="text-xs font-bold uppercase tracking-[0.15em] text-[#888]">
                      {joinIntelligence.form.name}
                    </label>
                    <input type="text" className="border-b border-black/10 pb-2 focus:outline-none focus:border-black/50 transition-colors bg-transparent text-[#111] text-base font-medium" />
                  </div>
                  <div className="flex flex-col gap-4">
                    <label className="text-xs font-bold uppercase tracking-[0.15em] text-[#888]">
                      {joinIntelligence.form.email}
                    </label>
                    <input type="email" className="border-b border-black/10 pb-2 focus:outline-none focus:border-black/50 transition-colors bg-transparent text-[#111] text-base font-medium" />
                  </div>
                </div>
                <div className="flex flex-col gap-4">
                  <label className="text-xs font-bold uppercase tracking-[0.15em] text-[#888]">
                    {joinIntelligence.form.org}
                  </label>
                  <input type="text" className="border-b border-black/10 pb-2 focus:outline-none focus:border-black/50 transition-colors bg-transparent text-[#111] text-base font-medium" />
                </div>
                <div className="flex flex-col gap-4">
                  <label className="text-xs font-bold uppercase tracking-[0.15em] text-[#888]">
                    {joinIntelligence.form.inquiry}
                  </label>
                  <textarea rows={3} className="border-b border-black/10 pb-2 focus:outline-none focus:border-black/50 transition-colors bg-transparent resize-none text-[#111] text-base font-medium"></textarea>
                </div>
                <button type="button" className="mt-4 bg-[#111] text-white font-bold text-xs uppercase tracking-widest py-5 rounded-[3px] hover:-translate-y-0.5 hover:shadow-lg transition-all active:translate-y-0 active:shadow-none hover:bg-black">
                  {joinIntelligence.form.submit}
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
