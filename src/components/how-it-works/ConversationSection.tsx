"use client";

import { useRef, useEffect } from "react";
import { Send } from "lucide-react";
import { homeTheme } from "@/lib/homeTheme";
import { conversationExample } from "./data";

export function ConversationSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const chatRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const isActive = (deltaY: number) => {
      const sr = sectionRef.current?.getBoundingClientRect();
      if (!sr) return false;
      // Scrolling down: section top has cleared the viewport top, not yet scrolled off
      if (deltaY > 0) return sr.top <= 0 && sr.bottom >= 100;
      // Scrolling up: section is mostly back in view from above (sr.bottom near viewport bottom)
      return sr.top <= 0 && sr.bottom >= window.innerHeight - 100;
    };

    const onWheel = (e: WheelEvent) => {
      const chat = chatRef.current;
      if (!chat || !isActive(e.deltaY)) return;

      const { scrollTop, scrollHeight, clientHeight } = chat;
      if (scrollHeight <= clientHeight) return;

      const atBottom = scrollHeight - scrollTop - clientHeight < 4;
      const atTop = scrollTop <= 0;

      if ((e.deltaY > 0 && !atBottom) || (e.deltaY < 0 && !atTop)) {
        e.preventDefault();
        chat.scrollTop += e.deltaY;
      }
    };

    let touchStartY = 0;
    const onTouchStart = (e: TouchEvent) => {
      touchStartY = e.touches[0].clientY;
    };
    const onTouchMove = (e: TouchEvent) => {
      const chat = chatRef.current;
      const deltaY = touchStartY - e.touches[0].clientY;
      if (!chat || !isActive(deltaY)) return;

      const { scrollTop, scrollHeight, clientHeight } = chat;
      if (scrollHeight <= clientHeight) return;

      const atBottom = scrollHeight - scrollTop - clientHeight < 4;
      const atTop = scrollTop <= 0;

      if ((deltaY > 0 && !atBottom) || (deltaY < 0 && !atTop)) {
        e.preventDefault();
        chat.scrollTop += deltaY;
        touchStartY = e.touches[0].clientY;
      }
    };

    // When the section leaves the viewport, snap chat to bottom so it never
    // blocks the next section if the user scrolled past without finishing it.
    const onScroll = () => {
      const chat = chatRef.current;
      if (!chat || isActive(1)) return;
      const sr = sectionRef.current?.getBoundingClientRect();
      if (sr && sr.bottom < 0) {
        chat.scrollTop = chat.scrollHeight;
      }
    };

    window.addEventListener("wheel", onWheel, { passive: false });
    window.addEventListener("touchstart", onTouchStart, { passive: true });
    window.addEventListener("touchmove", onTouchMove, { passive: false });
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      window.removeEventListener("wheel", onWheel);
      window.removeEventListener("touchstart", onTouchStart);
      window.removeEventListener("touchmove", onTouchMove);
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      id="conversation"
      className="scroll-mt-24 border-b min-h-screen flex flex-col justify-center py-20"
      style={{ borderColor: homeTheme.lightRule, background: homeTheme.sectionPaper }}
    >
      <div className="content-wrap page-gutter grid items-start gap-14 lg:grid-cols-2 lg:gap-20">
        <div>
          <h2
            className="mb-6 text-[clamp(1.75rem,3vw,2.5rem)] font-bold tracking-tight uppercase"
            style={{ fontFamily: "var(--font-space-grotesk)", color: homeTheme.lightHeading }}
          >
            The conversation
          </h2>
          <p className="mb-6 text-base leading-[1.75]" style={{ color: homeTheme.lightBody }}>
            The AI starts with structured opening questions designed to elicit useful, specific input. When a response is general, it follows up with a targeted probe — the same way a skilled interviewer would.
          </p>
          <p className="mb-8 text-base leading-[1.75]" style={{ color: homeTheme.lightBody }}>
            The result is feedback that is richer, more specific, and more useful than anything a static survey can produce — in the same amount of time.
          </p>
        </div>

        <div className="overflow-hidden rounded-xl border border-black/10 bg-[#101010] text-white shadow-[0_24px_80px_rgba(0,0,0,0.18)]">
          <div className="flex items-center gap-2 border-b border-white/8 px-4 py-3">
            <div className="flex gap-1.5">
              <span className="size-2.5 rounded-full bg-[#ff5f57]/90" />
              <span className="size-2.5 rounded-full bg-[#febc2e]/90" />
              <span className="size-2.5 rounded-full bg-[#28c840]/90" />
            </div>
            <span className="ml-2 text-xs text-white/35">Interval 360 — Feedback Conversation</span>
          </div>
          <div
            ref={chatRef}
            className="flex max-h-[min(28rem,70vh)] flex-col gap-4 overflow-y-auto p-5 md:p-6"
            style={{ scrollbarWidth: "none" }}
          >
            {conversationExample.map((msg, i) => (
              <div key={i} className={`flex ${msg.speaker === "rater" ? "justify-end" : "justify-start"}`}>
                <div
                  className={`max-w-[92%] rounded-2xl px-4 py-3 text-base leading-[1.65] md:max-w-[88%] ${
                    msg.speaker === "ai"
                      ? "rounded-bl-md border text-white/90"
                      : "rounded-br-md bg-white/7 text-white/80"
                  }`}
                  style={
                    msg.speaker === "ai"
                      ? {
                          borderColor: "rgba(187,220,251,0.22)",
                          background: `linear-gradient(165deg, ${homeTheme.blueTint35} 0%, ${homeTheme.blueTint12} 100%)`,
                        }
                      : undefined
                  }
                >
                  {msg.speaker === "ai" && (
                    <span
                      className="mb-1.5 block text-xs font-bold uppercase tracking-[0.16em]"
                      style={{ color: homeTheme.blue }}
                    >
                      Interval 360 AI
                    </span>
                  )}
                  {msg.text}
                </div>
              </div>
            ))}
          </div>
          <div className="flex items-center gap-2 border-t border-white/8 px-4 py-3">
            <div className="flex flex-1 items-center rounded-lg border border-white/10 bg-black/40 px-3 py-2.5">
              <span className="text-sm text-white/25">Type a response…</span>
            </div>
            <button
              type="button"
              className="flex size-10 shrink-0 items-center justify-center rounded-lg border border-white/12 bg-white/6 text-white/50"
              aria-label="Send (illustration)"
            >
              <Send className="size-4" aria-hidden />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
