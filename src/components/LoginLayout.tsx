"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";

/* ── SVG icons ─────────────────────────────────────────────────── */
export const EyeOpen = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" />
    <circle cx="12" cy="12" r="3" />
  </svg>
);
export const EyeOff = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94" />
    <path d="M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19" />
    <line x1="1" y1="1" x2="23" y2="23" />
  </svg>
);
export const ArrowRight = () => (
  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M5 12h14M12 5l7 7-7 7" />
  </svg>
);

/* ── Configs ────────────────────────────────────────────────────── */
const configs = {
  user: {
    eyebrow: "PROTOCOL INITIATION",
    eyebrowDot: false,
    leftHeading: ["Deploy", "Intelligence"],
    leftTagline: "Access the Living Archive. Synthesize global talent streams with unparalleled clarity and kinetic precision.",
    formTitle: "Welcome back",
    formSubtitle: "Enter your credentials to access your assessment platform.",
    emailLabel: "Work Email",
    emailPlaceholder: "jane@company.com",
    passwordLabel: "Password",
    submitLabel: "Sign In",
    forgotPassword: false,
    altText: "Admin access?",
    altLink: { href: "/admin/login", label: "Admin login →" },
    backgroundImage: "/login-terrain.png",
    backgroundAlt: "Abstract terrain wireframe",
  },
  admin: {
    eyebrow: "",
    eyebrowDot: false,
    leftHeading: null,
    leftTagline: "",
    formTitle: "Admin login",
    formSubtitle: "",
    emailLabel: "EMAIL",
    emailPlaceholder: "you@company.com",
    passwordLabel: "PASSWORD",
    submitLabel: "Sign In",
    forgotPassword: true,
    altText: "Not an admin?",
    altLink: { href: "/login", label: "User login →" },
    backgroundImage: "/admin%20login%20bg.png",
    backgroundAlt: "Admin login background",
  },
};

