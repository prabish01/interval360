import type { Metadata } from "next";
import { HomeSections } from "@/components/home";

export const metadata: Metadata = {
  title: "Interval 360 — Conversational AI 360 Feedback",
  description: "AI-powered 360 feedback that replaces long surveys with a five-minute conversation. Better input, concise reports, and a process leadership teams actually use.",
  openGraph: {
    title: "Interval 360 — Conversational AI 360 Feedback",
    description: "AI-powered 360 feedback that replaces long surveys with a five-minute conversation. Better input, concise reports, and a process leadership teams actually use.",
    images: "/interval360-og-image.png",
  },
  twitter: {
    title: "Interval 360 — Conversational AI 360 Feedback",
    description: "AI-powered 360 feedback that replaces long surveys with a five-minute conversation. Better input, concise reports, and a process leadership teams actually use.",
    images: "/interval360-og-image.png",
  },
};

export default function HomePage() {
  return <HomeSections />;
}
