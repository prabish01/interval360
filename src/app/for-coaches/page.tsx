import ForCoachesSections from "@/components/for-coaches";

export const metadata = {
  alternates: {
    canonical: "/for-coaches",
  },
  title: "For Coaches & Consultants — Interval 360",
  description: "Run a professional 360 for any client without building your own instrument. Pay per assessment, no platform fees, and reports ready the day after the assessment closes.",
  openGraph: {
    title: "For Coaches & Consultants — Interval 360",
    description: "Run a professional 360 for any client without building your own instrument. Pay per assessment, no platform fees, and reports ready the day after the assessment closes.",
    images: "/interval360-og-image.png"
  },
  twitter: {
    title: "For Coaches & Consultants — Interval 360",
    description: "Run a professional 360 for any client without building your own instrument. Pay per assessment, no platform fees, and reports ready the day after the assessment closes.",
    images: "/interval360-og-image.png"
  },
};

export default function ForCoachesPage() {
  return <ForCoachesSections />;
}
