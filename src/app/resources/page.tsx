import ResourcesSections from "@/components/resources";

export const metadata = {
  alternates: {
    canonical: "/resources",
  },
  title: "Resources — Interval 360",
  description: "Playbooks, case studies, and sample reports on leadership feedback, 360 assessment design, and talent decisions. Practical thinking for HR, coaches, and talent leaders.",
  openGraph: {
    title: "Resources — Interval 360",
    description: "Playbooks, case studies, and sample reports on leadership feedback, 360 assessment design, and talent decisions. Practical thinking for HR, coaches, and talent leaders.",
    images: "/interval360-og-image.png"
  },
  twitter: {
    title: "Resources — Interval 360",
    description: "Playbooks, case studies, and sample reports on leadership feedback, 360 assessment design, and talent decisions. Practical thinking for HR, coaches, and talent leaders.",
    images: "/interval360-og-image.png"
  },
};

export default function ResourcesPage() {
  return <ResourcesSections />;
}
