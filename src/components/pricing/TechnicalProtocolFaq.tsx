"use client";

import { useCallback, useEffect, useState } from "react";
import { homeTheme } from "@/lib/homeTheme";
import { faqItems } from "./data";

type Item = (typeof faqItems)[number];

export function TechnicalProtocolFaq({ items }: { items: readonly Item[] }) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const [touchOnly, setTouchOnly] = useState(false);

  useEffect(() => {
    setTouchOnly(window.matchMedia("(hover: none)").matches);
  }, []);

  const handleEnter = useCallback((index: number) => {
    if (!touchOnly) setOpenIndex(index);
  }, [touchOnly]);

  const handleLeave = useCallback(() => {
    if (!touchOnly) setOpenIndex(null);
  }, [touchOnly]);

  const handleClick = useCallback(
    (index: number) => {
      if (touchOnly) {
        setOpenIndex((prev) => (prev === index ? null : index));
      }
    },
    [touchOnly],
  );

  return (
    <div className="mx-auto max-w-3xl space-y-2">
      {items.map((item, i) => {
        const open = openIndex === i;
        return (
          <div
            key={item.q}
            onMouseEnter={() => handleEnter(i)}
            onMouseLeave={handleLeave}
            onClick={() => handleClick(i)}
            className={`cursor-pointer border px-5 transition-[border-color,background-color] duration-200 ease-out ${
              open ? "border-white/25 bg-white/8" : "border-white/10 bg-white/4 hover:border-white/18 hover:bg-white/6"
            }`}
            role="button"
            tabIndex={0}
            aria-expanded={open}
            onKeyDown={(e) => {
              if (e.key === "Enter" || e.key === " ") {
                e.preventDefault();
                if (touchOnly) handleClick(i);
                else setOpenIndex((p) => (p === i ? null : i));
              }
            }}
          >
            <div className="flex items-center justify-between gap-4 py-5 text-[0.95rem] font-semibold text-white select-none">
              {item.q}
              <span
                className={`text-xl font-light leading-none text-white/60 transition-transform duration-200 ease-out ${open ? "rotate-45" : ""}`}
                aria-hidden
              >
                +
              </span>
            </div>
            <div
              className="grid transition-[grid-template-rows] duration-200 ease-out motion-reduce:transition-none"
              style={{ gridTemplateRows: open ? "1fr" : "0fr" }}
            >
              <div className="overflow-hidden">
                <p
                  className="border-t border-white/10 pb-5 pr-8 pt-4 text-[0.9rem] leading-[1.65]"
                  style={{ color: homeTheme.textMuted }}
                >
                  {item.a}
                </p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
