import { homeTheme } from "@/lib/homeTheme";
import { TermsTOC } from "./TermsTOC";

export const metadata = {
  alternates: {
    canonical: "/terms",
  },
  title: "Terms and Conditions — Interval 360",
  description:
    "Terms governing access to and use of the Interval 360 Assessment platform, related assessments, reports, and services offered by Interval 360, Inc.",
  openGraph: {
    title: "Terms and Conditions — Interval 360",
    description:
      "Terms governing access to and use of the Interval 360 Assessment platform, related assessments, reports, and services offered by Interval 360, Inc.",
    images: "/interval360-og-image.png",
  },
  twitter: {
    title: "Terms and Conditions — Interval 360",
    description:
      "Terms governing access to and use of the Interval 360 Assessment platform, related assessments, reports, and services offered by Interval 360, Inc.",
    images: "/interval360-og-image.png",
  },
};

function SectionHeading({ id, children }: { id: string; children: React.ReactNode }) {
  return (
    <h2
      id={id}
      className="scroll-mt-28 text-[clamp(1.25rem,2.4vw,1.75rem)] font-extrabold uppercase leading-snug tracking-tight mt-16 mb-5"
      style={{ fontFamily: "var(--font-space-grotesk)", color: homeTheme.lightHeading }}
    >
      {children}
    </h2>
  );
}

function SubHeading({ children }: { children: React.ReactNode }) {
  return (
    <h3
      className="text-sm font-bold uppercase tracking-[0.12em] mt-8 mb-3"
      style={{ fontFamily: "var(--font-space-grotesk)", color: "#2c2f33" }}
    >
      {children}
    </h3>
  );
}

function P({ children }: { children: React.ReactNode }) {
  return (
    <p className="text-base leading-[1.8] mb-4" style={{ color: "#3a3f47" }}>
      {children}
    </p>
  );
}

function Bullets({ items }: { items: React.ReactNode[] }) {
  return (
    <ul className="mb-5 flex flex-col gap-2.5">
      {items.map((item, i) => (
        <li key={i} className="flex items-start gap-3 text-base leading-[1.7]" style={{ color: "#3a3f47" }}>
          <span className="mt-[0.6rem] h-1.5 w-1.5 shrink-0 rounded-full" style={{ background: homeTheme.blue }} aria-hidden />
          <span>{item}</span>
        </li>
      ))}
    </ul>
  );
}

function NumberedList({ items }: { items: React.ReactNode[] }) {
  return (
    <ol className="mb-5 flex flex-col gap-2.5">
      {items.map((item, i) => (
        <li key={i} className="flex items-start gap-3 text-base leading-[1.7]" style={{ color: "#3a3f47" }}>
          <span
            className="shrink-0 text-sm font-bold tabular-nums"
            style={{ fontFamily: "var(--font-space-grotesk)", color: homeTheme.blue }}
          >
            {String(i + 1).padStart(2, "0")}
          </span>
          <span>{item}</span>
        </li>
      ))}
    </ol>
  );
}

