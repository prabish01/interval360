import LoginLayout from "@/components/LoginLayout";

export const metadata = {
  title: "Admin Login — Interval 360",
  openGraph: { title: "Admin Login — Interval 360" },
  twitter: { title: "Admin Login — Interval 360" },
};

export default function AdminLoginPage() {
  return <LoginLayout variant="admin" />;
}
