import ConversationalAiSections from "@/components/conversational-ai";

export const metadata = {
  alternates: {
    canonical: "/conversational-ai",
  },
  title: "Conversational AI — Interval 360",
  description: "Why conversation produces better leadership data than surveys. Interval 360's AI probes for examples and context — the same way a skilled interviewer would — in five minutes.",
  openGraph: {
    title: "Conversational AI — Interval 360",
    description: "Why conversation produces better leadership data than surveys. Interval 360's AI probes for examples and context — the same way a skilled interviewer would — in five minutes.",
    images: "/interval360-og-image.png"
  },
  twitter: {
    title: "Conversational AI — Interval 360",
    description: "Why conversation produces better leadership data than surveys. Interval 360's AI probes for examples and context — the same way a skilled interviewer would — in five minutes.",
    images: "/interval360-og-image.png"
  },
};

export default function ConversationalAIPage() {
  return <ConversationalAiSections />;
}
