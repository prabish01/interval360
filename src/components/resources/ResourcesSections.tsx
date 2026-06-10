import Image from "next/image";
import Link from "next/link";
import { ArrowRight, ChevronDown } from "lucide-react";
import { homeTheme, marketingTypography } from "@/lib/homeTheme";
import { NewsletterSignup } from "./NewsletterSignup";
import { ResourceFilterBar } from "./ResourceFilterBar";

import {
  caseStudiesSection,
  featuredSample,
  intelligenceFaq,
  newsletterCopy,
  playbooksSection,
  resourceFilters,
  resourcesHero,
} from "./data";

export default function ResourcesSections() {
  return (
    <div className="min-h-screen bg-black text-white">
      {/* Hero */}
      <section className="border-b border-white/10 pt-28 pb-16 md:pb-20">
        <div className="content-wrap page-gutter">
          <p className={`mb-6 text-xs font-semibold uppercase tracking-[0.22em]`} style={{ color: homeTheme.blue }}>
            {resourcesHero.breadcrumb}
          </p>
          <h1
            className="mb-8 max-w-[14ch] text-[clamp(3rem,10vw,6rem)] font-bold leading-[0.95] tracking-[-0.03em] text-white"
            style={{ fontFamily: "var(--font-space-grotesk)" }}
          >
            {resourcesHero.title}
          </h1>
          <div className="mb-12 max-w-[52ch] space-y-3 text-base leading-[1.65] text-white/85 md:text-lg">
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
            <p className={`mb-4 ${marketingTypography.heroEyebrow}`} style={{ color: homeTheme.blue }}>
              {featuredSample.eyebrow}
            </p>
            <h2
              className="mb-6 text-[clamp(1.75rem,3.5vw,2.5rem)] font-bold leading-[1.1] tracking-tight text-white"
              style={{ fontFamily: "var(--font-space-grotesk)" }}
            >
              {featuredSample.title}
            </h2>
            <p className="mb-8 max-w-[48ch] text-base leading-[1.75]" style={{ color: homeTheme.textMuted }}>
              {featuredSample.body}
            </p>
            <Link
              href={featuredSample.href}
              className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.14em] no-underline transition-opacity hover:opacity-85"
              style={{ color: homeTheme.blue }}
            >
              {featuredSample.cta}
              <ArrowRight className="size-4" aria-hidden />
            </Link>
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
              <p className="mt-3 max-w-[48ch] text-base leading-relaxed" style={{ color: homeTheme.lightBody }}>
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
                <h3 className="mb-3 text-base font-bold uppercase leading-snug tracking-wide" style={{ fontFamily: "var(--font-space-grotesk)" }}>
                  {item.title}
                </h3>
                <p className="mb-6 flex-1 text-base leading-[1.65]" style={{ color: homeTheme.lightBody }}>
                  {item.body}
                </p>
                <Link
                  href={item.href}
                  className="mt-auto inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.12em] no-underline transition-opacity hover:opacity-75"
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
            <p className="mt-2 text-base" style={{ color: homeTheme.lightBody }}>
              {caseStudiesSection.sub}
            </p>
          </div>
          <div className="grid gap-8 md:grid-cols-2">
            {caseStudiesSection.items.map((item) => (
              <article key={item.title} className="border border-black/10 bg-[#fafbfc] p-8 group transition-all duration-300 hover:-translate-y-1.5 hover:shadow-xl rounded-sm">
                <h3 className="mb-3 text-base font-bold" style={{ fontFamily: "var(--font-space-grotesk)" }}>
                  {item.title}
                </h3>
                <p className="mb-5 text-base leading-[1.65]" style={{ color: homeTheme.lightBody }}>
                  {item.body}
                </p>
                <Link href={item.href} className="text-xs font-bold uppercase tracking-[0.12em] no-underline" style={{ color: homeTheme.blue }}>
                  Read more →
                </Link>
              </article>
            ))}
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
            Common questions.
          </h2>
          <div className="mx-auto max-w-3xl divide-y divide-black/10 border-y border-black/10">
            {intelligenceFaq.map((item) => (
              <details key={item.q} className="group">
                <summary className="flex cursor-pointer list-none items-center justify-between gap-4 py-5 pr-2 text-sm font-bold uppercase leading-snug tracking-[0.06em] text-[#0b1733] [&::-webkit-details-marker]:hidden">
                  {item.q}
                  <ChevronDown className="size-5 shrink-0 text-[#64748b] transition-transform duration-200 group-open:rotate-180" aria-hidden />
                </summary>
                <p className="pb-5 pt-1 text-base leading-[1.7]" style={{ color: homeTheme.lightBody }}>
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
              <p className="max-w-[40ch] text-base leading-relaxed" style={{ color: homeTheme.textMuted }}>
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
