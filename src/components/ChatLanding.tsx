"use client";

import Link from "next/link";
import ParticleLogoCanvas from "@/components/ParticleLogoCanvas";

export default function ChatLanding() {
  return (
    <div
      style={{
        position: "fixed",
        inset: 0,
        background: "#08090d",
        display: "flex",
        overflow: "hidden",
      }}
    >
      {/* ── Left: text ── */}
      <div
        style={{
          position: "relative",
          zIndex: 10,
          flex: "0 0 52%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: "0 6% 0 8%",
        }}
      >
        {/* Badge */}
        <div
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: 8,
            marginBottom: 36,
            alignSelf: "flex-start",
            padding: "8px 16px",
            borderRadius: 999,
            border: "1px solid rgba(80,140,255,0.3)",
            background: "rgba(8,9,13,0.6)",
            backdropFilter: "blur(8px)",
          }}
        >
          <span
            style={{
              width: 6,
              height: 6,
              borderRadius: "50%",
              background: "#2d6cff",
              boxShadow: "0 0 8px #2d6cff",
              flexShrink: 0,
            }}
          />
          <span
            style={{
              fontSize: "0.6rem",
              fontWeight: 700,
              letterSpacing: "0.22em",
              color: "rgba(180,210,255,0.85)",
              fontFamily: "var(--font-montserrat)",
            }}
          >
            KINETIC INTELLIGENCE ASSESSMENT
          </span>
          <span
            style={{
              width: 6,
              height: 6,
              borderRadius: "50%",
              background: "rgba(80,140,255,0.5)",
              flexShrink: 0,
            }}
          />
        </div>

        {/* Heading */}
        <h1
          style={{
            margin: "0 0 24px",
            fontFamily: "var(--font-space-grotesk)",
            fontWeight: 800,
            fontSize: "clamp(2.6rem, 4.5vw, 4rem)",
            lineHeight: 1.08,
            color: "#fff",
            letterSpacing: "-0.02em",
          }}
        >
          READY TO SHARE<br />YOUR <span style={{ color: "#2d6cff" }}>FEEDBACK?</span>
        </h1>

        {/* Body */}
        <p
          style={{
            margin: "0 0 44px",
            fontSize: "1rem",
            lineHeight: 1.72,
            color: "rgba(190,215,255,0.62)",
            maxWidth: "42ch",
            fontFamily: "var(--font-inter)",
          }}
        >
          This AI-guided conversation takes approximately 5 minutes.
          Your responses are encrypted and processed to uncover
          high-velocity leadership insights.
        </p>

        {/* CTA */}
        <Link
          href="/particle/chat"
          style={{
            display: "inline-flex",
            alignItems: "center",
            justifyContent: "space-between",
            gap: 16,
            padding: "16px 24px",
            background: "linear-gradient(135deg, #3b7fff 0%, #2d6cff 100%)",
            color: "#fff",
            borderRadius: 6,
            fontSize: "1rem",
            fontWeight: 600,
            textDecoration: "none",
            width: "min(380px, 100%)",
            boxShadow: "0 8px 32px rgba(45,108,255,0.35)",
            transition: "transform 0.18s, box-shadow 0.18s",
          }}
          onMouseEnter={e => {
            (e.currentTarget as HTMLAnchorElement).style.transform = "translateY(-2px)";
            (e.currentTarget as HTMLAnchorElement).style.boxShadow = "0 14px 40px rgba(45,108,255,0.5)";
          }}
          onMouseLeave={e => {
            (e.currentTarget as HTMLAnchorElement).style.transform = "translateY(0)";
            (e.currentTarget as HTMLAnchorElement).style.boxShadow = "0 8px 32px rgba(45,108,255,0.35)";
          }}
        >
          Start Conversation
          <span
            style={{
              width: 32,
              height: 32,
              borderRadius: "50%",
              background: "rgba(255,255,255,0.18)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              flexShrink: 0,
            }}
          >
            <svg width="14" height="14" viewBox="0 0 20 20" fill="none">
              <path d="M4 10h12M11 5l5 5-5 5" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </span>
        </Link>

        {/* Confidentiality note */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 7,
            marginTop: 18,
            color: "rgba(170,200,255,0.42)",
            fontSize: "0.8rem",
          }}
        >
          <svg width="12" height="12" viewBox="0 0 20 20" fill="none">
            <rect x="4" y="9" width="12" height="9" rx="1.5" stroke="currentColor" strokeWidth="1.6" />
            <path d="M7 9V6a3 3 0 0 1 6 0v3" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
          </svg>
          Responses are 100% confidential.
        </div>
      </div>

      {/* ── Right: particle logo + blue glow ── */}
      <div style={{ flex: "0 0 48%", position: "relative", zIndex: 10, height: "100%" }}>
        {/* Blue radial glow — subtle, wide spread, no hard edge */}
        <div style={{
          position: "absolute",
          inset: "-20% -10% -20% -40%",
          background: "radial-gradient(ellipse 60% 55% at 65% 50%, rgba(45,108,255,0.10) 0%, transparent 70%)",
          pointerEvents: "none",
        }} />
        {/* Particle logo — centered in right half */}
        <ParticleLogoCanvas />
      </div>
    </div>
  );
}
