"use client";

import Link from "next/link";
import { useState, useEffect } from "react";

const solutionsMenu = [
  { href: "/solutions", label: "Solutions Overview", sub: "All use cases at a glance", hub: true },
  { href: "/solutions/leadership-development", label: "Leadership Development", sub: "Programs, cohorts, and coaching" },
  { href: "/solutions/talent-decisions", label: "Talent Decisions & Succession", sub: "Promotions, HiPo, placement" },
  { href: "/solutions/team-launches", label: "Team & Role Transitions", sub: "New managers, exec transitions" },
  null, // divider
  { href: "/for-coaches", label: "For Coaches & Consultants", sub: "Client-ready 360 for practitioners" },
];

const platformMenu = [
  { href: "/platform-overview", label: "Platform Overview", sub: "How the product works" },
  { href: "/how-it-works", label: "How It Works", sub: "Step-by-step process" },
  { href: "/conversational-ai", label: "Conversational AI", sub: "Why conversation beats surveys" },
  { href: "/reports-and-outputs", label: "Reports & Outputs", sub: "What you receive" },
];

const companyMenu = [
  { href: "/company", label: "About", sub: "Our story and approach" },
  { href: "/company#contact", label: "Contact", sub: "Get in touch" },
];

interface DropdownItem {
  href: string;
  label: string;
  sub: string;
  hub?: boolean;
}

