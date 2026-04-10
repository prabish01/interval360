"use client";

import Link from "next/link";
import Image from "next/image";
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
        mixBlendMode: "normal",
        borderLeft: "1px solid var(--rule)",
        borderRight: "1px solid var(--rule)",
        borderBottom: "1px solid var(--rule)",
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
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    const detectTheme = () => {
      const elements = document.elementsFromPoint(window.innerWidth / 2, 80);
      for (const el of elements) {
        if (el.closest("nav")) continue;

        const themed = (el as HTMLElement).closest("[data-nav-theme]");
        if (themed) {
          setIsDark(themed.getAttribute("data-nav-theme") === "dark");
          return;
        }

        const bg = window.getComputedStyle(el as HTMLElement).backgroundColor;
        if (bg && bg !== "transparent" && bg !== "rgba(0, 0, 0, 0)") {
          const nums = bg.match(/[\d.]+/g);
          if (nums && nums.length >= 3) {
            const [r, g, b] = nums.map(Number);
            const luminance = (0.299 * r + 0.587 * g + 0.114 * b) / 255;
            setIsDark(luminance < 0.5);
          }
          return;
        }
      }
      setIsDark(false);
    };

    const onScroll = () => {
      setScrolled(window.scrollY > 8);
      detectTheme();
    };

    detectTheme();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", detectTheme);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", detectTheme);
    };
  }, []);

  const shellBg = isDark ? "rgba(12,12,12,0.88)" : "rgba(255,255,255,0.96)";
  const shellBorder = isDark ? "rgba(255,255,255,0.18)" : "rgba(12,12,12,0.12)";
  const shellColor = isDark ? "rgba(255,255,255,0.92)" : "var(--charcoal)";
  const loginColor = isDark ? "rgba(234,239,243,0.86)" : "rgba(6,16,39,0.82)";
  const buyTextColor = isDark ? "rgba(217,231,255,0.94)" : "#1849a9";
  const buyBorderColor = isDark ? "rgba(86,146,255,0.58)" : "rgba(45,108,255,0.42)";
  const buyBg = isDark ? "rgba(16,52,128,0.28)" : "rgba(45,108,255,0.08)";
  const callBg = "#2d6cff";

  return (
    <nav
      className="fixed top-0 left-0 right-0 z-[9999]"
      style={{
        background: "transparent",
      }}
    >
      <div className="page-gutter">
        <div
          className="max-w-7xl mx-auto"
          style={{
            background: shellBg,
            borderLeft: `1px solid ${shellBorder}`,
            borderRight: `1px solid ${shellBorder}`,
            borderBottom: `1px solid ${shellBorder}`,
            borderTop: "none",
            borderRadius: "0 0 26px 26px",
            boxShadow: scrolled ? "0 10px 28px rgba(0,0,0,0.16)" : "0 8px 22px rgba(0,0,0,0.12)",
            color: shellColor,
            transition: "background-color 360ms ease, color 360ms ease, border-color 360ms ease, box-shadow 260ms ease",
          }}
        >
      <div className="flex items-center h-16 gap-0 w-full px-4 md:px-7">
        {/* Logo */}
        <Link
          href="/"
          className="shrink-0 mr-8 no-underline"
          aria-label="Interval 360 home"
        >
          <Image
            src={isDark ? "/white_logologo.svg" : "/black_logologo.svg"}
            alt="Interval 360"
            width={140}
            height={32}
            className="h-8 w-auto"
            priority
          />
        </Link>

        {/* Links — desktop */}
        <ul className="hidden lg:flex items-center list-none flex-1 gap-0 m-0 p-0">
          <li>
            <Link
              href="/"
              className="block text-[0.82rem] px-[0.85rem] leading-[64px] border-b-2 border-transparent transition-all hover:opacity-70 hover:border-current no-underline"
              style={{ color: "currentColor" }}
            >
              Home
            </Link>
          </li>

          {/* Platform dropdown */}
          <li className="relative group">
            <button
              className="flex items-center gap-1 text-[0.82rem] px-[0.85rem] h-16 border-b-2 border-transparent transition-all hover:opacity-70 hover:border-current bg-transparent cursor-pointer"
              style={{ color: "currentColor" }}
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
              className="flex items-center gap-1 text-[0.82rem] px-[0.85rem] h-16 border-b-2 border-transparent transition-all hover:opacity-70 hover:border-current bg-transparent cursor-pointer"
              style={{ color: "currentColor" }}
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
              className="block text-[0.82rem] px-[0.85rem] leading-[64px] border-b-2 border-transparent transition-all hover:opacity-70 hover:border-current no-underline"
              style={{ color: "currentColor" }}
            >
              Pricing
            </Link>
          </li>
          <li>
            <Link
              href="/resources"
              className="block text-[0.82rem] px-[0.85rem] leading-[64px] border-b-2 border-transparent transition-all hover:opacity-70 hover:border-current no-underline"
              style={{ color: "currentColor" }}
            >
              Resources
            </Link>
          </li>

          {/* Company dropdown */}
          <li className="relative group">
            <button
              className="flex items-center gap-1 text-[0.82rem] px-[0.85rem] h-16 border-b-2 border-transparent transition-all hover:opacity-70 hover:border-current bg-transparent cursor-pointer"
              style={{ color: "currentColor" }}
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
        <div className="hidden lg:flex items-center gap-3 shrink-0 ml-6">
          <a
            href="https://app.interval360.com"
            className="inline-flex items-center gap-1.5 text-[0.8rem] font-medium px-1 no-underline transition-colors hover:opacity-90"
            style={{ color: loginColor }}
          >
            <svg className="w-3.5 h-3.5" viewBox="0 0 20 20" fill="none" aria-hidden="true">
              <path d="M8 6.2V5a2.5 2.5 0 0 1 2.5-2.5h3A2.5 2.5 0 0 1 16 5v10a2.5 2.5 0 0 1-2.5 2.5h-3A2.5 2.5 0 0 1 8 15.8V14.6" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
              <path d="M11.8 10H3.8M6.3 7.6 3.8 10l2.5 2.4" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
            Login
          </a>
          <span aria-hidden className="h-5 w-px" style={{ background: isDark ? "rgba(255,255,255,0.24)" : "rgba(6,16,39,0.18)" }} />
          <div className="flex items-center gap-2">
            <Link
              href="/buy"
              className="text-[0.78rem] font-semibold px-3.5 py-1.5 rounded-md border no-underline whitespace-nowrap transition-all duration-200 hover:-translate-y-0.5"
              style={{ color: buyTextColor, borderColor: buyBorderColor, background: buyBg }}
            >
              Buy an Assessment
            </Link>
            <Link
              href="/company#contact"
              className="inline-flex items-center gap-1.5 text-[0.78rem] font-semibold px-3.5 py-1.5 rounded-md no-underline whitespace-nowrap transition-all duration-200 hover:-translate-y-0.5 hover:opacity-90"
              style={{ background: callBg, color: "#fff" }}
            >
              <svg className="w-3.5 h-3.5" viewBox="0 0 20 20" fill="none" aria-hidden="true">
                <rect x="3.5" y="4.5" width="13" height="12" rx="2.2" stroke="currentColor" strokeWidth="1.6" />
                <path d="M6.5 2.8v3.1M13.5 2.8v3.1M3.5 8.2h13" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
              </svg>
              Book a Call
            </Link>
          </div>
        </div>

        {/* Mobile hamburger */}
        <button
          className="lg:hidden ml-auto p-2"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
        >
          <div className="space-y-1.5">
            <span className="block w-6 h-0.5" style={{ background: "currentColor" }} />
            <span className="block w-6 h-0.5" style={{ background: "currentColor" }} />
            <span className="block w-6 h-0.5" style={{ background: "currentColor" }} />
          </div>
        </button>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div
          className="lg:hidden"
          style={{
            background: shellBg,
            borderTop: `1px solid ${shellBorder}`,
            borderRadius: "0 0 26px 26px",
            overflow: "hidden",
            color: shellColor,
            transition: "background-color 360ms ease, color 360ms ease, border-color 360ms ease",
          }}
        >
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
        </div>
      </div>
    </nav>
  );
}
