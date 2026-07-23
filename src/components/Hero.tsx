"use client";

import Image from "next/image";
import Link from "next/link";
// import { useState } from "react";
import SectionAurora from "@/components/SectionAurora";
import HeroReportCard from "@/components/HeroReportCard";

const benefits = [
  "Zero missed opportunities, even after hours",
  "Only qualified leads land on your calendar",
  "Every call scored and tracked, automatically",
];

function HeroAurora() {
  return <SectionAurora primaryTop="46%" secondaryTop="52%" />;
}

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

export default function Hero() {
  // const [deckMessage, setDeckMessage] = useState(false);

  return (
    <section
      id="home"
      className="relative overflow-hidden bg-black pb-0 pt-[68px]"
    >
      <HeroAurora />

      <div className="container-main relative z-[2]">
        <div className="flex w-full flex-col items-center justify-center pt-10 pb-0 md:pb-10 lg:py-16">
          <div className="flex w-full flex-col items-stretch gap-10 md:flex-row md:items-stretch lg:gap-12 xl:gap-16">
            {/* Left — copy + CTAs */}
            <div className="flex min-w-0 flex-[1.15] flex-col justify-center text-left">
              <div className="hero-eyebrow self-start">
                <Image
                  src="/images/Vector green.svg"
                  alt=""
                  width={11}
                  height={11}
                  className="h-[11px] w-[11px] shrink-0"
                  aria-hidden
                />
                AI Voice Agent for Growing Businesses
              </div>

              <h1 className="mt-6 text-[32px] font-medium leading-[1.15] tracking-[-1px] sm:text-[40px] md:text-[48px] lg:text-[56px] xl:text-[64px]">
                Every Call{" "}
                <span className="serif-italic hero-headline-accent">Answered.</span>
                <br />
                Every Lead{" "}
                <span className="serif-italic hero-headline-accent">Booked.</span>
              </h1>

              <p className="mt-5 max-w-[520px] text-[15px] leading-relaxed text-skadi-muted sm:text-base">
                Skadi&apos;s AI voice agent picks up 24/7, qualifies the caller,
                and puts them straight on your calendar — no missed revenue, no
                manual follow-up.
              </p>

              <ul className="mt-7 flex flex-col gap-3">
                {benefits.map((b) => (
                  <li
                    key={b}
                    className="flex items-start gap-2.5 text-[14px] text-skadi-faint sm:text-[15px]"
                  >
                    <TickIcon />
                    {b}
                  </li>
                ))}
              </ul>

              <div className="mt-9 flex flex-wrap items-center gap-3">
                <Link href="/demo" className="btn-demo">
                  Book a Demo
                </Link>
              </div>
            </div>

            {/* Right — industry report card */}
            <div className="w-full shrink-0 md:max-w-[340px] lg:max-w-[420px] xl:max-w-[460px]">
              <HeroReportCard />
            </div>
          </div>
        </div>

        {/* <div className="relative mx-auto mt-4 max-w-6xl lg:mt-8">
          <div className="relative overflow-hidden rounded-3xl border border-white/10 shadow-2xl shadow-black/40">
            <Image
              src="/images/v139_627.png"
              alt="Skadi Admin Overview dashboard"
              width={1400}
              height={800}
              className="w-full"
              priority
            />
          </div>
        </div> */}
      </div>
    </section>
  );
}
