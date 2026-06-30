"use client";

import { usePathname } from "next/navigation";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import CalEmbedInit from "@/components/CalEmbedInit";

const NO_SHELL_ROUTES = ["/login", "/admin/login", "/demo"];

export default function LayoutShell({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const hideShell = NO_SHELL_ROUTES.some(r => pathname?.startsWith(r));

  if (hideShell) return <>{children}</>;

  return (
    <>
      <CalEmbedInit />
      <Nav />
      {children}
      <Footer />
    </>
  );
}
