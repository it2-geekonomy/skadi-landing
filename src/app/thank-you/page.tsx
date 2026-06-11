import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import { MetaPixelLead } from "@/components/MetaPixelLead";

export const metadata: Metadata = {
  title: "Thank You — Skadi",
  description:
    "We've received your demo request and will be in touch within one business day.",
};

export default function ThankYouPage() {
  return (
    <>
      <MetaPixelLead />

      <main className="flex min-h-screen flex-col items-center justify-center bg-[#080e07] px-6 py-10 text-center">
        <Link href="/" className="mb-12 inline-block">
          <Image
            src="/images/Skadi Logo.svg"
            alt="Skadi"
            width={90}
            height={33}
            className="h-8 w-auto"
            priority
          />
        </Link>

        <div className="mb-7 flex h-16 w-16 items-center justify-center rounded-full border border-[#6e964f]/30 bg-[#6e964f]/10">
          <svg
            viewBox="0 0 26 26"
            className="h-[26px] w-[26px] stroke-[#6e964f]"
            fill="none"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
            aria-hidden
          >
            <polyline points="4,13 10,19 22,7" />
          </svg>
        </div>

        <h1 className="text-[clamp(28px,6vw,42px)] font-semibold tracking-[-0.02em] text-white">
          Thank you!
        </h1>
        <p className="mx-auto mt-3.5 max-w-[360px] text-base leading-relaxed text-skadi-muted">
          We&apos;ve received your demo request and will be in touch within one
          business day.
        </p>

        <Link
          href="/"
          className="btn-demo mt-9 inline-block px-7 py-3 text-sm font-semibold"
        >
          Back to Home
        </Link>
      </main>
    </>
  );
}
