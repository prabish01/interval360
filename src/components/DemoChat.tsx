"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { ArrowLeft, Bell, LayoutGrid, LogOut, ChevronRight, RotateCcw } from "lucide-react";

const END_TOKEN = "<<<DEMO_END>>>";
const DEMO_NAME = "George Burdell";
const RATER_NAME = "Sarah Bennett";
const RATER_INITIAL = RATER_NAME[0];

// Colors pulled directly from the live assessment-v2 platform's CSS bundle.
const NAVY = "#084f96";
const NAVY_DARK = "#004183";
const SIDEBAR_ACTIVE_BG = "#dfeffe";
const SLATE = "#64748b";
const CONTENT_BG = "#eaeff3";
const CARD_BORDER = "#cfe4ef";
const BUBBLE_GRAY = "#f3f4f6";
const TEXT_DARK = "#111827";

type Message = { role: "user" | "assistant"; content: string };

function openingMessage(name: string) {
  return `Thanks for being part of ${name}'s development through Interval 360. I'll walk you through a few short questions—it won't take more than 5 minutes.\n\nYour feedback is confidential and will be summarized anonymously. Please be candid.\n\nOn a scale of 0 to 10, how likely are you to recommend working with ${name} to a friend or colleague?\n(0 = Not at all likely, 10 = Extremely likely)`;
}

function initialMessages(): Message[] {
  return [{ role: "assistant", content: openingMessage(DEMO_NAME) }];
}

