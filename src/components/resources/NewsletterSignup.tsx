"use client";

import { FormEvent, useState } from "react";
import { homeTheme } from "@/lib/homeTheme";

export function NewsletterSignup({
  placeholder,
  buttonLabel,
}: {
  placeholder: string;
  buttonLabel: string;
}) {
  const [status, setStatus] = useState<"idle" | "done">("idle");

  function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("done");
  }

  return (
    <form onSubmit={onSubmit} className="flex w-full max-w-md flex-col gap-3">
      <label htmlFor="intel-email" className="sr-only">
        Email
      </label>
      <input
        id="intel-email"
        name="email"
        type="email"
        autoComplete="email"
        placeholder={placeholder}
        required
        disabled={status === "done"}
        className="w-full rounded-sm border border-white/15 bg-black/30 px-4 py-3.5 text-[0.9rem] text-white placeholder:text-white/35 outline-none focus:border-white/35"
      />
      <button
        type="submit"
        disabled={status === "done"}
        className="w-full rounded-sm py-3.5 text-[0.72rem] font-bold uppercase tracking-[0.14em] text-white transition-opacity hover:opacity-95 disabled:opacity-60"
        style={{ background: homeTheme.blue, boxShadow: homeTheme.blueShadow }}
      >
        {status === "done" ? "Thanks — you're subscribed" : buttonLabel}
      </button>
    </form>
  );
}
