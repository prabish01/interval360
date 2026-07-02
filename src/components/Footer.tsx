import Link from "next/link";
import Image from "next/image";
import NewsletterForm from "./NewsletterForm";

const footerLinks = [
  { href: "/platform-overview", label: "Platform" },
  { href: "/solutions", label: "Solutions" },
  { href: "/pricing", label: "Pricing" },
  { href: "/resources", label: "Resources" },
  { href: "/company", label: "Company" },
];

const importantLinks = [
  { href: "/company#contact", label: "Contact" },
  { href: "/buy", label: "Buy an Assessment" },
  { href: "/reports-and-outputs", label: "Sample Reports" },
  { href: "/privacy", label: "Privacy Policy" },
  { href: "/terms", label: "Terms & Conditions" },
];

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer
      style={{
        background: "#000",
        borderTop: "1px solid rgba(45,108,255,0.25)",
      }}
    >
      <div className="page-gutter py-14 md:py-18 max-w-7xl mx-auto w-full">
        <div className="grid gap-10 md:gap-12 md:grid-cols-[1.1fr_1fr_1fr_1.2fr]">
          <div>
            <Link
              href="/"
              className="inline-block no-underline mb-4"
              aria-label="Interval 360 home"
            >
              <Image
                src="/white_logologo.svg"
                alt="Interval 360"
                width={150}
                height={34}
                className="h-8 md:h-9 w-auto"
                priority
              />
            </Link>
            <p className="text-sm md:text-base leading-[1.75] max-w-[38ch]" style={{ color: "rgba(255,255,255,0.6)" }}>
              Better feedback, lower burden, and practical reports teams actually use.
            </p>
          </div>

          <div>
            <p className="text-xs font-semibold tracking-[0.18em] uppercase mb-4" style={{ color: "rgba(187,220,251,0.76)" }}>
              Quick Links
            </p>
            <div className="flex flex-col gap-3">
              {footerLinks.map((l) => (
                <Link
                  key={l.href}
                  href={l.href}
                  className="text-sm md:text-base no-underline transition-colors hover:text-white"
                  style={{ color: "rgba(255,255,255,0.62)" }}
                >
                  {l.label}
                </Link>
              ))}
            </div>
          </div>

          <div>
            <p className="text-xs font-semibold tracking-[0.18em] uppercase mb-4" style={{ color: "rgba(187,220,251,0.76)" }}>
              Important
            </p>
            <div className="flex flex-col gap-3">
              {importantLinks.map((l) => (
                <Link
                  key={l.href}
                  href={l.href}
                  className="text-sm md:text-base no-underline transition-colors hover:text-white"
                  style={{ color: "rgba(255,255,255,0.62)" }}
                >
                  {l.label}
                </Link>
              ))}
            </div>
          </div>

          <div>
            <p className="text-xs font-semibold tracking-[0.18em] uppercase mb-4" style={{ color: "rgba(187,220,251,0.76)" }}>
              Newsletter
            </p>
            <p className="text-base leading-[1.7] mb-4" style={{ color: "rgba(255,255,255,0.58)" }}>
              Monthly ideas on leadership feedback, coaching, and talent decisions.
            </p>
            <NewsletterForm />
          </div>
        </div>

        <div className="mt-10 pt-6 border-t flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4" style={{ borderColor: "rgba(255,255,255,0.14)" }}>
          <p className="text-sm" style={{ color: "rgba(255,255,255,0.45)" }}>
            &copy; {year} Interval 360. All rights reserved.
          </p>
          <div className="flex items-center gap-5">
            <p className="text-sm" style={{ color: "rgba(255,255,255,0.4)" }}>
              Built for leadership teams, coaches, and talent decision-makers.
            </p>
            <a
              href="https://www.linkedin.com/company/interval360/"
              target="_blank"
              rel="noreferrer"
              aria-label="Interval 360 on LinkedIn"
              className="shrink-0 transition-colors hover:opacity-80"
              style={{ color: "rgba(255,255,255,0.5)" }}
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                <path d="M20.45 20.45h-3.55v-5.57c0-1.33-.02-3.03-1.85-3.03-1.85 0-2.14 1.45-2.14 2.94v5.66H9.36V9h3.41v1.56h.05c.48-.9 1.64-1.85 3.38-1.85 3.6 0 4.27 2.37 4.27 5.46v6.28zM5.34 7.43a2.06 2.06 0 1 1 0-4.12 2.06 2.06 0 0 1 0 4.12zM7.12 20.45H3.56V9h3.56v11.45z" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
