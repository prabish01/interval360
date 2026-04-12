import Link from "next/link";
import { ArrowRight, Check, Minus } from "lucide-react";
import { homeTheme, marketingTypography } from "@/lib/homeTheme";
import { TechnicalProtocolFaq } from "./TechnicalProtocolFaq";
import {
  comparisonRows,
  faqItems,
  includedCopy,
  pricingCta,
  pricingHero,
  pricingPlans,
  protocolCopy,
} from "./data";

function Cell({ value }: { value: "check" | "dash" | "limited" }) {
  if (value === "check") {
    return (
      <span className="inline-flex size-8 items-center justify-center rounded-full" style={{ background: `${homeTheme.blue}22` }}>
        <Check className="size-4" style={{ color: homeTheme.blue }} strokeWidth={2.5} aria-hidden />
      </span>
    );
  }
  if (value === "limited") {
    return (
      <span className="text-[0.65rem] font-bold uppercase tracking-[0.14em]" style={{ color: homeTheme.lightHeading }}>
        Limited
      </span>
    );
  }
  return (
    <span className="inline-flex justify-center" style={{ color: homeTheme.lightBody }} aria-hidden>
      <Minus className="size-5 opacity-45" strokeWidth={2} />
    </span>
  );
}

export default function PricingSections() {
  return (
    <div className="min-h-screen">
      {/* Hero + plans */}
      <section className="relative overflow-hidden min-h-screen flex flex-col justify-center py-24 text-white">
        <div
          className="absolute inset-0"
          style={{
            background: `linear-gradient(180deg, #050508 0%, #0a0c12 35%, #06070b 100%)`,
          }}
        />
        <div
          className="pointer-events-none absolute inset-0 opacity-50"
          style={{
            backgroundImage: `radial-gradient(ellipse 80% 50% at 50% -10%, ${homeTheme.blueGlowSoft}, transparent 55%)`,
          }}
        />
        <div className="pointer-events-none absolute inset-0 grid-pattern opacity-[0.1]" />

        <div className="content-wrap page-gutter relative z-10">
          <div className="mx-auto mb-14 max-w-3xl text-center md:mb-16">
            <h1
              className="mb-4 text-[clamp(2.5rem,7vw,4.5rem)] font-extrabold leading-[0.98] tracking-[-0.03em] text-white"
              style={{ fontFamily: "var(--font-space-grotesk)" }}
            >
              {pricingHero.title}
            </h1>
            <p className="text-[clamp(1.05rem,2vw,1.35rem)] font-medium text-white/90">{pricingHero.sub}</p>
            <p className="mx-auto mt-6 max-w-[62ch] text-[0.98rem] leading-[1.75]" style={{ color: homeTheme.textMuted }}>
              {pricingHero.body}
            </p>
          </div>

          <div className="mx-auto grid max-w-6xl gap-6 md:grid-cols-3">
            {pricingPlans.map((plan) => (
              <div
                key={plan.id}
                className={`relative flex flex-col border p-8 transition-transform duration-300 hover:-translate-y-1.5 hover:shadow-2xl ${plan.highlighted ? "md:-mt-2 md:mb-2 md:shadow-[0_24px_60px_rgba(45,108,255,0.2)]" : ""}`}
                style={{
                  borderColor: plan.highlighted ? homeTheme.blue : "rgba(255,255,255,0.12)",
                  background: plan.highlighted ? "rgba(45,108,255,0.08)" : "rgba(255,255,255,0.03)",
                }}
              >
                {plan.badge && (
                  <span
                    className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full px-3 py-1 text-[0.62rem] font-bold uppercase tracking-[0.16em] text-white"
                    style={{ background: homeTheme.blue }}
                  >
                    {plan.badge}
                  </span>
                )}
                <h2 className="mb-3 text-[1.15rem] font-bold uppercase tracking-wide text-white" style={{ fontFamily: "var(--font-space-grotesk)" }}>
                  {plan.title}
                </h2>
                <p className="mb-8 min-h-14 flex-1 text-[0.88rem] leading-[1.6]" style={{ color: homeTheme.textMuted }}>
                  {plan.description}
                </p>
                <div className="mb-8">
                  <span className="text-[2.25rem] font-extrabold tabular-nums text-white" style={{ fontFamily: "var(--font-space-grotesk)" }}>
                    {plan.price}
                  </span>
                  <span className="text-[0.95rem] font-medium" style={{ color: homeTheme.textFaint }}>
                    {" "}
                    {plan.priceSuffix}
                  </span>
                </div>
                <Link
                  href={plan.href}
                  className={`mt-auto inline-flex items-center justify-center gap-2 rounded-sm px-6 py-3.5 text-[0.72rem] font-bold uppercase tracking-[0.14em] text-white no-underline transition-opacity hover:opacity-90`}
                  style={
                    plan.variant === "gradient"
                      ? {
                          background: "linear-gradient(90deg, #2d6cff 0%, #7c3aed 100%)",
                          boxShadow: homeTheme.blueShadow,
                        }
                      : {
                          background: "rgba(0,0,0,0.45)",
                          border: `1px solid rgba(255,255,255,0.18)`,
                        }
                  }
                >
                  {plan.cta}
                  <ArrowRight className="size-4 shrink-0" aria-hidden />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What's included */}
      <section className="border-y py-20 md:py-28" style={{ borderColor: homeTheme.lightRule, background: "#fff" }}>
        <div className="content-wrap page-gutter">
          <div className="mx-auto mb-12 max-w-3xl text-center md:mb-16">
            <h2
              className={`mb-4 ${marketingTypography.sectionDisplayLight}`}
              style={{ fontFamily: "var(--font-space-grotesk)", color: homeTheme.lightHeading }}
            >
              {includedCopy.title}
            </h2>
            <p className="text-[1.05rem] leading-[1.75]" style={{ color: homeTheme.lightBody }}>
              {includedCopy.sub}
            </p>
          </div>

          <div className="mx-auto max-w-4xl overflow-x-auto">
            <table className="w-full min-w-[600px] border-collapse text-left">
              <thead>
                <tr style={{ borderBottom: `1px solid ${homeTheme.lightRule}` }}>
                  <th className="pb-4 pr-4 text-[0.72rem] font-bold uppercase tracking-[0.12em]" style={{ color: homeTheme.lightBody }}>
                    Capability
                  </th>
                  <th className="pb-4 px-3 text-center text-[0.72rem] font-bold uppercase tracking-[0.12em]" style={{ color: homeTheme.lightHeading }}>
                    Single
                  </th>
                  <th className="pb-4 px-3 text-center text-[0.72rem] font-bold uppercase tracking-[0.12em]" style={{ color: homeTheme.lightHeading }}>
                    Team
                  </th>
                  <th className="pb-4 px-3 text-center text-[0.72rem] font-bold uppercase tracking-[0.12em]" style={{ color: homeTheme.lightHeading }}>
                    Enterprise
                  </th>
                </tr>
              </thead>
              <tbody>
                {comparisonRows.map((row) => (
                  <tr key={row.label} style={{ borderBottom: `1px solid ${homeTheme.lightRule}` }}>
                    <td className="py-5 pr-4 text-[0.92rem] font-semibold capitalize" style={{ color: "#0b1733" }}>
                      {row.label}
                    </td>
                    <td className="px-3 py-5 text-center">
                      <Cell value={row.single} />
                    </td>
                    <td className="px-3 py-5 text-center">
                      <Cell value={row.team} />
                    </td>
                    <td className="px-3 py-5 text-center">
                      <Cell value={row.enterprise} />
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Technical protocol FAQ */}
      <section className="border-b py-20 text-white md:py-28" style={{ borderColor: homeTheme.borderSubtle, background: "#070a12" }}>
        <div className="content-wrap page-gutter">
          <div className="mx-auto mb-12 max-w-2xl text-center md:mb-14">
            <h2 className="mb-3 text-[clamp(1.75rem,4vw,2.5rem)] font-extrabold uppercase leading-tight tracking-tight" style={{ fontFamily: "var(--font-space-grotesk)" }}>
              {protocolCopy.title}
            </h2>
            <p className="text-[0.98rem]" style={{ color: homeTheme.textMuted }}>
              {protocolCopy.sub}
            </p>
          </div>

          <TechnicalProtocolFaq items={faqItems} />
        </div>
      </section>

      {/* Gradient CTA */}
      <section
        className="relative overflow-hidden py-14 md:py-16"
        style={{
          background: "linear-gradient(90deg, #2d6cff 0%, #7c3aed 100%)",
        }}
      >
        <div className="content-wrap page-gutter">
          <div className="mx-auto flex max-w-5xl flex-col items-center justify-between gap-8 md:flex-row md:gap-10">
            <div className="max-w-xl text-center md:text-left">
              <p
                className="text-[1.15rem] font-bold uppercase leading-snug tracking-tight text-white md:text-[1.25rem]"
                style={{ fontFamily: "var(--font-space-grotesk)" }}
              >
                {pricingCta.title}
              </p>
              <p className="mt-1 text-[0.98rem] font-medium leading-snug text-white/90">{pricingCta.sub}</p>
            </div>
            <Link
              href={pricingCta.href}
              className="inline-flex shrink-0 items-center justify-center rounded-sm bg-white px-8 py-3.5 text-[0.72rem] font-bold uppercase tracking-[0.16em] no-underline transition-opacity hover:opacity-95"
              style={{ color: homeTheme.blue }}
            >
              {pricingCta.button}
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
