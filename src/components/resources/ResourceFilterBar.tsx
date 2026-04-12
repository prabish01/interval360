"use client";

import { useCallback, useState } from "react";
import { homeTheme } from "@/lib/homeTheme";

const SECTION_IDS: Record<string, string | null> = {
  all: null,
  "sample-reports": "featured-sample",
  playbooks: "playbooks",
  "case-studies": "case-studies",
  "field-notes": "field-notes",
};

type FilterId = keyof typeof SECTION_IDS;

export function ResourceFilterBar({
  filters,
}: {
  filters: readonly { id: string; label: string }[];
}) {
  const [active, setActive] = useState<FilterId>("all");

  const onSelect = useCallback((id: string) => {
    const key = id as FilterId;
    setActive(key);
    const target = SECTION_IDS[key];
    if (target === null) {
      window.scrollTo({ top: 0, behavior: "smooth" });
      return;
    }
    document.getElementById(target)?.scrollIntoView({ behavior: "smooth", block: "start" });
  }, []);

  return (
    <div className="flex flex-wrap gap-2">
      {filters.map((f) => {
        const isActive = active === f.id;
        return (
          <button
            key={f.id}
            type="button"
            onClick={() => onSelect(f.id)}
            className="rounded-full px-4 py-2 text-[0.72rem] font-bold uppercase tracking-[0.12em] transition-colors"
            style={
              isActive
                ? { background: homeTheme.blue, color: "#fff" }
                : { background: "rgba(255,255,255,0.08)", color: "rgba(255,255,255,0.85)" }
            }
          >
            {f.label}
          </button>
        );
      })}
    </div>
  );
}
