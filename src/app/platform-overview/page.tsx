import PlatformOverviewSections from "@/components/platform-overview";

export const metadata = {
  title: "Platform Overview — Interval 360",
  description: "A leadership assessment platform built for repeatable 360s at scale. Conversational AI collection, automated synthesis, and two reports per assessment — no manual work required.",
  openGraph: {
    title: "Platform Overview — Interval 360",
    description: "A leadership assessment platform built for repeatable 360s at scale. Conversational AI collection, automated synthesis, and two reports per assessment — no manual work required.",
    image: "/interval360-og-image.png"
  },
  twitter: {
    title: "Platform Overview — Interval 360",
    description: "A leadership assessment platform built for repeatable 360s at scale. Conversational AI collection, automated synthesis, and two reports per assessment — no manual work required.",
    image: "/interval360-og-image.png"
  },
};

export default function PlatformOverviewPage() {
  return <PlatformOverviewSections />;
}