function Dropdown({ items }: { items: (DropdownItem | null)[] }) {
  return (
    <div
      className="absolute top-full left-0 z-50 min-w-[240px] opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200"
      style={{
        background: "#fff",
        border: "1px solid var(--rule)",
        borderTop: "2px solid var(--navy)",
        borderRadius: "0 0 8px 8px",
        boxShadow: "0 12px 40px rgba(5,79,154,0.12)",
        transform: "translateY(-4px)",
        transition: "opacity 0.18s, transform 0.18s, visibility 0.18s",
      }}
    >
      {items.map((item, i) =>
        item === null ? (
          <div key={i} style={{ height: 1, background: "var(--rule)" }} />
        ) : (
          <Link
            key={item.href}
            href={item.href}
            className="block px-5 py-3 transition-colors hover:bg-[var(--light-bg)]"
            style={{ borderBottom: i < items.length - 1 ? "1px solid var(--rule)" : "none" }}
          >
            <span
              className="block text-[0.82rem] font-semibold"
              style={{ color: item.hub ? "var(--navy)" : "var(--charcoal)" }}
            >
              {item.label}
            </span>
            <span className="block text-[0.74rem] mt-0.5" style={{ color: "var(--slate)" }}>
              {item.sub}
            </span>
          </Link>
        )
      )}
    </div>
  );
}

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      className="fixed top-0 left-0 right-0 z-[9999] transition-shadow duration-200"
      style={{
        background: "rgba(255,255,255,0.97)",
        backdropFilter: "blur(12px)",
        borderBottom: "1px solid var(--rule)",
        boxShadow: scrolled ? "0 2px 16px rgba(5,79,154,0.07)" : "none",
      }}
    >
      <div className="flex items-center page-gutter h-16 gap-0 max-w-[80rem] mx-auto w-full">
        {/* Logo */}
        <Link
          href="/"
          className="flex-shrink-0 mr-8 text-[1rem] font-bold tracking-[0.04em] no-underline"
          style={{ fontFamily: "var(--font-montserrat)", color: "var(--navy-dark)" }}
        >
          Interval 360
        </Link>

        {/* Links — desktop */}
        <ul className="hidden lg:flex items-center list-none flex-1 gap-0 m-0 p-0">
          <li>
            <Link
              href="/"
              className="block text-[0.82rem] px-[0.85rem] leading-[64px] border-b-2 border-transparent transition-colors hover:text-[var(--navy)] hover:border-[var(--navy)] no-underline"
              style={{ color: "var(--charcoal)" }}
            >
              Home
            </Link>
          </li>

          {/* Platform dropdown */}
          <li className="relative group">
            <button
              className="flex items-center gap-1 text-[0.82rem] px-[0.85rem] h-16 border-b-2 border-transparent transition-colors hover:text-[var(--navy)] hover:border-[var(--navy)] bg-transparent cursor-pointer"
              style={{ color: "var(--charcoal)" }}
            >
              Platform
              <svg className="w-2.5 h-2.5 opacity-60" viewBox="0 0 10 6" fill="none">
                <path d="M1 1l4 4 4-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
              </svg>
            </button>
            <Dropdown items={platformMenu} />
          </li>

          {/* Solutions dropdown */}
          <li className="relative group">
            <button
              className="flex items-center gap-1 text-[0.82rem] px-[0.85rem] h-16 border-b-2 border-transparent transition-colors hover:text-[var(--navy)] hover:border-[var(--navy)] bg-transparent cursor-pointer"
              style={{ color: "var(--charcoal)" }}
            >
              Solutions
              <svg className="w-2.5 h-2.5 opacity-60" viewBox="0 0 10 6" fill="none">
                <path d="M1 1l4 4 4-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
              </svg>
            </button>
            <Dropdown items={solutionsMenu} />
          </li>

          <li>
            <Link
              href="/pricing"
              className="block text-[0.82rem] px-[0.85rem] leading-[64px] border-b-2 border-transparent transition-colors hover:text-[var(--navy)] hover:border-[var(--navy)] no-underline"
              style={{ color: "var(--charcoal)" }}
            >
              Pricing
            </Link>
          </li>
          <li>
            <Link
              href="/resources"
              className="block text-[0.82rem] px-[0.85rem] leading-[64px] border-b-2 border-transparent transition-colors hover:text-[var(--navy)] hover:border-[var(--navy)] no-underline"
              style={{ color: "var(--charcoal)" }}
            >
              Resources
            </Link>
          </li>

          {/* Company dropdown */}
          <li className="relative group">
            <button
              className="flex items-center gap-1 text-[0.82rem] px-[0.85rem] h-16 border-b-2 border-transparent transition-colors hover:text-[var(--navy)] hover:border-[var(--navy)] bg-transparent cursor-pointer"
              style={{ color: "var(--charcoal)" }}
            >
              Company
              <svg className="w-2.5 h-2.5 opacity-60" viewBox="0 0 10 6" fill="none">
                <path d="M1 1l4 4 4-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
              </svg>
            </button>
            <Dropdown items={companyMenu} />
          </li>
        </ul>

        {/* CTA Actions */}
        <div className="hidden lg:flex items-center gap-2 flex-shrink-0 ml-6">
          <a
            href="https://app.interval360.com"
            className="text-[0.8rem] px-2 no-underline transition-colors hover:text-[var(--navy)]"
            style={{ color: "var(--slate)" }}
          >
            Login
          </a>
          <Link
            href="/buy"
            className="text-[0.78rem] font-medium px-[0.9rem] py-[0.42rem] rounded border-[1.5px] no-underline transition-all hover:bg-[var(--navy)] hover:text-white whitespace-nowrap"
            style={{ color: "var(--navy)", borderColor: "var(--navy)", background: "transparent" }}
          >
            Buy an Assessment
          </Link>
          <Link
            href="/company#contact"
            className="text-[0.78rem] font-semibold px-[0.9rem] py-[0.42rem] rounded no-underline transition-colors hover:bg-[var(--navy-dark)] whitespace-nowrap"
            style={{ background: "var(--navy)", color: "#fff" }}
          >
            Book a Call
          </Link>
        </div>

        {/* Mobile hamburger */}
        <button
          className="lg:hidden ml-auto p-2"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
        >
          <div className="space-y-1.5">
            <span className="block w-6 h-0.5" style={{ background: "var(--charcoal)" }} />
            <span className="block w-6 h-0.5" style={{ background: "var(--charcoal)" }} />
            <span className="block w-6 h-0.5" style={{ background: "var(--charcoal)" }} />
          </div>
        </button>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="lg:hidden" style={{ background: "#fff", borderTop: "1px solid var(--rule)" }}>
          {[
            { href: "/", label: "Home" },
            { href: "/platform-overview", label: "Platform" },
            { href: "/solutions", label: "Solutions" },
            { href: "/pricing", label: "Pricing" },
            { href: "/resources", label: "Resources" },
            { href: "/company", label: "Company" },
            { href: "/for-coaches", label: "For Coaches" },
          ].map((item) => (
            <Link
              key={item.href}
              href={item.href}
              onClick={() => setMobileOpen(false)}
              className="block px-6 py-3 text-sm border-b no-underline"
              style={{ color: "var(--charcoal)", borderColor: "var(--rule)" }}
            >
              {item.label}
            </Link>
          ))}
          <div className="flex gap-3 px-6 py-4">
            <Link
              href="/buy"
              className="flex-1 text-center text-sm font-medium py-2 rounded border-[1.5px] no-underline"
              style={{ color: "var(--navy)", borderColor: "var(--navy)" }}
            >
              Buy
            </Link>
            <Link
              href="/company#contact"
              className="flex-1 text-center text-sm font-semibold py-2 rounded no-underline"
              style={{ background: "var(--navy)", color: "#fff" }}
            >
              Book a Call
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}
