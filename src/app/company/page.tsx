import CompanySections from "@/components/company";

export const metadata = {
  alternates: {
    canonical: "/company",
  },
  title: "About — Interval 360",
  description: "Interval 360 was built by practitioners who spent two decades running leadership assessments at the top of the industry. Here's our story and the team behind the platform.",
  openGraph: {
    title: "About — Interval 360",
    description: "Interval 360 was built by practitioners who spent two decades running leadership assessments at the top of the industry. Here's our story and the team behind the platform.",
    images: "/interval360-og-image.png"
  },
  twitter: {
    title: "About — Interval 360",
    description: "Interval 360 was built by practitioners who spent two decades running leadership assessments at the top of the industry. Here's our story and the team behind the platform.",
    images: "/interval360-og-image.png"
  },
};

export default function CompanyPage() {
  return <CompanySections />;
}
