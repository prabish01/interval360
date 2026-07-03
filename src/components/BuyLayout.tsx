"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { EyeOpen, EyeOff, ArrowRight, labelStyle, inputStyle } from "./LoginLayout";
import { signup, ApiError } from "@/lib/api";

const steps = [
  {
    num: "01",
    heading: "Create an account",
    description: "Takes about a minute. Just a few basics about you and your company.",
  },
  {
    num: "02",
    heading: "Purchase from your dashboard",
    description: "$150 for a single assessment, or $125 each in a 10-pack.",
  },
  {
    num: "03",
    heading: "Set up and launch",
    description: "Configure your assessment, invite raters, get reports in days — not weeks.",
  },
];

const companyOptions = ["Acme Inc.", "Globex Corporation", "Initech", "Umbrella Corp"];

export default function BuyLayout() {
  const router = useRouter();
  const [showPassword, setShowPassword] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [company, setCompany] = useState("");
  const [employees, setEmployees] = useState("");
  const [agreed, setAgreed] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState<string | null>(null);

  // Mirrors the backend's PASSWORD_REGEX exactly (validation.middleware.js) —
  // special characters are limited to this set, not any symbol.
  const passwordRequirements = [
    { label: "8+ characters", met: password.length >= 8 },
    { label: "Uppercase letter", met: /[A-Z]/.test(password) },
    { label: "Lowercase letter", met: /[a-z]/.test(password) },
    { label: "Number", met: /\d/.test(password) },
    { label: "Symbol (@$!%*?&)", met: /[@$!%*?&]/.test(password) },
  ];

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);
    setSuccess(null);

    if (!agreed) {
      setError("Please agree to the Terms & Conditions and Privacy Policy.");
      return;
    }

    setSubmitting(true);
    try {
      await signup({
        name,
        email,
        password,
        company_name: company,
        total_employees: employees,
      });
      setSuccess("Account created. Redirecting to login…");
      setTimeout(() => router.push("/admin/login"), 1200);
    } catch (err) {
      setError(err instanceof ApiError ? err.message : "Something went wrong. Please try again.");
      setSubmitting(false);
    }
  };

  return (
    <div style={{ display: "flex", minHeight: "100vh", background: "#050508", fontFamily: "var(--font-inter), sans-serif" }}>

      {/* ══════════════════════════════════════
          LEFT — explainer panel (60%)
      ══════════════════════════════════════ */}
      <div
        className="hidden lg:block"
        style={{ width: "60%", position: "relative", overflow: "hidden", flexShrink: 0, background: "#050508" }}
      >
        {/* Subtle blue radial accent */}
        <div style={{
          position: "absolute", inset: 0,
          background: "radial-gradient(ellipse 60% 50% at 40% 60%, rgba(45,108,255,0.08) 0%, transparent 70%)",
          pointerEvents: "none",
        }} />

        {/* Logo top-left */}
        <div style={{
          position: "absolute", top: "clamp(1.5rem,3vw,2.25rem)", left: "clamp(1.75rem,3.5vw,2.5rem)",
          zIndex: 10,
        }}>
          <Image src="/white_logologo.svg" alt="Interval 360" width={130} height={30} style={{ height: 24, width: "auto" }} priority />
        </div>

        <div style={{
          position: "absolute", top: "50%", left: 0, right: 0,
          transform: "translateY(-50%)",
          padding: "clamp(2rem,4vw,3.5rem)",
          zIndex: 10,
        }}>
          {/* Pretitle */}
          <div style={{ display: "flex", alignItems: "center", gap: "8px", marginBottom: "1rem" }}>
            <span style={{
              display: "inline-block", width: "7px", height: "7px", borderRadius: "50%",
              background: "#4f6ef7", boxShadow: "0 0 8px rgba(79,110,247,1)", flexShrink: 0,
            }} aria-hidden />
            <span style={{
              fontSize: "var(--text-xs)", fontWeight: 700, letterSpacing: "0.28em",
              textTransform: "uppercase", color: "rgba(79,110,247,0.85)",
            }}>
              BUY AN ASSESSMENT
            </span>
          </div>

          {/* Headline */}
          <h2 style={{
            fontSize: "var(--text-display)",
            fontWeight: 900,
            lineHeight: 0.92,
            letterSpacing: "-0.04em",
            color: "#fff",
            fontFamily: "var(--font-space-grotesk), sans-serif",
            marginBottom: "2.5rem",
          }}>
            How it works.
          </h2>

          {/* Steps */}
          <div style={{ display: "flex", flexDirection: "column", gap: "1.75rem", maxWidth: "42ch" }}>
            {steps.map(step => (
              <div key={step.num}>
                <div style={{ display: "flex", alignItems: "baseline", gap: "10px", marginBottom: "0.4rem" }}>
                  <span style={{
                    fontSize: "var(--text-xs)", fontWeight: 700, color: "rgba(79,110,247,0.85)",
                    letterSpacing: "0.05em",
                  }}>
                    {step.num}
                  </span>
                  <span style={{
                    fontSize: "var(--text-base)", fontWeight: 700, color: "#fff",
                    fontFamily: "var(--font-space-grotesk), sans-serif",
                  }}>
                    {step.heading}
                  </span>
                </div>
                <p style={{
                  fontSize: "var(--text-sm)", color: "rgba(234,239,243,0.45)",
                  lineHeight: 1.7, marginLeft: "26px",
                }}>
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>
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
        padding: "clamp(3rem,6vw,5rem) clamp(2rem,5vw,4.5rem)",
        position: "relative",
      }}>

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
            marginBottom: "2rem",
            lineHeight: 1.1,
          }}>
            Create admin account
          </h1>

          {/* ── Form ── */}
          <form onSubmit={handleSubmit} noValidate style={{ display: "flex", flexDirection: "column", gap: "0" }}>

            {/* Name field */}
            <div style={{ marginBottom: "1.1rem" }}>
              <label style={labelStyle}>NAME *</label>
              <input
                id="signup-name"
                type="text"
                placeholder="Enter your name"
                value={name}
                onChange={e => setName(e.target.value)}
                style={inputStyle}
                onFocus={e => { e.target.style.borderColor = "rgba(45,108,255,0.6)"; e.target.style.background = "rgba(45,108,255,0.06)"; e.target.style.boxShadow = "0 0 0 3px rgba(45,108,255,0.1)"; }}
                onBlur={e => { e.target.style.borderColor = "rgba(255,255,255,0.08)"; e.target.style.background = "rgba(255,255,255,0.03)"; e.target.style.boxShadow = "none"; }}
              />
            </div>

            {/* Email field */}
            <div style={{ marginBottom: "1.1rem" }}>
              <label style={labelStyle}>EMAIL *</label>
              <input
                id="signup-email"
                type="email"
                placeholder="you@company.com"
                value={email}
                onChange={e => setEmail(e.target.value)}
                style={inputStyle}
                onFocus={e => { e.target.style.borderColor = "rgba(45,108,255,0.6)"; e.target.style.background = "rgba(45,108,255,0.06)"; e.target.style.boxShadow = "0 0 0 3px rgba(45,108,255,0.1)"; }}
                onBlur={e => { e.target.style.borderColor = "rgba(255,255,255,0.08)"; e.target.style.background = "rgba(255,255,255,0.03)"; e.target.style.boxShadow = "none"; }}
              />
            </div>

            {/* Password field */}
            <div style={{ marginBottom: "1.1rem" }}>
              <label style={labelStyle}>PASSWORD *</label>
              <div style={{ position: "relative" }}>
                <input
                  id="signup-password"
                  type={showPassword ? "text" : "password"}
                  placeholder="Enter your password"
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

              {/* Live password requirements checklist */}
              <div style={{ display: "flex", flexWrap: "wrap", gap: "6px 14px", marginTop: "10px" }}>
                {passwordRequirements.map(req => (
                  <span
                    key={req.label}
                    style={{
                      fontSize: "var(--text-xs)",
                      display: "flex",
                      alignItems: "center",
                      gap: "5px",
                      color: req.met ? "#4ade80" : "rgba(234,239,243,0.35)",
                      transition: "color 0.15s",
                    }}
                  >
                    <span style={{ fontSize: "10px" }}>{req.met ? "✓" : "•"}</span>
                    {req.label}
                  </span>
                ))}
              </div>
            </div>

            {/* Company name field */}
            <div style={{ marginBottom: "1.1rem" }}>
              <label style={labelStyle}>COMPANY NAME *</label>
              <input
                id="signup-company"
                type="text"
                list="company-options"
                placeholder="Select or type company name"
                value={company}
                onChange={e => setCompany(e.target.value)}
                style={inputStyle}
                onFocus={e => { e.target.style.borderColor = "rgba(45,108,255,0.6)"; e.target.style.background = "rgba(45,108,255,0.06)"; e.target.style.boxShadow = "0 0 0 3px rgba(45,108,255,0.1)"; }}
                onBlur={e => { e.target.style.borderColor = "rgba(255,255,255,0.08)"; e.target.style.background = "rgba(255,255,255,0.03)"; e.target.style.boxShadow = "none"; }}
              />
              <datalist id="company-options">
                {companyOptions.map(opt => <option key={opt} value={opt} />)}
              </datalist>
            </div>

            {/* Employees field */}
            <div style={{ marginBottom: "1.5rem" }}>
              <label style={labelStyle}>TOTAL NUMBER OF EMPLOYEES *</label>
              <input
                id="signup-employees"
                type="number"
                min={1}
                placeholder="Enter total number of employees"
                value={employees}
                onChange={e => setEmployees(e.target.value)}
                style={inputStyle}
                onFocus={e => { e.target.style.borderColor = "rgba(45,108,255,0.6)"; e.target.style.background = "rgba(45,108,255,0.06)"; e.target.style.boxShadow = "0 0 0 3px rgba(45,108,255,0.1)"; }}
                onBlur={e => { e.target.style.borderColor = "rgba(255,255,255,0.08)"; e.target.style.background = "rgba(255,255,255,0.03)"; e.target.style.boxShadow = "none"; }}
              />
            </div>

            {/* Terms checkbox */}
            <label style={{
              display: "flex", alignItems: "flex-start", gap: "10px",
              marginBottom: "1.75rem", cursor: "pointer",
            }}>
              <input
                type="checkbox"
                checked={agreed}
                onChange={e => setAgreed(e.target.checked)}
                style={{ marginTop: "3px", width: "15px", height: "15px", accentColor: "#2d6cff", flexShrink: 0, cursor: "pointer" }}
              />
              <span style={{ fontSize: "var(--text-xs)", color: "rgba(234,239,243,0.45)", lineHeight: 1.6 }}>
                By checking this box you agree to our{" "}
                <Link href="/terms" style={{ color: "#2d6cff", textDecoration: "none" }}>Terms &amp; Conditions</Link>
                {" "}and{" "}
                <Link href="/privacy" style={{ color: "#2d6cff", textDecoration: "none" }}>Privacy Policy</Link>
                . Please read both carefully by clicking each term.
              </span>
            </label>

            {/* Error / success messages */}
            {error && (
              <p style={{ color: "#f87171", fontSize: "var(--text-xs)", marginBottom: "1rem" }}>{error}</p>
            )}
            {success && (
              <p style={{ color: "#4ade80", fontSize: "var(--text-xs)", marginBottom: "1rem" }}>{success}</p>
            )}

            {/* Submit */}
            <button
              id="signup-submit"
              type="submit"
              disabled={submitting}
              style={{
                display: "flex", alignItems: "center", justifyContent: "center", gap: "8px",
                width: "100%", height: "50px",
                background: "linear-gradient(110deg, #2563eb 0%, #4f46e5 100%)",
                color: "#fff", border: "none", borderRadius: "8px",
                fontSize: "var(--text-sm)", fontWeight: 600, letterSpacing: "0.02em",
                cursor: submitting ? "default" : "pointer",
                opacity: submitting ? 0.7 : 1,
                boxShadow: "0 4px 24px rgba(45,108,255,0.3), 0 1px 0 rgba(255,255,255,0.08) inset",
                transition: "opacity 0.2s, transform 0.15s, box-shadow 0.2s",
              }}
              onMouseEnter={e => { e.currentTarget.style.boxShadow = "0 8px 36px rgba(45,108,255,0.45), 0 1px 0 rgba(255,255,255,0.08) inset"; }}
              onMouseLeave={e => { e.currentTarget.style.boxShadow = "0 4px 24px rgba(45,108,255,0.3), 0 1px 0 rgba(255,255,255,0.08) inset"; }}
              onMouseDown={e => (e.currentTarget.style.transform = "scale(0.988)")}
              onMouseUp={e => (e.currentTarget.style.transform = "scale(1)")}
            >
              {submitting ? "Creating account…" : "Create Account"}
              <ArrowRight />
            </button>
          </form>

          {/* Login link */}
          <p style={{ fontSize: "var(--text-sm)", color: "rgba(234,239,243,0.35)", textAlign: "center", marginTop: "1.5rem" }}>
            Already have an account?{" "}
            <Link href="/admin/login" style={{
              color: "#2d6cff", textDecoration: "none",
              borderBottom: "1px solid rgba(45,108,255,0.4)", paddingBottom: "1px",
            }}>
              Login
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
