"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { homeTheme } from "@/lib/homeTheme";

const sections = [
  { id: "scope", label: "Scope of This Policy" },
  { id: "information-we-collect", label: "Information We Collect" },
  { id: "how-we-use", label: "How We Use Personal Information" },
  { id: "aggregated-data", label: "Aggregated and Anonymized Data" },
  { id: "confidentiality", label: "Confidentiality and Anonymity" },
  { id: "data-sharing", label: "Data Sharing and Disclosure" },
  { id: "california-rights", label: "California Privacy Rights" },
  { id: "data-retention", label: "Data Retention" },
  { id: "data-security", label: "Data Security" },
  { id: "cookies", label: "Cookies and Tracking" },
  { id: "childrens-privacy", label: "Children's Privacy" },
  { id: "international-users", label: "International Users" },
  { id: "changes", label: "Changes to This Policy" },
  { id: "contact", label: "Contact Information" },
];

export function PrivacyTOC() {
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

        <div className="mt-8 pt-6 border-t flex flex-col gap-3" style={{ borderColor: homeTheme.lightRule }}>
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
