export const surveyVsConvo = {
  survey: [
    "Fixed questions for every rater — no adaptation based on responses",
    'Rating scales produce scores, not insight — "4 out of 5" says nothing specific',
    "Open text fields produce inconsistent depth — some raters write one word, others write paragraphs",
    "No mechanism to ask for an example when an answer is too general",
    "30–50 items creates fatigue — raters rush through later questions",
    "Output is shaped by what raters chose to volunteer, not by what would be most useful",
  ],
  conversation: [
    "Questions adapt based on what the rater says — the AI probes where it matters",
    "Structured conversation produces specific examples, context, and patterns",
    "Follow-up logic draws out depth consistently — every rater gets the same quality of probing",
    "When a response is too general, the AI asks for a specific example",
    "5–8 focused exchanges — lower burden, higher quality",
    "The AI guides toward the information that makes output useful",
  ],
};

export const followUpExample = [
  { speaker: "ai", text: "You mentioned that Sarah tends to communicate well. Can you give me a specific example of a situation in the last few months where you saw that play out — what happened, and what made her communication particularly effective in that moment?" },
  { speaker: "rater", text: "Yeah, there was that product roadmap meeting where there were some real tensions between engineering and product. She came in with a clear framing of the tradeoffs, didn't oversimplify things, but also made it easy for people to understand what we were actually deciding. She got everyone aligned within the hour." },
  { speaker: "ai", text: "That's useful context. Was this a one-time thing, or do you see this kind of structured clarity show up consistently when there's tension or ambiguity in a room?" },
  { speaker: "rater", text: "Consistently. She's actually one of the few people I've worked with who seems to get calmer when things get more complicated. It's like the complexity helps her focus." },
];

export const governanceItems = [
  { title: "What the AI does", body: "The AI guides the conversation, probes for specificity, and synthesizes responses into a structured report. It does not interpret the meaning of feedback or make talent decisions." },
  { title: "What the AI does not do", body: "The AI does not make promotion or succession recommendations. It does not filter or rank feedback providers. It does not have visibility into the leader's HR record or performance history." },
  { title: "How anonymity is protected", body: "The AI is designed to avoid surfacing identifying details in synthesis. Individual responses are not attributed to specific raters in the output. Synthesis is built to reflect patterns across all feedback, not individual voices." },
  { title: "How bias is managed", body: "The starting questions are structured to focus on observable behavior and specific examples — not personal attributes. The follow-up logic is designed to draw out patterns across contexts, not to reinforce initial impressions." },
];
