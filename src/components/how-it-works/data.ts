export const stats = [
  { num: "~5 min", label: "Per feedback provider" },
  { num: "5–8", label: "Guided exchanges per conversation" },
  { num: "2×", label: "Reports per assessment" },
  { num: "100%", label: "Automated synthesis — no manual work" },
];

export const steps = [
  {
    num: "01",
    title: "Set up the assessment",
    body: "The leader or admin configures the assessment — selecting raters, setting the timeline, and choosing any role-specific focus areas. For self-serve users, setup takes minutes. For enterprise accounts, admins can configure and launch across a cohort from a single dashboard.",
    time: "Less than 10 minutes to launch",
  },
  {
    num: "02",
    title: "Raters complete a guided conversation",
    body: "Each feedback provider receives a link and works through a five-minute text based chat — not a long survey. The AI guides them through 5–8 exchanges, asking structured questions about the leader's performance and leadership. When responses are vague, it follows up with a targeted question to draw out specifics and context.",
    time: "~5 minutes per rater",
  },
  {
    num: "03",
    title: "Feedback is synthesized automatically",
    body: "Once feedback collection is complete, the platform synthesizes all responses into a structured report. There is no manual processing or analysis required. The synthesis identifies themes, strengths, development areas, and actionable next steps — across both the What and the How.",
    time: "Automated — no wait time for processing",
  },
  {
    num: "04",
    title: "Leader and HR receive the report",
    body: "The completed report is delivered to the appropriate parties based on the access configuration. Leaders receive their individual report. HR admins can view individual reports and cohort analytics. Coaches receive a client-ready summary they can use directly in a debrief conversation.",
    time: "Available immediately on completion",
  },
  {
    num: "05",
    title: "Use it for development or decisions",
    body: "The report is designed to be used immediately — in a coaching conversation, a development planning session, a talent review, or a succession discussion. No interpretation layer required. No consultant needed to debrief it. Just results you can act on.",
    time: "Results ready to use the same day",
  },
];

export const conversationExample = [
  {
    speaker: "ai" as const,
    text: "On a scale of 0 to 10, how likely are you to recommend working with Victor Ramirez to a friend or colleague? (0 = Not at all likely, 10 = Extremely likely)",
  },
  {
    speaker: "rater" as const,
    text: "8",
  },
  {
    speaker: "ai" as const,
    text: "Thanks. What factors influenced your rating of 8?",
  },
  {
    speaker: "rater" as const,
    text: "Vic's a natural leader who sets direction clearly and inspires confidence. He works hard, leads from the front, and makes it clear where the team stands. He's built a group that trusts his leadership, and that's helped us notch some big wins — like becoming a solid third at Monterey and being the only auction house showing growth in recent years. The only challenge is that as we scale, the lack of day-to-day structure sometimes shows. A bit more framework would help without losing the entrepreneurial spirit that's made us successful.",
  },
  {
    speaker: "ai" as const,
    text: "That's great feedback! What would you say Victor Ramirez's greatest strength as a leader?",
  },
  {
    speaker: "rater" as const,
    text: "So strategic!",
  },
  {
    speaker: "ai" as const,
    text: "Could you give me more detail about that?",
  },
  {
    speaker: "rater" as const,
    text: "I mean, it just feels like he's looking five years out while most of us are focused on today. He's also put the right people in the right roles and isn't afraid to embrace new ideas, like bringing in AI tools to push us forward, while still keeping relationships at the center of what we do.",
  },
];

export const receiveReports = [
  {
    label: "Assessment Report",
    subtitle: "For managers, HR, and talent decisions",
    items: [
      "Executive summary across all feedback",
      "Leadership analysis of the What and the How",
      "Strengths and development areas",
    ],
    image: "/assessment-preview-overview.png",
    imageAlt: "Preview of an Interval 360 assessment report",
  },
  {
    label: "Development Report",
    subtitle: "Written for the leader",
    items: [
      "Structured deep-dive on each theme",
      "Specific examples and patterns",
      "Curated development resources",
    ],
    image: "/development-report-deep-dive.png",
    imageAlt: "Development report deep-dive: Insight, Impact, and learning resources for a development opportunity",
  },
];
