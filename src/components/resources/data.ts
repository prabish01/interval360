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
  { id: "field-notes", label: "Field notes" },
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
      href: "#",
    },
    {
      title: "From annual survey fatigue to a quarterly signal",
      body: "Replacing a legacy 360 with a lighter, AI-assisted flow — without sacrificing rigor for talent reviews.",
      href: "#",
    },
  ],
} as const;

export const playbooksSection = {
  title: "Playbooks.",
  sub: "Short guides you can use with clients and stakeholders.",
  num: "01",
  items: [
    {
      title: "How to Run a 360 in 14 Days",
      body: "A practical cadence for launch, reminders, and completion — without burning out raters or the participant.",
      href: "#",
    },
    {
      title: "How to Choose the Right Raters",
      body: "Balance perspective, credibility, and burden so feedback reflects how the leader is actually experienced.",
      href: "#",
    },
    {
      title: "Using What + How in Promotion Decisions",
      body: "Pair performance signal with leadership experience so talent conversations stay grounded in evidence.",
      href: "#",
    },
  ],
} as const;

export const fieldNotesSection = {
  header: {
    title: "FIELD NOTES",
    subtitle: "INTERNAL ARCHIVE / INTELLIGENCE",
  },
  cards: [
    {
      id: "card-1",
      tag: "Talent Decisions",
      readTime: "4 min read",
      number: "01",
      title: "Why \"He's ready\" is not a succession plan",
      body: "Succession decisions made on gut and tenure are among the most expensive mistakes organizations make. The problem is not bad intent — it's that the feedback loop is broken. Here's what decision-ready data actually looks like.",
      cta: "ACCESS ARTIFACT",
    },
    {
      id: "card-2",
      number: "02",
      tag: "Feedback Quality",
      readTime: "3 min read",
      title: "The survey says 4.2 out of 5. What does that mean?",
      body: "Likert scale averages flatten the signal. What looks like a solid score often hides variance that matters — a 4.2 where three raters gave 3s and three gave 5s tells a different story than six people giving 4s. Conversation-based feedback surfaces that difference.",
    },
    {
      id: "card-3",
      tag: "Leadership Development",
      readTime: "5 min read",
      title: "The first 90 days brief: what a good onboarding 360 tells you",
      body: "Running a 360 at 60–90 days is one of the highest-ROI talent investments a company can make for new leaders. The data comes in when behavior is still being shaped — not after patterns have calcified.",
    },
    {
      id: "card-4",
      tag: "AI Governance",
      readTime: "4 min read",
      title: "What Interval 360's AI actually does — and doesn't do",
      body: "We're deliberate about what we ask AI to do in the feedback process. It asks follow-up questions. It synthesizes themes. It does not generate feedback on behalf of raters, make promotion recommendations, or share data across organizations.",
      iconLabel: "PROTOCOL V.02",
    },
    {
      id: "card-5",
      tag: "Talent Decisions",
      readTime: "3 min read",
      title: "Intent vs. impact: the gap that 360s are built to close",
      body: "Most leaders believe they are doing more or less what they intend to do. Their raters often see something different. The What + How framework makes that gap visible in a way that is specific enough to act on.",
    },
    {
      id: "card-6",
      tag: "Leadership Development",
      readTime: "4 min read",
      title: "Why coaches prefer conversational 360s to surveys",
      body: "The best coaching conversations start with specific, quoted observations — not averages. When a coach can point to a rater saying \"she tends to shut down debate once she's made a decision,\" that's material you can actually work with.",
      cta: "VIEW FULL ANALYSIS",
    },
  ],
};

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
    a: "Reports synthesize automatically as rater input completes, typically the same day the assessment closes.",
  },
] as const;

export const newsletterCopy = {
  title: "New playbooks and field notes.",
  sub: "Occasional intelligence on leadership feedback — no spam.",
  placeholder: "Your email address",
  button: "Subscribe to intelligence",
};
