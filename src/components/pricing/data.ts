export const pricingHero = {
  title: "Pricing",
  sub: "Simple pricing. Two lanes. No surprises.",
  body: "Buy a single assessment or a team pack with a credit card, or talk to us about an enterprise rollout. Both paths use the same platform and produce the same quality of output.",
};

export const pricingPlans = [
  {
    id: "single",
    title: "Single Assessment",
    badge: undefined,
    description: "One assessment, one leader. Pay as you go.",
    price: "$150",
    priceSuffix: "/assessment",
    cta: "Select plan",
    href: "/buy",
    highlighted: false,
    variant: "dark" as const,
  },
  {
    id: "team",
    title: "Team Pack",
    badge: "Most popular",
    description: "For small teams running assessments regularly — better price, same quality.",
    price: "$125",
    priceSuffix: "/assessment",
    cta: "Select team",
    href: "/buy",
    highlighted: true,
    variant: "gradient" as const,
  },
  {
    id: "enterprise",
    title: "Enterprise Custom",
    badge: undefined,
    description: "Volume pricing and custom configuration for organizations running assessments at scale.",
    price: "Custom",
    priceSuffix: "/year",
    cta: "Contact sales",
    href: "/company#contact",
    highlighted: false,
    variant: "dark" as const,
  },
] as const;

/** Row label + cell value per tier: "check" | "dash" | "limited" */
export const comparisonRows: {
  label: string;
  single: "check" | "dash" | "limited";
  team: "check" | "dash" | "limited";
  enterprise: "check" | "dash" | "limited";
}[] = [
  {
    label: "AI talent mapping",
    single: "check",
    team: "check",
    enterprise: "check",
  },
  {
    label: "Velocity reports",
    single: "dash",
    team: "check",
    enterprise: "check",
  },
  {
    label: "Custom API protocols",
    single: "dash",
    team: "limited",
    enterprise: "check",
  },
  {
    label: "Whitelabel dashboard",
    single: "dash",
    team: "dash",
    enterprise: "check",
  },
];

export const includedCopy = {
  title: "What's Included",
  sub: "Every tier is powered by the core Interval360 intelligence engine. Precision comes standard.",
};

export const protocolCopy = {
  title: "Technical protocol",
  sub: "Detailed specifications on our operational model.",
};

export const faqItems = [
  {
    q: "How are the assessments delivered?",
    a: "Participants receive a secure link to a conversational flow. Raters complete short input on their own time; results synthesize automatically into your reports.",
  },
  {
    q: "How does the 10-pack work?",
    a: "A seat covers one leader receiving a 360 assessment within your team pack. Volume pricing applies when you purchase multiple seats in one transaction.",
  },
  {
    q: "Do you offer multi-year discounts?",
    a: "Enterprise agreements can include multi-year commitments and volume discounts. Contact sales to scope what fits your organization.",
  },
  {
    q: "Security and data encryption standards?",
    a: "Data is encrypted in transit and at rest. We follow industry-standard practices for access control and retention; details are available under enterprise review.",
  },
] as const;

export const pricingCta = {
  title: "Ready to get started?",
  sub: "No setup fees. Reports delivered the next day.",
  button: "Buy an Assessment",
  href: "/buy",
};
