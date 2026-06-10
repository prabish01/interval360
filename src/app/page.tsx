import type { Metadata } from "next";
import { HomeSections } from "@/components/home";

export const metadata: Metadata = {
  title: "Interval 360 — Conversational AI 360 Feedback",
  openGraph: { title: "Interval 360 — Conversational AI 360 Feedback" },
  twitter: { title: "Interval 360 — Conversational AI 360 Feedback" },
};

export default function HomePage() {
  return <HomeSections />;
}