export default function TermsPage() {
  return (
    <div className="min-h-screen">
      {/* Dark hero */}
      <section
        data-nav-theme="dark"
        className="relative overflow-hidden pt-28 pb-16 text-white md:pb-20 page-gutter"
        style={{ background: homeTheme.heroGradient }}
      >
        <div className="pointer-events-none absolute inset-0 grid-pattern" style={{ opacity: 0.16 }} />
        <div
          className="pointer-events-none absolute inset-0 opacity-50"
          style={{
            backgroundImage: `radial-gradient(ellipse 80% 50% at 50% -20%, ${homeTheme.blueGlowSoft}, transparent 55%)`,
          }}
        />
        <div className="content-wrap relative z-10 max-w-4xl">
          <p
            className="mb-5 text-xs font-semibold tracking-[0.28em] uppercase"
            style={{ color: homeTheme.blue }}
          >
            Legal
          </p>
          <h1
            className="mb-6 text-[clamp(2.5rem,6vw,4.5rem)] font-extrabold leading-[1.05] tracking-[-0.02em] uppercase"
            style={{ fontFamily: "var(--font-space-grotesk)" }}
          >
            Terms &amp; <span style={{ color: homeTheme.blueBright }}>Conditions</span>
          </h1>
          <p className="max-w-[58ch] text-base leading-[1.75]" style={{ color: homeTheme.textBody }}>
            These Terms govern access to and use of the Interval 360 Assessment platform, related
            assessments, reports, and services offered by Interval 360, Inc.
          </p>
        </div>
      </section>

      {/* Light content band */}
      <section className="py-16 md:py-24 page-gutter" style={{ background: homeTheme.sectionWhite }}>
        <div className="content-wrap grid lg:grid-cols-[220px_1fr] gap-12 xl:gap-20">
          <TermsTOC />
          <div className="min-w-0">
            {/* Meta block */}
            <div
              className="rounded-2xl border px-6 py-6 mb-12 grid gap-x-8 gap-y-4 sm:grid-cols-2"
              style={{ borderColor: homeTheme.lightRule, background: homeTheme.sectionPaper }}
            >
              {[
                ["Effective Date", "05/01/2026"],
                ["Company Name", "Interval 360, Inc."],
                ["Governing Law", "State of Arizona, USA"],
                ["Contact", "info@interval360.com"],
              ].map(([label, value]) => (
                <div key={label}>
                  <p
                    className="text-xs font-bold tracking-[0.16em] uppercase mb-1.5"
                    style={{ color: homeTheme.lightBody }}
                  >
                    {label}
                  </p>
                  <p className="text-base font-semibold" style={{ color: "#2c2f33" }}>
                    {value}
                  </p>
                </div>
              ))}
            </div>

            <P>
              These Terms and Conditions (&ldquo;Terms&rdquo;) govern access to and use of the 360 Assessment
              platform, related assessments, reports, and services (collectively, the &ldquo;Assessment&rdquo;
              or &ldquo;Platform&rdquo;) offered by Interval 360, Inc. (&ldquo;Company,&rdquo; &ldquo;we,&rdquo; &ldquo;us,&rdquo; or &ldquo;our&rdquo;).
            </P>
            <P>
              By purchasing, accessing, or using the Platform, you (&ldquo;Customer&rdquo;) agree to be bound
              by these Terms.
            </P>
            <P>
              If you are using the Platform on behalf of an organization, you represent and warrant
              that you have authority to bind that organization to these Terms.
            </P>

            <SectionHeading id="nature">1. Nature and Purpose of the Assessment</SectionHeading>
            <P>
              The Assessment is a leadership development and competency feedback tool designed to
              collect, summarize, and present multi-rater feedback for developmental purposes.
            </P>
            <P>The Assessment:</P>
            <Bullets
              items={[
                "Is not a psychological, psychiatric, or medical diagnostic instrument;",
                "Is not a psychometric test;",
                "Does not measure mental health conditions; and",
                "Is not intended to diagnose, treat, or prevent any medical or psychological condition.",
              ]}
            />
            <P>
              The Assessment is intended for professional development purposes. While Customers may
              choose to consider Assessment results as one input in broader talent or promotion
              discussions, Customer acknowledges that the Assessment is not designed, validated, or
              represented as a legally compliant employee selection procedure under federal or state
              employment laws.
            </P>
            <P>
              Customer assumes full responsibility for how Assessment results are used within its
              organization.
            </P>

            <SectionHeading id="customer-responsibilities">2. Customer Responsibilities</SectionHeading>
            <P>Customer agrees and represents that:</P>
            <NumberedList
              items={[
                <>
                  Customer has authority to: invite participants and raters; upload personal data,
                  including names and email addresses; and administer the Assessment within its
                  organization or to its clients.
                </>,
                <>
                  Customer is solely responsible for: administration of the Assessment;
                  communications to participants; compliance with all applicable employment laws;
                  interpretation and use of Assessment results; and any employment or promotion
                  decisions influenced by Assessment results.
                </>,
              ]}
            />
            <P>
              Company is not responsible for misuse, misinterpretation, or improper administration
              of the Assessment.
            </P>

            <SectionHeading id="data-privacy">3. Data Collection and Privacy</SectionHeading>

            <SubHeading>3.1 Data Collected</SubHeading>
            <P>The Platform may collect:</P>
            <Bullets
              items={[
                "Names;",
                "Email addresses;",
                "Demographic information;",
                "Quantitative responses;",
                "Open-text feedback; and",
                "Assessment-generated reports.",
              ]}
            />

            <SubHeading>3.2 Confidentiality of Individual Assessments</SubHeading>
            <P>
              Individual Assessment responses and reports will not be sold, disclosed, or provided
              to third parties except:
            </P>
            <Bullets
              items={[
                "To the Customer administering the Assessment;",
                "As required by law; or",
                "With express written consent of the individual.",
              ]}
            />

            <SubHeading>3.3 Anonymity</SubHeading>
            <P>
              Rater responses are presented in anonymized and aggregated format in accordance with
              Platform settings and minimum response thresholds.
            </P>
            <P>Customer acknowledges that anonymity may be affected by:</P>
            <Bullets
              items={[
                "Small rater groups;",
                "Voluntary disclosure by participants; or",
                "Organizational context.",
              ]}
            />
            <P>
              Company does not guarantee anonymity where Customer configures settings that undermine
              aggregation thresholds.
            </P>

            <SubHeading>3.4 Aggregated and Anonymized Data Use</SubHeading>
            <P>
              Customer agrees that Company may use anonymized and aggregated data derived from
              Assessments for:
            </P>
            <Bullets
              items={[
                "Research and analytics;",
                "Benchmarking;",
                "Industry insights;",
                "Product improvement; and",
                "Publication of anonymized trend data.",
              ]}
            />
            <P>Such aggregated data will never identify any individual or organization.</P>
            <P>
              Company will never sell or disclose individual Assessment reports or aggregated data
              from a single organization, business or corporate entity to any third party.
            </P>

            <SectionHeading id="intellectual-property">4. Intellectual Property</SectionHeading>
            <P>
              All rights, title, and interest in and to the Assessment, including but not limited
              to:
            </P>
            <Bullets
              items={[
                "Questions;",
                "Competency frameworks;",
                "Methodology;",
                "Algorithms;",
                "Scoring models;",
                "Reports;",
                "Content;",
                "Branding; and",
                "Software code;",
              ]}
            />
            <P>are and shall remain the exclusive property of Company.</P>
            <P>
              Customer is granted a limited, non-exclusive, non-transferable, non-sublicensable
              license to use the Assessment solely for internal business purposes.
            </P>
            <P>Customer shall not:</P>
            <Bullets
              items={[
                "Copy or reproduce Assessment questions;",
                "Reverse engineer scoring methodologies;",
                "Create derivative works;",
                "Resell or redistribute the Assessment;",
                "Use the Assessment content to create competing products;",
                "Extract content for training AI models or automated systems; or",
                "Share login credentials.",
              ]}
            />
            <P>Unauthorized use constitutes a material breach of these Terms.</P>

            <SectionHeading id="fees">5. Fees and Payment</SectionHeading>
            <P>The Assessment may be offered as:</P>
            <Bullets items={["One-time purchases; and/or", "Subscription-based access."]} />
            <P>All fees are non-refundable except at Company&apos;s sole discretion.</P>
            <P>
              Company reserves the right to modify pricing upon renewal of subscription terms.
            </P>

            <SectionHeading id="disclaimer">6. Disclaimer of Warranties</SectionHeading>
            <P>THE ASSESSMENT IS PROVIDED &ldquo;AS IS&rdquo; AND &ldquo;AS AVAILABLE.&rdquo;</P>
            <P>
              COMPANY DISCLAIMS ALL WARRANTIES, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO:
            </P>
            <Bullets
              items={[
                "MERCHANTABILITY;",
                "FITNESS FOR A PARTICULAR PURPOSE;",
                "NON-INFRINGEMENT; AND",
                "ACCURACY OR COMPLETENESS OF RESULTS.",
              ]}
            />
            <P>Company does not guarantee:</P>
            <Bullets
              items={[
                "Business outcomes;",
                "Leadership improvement;",
                "Employee performance changes;",
                "Promotion readiness; or",
                "Organizational impact.",
              ]}
            />

            <SectionHeading id="liability">7. Limitation of Liability</SectionHeading>
            <P>To the maximum extent permitted by law:</P>
            <P>
              Company&apos;s total liability arising out of or relating to the Assessment shall not
              exceed the total amount paid by Customer in the twelve (12) months preceding the
              claim.
            </P>
            <P>Company shall not be liable for:</P>
            <Bullets
              items={[
                "Indirect damages;",
                "Incidental damages;",
                "Consequential damages;",
                "Loss of profits;",
                "Loss of data;",
                "Employment-related claims; or",
                "Business interruption.",
              ]}
            />

            <SectionHeading id="indemnification">8. Indemnification</SectionHeading>
            <P>
              Customer agrees to indemnify, defend, and hold harmless Company and its officers,
              employees, contractors, and affiliates from and against any claims, damages,
              liabilities, losses, costs, or expenses arising out of or relating to:
            </P>
            <Bullets
              items={[
                "Customer's administration or use of the Assessment;",
                "Employment or promotion decisions based on Assessment results;",
                "Violation of employment laws; or",
                "Breach of these Terms.",
              ]}
            />

            <SectionHeading id="no-employment-advice">9. No Employment Advice</SectionHeading>
            <P>Company does not provide legal, HR compliance, or employment advice.</P>
            <P>
              Customer is solely responsible for ensuring that use of the Assessment complies with
              all applicable federal, state, and local employment laws.
            </P>

            <SectionHeading id="termination">10. Termination</SectionHeading>
            <P>
              Company may suspend or terminate access to the Platform for violation of these Terms.
            </P>
            <P>
              Upon termination, Customer&apos;s license to use the Assessment immediately ceases.
            </P>

            <SectionHeading id="governing-law">11. Governing Law and Dispute Resolution</SectionHeading>
            <P>
              These Terms shall be governed by and construed in accordance with the laws of the
              State of Arizona, USA, without regard to conflict of law principles.
            </P>
            <P>
              Any dispute arising out of or relating to these Terms or the Assessment shall be
              resolved exclusively through binding arbitration in the State of Arizona.
            </P>

            <SectionHeading id="modifications">12. Modifications</SectionHeading>
            <P>Company reserves the right to modify these Terms at any time.</P>
            <P>
              Updated Terms will become effective upon posting to the Company website or Platform.
            </P>
            <P>
              Continued use of the Assessment after changes are posted constitutes acceptance of
              the revised Terms.
            </P>

            <SectionHeading id="contact">13. Contact Information</SectionHeading>
            <P>For questions regarding these Terms, please contact:</P>
            <div
              className="rounded-2xl border px-6 py-5 mt-2"
              style={{ borderColor: homeTheme.lightRule, background: homeTheme.sectionPaper }}
            >
              <p className="text-base font-bold mb-1" style={{ color: "#2c2f33" }}>
                Interval 360, Inc.
              </p>
              <a
                href="mailto:info@interval360.com"
                className="text-base font-semibold underline underline-offset-2 transition-opacity hover:opacity-70"
                style={{ color: homeTheme.blue }}
              >
                info@interval360.com
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
