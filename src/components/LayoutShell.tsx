"use client";

import { usePathname } from "next/navigation";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";

const NO_SHELL_ROUTES = ["/particle/chat"];

export default function LayoutShell({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const hideShell = NO_SHELL_ROUTES.some(r => pathname?.startsWith(r));

  if (hideShell) return <>{children}</>;

  return (
    <>
      <Nav />
      {children}
      <Footer />
    </>
  );
}
