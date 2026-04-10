export const stats = [
  { num: "~5 min", label: "Per feedback provider" },
  { num: "5–8", label: "Guided exchanges per conversation" },
  { num: "Days", label: "From launch to final report" },
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
    body: "Once feedback collection is complete, the platform synthesizes all responses into a structured report. There is no manual processing or analysis required. The synthesis identifies themes, strengths, development areas, and actionable next steps — across both the What and How dimensions.",
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
  { speaker: "ai", text: "Thank you for taking the time to share feedback. To start, can you describe one or two moments from the last six months where you observed this leader at their best — situations where their leadership made a real difference?" },
  { speaker: "rater", text: "Yeah, there were a few. The Q3 delivery crunch comes to mind. Everyone was stressed, timelines were slipping, and she just stayed calm, reset expectations with stakeholders really clearly, and kept the team focused. It didn't feel like the wheels were coming off even when they kind of were." },
  { speaker: "ai", text: "That's a useful example — it speaks to how she manages pressure and stakeholder communication. You mentioned she kept the team focused. How did she do that specifically? Was it through communication, structure, presence, or something else?" },
  { speaker: "rater", text: "More communication than anything. She ran a daily standup during that stretch, not to micromanage but just to surface blockers early. People knew what was happening. And she was transparent about what was at risk, which I think actually helped. No one was in the dark." },
];
