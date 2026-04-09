import Link from "next/link";

interface PageHeroProps {
  eyebrow?: string;
  tag?: string;
  title: React.ReactNode;
  body: string;
  buttons?: { href: string; label: string; variant: "teal" | "primary" | "secondary" | "ghost" }[];
  breadcrumb?: { href: string; label: string };
  breadcrumbCurrent?: string;
}

export default function PageHero({
  eyebrow,
  tag,
  title,
  body,
  buttons = [],
  breadcrumb,
  breadcrumbCurrent,
}: PageHeroProps) {
  const btnStyles = {
    teal: {
      background: "var(--teal)",
      color: "#fff",
      border: "none",
    },
    primary: {
      background: "var(--navy)",
      color: "#fff",
      border: "none",
    },
    secondary: {
      background: "transparent",
      color: "var(--navy)",
      border: "1.5px solid var(--navy)",
    },
    ghost: {
      background: "transparent",
      color: "var(--navy)",
      border: "none",
      textDecoration: "underline",
      textUnderlineOffset: "3px",
    },
  };

  return (
    <>
      {breadcrumb && (
        <div
          className="pt-20"
          style={{ background: "var(--white)", borderBottom: "1px solid var(--rule)" }}
        >
          <div className="page-gutter py-3 text-[0.8rem]" style={{ color: "var(--slate)" }}>
            <Link href={breadcrumb.href} className="hover:text-[var(--navy)] transition-colors" style={{ color: "var(--navy)" }}>
              {breadcrumb.label}
            </Link>
            <span className="mx-1.5" style={{ color: "var(--warm-gray)" }}>/</span>
            <span>{breadcrumbCurrent}</span>
          </div>
        </div>
      )}
      <section
        className={`${breadcrumb ? "" : "pt-24"} pb-20 page-gutter`}
        style={{
          background: "linear-gradient(135deg, var(--navy-dark) 0%, var(--navy) 55%, #1565c0 100%)",
          position: "relative",
          overflow: "hidden",
        }}
      >
        {/* Grid pattern overlay */}
        <div
          className="absolute inset-0 pointer-events-none grid-pattern"
          style={{ opacity: 1 }}
        />
        <div className="relative z-10 max-w-3xl pt-8">
          {tag && (
            <span
              className="inline-block text-[0.72rem] font-semibold tracking-[0.15em] uppercase mb-4 px-3 py-1 rounded"
              style={{ background: "rgba(44,166,164,0.2)", color: "var(--teal-light)" }}
            >
              {tag}
            </span>
          )}
          {eyebrow && !tag && (
            <p
              className="text-[0.72rem] font-semibold tracking-[0.2em] uppercase mb-5"
              style={{ color: "var(--teal-light)" }}
            >
              {eyebrow}
            </p>
          )}
          <h1
            className="text-[clamp(2rem,4vw,3rem)] font-bold leading-[1.15] tracking-[-0.025em] mb-5"
            style={{ fontFamily: "var(--font-poppins)", color: "#fff" }}
          >
            {title}
          </h1>
          <p className="text-[1.05rem] leading-[1.75] mb-8 max-w-[52ch]" style={{ color: "rgba(234,239,243,0.82)" }}>
            {body}
          </p>
          {buttons.length > 0 && (
            <div className="flex gap-3 flex-wrap items-center">
              {buttons.map((btn) => (
                <Link
                  key={btn.href}
                  href={btn.href}
                  className="text-[0.9rem] font-semibold px-7 py-3 rounded no-underline transition-all whitespace-nowrap hover:opacity-90"
                  style={btnStyles[btn.variant] as React.CSSProperties}
                >
                  {btn.label}
                </Link>
              ))}
            </div>
          )}
        </div>
      </section>
    </>
  );
}
