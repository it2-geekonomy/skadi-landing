import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Privacy Policy — The Skadi",
  description:
    "Learn how The Skadi collects, uses, and protects your personal information when you visit our website or use our AI Voice Agent services.",
};

export default function PrivacyPolicyPage() {
  return (
    <div
      className="min-h-screen"
      style={{
        background:
          "linear-gradient(180deg, rgba(10,15,9,1) 0%, rgba(6,10,6,1) 100%)",
      }}
    >
      {/* Nav bar */}
      <header className="border-b border-white/[0.06] px-6 py-5">
        <div className="mx-auto max-w-5xl">
          <Link href="/" className="inline-block">
            <Image
              src="/images/Group.png"
              alt="Skadi"
              width={110}
              height={40}
              className="h-9 w-auto brightness-0 invert"
            />
          </Link>
        </div>
      </header>

      {/* Content */}
      <main className="mx-auto max-w-5xl px-6 py-16 sm:py-20">
        {/* Back link */}
        <Link
          href="/"
          className="mb-10 inline-flex items-center gap-2 text-sm text-white/40 transition-colors hover:text-[#6e964f]"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-4 w-4"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M15 19l-7-7 7-7"
            />
          </svg>
          Back to Home
        </Link>

        {/* Header */}
        <div className="mb-5 border-b border-white/[0.07] pb-5">
          <div className="mb-4 inline-block rounded-full border border-[#6e964f]/30 bg-[#6e964f]/10 px-4 py-1 text-xs font-semibold uppercase tracking-widest text-[#6e964f]">
            Legal
          </div>
          <h1 className="text-4xl font-bold text-white sm:text-5xl">
            Privacy Policy
          </h1>
          <p className="mt-4 text-white/45">Effective Date: July 10, 2026</p>
        </div>

        {/* Body */}
        <div className="space-y-3">
          <Section>
            <p>
              Welcome to <strong className="text-white">The Skadi</strong>{" "}
              ("Company", "we", "our", or "us"). We value your privacy and are
              committed to protecting your personal information. This Privacy
              Policy explains how we collect, use, disclose, and safeguard your
              information when you visit{" "}
              <a
                href="https://theskadi.com"
                className="text-[#6e964f] underline underline-offset-2 hover:text-[#88b862]"
              >
                https://theskadi.com
              </a>
              , submit an enquiry, or interact with our advertisements.
            </p>
            <p className="mt-3">
              By using our website, you agree to the practices described in this
              Privacy Policy.
            </p>
          </Section>

          <Section title="Information We Collect">
            <SubHeading>Personal Information</SubHeading>
            <ul className="ml-5 mt-2 list-disc space-y-1">
              <li>Full Name</li>
              <li>Email Address</li>
              <li>Phone Number</li>
              <li>Company Name</li>
              <li>Business Information</li>
              <li>Service Requirements</li>
              <li>Any information you voluntarily submit through forms or email.</li>
            </ul>

            <SubHeading>Automatically Collected Information</SubHeading>
            <p>When you visit our website, we may automatically collect:</p>
            <ul className="ml-5 mt-2 list-disc space-y-1">
              <li>IP Address</li>
              <li>Browser Type</li>
              <li>Device Information</li>
              <li>Operating System</li>
              <li>Pages Visited</li>
              <li>Time Spent on Website</li>
              <li>Referral URLs</li>
              <li>Clickstream Data</li>
              <li>Cookie Identifiers</li>
            </ul>
          </Section>

          <Section title="How We Use Your Information">
            <p>We use your information to:</p>
            <ul className="ml-5 mt-2 list-disc space-y-1">
              <li>Respond to enquiries</li>
              <li>Provide consultations and quotations</li>
              <li>Deliver requested services</li>
              <li>Improve our website and customer experience</li>
              <li>Schedule meetings or calls</li>
              <li>Send service updates</li>
              <li>Send marketing communications (where permitted by law)</li>
              <li>Measure advertising performance</li>
              <li>Prevent fraud and maintain website security</li>
              <li>Comply with legal obligations</li>
            </ul>
          </Section>

          <Section title="Google Ads and Advertising">
            <p>We use Google Ads to advertise our services.</p>
            <p className="mt-3">
              Google may use cookies and similar technologies to:
            </p>
            <ul className="ml-5 mt-2 list-disc space-y-1">
              <li>Measure conversions</li>
              <li>Improve advertising performance</li>
              <li>Show personalized advertisements</li>
              <li>Display remarketing advertisements to previous visitors</li>
              <li>Understand user interactions with our website</li>
            </ul>
            <p className="mt-3">Google may collect information such as:</p>
            <ul className="ml-5 mt-2 list-disc space-y-1">
              <li>Device identifiers</li>
              <li>Browser information</li>
              <li>IP address</li>
              <li>Website interactions</li>
              <li>Conversion events</li>
            </ul>
            <p className="mt-3">
              You can manage your advertising preferences by visiting{" "}
              <a
                href="https://adssettings.google.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#6e964f] underline underline-offset-2 hover:text-[#88b862]"
              >
                Google&apos;s Ads Settings
              </a>
              .
            </p>
          </Section>

          <Section title="Google Analytics">
            <p>
              We use Google Analytics to understand how visitors use our
              website.
            </p>
            <p className="mt-3">
              Google Analytics collects information including:
            </p>
            <ul className="ml-5 mt-2 list-disc space-y-1">
              <li>Pages visited</li>
              <li>Session duration</li>
              <li>Device type</li>
              <li>Geographic location (approximate)</li>
              <li>Browser information</li>
              <li>Traffic source</li>
            </ul>
            <p className="mt-3">
              This information is used only to improve our website and services.
            </p>
          </Section>

          <Section title="Cookies">
            <p>Our website uses cookies and similar technologies to:</p>
            <ul className="ml-5 mt-2 list-disc space-y-1">
              <li>Enable website functionality</li>
              <li>Remember user preferences</li>
              <li>Measure website performance</li>
              <li>Analyze visitor behaviour</li>
              <li>Improve advertising campaigns</li>
              <li>Deliver relevant advertisements</li>
            </ul>
            <p className="mt-3">
              You may disable cookies through your browser settings. Some
              website features may not function correctly if cookies are
              disabled.
            </p>
          </Section>

          <Section title="Lead Forms">
            <p>
              When you submit an enquiry through our website or Google Ads Lead
              Forms, we may use your information to:
            </p>
            <ul className="ml-5 mt-2 list-disc space-y-1">
              <li>Contact you regarding your enquiry</li>
              <li>Schedule consultations</li>
              <li>Provide quotations</li>
              <li>Deliver requested information</li>
              <li>Improve our customer service</li>
            </ul>
            <p className="mt-4 font-semibold text-white">
              We do not sell your personal information.
            </p>
          </Section>

          <Section title="Sharing of Information">
            <p>
              We may share your information with trusted third-party service
              providers who assist in operating our business, including:
            </p>
            <ul className="ml-5 mt-2 list-disc space-y-1">
              <li>Google</li>
              <li>Website hosting providers</li>
              <li>CRM platforms</li>
              <li>Email service providers</li>
              <li>Analytics providers</li>
              <li>Marketing automation tools</li>
            </ul>
            <p className="mt-3">
              These providers are required to protect your information and use
              it only for the services they provide to us.
            </p>
            <p className="mt-3">
              We may also disclose information where required by law or to
              protect our legal rights.
            </p>
          </Section>

          <Section title="Data Security">
            <p>
              We implement appropriate administrative, technical, and
              organizational safeguards to protect your personal information
              against unauthorized access, disclosure, alteration, or
              destruction.
            </p>
            <p className="mt-3">
              While we strive to protect your information, no method of internet
              transmission or electronic storage is completely secure.
            </p>
          </Section>

          <Section title="Data Retention">
            <p>
              We retain personal information only for as long as necessary to:
            </p>
            <ul className="ml-5 mt-2 list-disc space-y-1">
              <li>Respond to enquiries</li>
              <li>Provide services</li>
              <li>Meet legal obligations</li>
              <li>Resolve disputes</li>
              <li>Maintain business records</li>
            </ul>
            <p className="mt-3">
              When information is no longer required, it will be securely
              deleted or anonymized.
            </p>
          </Section>

          <Section title="Your Privacy Rights">
            <p>Depending on applicable laws, you may have the right to:</p>
            <ul className="ml-5 mt-2 list-disc space-y-1">
              <li>Access your personal information</li>
              <li>Correct inaccurate information</li>
              <li>Request deletion of your information</li>
              <li>Withdraw consent</li>
              <li>Object to certain processing activities</li>
              <li>Request a copy of your personal data</li>
            </ul>
            <p className="mt-3">
              To exercise these rights, please contact us using the details
              below.
            </p>
          </Section>

          <Section title="Third-Party Websites">
            <p>
              Our website may contain links to third-party websites. We are not
              responsible for the privacy practices or content of those
              websites. We encourage you to review their privacy policies before
              sharing personal information.
            </p>
          </Section>

          <Section title="Children's Privacy">
            <p>
              Our website and services are intended for individuals aged 18
              years and above. We do not knowingly collect personal information
              from children.
            </p>
          </Section>

          <Section title="Changes to This Privacy Policy">
            <p>
              We may update this Privacy Policy from time to time to reflect
              changes in our business practices or legal requirements. Any
              updates will be posted on this page with a revised Effective Date.
            </p>
          </Section>

          <Section title="Contact Us">
            <p>
              If you have any questions regarding this Privacy Policy or how
              your personal information is handled, please contact us:
            </p>
            <div className="mt-4 rounded-xl border border-white/[0.08] bg-white/[0.03] p-6">
              <p className="font-semibold text-white">The Skadi</p>
              <p className="mt-1">
                Website:{" "}
                <a
                  href="https://theskadi.com"
                  className="text-[#6e964f] underline underline-offset-2 hover:text-[#88b862]"
                >
                  https://theskadi.com
                </a>
              </p>
              <p className="mt-1">
                Email:{" "}
                <a
                  href="mailto:connect@theskadi.com"
                  className="text-[#6e964f] underline underline-offset-2 hover:text-[#88b862]"
                >
                  connect@theskadi.com
                </a>
              </p>
            </div>
          </Section>
        </div>
      </main>

      {/* Footer strip */}
      <footer className="border-t border-white/[0.06] px-6 py-8 text-center text-sm text-white/30">
        © {new Date().getFullYear()} Skadi. All Rights Reserved. ·{" "}
        <Link
          href="/terms-and-conditions"
          className="transition-colors hover:text-[#6e964f]"
        >
          Terms &amp; Conditions
        </Link>
      </footer>
    </div>
  );
}

/* ─── Sub-components ─── */

function Section({
  title,
  children,
}: {
  title?: string;
  children: React.ReactNode;
}) {
  return (
    <section className="rounded-2xl border border-white/[0.06] bg-white/[0.02] p-6 sm:p-8">
      {title && (
        <h2 className="mb-4 text-xl font-semibold text-white sm:text-2xl">
          {title}
        </h2>
      )}
      <div className="text-[15px] leading-relaxed text-white/60">{children}</div>
    </section>
  );
}

function SubHeading({ children }: { children: React.ReactNode }) {
  return (
    <h3 className="mb-2 mt-5 text-[15px] font-semibold text-white/85 first:mt-0">
      {children}
    </h3>
  );
}
