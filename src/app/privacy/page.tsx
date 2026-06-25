import { homeTheme } from "@/lib/homeTheme";
import { PrivacyTOC } from "./PrivacyTOC";

export const metadata = {
  alternates: {
    canonical: "/privacy",
  },
  title: "Privacy Policy — Interval 360",
  description:
    "How Interval 360, Inc. collects, uses, discloses, and safeguards personal information across our website, 360 Assessment platform, and related services.",
  openGraph: {
    title: "Privacy Policy — Interval 360",
    description:
      "How Interval 360, Inc. collects, uses, discloses, and safeguards personal information across our website, 360 Assessment platform, and related services.",
    images: "/interval360-og-image.png",
  },
  twitter: {
    title: "Privacy Policy — Interval 360",
    description:
      "How Interval 360, Inc. collects, uses, discloses, and safeguards personal information across our website, 360 Assessment platform, and related services.",
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
        <li
          key={i}
          className="flex items-start gap-3 text-base leading-[1.7]"
          style={{ color: "#3a3f47" }}
        >
          <span
            className="mt-[0.6rem] h-1.5 w-1.5 shrink-0 rounded-full"
            style={{ background: homeTheme.blue }}
            aria-hidden
          />
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
        <li
          key={i}
          className="flex items-start gap-3 text-base leading-[1.7]"
          style={{ color: "#3a3f47" }}
        >
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

export default function PrivacyPolicyPage() {
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
            Privacy <span style={{ color: homeTheme.blueBright }}>Policy</span>
          </h1>
          <p
            className="max-w-[58ch] text-base leading-[1.75]"
            style={{ color: homeTheme.textBody }}
          >
            Interval 360, Inc. respects your privacy and is committed to protecting the personal
            information collected through our website, 360 Assessment platform, and related
            services.
          </p>
        </div>
      </section>

      {/* Light content band */}
      <section className="py-16 md:py-24 page-gutter" style={{ background: homeTheme.sectionWhite }}>
        <div className="content-wrap grid lg:grid-cols-[220px_1fr] gap-12 xl:gap-20">
          <PrivacyTOC />
          <div className="min-w-0">
          {/* Meta block */}
          <div
            className="rounded-2xl border px-6 py-6 mb-12 grid gap-x-8 gap-y-4 sm:grid-cols-2"
            style={{ borderColor: homeTheme.lightRule, background: homeTheme.sectionPaper }}
          >
            {[
              ["Effective Date", "05/01/2026"],
              ["Company Name", "Interval 360, Inc."],
              ["Location", "Arizona, USA"],
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
            Interval 360, Inc. (“Company,” “we,” “us,” or “our”) respects your privacy and is
            committed to protecting the personal information collected through our website, 360
            Assessment platform, and related services (collectively, the “Platform”).
          </P>
          <P>
            This Privacy Policy explains how we collect, use, disclose, and safeguard personal
            information when individuals or organizations purchase, administer, participate in, or
            otherwise interact with assessments through our Platform.
          </P>

          <SectionHeading id="scope">1. Scope of This Policy</SectionHeading>
          <P>This Privacy Policy applies to:</P>
          <Bullets
            items={[
              "Website visitors;",
              "Customers who purchase assessments;",
              "Administrators who set up assessments;",
              "Individuals participating in assessments (“Participants”);",
              "Raters providing feedback; and",
              "Other users interacting with the Platform.",
            ]}
          />
          <P>
            When an organization administers assessments through the Platform, that organization
            acts as the primary decision-maker regarding the purpose and use of personal
            information. In those circumstances:
          </P>
          <Bullets
            items={[
              "The organization acts as the “Business” or “Controller” under applicable law; and",
              "Company acts as a “Service Provider” or “Processor” on behalf of the organization.",
            ]}
          />
          <P>
            Company processes personal information solely to provide and improve the Platform and
            related services.
          </P>

          <SectionHeading id="information-we-collect">2. Information We Collect</SectionHeading>
          <P>We may collect the following categories of personal information:</P>

          <SubHeading>2.1 Identifiers</SubHeading>
          <Bullets items={["Name;", "Email address;", "Job title; and", "Organization name."]} />

          <SubHeading>2.2 Professional Information</SubHeading>
          <Bullets
            items={["Role or position;", "Reporting relationships; and", "Organizational tenure."]}
          />

          <SubHeading>2.3 Demographic Information (Optional / If Provided by You)</SubHeading>
          <Bullets
            items={[
              "Gender;",
              "Department;",
              "Organizational level; and",
              "Other optional demographic categories.",
            ]}
          />

          <SubHeading>2.4 Assessment Responses</SubHeading>
          <Bullets
            items={[
              "Quantitative ratings;",
              "Written feedback and open-text responses; and",
              "Self-assessment responses.",
            ]}
          />

          <SubHeading>2.5 Technical and Usage Information</SubHeading>
          <Bullets
            items={[
              "IP address;",
              "Browser type;",
              "Device information;",
              "Website usage data; and",
              "Cookies and similar tracking technologies.",
            ]}
          />
          <P>We do not collect:</P>
          <Bullets
            items={[
              "Social Security numbers;",
              "Financial account information; or",
              "Medical or psychological diagnostic information.",
            ]}
          />
          <P>Payment information, if applicable, is processed by third-party payment providers.</P>

          <SectionHeading id="how-we-use">3. How We Use Personal Information</SectionHeading>
          <P>We use personal information to:</P>
          <Bullets
            items={[
              "Administer and deliver assessments;",
              "Generate individual and aggregated reports;",
              "Provide customer access to reports and dashboards;",
              "Maintain and improve Platform functionality;",
              "Provide customer support;",
              "Communicate service-related updates;",
              "Conduct analytics and research;",
              "Create anonymized benchmarking data; and",
              "Comply with legal obligations.",
            ]}
          />

          <SectionHeading id="aggregated-data">4. Aggregated and Anonymized Data</SectionHeading>
          <P>
            Company may create anonymized and aggregated datasets derived from assessment responses
            and usage data.
          </P>
          <P>Anonymized and aggregated data:</P>
          <Bullets
            items={[
              "Does not identify individuals;",
              "Does not identify specific organizations; and",
              "Cannot reasonably be used to re-identify any individual or organization.",
            ]}
          />
          <P>Company may use anonymized and aggregated data for:</P>
          <Bullets
            items={[
              "Benchmarking services;",
              "Industry comparisons;",
              "Research and analytics;",
              "Product development and improvement; and",
              "Publication of general insights and trend reports.",
            ]}
          />
          <P>
            Company does not sell or disclose identifiable individual assessment responses or
            reports or aggregated data from a single organization, business or corporate entity, to
            third parties.
          </P>

          <SectionHeading id="confidentiality">5. Confidentiality and Anonymity</SectionHeading>
          <P>
            Rater responses are presented in aggregated and anonymized format subject to Platform
            settings and minimum response thresholds.
          </P>
          <P>
            While the Platform is designed to support confidentiality and anonymity, anonymity may
            be affected by:
          </P>
          <Bullets
            items={[
              "Small rater groups;",
              "Voluntary disclosure by participants; or",
              "Organizational structure or context.",
            ]}
          />
          <P>Company cannot guarantee anonymity in all circumstances.</P>

          <SectionHeading id="data-sharing">6. Data Sharing and Disclosure</SectionHeading>
          <P>We may share personal information:</P>
          <NumberedList
            items={[
              "With the Customer administering the assessment;",
              "With service providers who assist in hosting, operating, or supporting the Platform;",
              "If required by law, subpoena, court order, or legal process;",
              "To protect the rights, safety, or security of Company, users, or others; or",
              "In connection with a merger, acquisition, financing, or sale of assets.",
            ]}
          />
          <P>
            Service providers are contractually required to protect personal information and use it
            only for authorized purposes.
          </P>
          <P>Company does not sell personal information.</P>

          <SectionHeading id="california-rights">
            7. California Privacy Rights (CCPA/CPRA)
          </SectionHeading>
          <P>
            If you are a California resident, you may have certain rights under the California
            Consumer Privacy Act (“CCPA”) and California Privacy Rights Act (“CPRA”), including the
            right to:
          </P>
          <Bullets
            items={[
              "Know what categories of personal information we collect;",
              "Request access to personal information;",
              "Request correction of inaccurate personal information;",
              "Request deletion of personal information;",
              "Opt out of the sale or sharing of personal information; and",
              "Limit use of sensitive personal information.",
            ]}
          />
          <P>
            Company does not sell personal information and does not use or disclose sensitive
            personal information for purposes requiring a right to limit under CPRA.
          </P>
          <P>Individuals exercising privacy rights will not be discriminated against.</P>
          <P>Privacy requests may be submitted to:</P>
          <P>
            <a
              href="mailto:info@interval360.com?subject=Privacy%20Request"
              className="font-semibold underline underline-offset-2 transition-opacity hover:opacity-70"
              style={{ color: homeTheme.blue }}
            >
              info@interval360.com
            </a>{" "}
            — Subject: “Privacy Request”
          </P>
          <P>
            If assessments are administered by an organization, individuals should first contact the
            organization administering the assessment.
          </P>

          <SectionHeading id="data-retention">8. Data Retention</SectionHeading>
          <P>We retain personal information:</P>
          <Bullets
            items={[
              "For as long as necessary to provide services;",
              "As required by contractual agreements with Customers;",
              "As necessary to comply with legal obligations;",
              "To resolve disputes; and",
              "To enforce agreements.",
            ]}
          />
          <P>Customers may request deletion of assessment data, subject to:</P>
          <Bullets
            items={[
              "Backup retention policies;",
              "Legal compliance requirements; and",
              "Legitimate business recordkeeping needs.",
            ]}
          />
          <P>Anonymized and aggregated data may be retained indefinitely.</P>

          <SectionHeading id="data-security">9. Data Security</SectionHeading>
          <P>
            We implement commercially reasonable administrative, technical, and physical safeguards
            designed to protect personal information.
          </P>
          <P>Security measures may include:</P>
          <Bullets
            items={[
              "Encrypted transmission using HTTPS;",
              "Role-based access controls;",
              "Restricted employee access;",
              "Secure hosting environments; and",
              "Monitoring and system maintenance practices.",
            ]}
          />
          <P>
            No method of transmission or storage is completely secure, and Company cannot guarantee
            absolute security.
          </P>

          <SectionHeading id="cookies">10. Cookies and Tracking Technologies</SectionHeading>
          <P>Our website and Platform may use cookies and similar technologies to:</P>
          <Bullets
            items={[
              "Maintain user sessions;",
              "Analyze website usage and performance;",
              "Improve functionality and user experience; and",
              "Support security and authentication.",
            ]}
          />
          <P>
            Users may disable cookies through browser settings, although some Platform functionality
            may be limited.
          </P>

          <SectionHeading id="childrens-privacy">11. Children’s Privacy</SectionHeading>
          <P>The Platform is not intended for individuals under the age of 18.</P>
          <P>Company does not knowingly collect personal information from children.</P>

          <SectionHeading id="international-users">12. International Users</SectionHeading>
          <P>The Platform is operated in the United States.</P>
          <P>
            By accessing or using the Platform, users consent to the transfer, storage, and
            processing of information in the United States.
          </P>

          <SectionHeading id="changes">13. Changes to This Privacy Policy</SectionHeading>
          <P>Company may update this Privacy Policy from time to time.</P>
          <P>
            The “Effective Date” at the top of this Privacy Policy reflects the latest revision
            date.
          </P>
          <P>
            Continued use of the Platform after updates are posted constitutes acceptance of the
            revised Privacy Policy.
          </P>

          <SectionHeading id="contact">14. Contact Information</SectionHeading>
          <P>For questions or requests regarding this Privacy Policy, please contact:</P>
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
