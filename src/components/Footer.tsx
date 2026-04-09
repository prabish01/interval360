import Link from "next/link";

const footerLinks = [
  { href: "/platform-overview", label: "Platform" },
  { href: "/solutions", label: "Solutions" },
  { href: "/pricing", label: "Pricing" },
  { href: "/resources", label: "Resources" },
  { href: "/company", label: "Company" },
];

export default function Footer() {
  return (
    <footer style={{ background: "#000" }}>
    <div
      className="flex items-center justify-between flex-wrap gap-4 page-gutter py-10 max-w-[80rem] mx-auto w-full"
    >
      <Link
        href="/"
        className="text-[1rem] font-bold tracking-[0.04em] no-underline"
        style={{ fontFamily: "var(--font-montserrat)", color: "rgba(255,255,255,0.8)" }}
      >
        Interval 360
      </Link>

      <div className="flex gap-6 flex-wrap">
        {footerLinks.map((l) => (
          <Link
            key={l.href}
            href={l.href}
            className="text-[0.8rem] no-underline transition-colors hover:text-white/70"
            style={{ color: "rgba(255,255,255,0.35)" }}
          >
            {l.label}
          </Link>
        ))}
      </div>

      <p className="text-[0.8rem]" style={{ color: "rgba(255,255,255,0.3)" }}>
        &copy; 2025 Interval 360. All rights reserved.
      </p>
    </div>
    </footer>
  );
}
