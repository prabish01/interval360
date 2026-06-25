"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { homeTheme } from "@/lib/homeTheme";

const sections = [
  { id: "nature", label: "Nature and Purpose" },
  { id: "customer-responsibilities", label: "Customer Responsibilities" },
  { id: "data-privacy", label: "Data Collection and Privacy" },
  { id: "intellectual-property", label: "Intellectual Property" },
  { id: "fees", label: "Fees and Payment" },
  { id: "disclaimer", label: "Disclaimer of Warranties" },
  { id: "liability", label: "Limitation of Liability" },
  { id: "indemnification", label: "Indemnification" },
  { id: "no-employment-advice", label: "No Employment Advice" },
  { id: "termination", label: "Termination" },
  { id: "governing-law", label: "Governing Law" },
  { id: "modifications", label: "Modifications" },
  { id: "contact", label: "Contact Information" },
];

export function TermsTOC() {
  const [activeId, setActiveId] = useState<string>("");

  useEffect(() => {
    const observers: IntersectionObserver[] = [];

    sections.forEach(({ id }) => {
      const el = document.getElementById(id);
      if (!el) return;
      const obs = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) setActiveId(id);
        },
        { rootMargin: "-20% 0px -70% 0px", threshold: 0 }
      );
      obs.observe(el);
      observers.push(obs);
    });

    return () => observers.forEach((o) => o.disconnect());
  }, []);

  return (
    <aside className="hidden lg:block relative">
      <div className="sticky top-28 self-start">
        <p
          className="mb-6 text-xs font-bold tracking-[0.22em] uppercase"
          style={{ color: homeTheme.lightBody }}
        >
          Contents
        </p>

        <nav>
          <ol className="flex flex-col gap-px">
            {sections.map(({ id, label }, i) => {
              const isActive = activeId === id;
              return (
                <li key={id} className="flex items-start gap-3 py-2">
                  <span
                    className="shrink-0 text-xs font-bold tabular-nums mt-[2px] w-5 text-right"
                    style={{
                      fontFamily: "var(--font-space-grotesk)",
                      color: isActive ? homeTheme.blue : "rgba(100,116,154,0.45)",
                      transition: "color 0.2s",
                    }}
                  >
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <a
                    href={`#${id}`}
                    className="text-sm leading-[1.5] no-underline transition-colors duration-200"
                    style={{
                      color: isActive ? homeTheme.blue : homeTheme.lightBody,
                      fontWeight: isActive ? 600 : 400,
                    }}
                    onClick={(e) => {
                      e.preventDefault();
                      document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });
                    }}
                  >
                    {label}
                  </a>
                </li>
              );
            })}
          </ol>
        </nav>

        <div
          className="mt-8 pt-6 border-t flex flex-col gap-3"
          style={{ borderColor: homeTheme.lightRule }}
        >
          <Link
            href="/privacy"
            className="flex items-center gap-1.5 text-xs font-semibold uppercase tracking-[0.12em] no-underline transition-opacity hover:opacity-70"
            style={{ color: homeTheme.blue }}
          >
            Privacy Policy →
          </Link>
          <Link
            href="/"
            className="flex items-center gap-1.5 text-xs font-semibold uppercase tracking-[0.12em] no-underline transition-opacity hover:opacity-70"
            style={{ color: homeTheme.lightBody }}
          >
            <span aria-hidden>←</span> Back to Home
          </Link>
        </div>
      </div>
    </aside>
  );
}
