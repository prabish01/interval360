import LoginLayout from "@/components/LoginLayout";

export const metadata = {
  alternates: {
    canonical: "/admin/login",
  },
  title: "Admin Login — Interval 360",
  description: "Interval 360 platform administration login.",
  robots: "noindex, nofollow",
  openGraph: {
    title: "Admin Login — Interval 360",
    description: "Interval 360 platform administration login.",
    images: "/interval360-og-image.png"
  },
  twitter: {
    title: "Admin Login — Interval 360",
    description: "Interval 360 platform administration login.",
    images: "/interval360-og-image.png"
  },
};

export default function AdminLoginPage() {
  return <LoginLayout variant="admin" />;
}
