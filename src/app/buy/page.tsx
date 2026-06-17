import BuyLayout from "@/components/BuyLayout";

export const metadata = {
  title: "Buy an Assessment — Interval 360",
  description: "Purchase individual or team 360 assessments. Single assessments at $150, team packs at $125 each. No setup fees, reports delivered next day.",
  openGraph: {
    title: "Buy an Assessment — Interval 360",
    description: "Purchase individual or team 360 assessments. Single assessments at $150, team packs at $125 each. No setup fees, reports delivered next day.",
    image: "/interval360-og-image.png"
  },
  twitter: {
    title: "Buy an Assessment — Interval 360",
    description: "Purchase individual or team 360 assessments. Single assessments at $150, team packs at $125 each. No setup fees, reports delivered next day.",
    image: "/interval360-og-image.png"
  },
};

export default function BuyPage() {
  return <BuyLayout />;
}
