import LoginLayout from "@/components/LoginLayout";

export const metadata = {
  title: "Admin Login — Interval 360",
  description: "Interval 360 platform administration login.",
  robots: "noindex, nofollow",
  openGraph: {
    title: "Admin Login — Interval 360",
    description: "Interval 360 platform administration login.",
    image: "/interval360-og-image.png"
  },
  twitter: {
    title: "Admin Login — Interval 360",
    description: "Interval 360 platform administration login.",
  ,
    image: "/interval360-og-image.png"
  },
};

export default function AdminLoginPage() {
  return <LoginLayout variant="admin" />;
}