/* ── Component ─────────────────────────────────────────────────── */
export default function LoginLayout({ variant }: { variant: "user" | "admin" }) {
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const cfg = configs[variant];

  return (
    <div style={{ display: "flex", minHeight: "100vh", background: "#06090f", fontFamily: "var(--font-inter), sans-serif" }}>

      {/* ══════════════════════════════════════
          LEFT — full-bleed image panel (60%)
      ══════════════════════════════════════ */}
      <div
        className="hidden lg:block"
        style={{ width: "60%", position: "relative", overflow: "hidden", flexShrink: 0 }}
      >
        {/* Background image */}
        <Image
          src={cfg.backgroundImage}
          alt={cfg.backgroundAlt}
          fill
          style={{ objectFit: "cover" }}
          priority
        />

        {/* Multi-layer gradient — strong top vignette, subtle mid, heavy bottom */}
        <div style={{
          position: "absolute", inset: 0,
          background: `
            linear-gradient(180deg,
              rgba(6,9,15,0.85) 0%,
              rgba(6,9,15,0.2)  28%,
              rgba(6,9,15,0.1)  50%,
              rgba(6,9,15,0.55) 72%,
              rgba(6,9,15,0.95) 100%
            ),
            linear-gradient(90deg,
              rgba(6,9,15,0.0) 70%,
              rgba(6,9,15,0.7) 100%
            )
          `,
          pointerEvents: "none",
        }} />

        {/* Subtle blue radial accent */}
        <div style={{
          position: "absolute", inset: 0,
          background: "radial-gradient(ellipse 60% 50% at 40% 60%, rgba(45,108,255,0.08) 0%, transparent 70%)",
          pointerEvents: "none",
        }} />

        {/* ── Logo top-left ── */}
        <div style={{
          position: "absolute", top: "clamp(1.5rem,3vw,2.25rem)", left: "clamp(1.75rem,3.5vw,2.5rem)",
          zIndex: 10,
        }}>
          <Image src="/white_logologo.svg" alt="Interval 360" width={130} height={30} style={{ height: 24, width: "auto" }} priority />
        </div>

        {cfg.leftHeading && (
          /* ── Bottom copy ── */
          <div style={{
            position: "absolute", bottom: 0, left: 0, right: 0,
            padding: "clamp(2rem,4vw,3.5rem)",
            zIndex: 10,
          }}>
            {/* Eyebrow */}
            <div style={{ display: "flex", alignItems: "center", gap: "8px", marginBottom: "1rem" }}>
              {cfg.eyebrowDot && (
                <span style={{
                  display: "inline-block", width: "7px", height: "7px", borderRadius: "50%",
                  background: "#4f6ef7", boxShadow: "0 0 8px rgba(79,110,247,1)", flexShrink: 0,
                }} aria-hidden />
              )}
              <span style={{
                fontSize: "var(--text-xs)", fontWeight: 700, letterSpacing: "0.28em",
                textTransform: "uppercase", color: "rgba(79,110,247,0.85)",
              }}>
                {cfg.eyebrow}
              </span>
            </div>

            {/* Heading */}
            <h2 style={{
              fontSize: "var(--text-display)",
              fontWeight: 900,
              lineHeight: 0.92,
              letterSpacing: "-0.04em",
              color: "#fff",
              fontFamily: "var(--font-space-grotesk), sans-serif",
              marginBottom: "1.25rem",
            }}>
              {cfg.leftHeading[0]}
              <br />
              {cfg.leftHeading[1]}
            </h2>

            {/* Thin rule */}
            <div style={{ width: "40px", height: "2px", background: "rgba(45,108,255,0.7)", marginBottom: "1.1rem", borderRadius: "2px" }} />

            {/* Tagline */}
            <p style={{
              fontSize: "var(--text-sm)", color: "rgba(234,239,243,0.45)",
              lineHeight: 1.75, maxWidth: "38ch",
              textTransform: cfg.leftTagline === cfg.leftTagline.toUpperCase() ? "uppercase" : "none",
              letterSpacing: cfg.leftTagline === cfg.leftTagline.toUpperCase() ? "0.04em" : "0",
            }}>
              {cfg.leftTagline}
            </p>
          </div>
        )}
      </div>

      {/* Thin luminous divider */}
      <div
        className="hidden lg:block"
        style={{
          width: "1px", flexShrink: 0,
          background: "linear-gradient(to bottom, transparent 0%, rgba(45,108,255,0.25) 30%, rgba(255,255,255,0.08) 55%, rgba(45,108,255,0.12) 80%, transparent 100%)",
        }}
      />

      {/* ══════════════════════════════════════
          RIGHT — form panel (40%)
      ══════════════════════════════════════ */}
      <div style={{
        flex: 1,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        padding: "clamp(4rem,6vw,6rem) clamp(2rem,5vw,4.5rem)",
        position: "relative",
      }}>

        {/* Subtle bg texture on right */}
        <div style={{
          position: "absolute", inset: 0,
          background: "radial-gradient(ellipse 80% 60% at 50% 40%, rgba(45,108,255,0.04) 0%, transparent 70%)",
          pointerEvents: "none",
        }} />

        <div style={{ width: "100%", maxWidth: "360px", position: "relative" }}>

          {/* Mobile logo */}
          <div className="lg:hidden" style={{ marginBottom: "2.5rem" }}>
            <Image src="/white_logologo.svg" alt="Interval 360" width={130} height={30} style={{ height: 24, width: "auto" }} />
          </div>


          {/* Form title */}
          <h1 style={{
            fontSize: "var(--text-2xl)",
            fontWeight: 700,
            color: "#fff",
            fontFamily: "var(--font-space-grotesk), sans-serif",
            letterSpacing: "-0.025em",
            marginBottom: cfg.formSubtitle ? "0.5rem" : "2.5rem",
            lineHeight: 1.1,
          }}>
            {cfg.formTitle}
          </h1>
          {cfg.formSubtitle && (
            <p style={{
              fontSize: "var(--text-sm)", color: "rgba(234,239,243,0.42)",
              marginBottom: "2.5rem", lineHeight: 1.6, maxWidth: "34ch",
            }}>
              {cfg.formSubtitle}
            </p>
          )}

          {/* ── Form ── */}
          <form onSubmit={e => e.preventDefault()} noValidate style={{ display: "flex", flexDirection: "column", gap: "0" }}>

            {/* Email field */}
            <div style={{ marginBottom: "1.1rem" }}>
              <label style={labelStyle}>{cfg.emailLabel}</label>
              <input
                id="login-email"
                type="email"
                placeholder={cfg.emailPlaceholder}
                value={email}
                onChange={e => setEmail(e.target.value)}
                style={inputStyle}
                onFocus={e => { e.target.style.borderColor = "rgba(45,108,255,0.6)"; e.target.style.background = "rgba(45,108,255,0.06)"; e.target.style.boxShadow = "0 0 0 3px rgba(45,108,255,0.1)"; }}
                onBlur={e => { e.target.style.borderColor = "rgba(255,255,255,0.08)"; e.target.style.background = "rgba(255,255,255,0.03)"; e.target.style.boxShadow = "none"; }}
              />
            </div>

            {/* Password field */}
            <div style={{ marginBottom: "1.75rem" }}>
              <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: "8px" }}>
                <label style={{ ...labelStyle, marginBottom: 0 }}>{cfg.passwordLabel}</label>
                {cfg.forgotPassword && (
                  <Link href="#" style={{
                    fontSize: "var(--text-xs)", color: "rgba(79,110,247,0.75)",
                    textDecoration: "none", letterSpacing: "0.01em",
                    transition: "color 0.15s",
                  }}>
                    Forgot?
                  </Link>
                )}
              </div>
              <div style={{ position: "relative" }}>
                <input
                  id="login-password"
                  type={showPassword ? "text" : "password"}
                  placeholder="••••••••"
                  value={password}
                  onChange={e => setPassword(e.target.value)}
                  style={{ ...inputStyle, marginBottom: 0, paddingRight: "46px" }}
                  onFocus={e => { e.target.style.borderColor = "rgba(45,108,255,0.6)"; e.target.style.background = "rgba(45,108,255,0.06)"; e.target.style.boxShadow = "0 0 0 3px rgba(45,108,255,0.1)"; }}
                  onBlur={e => { e.target.style.borderColor = "rgba(255,255,255,0.08)"; e.target.style.background = "rgba(255,255,255,0.03)"; e.target.style.boxShadow = "none"; }}
                />
                <button
                  type="button"
                  id="toggle-password"
                  onClick={() => setShowPassword(v => !v)}
                  aria-label={showPassword ? "Hide password" : "Show password"}
                  style={{
                    position: "absolute", right: "13px", top: "50%", transform: "translateY(-50%)",
                    background: "none", border: "none", cursor: "pointer",
                    color: "rgba(234,239,243,0.3)", display: "flex", alignItems: "center", padding: "4px",
                    transition: "color 0.15s",
                  }}
                  onMouseEnter={e => (e.currentTarget.style.color = "rgba(234,239,243,0.75)")}
                  onMouseLeave={e => (e.currentTarget.style.color = "rgba(234,239,243,0.3)")}
                >
                  {showPassword ? <EyeOff /> : <EyeOpen />}
                </button>
              </div>
            </div>

            {/* Submit */}
            <button
              id="login-submit"
              type="submit"
              style={{
                display: "flex", alignItems: "center", justifyContent: "center", gap: "8px",
                width: "100%", height: "50px",
                background: "linear-gradient(110deg, #2563eb 0%, #4f46e5 100%)",
                color: "#fff", border: "none", borderRadius: "8px",
                fontSize: "var(--text-sm)", fontWeight: 600, letterSpacing: "0.02em",
                cursor: "pointer",
                boxShadow: "0 4px 24px rgba(45,108,255,0.3), 0 1px 0 rgba(255,255,255,0.08) inset",
                transition: "opacity 0.2s, transform 0.15s, box-shadow 0.2s",
              }}
              onMouseEnter={e => { e.currentTarget.style.boxShadow = "0 8px 36px rgba(45,108,255,0.45), 0 1px 0 rgba(255,255,255,0.08) inset"; }}
              onMouseLeave={e => { e.currentTarget.style.boxShadow = "0 4px 24px rgba(45,108,255,0.3), 0 1px 0 rgba(255,255,255,0.08) inset"; }}
              onMouseDown={e => (e.currentTarget.style.transform = "scale(0.988)")}
              onMouseUp={e => (e.currentTarget.style.transform = "scale(1)")}
            >
              {cfg.submitLabel}
              <ArrowRight />
            </button>
          </form>

          {/* Divider */}
          <div style={{ display: "flex", alignItems: "center", gap: "12px", margin: "1.5rem 0" }}>
            <div style={{ flex: 1, height: "1px", background: "rgba(255,255,255,0.06)" }} />
            <span style={{ fontSize: "var(--text-xs)", color: "rgba(234,239,243,0.2)", letterSpacing: "0.1em" }}>OR</span>
            <div style={{ flex: 1, height: "1px", background: "rgba(255,255,255,0.06)" }} />
          </div>

          {/* Alt link */}
          <p style={{ fontSize: "var(--text-sm)", color: "rgba(234,239,243,0.35)", textAlign: "center" }}>
            {cfg.altText}{" "}
            <Link href={cfg.altLink.href} style={{
              color: "rgba(234,239,243,0.7)", textDecoration: "none",
              borderBottom: "1px solid rgba(234,239,243,0.25)", paddingBottom: "1px",
              transition: "color 0.15s, border-color 0.15s",
            }}>
              {cfg.altLink.label}
            </Link>
          </p>

          {/* Back to site */}
          <p style={{ marginTop: "2.5rem", textAlign: "center" }}>
            <Link href="/" style={{
              fontSize: "var(--text-xs)", color: "rgba(234,239,243,0.2)",
              textDecoration: "none", transition: "color 0.15s",
            }}
              onMouseEnter={e => (e.currentTarget.style.color = "rgba(234,239,243,0.5)")}
              onMouseLeave={e => (e.currentTarget.style.color = "rgba(234,239,243,0.2)")}
            >
              ← Back to site
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}

/* ── Shared field styles ───────────────────────────────────────── */
export const labelStyle: React.CSSProperties = {
  display: "block",
  fontSize: "var(--text-xs)",
  fontWeight: 600,
  letterSpacing: "0.08em",
  textTransform: "uppercase",
  color: "rgba(234,239,243,0.5)",
  marginBottom: "8px",
};

export const inputStyle: React.CSSProperties = {
  display: "block",
  width: "100%",
  height: "48px",
  padding: "0 14px",
  background: "rgba(255,255,255,0.03)",
  border: "1px solid rgba(255,255,255,0.08)",
  borderRadius: "8px",
  fontSize: "var(--text-sm)",
  color: "rgba(234,239,243,0.88)",
  outline: "none",
  marginBottom: "0",
  transition: "border-color 0.18s, background 0.18s, box-shadow 0.18s",
  caretColor: "#2d6cff",
};
