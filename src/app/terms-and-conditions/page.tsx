import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Terms & Conditions — The Skadi",
  description:
    "Read the Terms & Conditions that govern your access to and use of The Skadi website, AI Voice Agent platform, products, and services.",
};

const sections = [
  {
    num: "1",
    title: "Services",
    content: (
      <>
        <p>
          The Skadi provides AI-powered business automation services, including
          but not limited to:
        </p>
        <ul className="ml-5 mt-2 list-disc space-y-1">
          <li>AI Voice Agents</li>
          <li>AI Call Answering</li>
          <li>Lead Qualification</li>
          <li>Appointment Booking</li>
          <li>Customer Support Automation</li>
          <li>CRM Integrations</li>
          <li>Business Workflow Automation</li>
          <li>Call Routing</li>
          <li>AI Conversation Management</li>
        </ul>
        <p className="mt-3">
          The exact scope of services depends on the selected plan or proposal.
        </p>
      </>
    ),
  },
  {
    num: "2",
    title: "Eligibility",
    content: (
      <>
        <p>
          You must be at least 18 years old and legally capable of entering into
          a binding agreement to use our services.
        </p>
        <p className="mt-3">
          If you are using our services on behalf of a company or organization,
          you confirm that you have the authority to bind that entity to these
          Terms.
        </p>
      </>
    ),
  },
  {
    num: "3",
    title: "Account Responsibilities",
    content: (
      <>
        <p>You agree to:</p>
        <ul className="ml-5 mt-2 list-disc space-y-1">
          <li>Provide accurate information.</li>
          <li>Maintain the confidentiality of your account credentials.</li>
          <li>Notify us immediately of any unauthorized use.</li>
          <li>Be responsible for all activities under your account.</li>
        </ul>
      </>
    ),
  },
  {
    num: "4",
    title: "AI Service Disclaimer",
    content: (
      <>
        <p>
          Our AI Voice Agent is designed to automate business communications and
          improve operational efficiency.
        </p>
        <p className="mt-3">
          While we continuously improve our AI models, you acknowledge that:
        </p>
        <ul className="ml-5 mt-2 list-disc space-y-1">
          <li>
            AI-generated responses may occasionally be inaccurate or incomplete.
          </li>
          <li>
            AI decisions should not be considered legal, financial, medical, or
            professional advice.
          </li>
          <li>
            You remain responsible for reviewing important customer interactions
            where necessary.
          </li>
          <li>
            Service performance may vary depending on your data, integrations,
            and third-party systems.
          </li>
        </ul>
      </>
    ),
  },
  {
    num: "5",
    title: "Customer Responsibilities",
    content: (
      <>
        <p>You agree to:</p>
        <ul className="ml-5 mt-2 list-disc space-y-1">
          <li>Use the services only for lawful business purposes.</li>
          <li>
            Obtain any legally required consent before recording or processing
            calls.
          </li>
          <li>
            Ensure that information provided to the AI system is accurate.
          </li>
          <li>
            Maintain compliance with applicable privacy and telecommunications
            laws.
          </li>
          <li>
            Not use the services for fraudulent, abusive, or illegal activities.
          </li>
        </ul>
      </>
    ),
  },
  {
    num: "6",
    title: "Subscription, Fees & Payments",
    content: (
      <>
        <p>Certain services require payment.</p>
        <p className="mt-3">By subscribing, you agree to:</p>
        <ul className="ml-5 mt-2 list-disc space-y-1">
          <li>Pay all applicable fees.</li>
          <li>Provide valid payment information.</li>
          <li>Authorize recurring billing where applicable.</li>
        </ul>
        <p className="mt-3">Unless otherwise agreed in writing:</p>
        <ul className="ml-5 mt-2 list-disc space-y-1">
          <li>Subscription fees are billed in advance.</li>
          <li>Fees are non-refundable except where required by law.</li>
          <li>
            Failure to pay may result in suspension or termination of services.
          </li>
        </ul>
      </>
    ),
  },
  {
    num: "7",
    title: "Free Trials & Demonstrations",
    content: (
      <p>
        Any free demo, trial, or promotional offer may be modified or
        discontinued at our discretion without prior notice.
      </p>
    ),
  },
  {
    num: "8",
    title: "Intellectual Property",
    content: (
      <>
        <p>
          All website content, software, AI models, branding, graphics, logos,
          documentation, and technology remain the exclusive property of The
          Skadi or its licensors.
        </p>
        <p className="mt-3">You may not:</p>
        <ul className="ml-5 mt-2 list-disc space-y-1">
          <li>Copy</li>
          <li>Modify</li>
          <li>Reverse engineer</li>
          <li>Resell</li>
          <li>Redistribute</li>
          <li>License</li>
          <li>Create derivative works</li>
        </ul>
        <p className="mt-3">without our written permission.</p>
      </>
    ),
  },
  {
    num: "9",
    title: "Acceptable Use",
    content: (
      <>
        <p>You agree not to use our services to:</p>
        <ul className="ml-5 mt-2 list-disc space-y-1">
          <li>Violate any law or regulation.</li>
          <li>Harass, threaten, or impersonate others.</li>
          <li>Transmit malicious software or harmful code.</li>
          <li>Send spam or unauthorized marketing.</li>
          <li>Interfere with the operation or security of our systems.</li>
          <li>
            Misrepresent AI-generated communications as being from another
            person or organization.
          </li>
        </ul>
        <p className="mt-3">
          We reserve the right to suspend or terminate accounts that violate
          these Terms.
        </p>
      </>
    ),
  },
  {
    num: "10",
    title: "Third-Party Services",
    content: (
      <>
        <p>
          Our services may integrate with third-party platforms, including CRM
          systems, calendar applications, telephony providers, analytics tools,
          or cloud services.
        </p>
        <p className="mt-3">We are not responsible for:</p>
        <ul className="ml-5 mt-2 list-disc space-y-1">
          <li>Third-party outages</li>
          <li>Changes in third-party APIs</li>
          <li>Third-party security practices</li>
          <li>Data processing by external providers</li>
        </ul>
        <p className="mt-3">
          Your use of third-party services is subject to their own terms and
          privacy policies.
        </p>
      </>
    ),
  },
  {
    num: "11",
    title: "Availability",
    content: (
      <p>
        We strive to maintain reliable service but do not guarantee
        uninterrupted or error-free availability. Maintenance, updates,
        technical issues, or events beyond our reasonable control may
        temporarily affect service availability.
      </p>
    ),
  },
  {
    num: "12",
    title: "Data & Privacy",
    content: (
      <p>
        Your use of our services is also governed by our{" "}
        <Link
          href="/privacy-policy"
          className="text-[#6e964f] underline underline-offset-2 hover:text-[#88b862]"
        >
          Privacy Policy
        </Link>
        . By using our services, you consent to the collection and processing of
        information as described in our Privacy Policy.
      </p>
    ),
  },
  {
    num: "13",
    title: "Limitation of Liability",
    content: (
      <>
        <p>
          To the maximum extent permitted by law, The Skadi shall not be liable
          for:
        </p>
        <ul className="ml-5 mt-2 list-disc space-y-1">
          <li>Indirect or consequential damages</li>
          <li>Loss of revenue or profits</li>
          <li>Loss of business opportunities</li>
          <li>Loss of goodwill</li>
          <li>Loss of data</li>
          <li>Business interruption</li>
          <li>Decisions made based on AI-generated responses</li>
        </ul>
        <p className="mt-3">
          Our total liability for any claim shall not exceed the amount paid by
          you for the services during the three (3) months preceding the claim.
        </p>
      </>
    ),
  },
  {
    num: "14",
    title: "Indemnification",
    content: (
      <>
        <p>
          You agree to indemnify and hold harmless The Skadi, its directors,
          employees, affiliates, and partners from any claims, liabilities,
          damages, or expenses arising from:
        </p>
        <ul className="ml-5 mt-2 list-disc space-y-1">
          <li>Your misuse of the services.</li>
          <li>Your violation of these Terms.</li>
          <li>Your violation of applicable laws or third-party rights.</li>
        </ul>
      </>
    ),
  },
  {
    num: "15",
    title: "Suspension & Termination",
    content: (
      <>
        <p>
          We may suspend or terminate access to our services if:
        </p>
        <ul className="ml-5 mt-2 list-disc space-y-1">
          <li>You breach these Terms.</li>
          <li>Payment is overdue.</li>
          <li>Your use poses a security or legal risk.</li>
          <li>Required by law.</li>
        </ul>
        <p className="mt-3">
          You may discontinue using our services at any time, subject to any
          applicable contractual commitments.
        </p>
      </>
    ),
  },
  {
    num: "16",
    title: "Modifications",
    content: (
      <p>
        We may modify these Terms from time to time. Updated versions will be
        posted on our website with a revised Effective Date. Continued use of
        the services after changes become effective constitutes acceptance of the
        revised Terms.
      </p>
    ),
  },
  {
    num: "17",
    title: "Governing Law",
    content: (
      <>
        <p>
          These Terms shall be governed by and interpreted in accordance with
          the laws of India, without regard to conflict of law principles.
        </p>
        <p className="mt-3">
          Any disputes arising under these Terms shall be subject to the
          exclusive jurisdiction of the competent courts in Bengaluru,
          Karnataka, India.
        </p>
      </>
    ),
  },
];

