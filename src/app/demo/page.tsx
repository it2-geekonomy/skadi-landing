import Image from "next/image";
import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import DemoRequestForm from "@/components/DemoRequestForm";
import { demoTestimonials } from "@/data/testimonials";

export const metadata: Metadata = {
  title: "Book a Demo — Skadi",
  description:
    "See Skadi live in 15 minutes. No pitch decks — a live walkthrough for your industry.",
};

const benefits = [
  "A live 15-minute walkthrough tailored to your calls",
  "Honest feedback on fit for HVAC, plumbing & field service",
  "Clear setup plan — live in as little as 48 hours",
];

function TickIcon() {
  return (
    <svg viewBox="0 0 16 16" fill="none" className="mt-0.5 h-4 w-4 shrink-0">
      <circle cx="8" cy="8" r="8" fill="#6e964f" />
      <path
        d="M4.5 8l2.5 2.5 4.5-5"
        stroke="white"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export default function DemoPage() {
  return (
    <main className="min-h-screen bg-skadi-bg">
      <Navbar />

      <section className="relative overflow-hidden bg-black pb-16 pt-[100px] sm:pb-24 sm:pt-[120px]">
        <div
          className="pointer-events-none absolute inset-x-0 top-0 h-[50%]"
          style={{
            background:
              "radial-gradient(ellipse 70% 60% at 50% 0%, rgba(110,150,79,0.14) 0%, transparent 70%)",
          }}
          aria-hidden
        />

        <div className="container-main relative z-[1]">
          <div className="flex flex-col gap-12 lg:flex-row lg:items-start lg:gap-14 xl:gap-20">
            {/* Left — value prop */}
            <div className="min-w-0 flex-1">
              <div className="badge">
                <span className="badge-dot" />
                Book a Free Demo
              </div>
              <h1 className="mt-5 text-[32px] font-normal leading-tight tracking-[-1px] sm:text-[42px] lg:text-[48px]">
                See Skadi live in{" "}
                <span className="serif-italic gradient-serif">15 minutes.</span>
              </h1>
              <p className="mt-4 max-w-[480px] text-[15px] leading-relaxed text-skadi-muted sm:text-base">
                No pitch decks. No slides. We&apos;ll show you Skadi handling
                real calls for businesses in your industry, then map a setup plan
                for yours.
              </p>
              <ul className="mt-8 flex flex-col gap-3.5">
                {benefits.map((b) => (
                  <li
                    key={b}
                    className="flex items-start gap-3 text-[15px] font-light text-skadi-muted"
                  >
                    <TickIcon />
                    {b}
                  </li>
                ))}
              </ul>
            </div>

            {/* Right — form */}
            <div className="w-full shrink-0 lg:max-w-[480px]">
              <DemoRequestForm />
            </div>
          </div>

          {/* Testimonials */}
          <div className="mt-16 border-t border-white/[0.08] pt-14 sm:mt-20">
            <p className="mb-8 text-center text-sm uppercase tracking-wider text-skadi-muted">
              What customers say
            </p>
            <div className="grid gap-5 md:grid-cols-3">
              {demoTestimonials.map((t) => (
                <blockquote
                  key={t.name}
                  className="rounded-2xl border border-[#6e964f]/30 bg-[#0c120a] p-6 text-left"
                >
                  <p className="text-[15px] leading-relaxed text-white/80">
                    &ldquo;{t.quote.length > 180 ? `${t.quote.slice(0, 177)}…` : t.quote}&rdquo;
                  </p>
                  <div className="mt-5 flex items-center gap-3">
                    <div className="h-10 w-10 shrink-0 overflow-hidden rounded-full">
                      <Image
                        src={t.avatar}
                        alt={t.name}
                        width={40}
                        height={40}
                        className="h-full w-full object-cover"
                      />
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-white">{t.name}</p>
                      <p className="text-xs text-skadi-muted">{t.company}</p>
                    </div>
                  </div>
                </blockquote>
              ))}
            </div>
          </div>

          {/* Calendly embed placeholder — add when marketing provides the URL */}
          {/* <div id="scheduler" className="mt-16">…</div> */}
        </div>
      </section>
    </main>
  );
}
