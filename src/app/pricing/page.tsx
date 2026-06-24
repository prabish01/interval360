import PricingSections from "@/components/pricing";

export const metadata = {
  alternates: {
    canonical: "/pricing",
  },
  title: "Pricing — Interval 360",
  description: "Single assessments at $150, team packs at $125 each, and enterprise pricing via sales. No setup fees. Reports delivered the next day.",
  openGraph: { title: "Pricing — Interval 360", description: "Single assessments at $150, team packs at $125 each, and enterprise pricing via sales. No setup fees. Reports delivered the next day.",
    images: "/interval360-og-image.png"
  },
  twitter: { title: "Pricing — Interval 360", description: "Single assessments at $150, team packs at $125 each, and enterprise pricing via sales. No setup fees. Reports delivered the next day." ,
    images: "/interval360-og-image.png"
  },
};

export default function PricingPage() {
  return <PricingSections />;
}
