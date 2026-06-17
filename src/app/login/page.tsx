import LoginLayout from "@/components/LoginLayout";

export const metadata = {
  title: "Login — Interval 360",
  description: "Log in to your Interval 360 assessment account.",
  robots: "noindex, nofollow",
  openGraph: {
    title: "Login — Interval 360",
    description: "Log in to your Interval 360 assessment account.",
    images: "/interval360-og-image.png"
  },
  twitter: {
    title: "Login — Interval 360",
    description: "Log in to your Interval 360 assessment account.",
    images: "/interval360-og-image.png"
  },
};

export default function LoginPage() {
  return <LoginLayout variant="user" />;
}
