export const resourcesHero = {
  breadcrumb: "Resources / Intelligence",
  title: "Resources",
  sublines: [
    "Practical thinking on leadership feedback that works.",
    "High-performance frameworks for the modern executive team.",
  ],
};

export const resourceFilters = [
  { id: "all", label: "All" },
  { id: "sample-reports", label: "Sample reports" },
  { id: "playbooks", label: "Playbooks" },
  { id: "case-studies", label: "Case studies" },
] as const;

export const featuredSample = {
  eyebrow: "Sample report",
  title: "See what a real Interval 360 report looks like.",
  body: "Assessment and development outputs built for talent decisions and coaching debriefs — concise, structured, and ready to use the same day.",
  cta: "View sample report",
  href: "/reports-and-outputs",
};

/** Right-column preview card on the featured sample section */
export const sampleReportPreview = {
  headerTitle: "Interval 360 — Leadership Assessment",
  headerMeta: "Sample Report · Confidential",
  executiveSummaryLabel: "Executive Summary",
  executiveSummaryBody:
    "Strong operational credibility and consistent follow-through. The most consistent theme across raters is that this leader delivers reliably. Growth edge: creating space for others to lead — raters observe a tendency to stay too close to execution rather than delegating with confidence.",
  whatScore: "4.2",
  howScore: "3.6",
  raters: "8",
  topThemesLabel: "Top Themes",
  themes: [
    {
      line: "Operational reliability",
      detail: "mentioned by 7 of 8 raters",
    },
    {
      line: "Strong under pressure",
      detail: "consistent across manager and peer feedback",
    },
    {
      line: "Delegation gap",
      detail: "noted in 5 of 8 conversations as a growth area",
    },
  ],
} as const;

export const caseStudiesSection = {
  title: "Case studies.",
  sub: "How teams deploy Interval 360 in the wild.",
  items: [
    {
      title: "Scaling feedback across a global leadership cohort",
      body: "Fewer coordination hours, faster cycles, and reports leaders actually use in development conversations.",
      href: "/resources/case-study-global-cohort",
    },
    {
      title: "From annual survey fatigue to a quarterly signal",
      body: "Replacing a legacy 360 with a lighter, AI-assisted flow — without sacrificing rigor for talent reviews.",
      href: "/resources/case-study-survey-fatigue",
    },
  ],
} as const;

export const playbooksSection = {
  title: "Playbooks.",
  sub: "Short guides you can use with clients and stakeholders.",
  num: "01",
  items: [
    {
      title: "How to Choose the Right Raters",
      body: "Balance perspective, credibility, and burden so feedback reflects how the leader is actually experienced.",
      href: "/resources/how-to-choose-the-right-raters",
    },
    {
      title: "How to Run a 360 in 14 Days",
      body: "A practical cadence for launch, reminders, and completion — without burning out raters or the participant.",
      href: "/resources/how-to-run-a-360-in-14-days",
    },
    {
      title: "Using the What and the How in Promotion Decisions",
      body: "Pair performance signal with leadership experience so talent conversations stay grounded in evidence.",
      href: "/resources/using-what-and-how-in-promotion-decisions",
    },
  ],
} as const;

export const intelligenceFaq = [
  {
    q: "How does Interval 360 handle rater anonymity?",
    a: "Raters provide structured input through a secure flow. Reports aggregate themes and patterns so individual comments are not attributed in a way that identifies a single rater.",
  },
  {
    q: "Can we use Interval 360 inside an existing coaching engagement?",
    a: "Yes. Many coaches purchase per assessment and use outputs directly in debriefs — no separate platform license required.",
  },
  {
    q: "What outputs do HR and the leader receive?",
    a: "You receive an assessment-oriented report for talent decisions and a development report for the leader, each formatted for immediate use.",
  },
  {
    q: "How quickly are reports available?",
    a: "Reports are delivered the day after the assessment closes. Once rater input is complete, synthesis runs automatically overnight.",
  },
] as const;

export const newsletterCopy = {
  title: "New playbooks and field notes.",
  sub: "Occasional intelligence on leadership feedback — no spam.",
  placeholder: "Your email address",
  button: "Subscribe to intelligence",
};
