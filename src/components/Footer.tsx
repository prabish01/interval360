import Link from "next/link";
import Image from "next/image";

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
            <p className="text-[0.9rem] md:text-[0.95rem] leading-[1.75] max-w-[38ch]" style={{ color: "rgba(255,255,255,0.6)" }}>
              Leadership feedback, reimagined with conversational AI. Better signal, lower burden, and practical reports teams actually use.
            </p>
          </div>

          <div>
            <p className="text-[0.76rem] font-semibold tracking-[0.18em] uppercase mb-4" style={{ color: "rgba(187,220,251,0.76)" }}>
              Quick Links
            </p>
            <div className="flex flex-col gap-3">
              {footerLinks.map((l) => (
                <Link
                  key={l.href}
                  href={l.href}
                  className="text-[0.9rem] md:text-[0.95rem] no-underline transition-colors hover:text-white"
                  style={{ color: "rgba(255,255,255,0.62)" }}
                >
                  {l.label}
                </Link>
              ))}
            </div>
          </div>

          <div>
            <p className="text-[0.76rem] font-semibold tracking-[0.18em] uppercase mb-4" style={{ color: "rgba(187,220,251,0.76)" }}>
              Important
            </p>
            <div className="flex flex-col gap-3">
              {importantLinks.map((l) => (
                <Link
                  key={l.href}
                  href={l.href}
                  className="text-[0.9rem] md:text-[0.95rem] no-underline transition-colors hover:text-white"
                  style={{ color: "rgba(255,255,255,0.62)" }}
                >
                  {l.label}
                </Link>
              ))}
            </div>
          </div>

          <div>
            <p className="text-[0.76rem] font-semibold tracking-[0.18em] uppercase mb-4" style={{ color: "rgba(187,220,251,0.76)" }}>
              Newsletter
            </p>
            <p className="text-[0.88rem] leading-[1.7] mb-4" style={{ color: "rgba(255,255,255,0.58)" }}>
              Monthly ideas on leadership feedback, coaching, and talent decisions.
            </p>
            <form action="/company#contact" className="flex items-center gap-2">
              <input
                type="email"
                name="email"
                required
                placeholder="Work email"
                className="w-full h-10 px-3 text-[0.88rem] rounded-md bg-transparent border outline-none"
                style={{ borderColor: "rgba(255,255,255,0.24)", color: "rgba(255,255,255,0.92)" }}
              />
              <button
                type="submit"
                className="h-10 px-4 text-[0.84rem] font-semibold rounded-md transition-opacity hover:opacity-90"
                style={{ background: "#2d6cff", color: "#fff" }}
              >
                Join
              </button>
            </form>
          </div>
        </div>

        <div className="mt-10 pt-6 border-t flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4" style={{ borderColor: "rgba(255,255,255,0.14)" }}>
          <p className="text-[0.84rem] md:text-[0.9rem]" style={{ color: "rgba(255,255,255,0.45)" }}>
            &copy; {year} Interval 360. All rights reserved.
          </p>
          <p className="text-[0.8rem] md:text-[0.86rem]" style={{ color: "rgba(255,255,255,0.4)" }}>
            Built for leadership teams, coaches, and talent decision-makers.
          </p>
        </div>
      </div>
    </footer>
  );
}