export default function TermsAndConditionsPage() {
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
            Terms &amp; Conditions
          </h1>
          <p className="mt-4 text-white/45">Effective Date: July 10, 2026</p>
        </div>

        {/* Intro */}
        <section className="mb-3 rounded-2xl border border-white/[0.06] bg-white/[0.02] p-6 sm:p-8">
          <div className="text-[15px] leading-relaxed text-white/60">
            <p>
              Welcome to{" "}
              <strong className="text-white">The Skadi</strong> ("The Skadi",
              "Company", "we", "our", or "us"). These Terms &amp; Conditions
              ("Terms") govern your access to and use of our website, AI Voice
              Agent platform, products, and services available at{" "}
              <a
                href="https://theskadi.com"
                className="text-[#6e964f] underline underline-offset-2 hover:text-[#88b862]"
              >
                https://theskadi.com
              </a>
              .
            </p>
            <p className="mt-3">
              By accessing our website or using our services, you agree to be
              bound by these Terms.
            </p>
          </div>
        </section>

        {/* Numbered sections */}
        <div className="space-y-3">
          {sections.map((s) => (
            <section
              key={s.num}
              className="rounded-2xl border border-white/[0.06] bg-white/[0.02] p-6 sm:p-8"
            >
              <div className="mb-4 flex items-center gap-3">
                <span className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full bg-[#6e964f]/15 text-sm font-bold text-[#6e964f]">
                  {s.num}
                </span>
                <h2 className="text-xl font-semibold text-white sm:text-2xl">
                  {s.title}
                </h2>
              </div>
              <div className="text-[15px] leading-relaxed text-white/60">
                {s.content}
              </div>
            </section>
          ))}

          {/* Section 18 — Contact (special card) */}
          <section className="rounded-2xl border border-white/[0.06] bg-white/[0.02] p-6 sm:p-8">
            <div className="mb-4 flex items-center gap-3">
              <span className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full bg-[#6e964f]/15 text-sm font-bold text-[#6e964f]">
                18
              </span>
              <h2 className="text-xl font-semibold text-white sm:text-2xl">
                Contact Information
              </h2>
            </div>
            <div className="text-[15px] leading-relaxed text-white/60">
              <p>
                If you have any questions regarding these Terms &amp; Conditions,
                please contact us:
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
            </div>
          </section>
        </div>
      </main>

      {/* Footer strip */}
      <footer className="border-t border-white/[0.06] px-6 py-8 text-center text-sm text-white/30">
        © {new Date().getFullYear()} Skadi. All Rights Reserved. ·{" "}
        <Link
          href="/privacy-policy"
          className="transition-colors hover:text-[#6e964f]"
        >
          Privacy Policy
        </Link>
      </footer>
    </div>
  );
}
