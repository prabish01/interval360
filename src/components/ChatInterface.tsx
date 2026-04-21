"use client";

import { useState, useRef, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";

type Role = "ai" | "user";

interface Message {
  id: number;
  role: Role;
  text: string;
}

const INITIAL_MESSAGES: Message[] = [
  { id: 1, role: "ai",   text: "Thanks. What factors influenced your rating of 8?" },
  { id: 2, role: "user", text: "Vic's a natural leader who sets direction clearly and inspires confidence. He's built a group that trusts his leadership..." },
  { id: 3, role: "ai",   text: "That's great feedback! What would you say is Victor Ramirez's greatest strength as a leader?" },
  { id: 4, role: "user", text: "So strategic!" },
  { id: 5, role: "ai",   text: "Could you give me more detail about that?" },
  { id: 6, role: "user", text: "I mean, it just feels like he's looking five years out while most of us are focused on today..." },
];

const NAV_ITEMS = [
  { label: "DASHBOARD",        icon: DashIcon,    active: true  },
  { label: "CANDIDATE SEARCH", icon: SearchIcon,  active: false },
  { label: "MARKET MAPS",      icon: MapIcon,     active: false },
  { label: "AI FORECASTS",     icon: ForecastIcon,active: false },
  { label: "ARCHIVE",          icon: ArchiveIcon, active: false },
];

export default function ChatInterface() {
  const [messages, setMessages] = useState<Message[]>(INITIAL_MESSAGES);
  const [input, setInput]       = useState("");
  const [progress]              = useState({ current: 6, total: 10 });
  const bottomRef               = useRef<HTMLDivElement>(null);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  function send() {
    const trimmed = input.trim();
    if (!trimmed) return;
    setMessages(prev => [...prev, { id: Date.now(), role: "user", text: trimmed }]);
    setInput("");
    // simulate AI reply
    setTimeout(() => {
      setMessages(prev => [...prev, {
        id: Date.now() + 1,
        role: "ai",
        text: "Thank you for sharing that. Can you elaborate further?",
      }]);
    }, 800);
  }

  function onKey(e: React.KeyboardEvent) {
    if (e.key === "Enter" && !e.shiftKey) { e.preventDefault(); send(); }
  }

  return (
    <div style={{ position: "fixed", inset: 0, display: "flex", flexDirection: "column", background: "#090910" }}>

      {/* ── Top bar ── */}
      <div style={{
        height: 52, flexShrink: 0,
        display: "flex", alignItems: "center", justifyContent: "space-between",
        padding: "0 24px",
        background: "rgba(8,8,16,0.9)",
        borderBottom: "1px solid rgba(255,255,255,0.06)",
        backdropFilter: "blur(12px)",
        zIndex: 20,
      }}>
        <Link href="/" style={{ textDecoration: "none", display: "flex", alignItems: "center" }}>
          <Image src="/white_logologo.svg" alt="Interval 360" width={110} height={26} style={{ height: 24, width: "auto" }} />
        </Link>
        <Link
          href="/particle"
          style={{
            display: "flex", alignItems: "center", gap: 6,
            fontSize: "0.7rem", fontWeight: 600, letterSpacing: "0.1em",
            color: "rgba(180,200,255,0.5)", textDecoration: "none",
            transition: "color 0.15s",
          }}
          onMouseEnter={e => (e.currentTarget.style.color = "rgba(180,200,255,0.9)")}
          onMouseLeave={e => (e.currentTarget.style.color = "rgba(180,200,255,0.5)")}
        >
          <svg width="13" height="13" viewBox="0 0 20 20" fill="none">
            <path d="M12 5l-5 5 5 5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
          BACK
        </Link>
      </div>

      {/* ── Body (sidebar + main) ── */}
      <div style={{ flex: 1, display: "flex", overflow: "hidden" }}>

      {/* ── Sidebar ── */}
      <aside style={{
        position: "relative", zIndex: 10,
        width: 220, flexShrink: 0,
        background: "rgba(8,8,16,0.82)",
        backdropFilter: "blur(18px)",
        borderRight: "1px solid rgba(255,255,255,0.06)",
        display: "flex", flexDirection: "column",
      }}>
        {/* Brand */}
        <div style={{ padding: "28px 22px 24px", borderBottom: "1px solid rgba(255,255,255,0.06)" }}>
          <div style={{ fontFamily: "var(--font-montserrat)", fontWeight: 800, fontSize: "1rem", color: "#fff", letterSpacing: "0.02em" }}>
            Interval 360
          </div>
          <div style={{ fontSize: "0.6rem", fontWeight: 700, letterSpacing: "0.2em", color: "rgba(180,200,255,0.45)", marginTop: 3 }}>
            KINETIC INTELLIGENCE
          </div>
        </div>

        {/* Nav */}
        <nav style={{ flex: 1, padding: "18px 0", overflowY: "auto" }}>
          {NAV_ITEMS.map(({ label, icon: Icon, active }) => (
            <button key={label} style={{
              display: "flex", alignItems: "center", gap: 12,
              width: "100%", padding: "11px 22px",
              background: active ? "rgba(45,108,255,0.14)" : "transparent",
              borderLeft: active ? "3px solid #2d6cff" : "3px solid transparent",
              border: "none", cursor: "pointer",
              color: active ? "#2d6cff" : "rgba(180,200,255,0.46)",
              fontSize: "0.67rem", fontWeight: 700, letterSpacing: "0.14em",
              transition: "all 0.15s",
              textAlign: "left",
            }}>
              <Icon size={16} />
              {label}
            </button>
          ))}
        </nav>

        {/* New Analysis */}
        <div style={{ padding: "0 18px 18px" }}>
          <button style={{
            width: "100%", padding: "12px 0",
            background: "#2d6cff", color: "#fff",
            border: "none", borderRadius: 4, cursor: "pointer",
            fontSize: "0.72rem", fontWeight: 700, letterSpacing: "0.12em",
          }}>
            NEW ANALYSIS
          </button>
        </div>

        {/* Footer links */}
        <div style={{ borderTop: "1px solid rgba(255,255,255,0.06)", padding: "16px 22px 24px", display: "flex", flexDirection: "column", gap: 12 }}>
          {["SUPPORT", "ACCOUNT"].map(lbl => (
            <button key={lbl} style={{
              display: "flex", alignItems: "center", gap: 10,
              background: "none", border: "none", cursor: "pointer",
              color: "rgba(180,200,255,0.38)", fontSize: "0.67rem", fontWeight: 700, letterSpacing: "0.14em",
              textAlign: "left", padding: 0,
            }}>
              {lbl === "SUPPORT" ? <SupportIcon size={14} /> : <AccountIcon size={14} />}
              {lbl}
            </button>
          ))}
        </div>
      </aside>

      {/* ── Main content ── */}
      <div style={{ position: "relative", zIndex: 10, flex: 1, display: "flex", flexDirection: "column", overflow: "hidden" }}>

        {/* Header */}
        <div style={{
          padding: "28px 40px 20px",
          backdropFilter: "blur(12px)",
          background: "rgba(9,9,16,0.6)",
          borderBottom: "1px solid rgba(255,255,255,0.06)",
          display: "flex", alignItems: "flex-start", justifyContent: "space-between",
        }}>
          <div>
            <div style={{ display: "flex", alignItems: "center", gap: 7, marginBottom: 8 }}>
              <span style={{ width: 7, height: 7, borderRadius: "50%", background: "#2d6cff", display: "inline-block", boxShadow: "0 0 6px #2d6cff" }} />
              <span style={{ fontSize: "0.65rem", fontWeight: 700, letterSpacing: "0.18em", color: "#2d6cff" }}>LIVE ANALYSIS</span>
            </div>
            <h1 style={{ margin: 0, fontFamily: "var(--font-montserrat)", fontWeight: 900, fontSize: "clamp(1.4rem, 3vw, 2.2rem)", color: "#fff", letterSpacing: "0.02em" }}>
              FEEDBACK: VICTOR RAMIREZ
            </h1>
          </div>

          {/* Progress */}
          <div style={{ textAlign: "right", minWidth: 170 }}>
            <div style={{ fontSize: "0.6rem", fontWeight: 700, letterSpacing: "0.18em", color: "rgba(180,200,255,0.45)", marginBottom: 6 }}>
              EXCHANGE PROGRESS
            </div>
            <div style={{ display: "flex", alignItems: "center", gap: 10, justifyContent: "flex-end" }}>
              <span style={{ fontFamily: "var(--font-montserrat)", fontWeight: 700, fontSize: "1rem", color: "#fff" }}>
                {progress.current}<span style={{ color: "rgba(255,255,255,0.35)", fontSize: "0.8rem" }}>/{progress.total}</span>
              </span>
              <div style={{ width: 110, height: 4, borderRadius: 2, background: "rgba(255,255,255,0.1)" }}>
                <div style={{ height: "100%", borderRadius: 2, background: "#2d6cff", width: `${(progress.current / progress.total) * 100}%`, transition: "width 0.4s ease" }} />
              </div>
            </div>
          </div>
        </div>

        {/* Messages */}
        <div style={{ flex: 1, overflowY: "auto", padding: "28px 40px", display: "flex", flexDirection: "column", gap: 18 }}>
          {messages.map(msg => (
            <div key={msg.id} style={{ display: "flex", justifyContent: msg.role === "ai" ? "flex-start" : "flex-end", alignItems: "flex-start", gap: 12 }}>
              {msg.role === "ai" && (
                <div style={{ width: 36, height: 36, borderRadius: "50%", background: "rgba(45,108,255,0.18)", border: "1px solid rgba(45,108,255,0.35)", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0, marginTop: 2 }}>
                  <AiIcon size={16} />
                </div>
              )}

              <div style={{
                maxWidth: "62%",
                padding: "14px 18px",
                borderRadius: msg.role === "ai" ? "0 10px 10px 10px" : "10px 0 10px 10px",
                background: msg.role === "ai" ? "rgba(22,22,38,0.82)" : "rgba(240,244,255,0.95)",
                borderLeft: msg.role === "ai" ? "3px solid rgba(45,108,255,0.55)" : "none",
                backdropFilter: "blur(12px)",
                color: msg.role === "ai" ? "rgba(220,230,255,0.88)" : "#111",
                fontSize: "0.92rem",
                lineHeight: 1.6,
                boxShadow: "0 4px 20px rgba(0,0,0,0.3)",
              }}>
                {msg.text}
              </div>

              {msg.role === "user" && (
                <div style={{ width: 34, height: 34, borderRadius: "50%", background: "rgba(240,244,255,0.12)", border: "1px solid rgba(255,255,255,0.15)", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0, marginTop: 2, fontSize: "0.75rem", fontWeight: 700, color: "rgba(255,255,255,0.6)" }}>
                  U
                </div>
              )}
            </div>
          ))}
          <div ref={bottomRef} />
        </div>

        {/* Input */}
        <div style={{
          padding: "16px 40px 24px",
          background: "rgba(9,9,16,0.72)",
          backdropFilter: "blur(16px)",
          borderTop: "1px solid rgba(255,255,255,0.06)",
        }}>
          <div style={{ display: "flex", gap: 12, alignItems: "flex-end" }}>
            <textarea
              value={input}
              onChange={e => setInput(e.target.value)}
              onKeyDown={onKey}
              placeholder="Type your response..."
              rows={1}
              style={{
                flex: 1, resize: "none",
                background: "rgba(255,255,255,0.05)",
                border: "1px solid rgba(255,255,255,0.1)",
                borderRadius: 6,
                padding: "13px 16px",
                color: "rgba(220,230,255,0.9)",
                fontSize: "0.9rem",
                outline: "none",
                fontFamily: "inherit",
                lineHeight: 1.5,
              }}
            />
            <button
              onClick={send}
              style={{
                padding: "13px 24px",
                background: "#2d6cff",
                color: "#fff",
                border: "none",
                borderRadius: 6,
                cursor: "pointer",
                fontSize: "0.78rem",
                fontWeight: 700,
                letterSpacing: "0.1em",
                whiteSpace: "nowrap",
                display: "flex",
                alignItems: "center",
                gap: 6,
              }}
            >
              SEND
              <svg width="12" height="12" viewBox="0 0 20 20" fill="none"><path d="M4 10h12M11 5l5 5-5 5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
            </button>
          </div>
        </div>
      </div>
      </div>
    </div>
  );
}

/* ── Icons ── */
function DashIcon({ size = 16 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 20 20" fill="none">
      <rect x="2.5" y="2.5" width="6" height="6" rx="1.2" stroke="currentColor" strokeWidth="1.6"/>
      <rect x="11.5" y="2.5" width="6" height="6" rx="1.2" stroke="currentColor" strokeWidth="1.6"/>
      <rect x="2.5" y="11.5" width="6" height="6" rx="1.2" stroke="currentColor" strokeWidth="1.6"/>
      <rect x="11.5" y="11.5" width="6" height="6" rx="1.2" stroke="currentColor" strokeWidth="1.6"/>
    </svg>
  );
}
function SearchIcon({ size = 16 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 20 20" fill="none">
      <circle cx="8.5" cy="8.5" r="5" stroke="currentColor" strokeWidth="1.6"/>
      <path d="M12.5 12.5l4 4" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round"/>
    </svg>
  );
}
function MapIcon({ size = 16 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 20 20" fill="none">
      <circle cx="10" cy="8" r="3" stroke="currentColor" strokeWidth="1.6"/>
      <path d="M10 18c3-4 6-7 6-10A6 6 0 0 0 4 8c0 3 3 6 6 10z" stroke="currentColor" strokeWidth="1.6"/>
    </svg>
  );
}
function ForecastIcon({ size = 16 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 20 20" fill="none">
      <circle cx="10" cy="10" r="7.5" stroke="currentColor" strokeWidth="1.6"/>
      <path d="M10 5v5l3 2" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round"/>
    </svg>
  );
}
function ArchiveIcon({ size = 16 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 20 20" fill="none">
      <rect x="2.5" y="4.5" width="15" height="3" rx="1" stroke="currentColor" strokeWidth="1.6"/>
      <path d="M3.5 7.5v7a1.5 1.5 0 0 0 1.5 1.5h11a1.5 1.5 0 0 0 1.5-1.5v-7" stroke="currentColor" strokeWidth="1.6"/>
      <path d="M7.5 11h5" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round"/>
    </svg>
  );
}
function SupportIcon({ size = 14 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 20 20" fill="none">
      <circle cx="10" cy="10" r="7.5" stroke="currentColor" strokeWidth="1.6"/>
      <path d="M10 10.5V11m0-5a2 2 0 1 1 0 4" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round"/>
    </svg>
  );
}
function AccountIcon({ size = 14 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 20 20" fill="none">
      <circle cx="10" cy="7" r="3.5" stroke="currentColor" strokeWidth="1.6"/>
      <path d="M3.5 17c0-3 3-5 6.5-5s6.5 2 6.5 5" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round"/>
    </svg>
  );
}
function AiIcon({ size = 16 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 20 20" fill="none">
      <circle cx="10" cy="10" r="4" stroke="#2d6cff" strokeWidth="1.6"/>
      <path d="M10 2v2M10 16v2M2 10h2M16 10h2" stroke="#2d6cff" strokeWidth="1.6" strokeLinecap="round"/>
      <circle cx="10" cy="10" r="1.5" fill="#2d6cff"/>
    </svg>
  );
}
