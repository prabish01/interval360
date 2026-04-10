import Link from "next/link";
import { steps } from "./data";

export function HomeHowItWorksSection() {
  return (
    <section id="how" className="min-h-screen flex flex-col bg-[#0e0e0e] ">
      <div className="flex-1 flex flex-col justify-center content-wrap page-gutter py-24 w-full">
        <div className="mb-16 ml-auto max-w-3xl text-right">
          <p className="text-[0.72rem] font-semibold tracking-[0.2em] uppercase mb-4" style={{ color: "#2d6cff" }}>
            Operational Blueprint
          </p>
          <h2 className="text-[clamp(2.5rem,5vw,4rem)] font-extrabold leading-[1.1] mb-6" style={{ fontFamily: "var(--font-space-grotesk)", color: "#fff" }}>
            HOW IT WORKS
          </h2>
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-end gap-4 sm:gap-6">
            <p className="text-[1rem] leading-[1.6] max-w-xl" style={{ color: "rgba(234,239,243,0.7)" }}>
              A better process creates better inputs and more impactful outputs.
            </p>
          </div>
        </div>
        <div className="grid lg:grid-cols-3">
          {steps.map((step, i) => (
            <div key={i} className="group flex flex-col p-8 rounded border border-transparent hover:border-[rgba(45,108,255,0.3)] hover:bg-[rgba(45,108,255,0.05)] transition-all duration-300 cursor-default" style={{ borderLeft: i > 0 ? "1px solid rgba(255,255,255,0.08)" : undefined }}>
              <p className="text-[5rem] font-extrabold leading-none mb-6 text-[rgba(255,255,255,0.08)] group-hover:text-[rgba(45,108,255,0.25)] transition-colors duration-300">{step.num}</p>
              <h3 className="text-[1.1rem] font-bold uppercase leading-[1.3] mb-4" style={{ color: "#fff" }}>
                {step.title}
              </h3>
              <p className="text-[0.92rem] leading-[1.7]" style={{ color: "rgba(234,239,243,0.65)" }}>
                {step.body}
              </p>
            </div>
          ))}
        </div>
        <div className="mt-10 flex justify-center">
          <Link
            href="/how-it-works"
            className="inline-flex items-center justify-center text-[0.92rem] font-semibold px-7 py-3 rounded-md no-underline transition-all duration-200 hover:-translate-y-0.5"
            style={{ background: "#2d6cff", color: "#fff" }}
          >
            See how it works →
          </Link>
        </div>
      </div>
    </section>
  );
}
