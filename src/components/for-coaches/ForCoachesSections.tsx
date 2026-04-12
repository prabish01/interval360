import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Compass, CreditCard, FileText } from "lucide-react";
import { homeTheme, marketingTypography } from "@/lib/homeTheme";
import { consultingInfrastructure, forCoachesCopy } from "./data";

const infraIcons = [Compass, FileText, CreditCard] as const;

export default function ForCoachesSections() {
  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="relative min-h-[90vh] overflow-hidden pt-24 text-white md:min-h-[85vh]">
        <div
          className="absolute inset-0"
          style={{
            background: `linear-gradient(180deg, #0a0a0f 0%, #06080f 45%, #05070c 100%)`,
          }}
        />
        {/* Glow / “neural” accent — right */}
        <div
          className="pointer-events-none absolute -right-[20%] top-0 h-[85%] w-[75%] opacity-70 md:opacity-90"
          style={{
            background: `
              radial-gradient(ellipse 55% 50% at 70% 35%, rgba(45,108,255,0.45) 0%, transparent 55%),
              radial-gradient(ellipse 40% 45% at 85% 60%, rgba(0,106,245,0.2) 0%, transparent 50%)
            `,
          }}
        />
        <div className="pointer-events-none absolute inset-0 grid-pattern opacity-[0.12]" />
        <div className="absolute inset-0 bg-linear-to-t from-black/60 via-transparent to-black/30" />

        <div className="relative z-10 flex min-h-[90vh] flex-col justify-end pb-16 md:min-h-[85vh] md:justify-center md:pb-0 page-gutter">
          <div className="content-wrap max-w-3xl md:max-w-4xl md:py-12">
            <p className={`mb-5 ${marketingTypography.heroEyebrow}`} style={{ color: homeTheme.eyebrow }}>
              Expertise for consultants
            </p>
            <h1
              className="mb-6 max-w-[38ch] text-[clamp(2rem,5.5vw,4rem)] font-extrabold leading-[1.08] tracking-[-0.03em] text-white"
              style={{ fontFamily: "var(--font-space-grotesk)" }}
            >
              A repeatable, client-ready 360 process —{" "}
              <span style={{ color: homeTheme.blueBright }}>without building one yourself.</span>
            </h1>
            <p className={`mb-10 max-w-[62ch] ${marketingTypography.heroLead}`} style={{ color: homeTheme.textBody }}>
              Interval 360 gives coaches and consultants a fast, reliable way to run a structured leadership 360 for any client — with professional-quality outputs ready to use in a debrief conversation the same day they arrive.
            </p>

            <div className="flex flex-col gap-4 sm:flex-row sm:flex-wrap sm:items-stretch">
              <Link
                href="/company#contact"
                className="inline-flex items-center justify-center rounded-sm px-8 py-3.5 text-[0.82rem] font-semibold text-white no-underline transition-colors hover:bg-[#1a57e8] uppercase"
                style={{ background: homeTheme.blue, boxShadow: homeTheme.blueShadow }}
              >
                Talk to partnerships
              </Link>

              <Link
                href="/pricing"
                className="flex min-w-[140px] flex-col items-center justify-center rounded-sm border px-6 py-4 no-underline transition-colors hover:border-white/35"
                style={{
                  borderColor: homeTheme.outlineButtonBorder,
                  background: "rgba(0,0,0,0.35)",
                }}
              >
                <span className="text-[0.65rem] font-semibold uppercase tracking-[0.2em]" style={{ color: homeTheme.textFaint }}>
                  See pricing
                </span>
                <span
                  className="my-0.5 text-[2.25rem] font-extrabold leading-none tracking-tight"
                  style={{ fontFamily: "var(--font-space-grotesk)", color: "#fff" }}
                >
                  Zero
                </span>
                <span className="text-[0.62rem] font-bold uppercase tracking-[0.18em]" style={{ color: homeTheme.textMuted }}>
                  set up fees
                </span>
              </Link>
            </div>

            <div className="mt-8">
              <Link
                href="/reports-and-outputs"
                className="inline-flex items-center gap-2 text-[0.9rem] font-medium no-underline transition-opacity hover:opacity-80"
                style={{ color: homeTheme.linkMuted }}
              >
                Download sample report
                <ArrowRight className="size-4" aria-hidden />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Value proposition — white + testimonial card */}
      <section className="border-y py-20 md:py-28" style={{ borderColor: homeTheme.lightRule, background: "#fff" }}>
        <div className="content-wrap page-gutter">
          <div className="grid gap-12 lg:grid-cols-2 lg:gap-16 lg:items-center">
            <h2
              className={`text-[clamp(1.75rem,4vw,2.75rem)] font-extrabold uppercase leading-[1.08] tracking-tight text-[#0b1733]`}
              style={{ fontFamily: "var(--font-space-grotesk)" }}
            >
              {forCoachesCopy.intro}
            </h2>

            <div
              className="overflow-hidden border"
              style={{ borderColor: homeTheme.lightRule, background: homeTheme.sectionPaper }}
            >
              <div className="relative aspect-16/10 w-full bg-[#e8ecf2]">
                <Image
                  src="/assessment-preview-overview.png"
                  alt=""
                  fill
                  className="object-cover object-top opacity-90"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </div>
              <div className="p-8 md:p-10">
                <blockquote
                  className="mb-6 text-[1.05rem] font-medium italic leading-[1.65] text-[#334155]"
                  style={{ fontFamily: "var(--font-space-grotesk)" }}
                >
                  &ldquo;{forCoachesCopy.testimonialQuote}&rdquo;
                </blockquote>
                <div className="flex items-center gap-4">
                  <div
                    className="size-11 shrink-0 rounded-full border-2 border-white bg-linear-to-br from-slate-200 to-slate-400 shadow-inner"
                    aria-hidden
                  />
                  <div>
                    <p className="text-[0.9rem] font-semibold text-[#0b1733]">{forCoachesCopy.testimonialName}</p>
                    <p className="text-[0.82rem]" style={{ color: homeTheme.lightBody }}>
                      {forCoachesCopy.testimonialOrg}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Consulting infrastructure — dark */}
      <section className="border-b py-20 text-white md:py-28" style={{ borderColor: homeTheme.borderSubtle, background: "#070a12" }}>
        <div className="content-wrap page-gutter">
          <div className="mb-12 max-w-3xl md:mb-16">
            <p className={`mb-4 ${marketingTypography.heroEyebrow}`} style={{ color: homeTheme.blue }}>
              Platform core
            </p>
            <h2
              className={`${marketingTypography.sectionDisplayDark} max-w-[20ch]`}
              style={{ fontFamily: "var(--font-space-grotesk)" }}
            >
              The Consulting
              <br />
              Infrastructure
            </h2>
          </div>
          <div className="grid gap-5 md:grid-cols-3">
            {consultingInfrastructure.map((item, i) => {
              const Icon = infraIcons[i];
              return (
                <div
                  key={item.title}
                  className="flex flex-col border p-8"
                  style={{
                    borderColor: "rgba(255,255,255,0.08)",
                    background: "rgba(255,255,255,0.03)",
                  }}
                >
                  <Icon className="mb-5 size-7 shrink-0" style={{ color: homeTheme.blue }} aria-hidden />
                  <h3 className="mb-3 text-[1.02rem] font-bold uppercase leading-snug tracking-wide" style={{ fontFamily: "var(--font-space-grotesk)" }}>
                    {item.title}
                  </h3>
                  <p className="text-[0.9rem] leading-[1.65]" style={{ color: homeTheme.textMuted }}>
                    {item.body}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Final CTA — solid blue */}
      <section className="relative overflow-hidden py-24 text-center md:py-28" style={{ background: homeTheme.blue }}>
        <div
          className="pointer-events-none absolute inset-0 opacity-30"
          style={{
            backgroundImage: `radial-gradient(circle at 30% 0%, rgba(255,255,255,0.25), transparent 45%)`,
          }}
        />
        <div className="content-wrap page-gutter relative z-10">
          <h2
            className="mx-auto mb-5 max-w-[40ch] text-[clamp(1.75rem,4.5vw,3rem)] font-extrabold uppercase leading-[1.05] tracking-tight text-white"
            style={{ fontFamily: "var(--font-space-grotesk)" }}
          >
            {forCoachesCopy.ctaTitle}
          </h2>
          <p className="mx-auto mb-10 max-w-[52ch] text-[1.05rem] leading-[1.75] text-white/90">
            {forCoachesCopy.ctaSub}
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            <Link
              href="/company#contact"
              className="inline-flex min-w-[200px] items-center justify-center rounded-sm bg-white px-8 py-3.5 text-[0.82rem] font-semibold uppercase no-underline transition-opacity hover:opacity-95"
              style={{ color: homeTheme.blue }}
            >
              Join our partner network
            </Link>
            <Link
              href="/buy"
              className="inline-flex min-w-[200px] items-center justify-center rounded-sm border-2 border-white px-8 py-3.5 text-[0.82rem] font-semibold text-white no-underline uppercase transition-colors hover:bg-white/10"
            >
              Start your first assessment
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
