/**
 * Marketing palette used on the homepage (`src/components/home/*`).
 * Reuse on other marketing pages (e.g. /how-it-works) so accents stay consistent.
 */
export const homeTheme = {
  blue: "#2d6cff",
  blueHover: "#1a57e8",
  blueBright: "#006af5",
  /** Hero / top-of-funnel sections */
  heroGradient: "linear-gradient(180deg, #061027 0%, #040a1a 56%, #030816 100%)",
  /** Full-bleed dark sections (home “How it works”, etc.) */
  sectionCharcoal: "#0e0e0e",
  /** CTA / band sections */
  sectionInk: "#0a0e1a",
  /** Elevated panels (sample reports, cards) */
  sectionElevated: "#131313",
  textBody: "rgba(234,239,243,0.72)",
  textMuted: "rgba(234,239,243,0.65)",
  textFaint: "rgba(234,239,243,0.5)",
  eyebrow: "rgba(187,220,251,0.78)",
  borderSubtle: "rgba(255,255,255,0.06)",
  borderHairline: "rgba(255,255,255,0.08)",
  outlineButtonBorder: "rgba(255,255,255,0.22)",
  outlineButtonBg: "rgba(255,255,255,0.02)",
  linkMuted: "rgba(234,239,243,0.68)",
  /** `rgba(45, 108, 255, a)` */
  blueShadow: "0 10px 36px rgba(45,108,255,0.35)",
  blueGlowSoft: "rgba(45,108,255,0.28)",
  blueTint12: "rgba(45,108,255,0.12)",
  blueTint35: "rgba(45,108,255,0.35)",
  /** Alternating light bands (pair with dark sections for rhythm) */
  sectionWhite: "#ffffff",
  sectionPaper: "#f5f6f8",
  /** Matches `globals.css` — for copy on white */
  lightHeading: "#033a70",
  lightBody: "#64749a",
  lightRule: "rgba(5, 79, 154, 0.12)",
  /** Near-black strip between white bands */
  sectionBlack: "#030303",
} as const;

/**
 * Marketing typography scales used on the homepage (`HomeHeroSection`, major sections).
 * Reuse on other marketing pages so display sizes stay consistent.
 */
export const marketingTypography = {
  /** Primary hero headline — matches `HomeHeroSection` h1 */
  heroDisplay:
    "text-[clamp(2.35rem,8.6vw,6.3rem)] font-extrabold leading-[0.98] tracking-[-0.03em] uppercase",
  /** Hero / dark-band lead paragraph */
  heroLead: "text-[clamp(1rem,1.7vw,1.25rem)] leading-[1.7]",
  /** Eyebrow / kicker above hero or section titles */
  heroEyebrow: "text-[0.7rem] font-semibold tracking-[0.26em] uppercase",
  /** Large section title on light backgrounds — e.g. `HomeWhySection` */
  sectionDisplayLight:
    "text-[clamp(2.8rem,6vw,5rem)] font-extrabold uppercase leading-[0.92] tracking-tight",
  /** Large section title on dark backgrounds — e.g. `HomeHowItWorksSection` */
  sectionDisplayDark:
    "text-[clamp(2.5rem,5vw,4rem)] font-extrabold uppercase leading-[1.15] tracking-tight",
  /** Bottom CTA band — e.g. `HomeCtaSection` */
  ctaBandDisplay: "text-[clamp(2.6rem,5.5vw,4.5rem)] font-extrabold uppercase leading-[0.92]",
} as const;
