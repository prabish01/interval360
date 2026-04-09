import Link from "next/link";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";

export default function BuyPage() {
  return (
    <>
      <Nav />
      <div
        className="flex items-center justify-center min-h-screen pt-16 relative overflow-hidden"
        style={{ background: "linear-gradient(135deg, var(--navy-dark) 0%, var(--navy) 55%, #1565c0 100%)" }}
      >
        <div className="absolute inset-0 pointer-events-none grid-pattern" />
        <div className="relative z-10 text-center page-gutter py-24 max-w-2xl mx-auto">
          <span
            className="inline-block text-[0.7rem] font-bold tracking-[0.15em] uppercase px-3 py-1.5 rounded mb-8"
            style={{ background: "rgba(44,166,164,0.2)", color: "var(--teal-light)" }}
          >
            In Development
          </span>
          <h1
            className="text-[clamp(2rem,4vw,2.8rem)] font-bold leading-[1.15] tracking-[-0.025em] text-white mb-6"
            style={{ fontFamily: "var(--font-poppins)" }}
          >
            The self-serve checkout experience is on its way.
          </h1>
          <p className="text-[1.05rem] leading-[1.75] mb-10" style={{ color: "rgba(234,239,243,0.75)" }}>
            We&apos;re building a streamlined kiosk for buying individual and team assessments directly — no sales conversation, just a clean checkout and immediate setup. In the meantime, reach out and we&apos;ll get you started.
          </p>
          <div className="flex gap-4 justify-center flex-wrap mb-16">
            <Link
              href="/company#contact"
              className="text-[0.9rem] font-semibold px-8 py-3.5 rounded no-underline"
              style={{ background: "var(--teal)", color: "#fff" }}
            >
              Book a Call
            </Link>
            <Link
              href="/pricing"
              className="text-[0.9rem] font-medium no-underline border-b border-current pb-0.5"
              style={{ color: "rgba(234,239,243,0.7)" }}
            >
              View pricing details →
            </Link>
          </div>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              { val: "$150", label: "Single assessment" },
              { val: "$125", label: "Per assessment, 10-pack" },
              { val: "~5 min", label: "Per feedback provider" },
              { val: "Days", label: "From launch to report" },
            ].map((stat, i) => (
              <div
                key={i}
                className="rounded-lg p-5 text-center"
                style={{ background: "rgba(255,255,255,0.06)", border: "1px solid rgba(187,220,251,0.15)" }}
              >
                <p className="text-[1.5rem] font-bold mb-1" style={{ fontFamily: "var(--font-montserrat)", color: "var(--teal-light)" }}>
                  {stat.val}
                </p>
                <p className="text-[0.78rem]" style={{ color: "rgba(234,239,243,0.5)" }}>
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