export default function DemoChat() {
  const [messages, setMessages] = useState<Message[]>(initialMessages);
  const [input, setInput] = useState("");
  const [streaming, setStreaming] = useState(false);
  const [ended, setEnded] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLTextAreaElement>(null);

  useEffect(() => {
    scrollRef.current?.scrollTo({ top: scrollRef.current.scrollHeight, behavior: "smooth" });
  }, [messages, streaming]);

  useEffect(() => {
    if (!streaming && !ended) inputRef.current?.focus();
  }, [streaming, ended]);

  function handleRestart() {
    setMessages(initialMessages());
    setInput("");
    setEnded(false);
    setStreaming(false);
  }

  async function sendMessage(text: string) {
    if (!text.trim() || streaming || ended) return;
    const next: Message[] = [...messages, { role: "user", content: text.trim() }];
    setMessages(next);
    setInput("");
    setStreaming(true);

    setMessages((m) => [...m, { role: "assistant", content: "" }]);

    try {
      const res = await fetch("/api/demo-chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name: DEMO_NAME, messages: next }),
      });

      if (!res.body) throw new Error("No response body");
      const reader = res.body.getReader();
      const decoder = new TextDecoder();
      let acc = "";

      for (;;) {
        const { value, done } = await reader.read();
        if (done) break;
        acc += decoder.decode(value, { stream: true });
        const display = acc.includes(END_TOKEN) ? acc.split(END_TOKEN)[0].trim() : acc;
        setMessages((m) => {
          const copy = [...m];
          copy[copy.length - 1] = { role: "assistant", content: display };
          return copy;
        });
      }

      if (acc.includes(END_TOKEN)) setEnded(true);
    } catch {
      setMessages((m) => {
        const copy = [...m];
        copy[copy.length - 1] = { role: "assistant", content: "Sorry — something went wrong reaching the demo. Please try again." };
        return copy;
      });
    } finally {
      setStreaming(false);
    }
  }

  return (
    <div style={{ display: "flex", height: "100vh", width: "100%", background: "#fff", fontFamily: "var(--font-poppins), sans-serif" }}>
      {/* ── Sidebar ── */}
      <div style={{
        width: "250px", flexShrink: 0, background: "#fff",
        display: "flex", flexDirection: "column", justifyContent: "space-between",
        height: "100%", borderRight: "1px solid #f0f1f3",
      }}>
        <div style={{ padding: "20px 16px 0" }}>
          <div style={{ padding: "0 4px", marginBottom: "1.5rem" }}>
            <Image src="/platform-sidebar-logo.svg" alt="Interval 360" width={172} height={74} style={{ width: "120px", height: "auto" }} />
          </div>

          <button type="button" style={{
            width: "100%", display: "flex", alignItems: "center", gap: "10px",
            background: SIDEBAR_ACTIVE_BG, color: NAVY, border: "none",
            borderRadius: "50px", padding: "12px 16px", fontSize: "14px", fontWeight: 500,
            cursor: "pointer", marginBottom: "10px",
          }}>
            <LayoutGrid size={18} color={NAVY} />
            Project Dashboard
          </button>

          <div style={{ height: "1px", background: "#eef0f3", margin: "10px 8px" }} />

          <button type="button" style={{
            width: "100%", display: "flex", alignItems: "center", gap: "10px",
            background: "transparent", color: SLATE, border: "none",
            borderRadius: "50px", padding: "12px 16px", fontSize: "14px", fontWeight: 500,
            cursor: "pointer", position: "relative",
          }}>
            <Bell size={18} color={SLATE} />
            Notifications
            <span style={{
              position: "absolute", top: "6px", left: "26px",
              background: "#ff3b30", color: "#fff", fontSize: "10px", fontWeight: 600,
              minWidth: "16px", minHeight: "16px", borderRadius: "50%",
              display: "flex", alignItems: "center", justifyContent: "center",
              boxShadow: "0 0 0 1px #fff",
            }}>1</span>
          </button>
        </div>

        <div style={{ padding: "0 8px 15px" }}>
          <button type="button" style={{
            width: "100%", display: "flex", alignItems: "center", gap: "10px",
            background: "transparent", border: "none", borderRadius: "12px",
            padding: "12px", cursor: "pointer", marginBottom: "4px",
          }}>
            <div style={{
              width: 40, height: 40, borderRadius: "50%", background: NAVY,
              display: "flex", alignItems: "center", justifyContent: "center",
              fontSize: "20px", fontWeight: 700, color: "#fff", flexShrink: 0,
            }}>
              {RATER_INITIAL}
            </div>
            <div style={{ textAlign: "left" }}>
              <p style={{ margin: 0, fontSize: "12px", color: SLATE, fontWeight: 500 }}>Welcome back</p>
              <p style={{ margin: 0, fontSize: "13px", color: "#1f2937", fontWeight: 700 }}>{RATER_NAME}</p>
            </div>
            <ChevronRight size={14} color="#081021" style={{ marginLeft: "auto" }} />
          </button>

          <button type="button" style={{
            width: "100%", display: "flex", alignItems: "center", gap: "10px",
            background: "transparent", color: SLATE, border: "none", borderRadius: "12px",
            padding: "12px", fontSize: "13px", fontWeight: 500, cursor: "pointer",
          }}>
            <LogOut size={16} color={SLATE} />
            Logout
          </button>

          <p style={{ fontSize: "10px", color: "#9aa3b2", padding: "10px 12px 0", lineHeight: 1.5 }}>
            © 2026 Copyright Interval 360<br />All rights reserved. V-1.2.9
          </p>
        </div>
      </div>

      {/* ── Main content ── */}
      <div style={{ flex: 1, background: CONTENT_BG, padding: "1rem 1.5rem", overflowY: "auto" }}>
        {/* Breadcrumb */}
        <div style={{ display: "flex", alignItems: "center", gap: "8px", padding: "8px 0 16px" }}>
          <button type="button" aria-label="Go back" style={{
            background: "transparent", border: "none", cursor: "pointer",
            display: "flex", alignItems: "center", padding: "4px",
          }}>
            <ArrowLeft size={18} color="#000" />
          </button>
          <div style={{ display: "flex", alignItems: "center", fontSize: "13px", color: "#94a3b8" }}>
            <span>Project Dashboard</span>
            <span style={{ margin: "0 8px" }}>&gt;</span>
            <span>Project Northstar</span>
            <span style={{ margin: "0 8px" }}>&gt;</span>
            <span>{DEMO_NAME} 360</span>
            <span style={{ margin: "0 8px" }}>&gt;</span>
            <span style={{ color: "#000", fontWeight: 500, fontSize: "14px" }}>Feedback</span>
          </div>
        </div>

        {/* Chat card */}
        <div style={{
          background: "#fff", borderRadius: "12px", maxWidth: "1000px", margin: "0 auto",
          minHeight: "82vh", display: "flex", flexDirection: "column", overflow: "hidden",
          boxShadow: "0 1px 3px rgba(0,0,0,0.1)",
        }}>
          {/* Chat header */}
          <div style={{
            borderBottom: `1px solid ${CARD_BORDER}`, padding: "16px 24px",
            display: "flex", alignItems: "center", justifyContent: "space-between",
          }}>
            <h1 style={{ color: "#000", letterSpacing: "-0.02em", margin: 0, fontSize: "16px", fontWeight: 400 }}>
              Feedback for {DEMO_NAME}
            </h1>
            <button
              onClick={handleRestart}
              style={{
                display: "flex", alignItems: "center", gap: "5px",
                background: "transparent", border: "none", cursor: "pointer",
                color: "#b8c0cc", fontSize: "11px",
              }}
            >
              <RotateCcw size={11} /> Restart demo
            </button>
          </div>

          {/* Messages */}
          <div ref={scrollRef} style={{ flex: 1, display: "flex", flexDirection: "column", gap: "16px", padding: "20px 40px", overflowY: "auto" }}>
            {messages.map((msg, i) => {
              const isAi = msg.role === "assistant";
              const isEmptyStreaming = isAi && streaming && i === messages.length - 1 && msg.content === "";
              return (
                <div key={i} style={{ display: "flex", justifyContent: isAi ? "flex-start" : "flex-end" }}>
                  <div style={{ display: "flex", alignItems: "flex-start", gap: "12px", flexDirection: isAi ? "row" : "row-reverse" }}>
                    <div style={{
                      width: 36, height: 36, borderRadius: "50%", flexShrink: 0,
                      background: isAi ? NAVY : "#1f2937",
                      display: "flex", alignItems: "center", justifyContent: "center",
                      color: "#fff", fontSize: "14px", fontWeight: 600,
                    }}>
                      {isAi ? "A" : RATER_INITIAL}
                    </div>
                    <div style={{
                      background: isAi ? BUBBLE_GRAY : "#eaf2fb",
                      borderRadius: "8px",
                      padding: "12px 16px",
                      maxWidth: "36rem",
                      fontSize: "14px",
                      lineHeight: 1.6,
                      color: TEXT_DARK,
                      whiteSpace: "pre-wrap",
                      wordBreak: "break-word",
                    }}>
                      {isEmptyStreaming ? <TypingDots /> : msg.content}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Input */}
          <div style={{ display: "flex", alignItems: "center", gap: "12px", padding: "16px" }}>
            {ended ? (
              <p style={{ width: "100%", textAlign: "center", fontSize: "12px", color: SLATE }}>
                Demo complete — click &ldquo;Restart demo&rdquo; above to run it again.
              </p>
            ) : (
              <form
                onSubmit={(e) => { e.preventDefault(); sendMessage(input); }}
                style={{ display: "flex", alignItems: "center", gap: "12px", width: "100%" }}
              >
                <textarea
                  ref={inputRef}
                  autoFocus
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  onKeyDown={(e) => {
                    if (e.key === "Enter" && !e.shiftKey) {
                      e.preventDefault();
                      sendMessage(input);
                    }
                  }}
                  placeholder="Type your response..."
                  rows={1}
                  style={{
                    width: "100%", padding: "12px 20px 16px",
                    border: `2px solid ${CARD_BORDER}`, borderRadius: "24px",
                    fontSize: "14px", resize: "none", outline: "none",
                    fontFamily: "inherit", background: "transparent", height: "49px",
                  }}
                />
                <button
                  type="submit"
                  disabled={streaming || !input.trim()}
                  style={{
                    background: NAVY_DARK, borderRadius: "100px", height: "45px", width: "65px",
                    flexShrink: 0, border: "none", display: "flex", alignItems: "center", justifyContent: "center",
                    cursor: streaming ? "default" : "pointer",
                    opacity: !input.trim() || streaming ? 0.45 : 1,
                  }}
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 8 14" fill="none">
                    <path d="M1 13L5.58579 8.41421C6.36683 7.63317 6.36683 6.36684 5.58579 5.58579L1 1" stroke="#ffffff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

function TypingDots() {
  return (
    <span style={{ display: "inline-flex", gap: "3px", alignItems: "center", height: "14px" }}>
      {[0, 1, 2].map((i) => (
        <span
          key={i}
          style={{
            width: 5, height: 5, borderRadius: "50%",
            background: "rgba(17,24,39,0.4)",
            animation: `demoTypingBounce 1.2s ${i * 0.15}s infinite ease-in-out`,
          }}
        />
      ))}
      <style>{`
        @keyframes demoTypingBounce {
          0%, 80%, 100% { transform: scale(0.6); opacity: 0.4; }
          40% { transform: scale(1); opacity: 1; }
        }
      `}</style>
    </span>
  );
}
