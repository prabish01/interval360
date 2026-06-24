import ReportsAndOutputsSections from "@/components/reports-and-outputs";

export const metadata = {
  alternates: {
    canonical: "/reports-and-outputs",
  },
  title: "Reports & Outputs — Interval 360",
  description: "Every assessment produces two reports: one for HR and talent decisions, one for the leader. Both are structured, concise, and ready to use without additional interpretation.",
  openGraph: {
    title: "Reports & Outputs — Interval 360",
    description: "Every assessment produces two reports: one for HR and talent decisions, one for the leader. Both are structured, concise, and ready to use without additional interpretation.",
    images: "/interval360-og-image.png"
  },
  twitter: {
    title: "Reports & Outputs — Interval 360",
    description: "Every assessment produces two reports: one for HR and talent decisions, one for the leader. Both are structured, concise, and ready to use without additional interpretation.",
    images: "/interval360-og-image.png"
  },
};

export default function ReportsAndOutputsPage() {
  return <ReportsAndOutputsSections />;
}
