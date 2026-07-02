"use client";

import { useState, type FormEvent } from "react";

type Status = "idle" | "loading" | "success" | "error";

export default function NewsletterForm() {
  const [status, setStatus] = useState<Status>("idle");
  const [error, setError] = useState("");

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const email = new FormData(form).get("email");

    setStatus("loading");
    setError("");

    try {
      const res = await fetch("/api/newsletter", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });
      const data = await res.json();

      if (!res.ok) {
        setStatus("error");
        setError(data.error || "Something went wrong. Try again later.");
        return;
      }

      setStatus("success");
      form.reset();
    } catch {
      setStatus("error");
      setError("Something went wrong. Try again later.");
    }
  }

  if (status === "success") {
    return (
      <p className="text-sm md:text-base" style={{ color: "rgba(255,255,255,0.85)" }}>
        You&apos;re subscribed. Thanks for joining!
      </p>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-2">
      <div className="flex items-center gap-2">
        <input
          type="email"
          name="email"
          required
          placeholder="Work email"
          disabled={status === "loading"}
          className="w-full h-10 px-3 text-base rounded-md bg-transparent border outline-none disabled:opacity-60"
          style={{ borderColor: "rgba(255,255,255,0.24)", color: "rgba(255,255,255,0.92)" }}
        />
        <button
          type="submit"
          disabled={status === "loading"}
          className="h-10 px-4 text-sm font-semibold rounded-md transition-opacity hover:opacity-90 disabled:opacity-60"
          style={{ background: "#2d6cff", color: "#fff" }}
        >
          {status === "loading" ? "Joining…" : "Join"}
        </button>
      </div>
      {status === "error" && (
        <p className="text-sm" style={{ color: "#ff8080" }}>
          {error}
        </p>
      )}
    </form>
  );
}
