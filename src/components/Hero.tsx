"use client";

import Image from "next/image";
import Link from "next/link";
// import { useState } from "react";
import SectionAurora from "@/components/SectionAurora";
import HeroReportCard from "@/components/HeroReportCard";

const tinyStars = Array.from({ length: 72 }, (_, i) => ({
  top: `${((i * 17 + 11) % 94) + 2}%`,
  left: `${((i * 29 + 7) % 97) + 1}%`,
  size: i % 4 === 0 ? 2 : 1,
  opacity: 0.15 + ((i * 13) % 7) * 0.1,
}));

const twinkleStars = [
  { top: "18%", left: "76%", size: 14 },
  { top: "34%", left: "20%", size: 20 },
  { top: "20%", left: "58%", size: 14 },
  { top: "20%", left: "7%", size: 14 },
  { top: "16%", left: "73%", size: 14 },
  { top: "26%", left: "40%", size: 12 },
  { top: "51%", left: "66%", size: 12 },
  { top: "50%", left: "1%", size: 12 },
];

const mediumStars = [
  { top: "29%", left: "30%", size: 6, opacity: 1 },
  { top: "39%", left: "13%", size: 6, opacity: 1 },
  { top: "16%", left: "15%", size: 6, opacity: 1 },
  { top: "35%", left: "80%", size: 6, opacity: 0.4 },
  { top: "47%", left: "20%", size: 6, opacity: 0.4 },
  { top: "26%", left: "82%", size: 6, opacity: 1 },
  { top: "29%", left: "71%", size: 6, opacity: 1 },
  { top: "16%", left: "26%", size: 14, opacity: 0.2 },
  { top: "75%", left: "11%", size: 14, opacity: 0.54 },
];

const benefits = [
  "Zero missed opportunities, even after hours",
  "Only qualified leads land on your calendar",
  "Every call scored and tracked, automatically",
];

function VectorStar({
  top,
  left,
  size,
  opacity = 1,
}: {
  top: string;
  left: string;
  size: number;
  opacity?: number;
}) {
  return (
    <div
      className="absolute"
      style={{ top, left, width: size, height: size, opacity }}
      aria-hidden="true"
    >
      <Image
        src="/images/Vector.svg"
        alt=""
        width={size}
        height={size}
        className="h-full w-full"
      />
    </div>
  );
}

function HeroAurora() {
  return <SectionAurora primaryTop="46%" secondaryTop="52%" />;
}

function HeroStars() {
  return (
    <div className="pointer-events-none absolute inset-0 z-[1]" aria-hidden="true">
      {tinyStars.map((star, i) => (
        <div
          key={`tiny-${i}`}
          className="absolute rounded-full bg-white"
          style={{
            top: star.top,
            left: star.left,
            width: star.size,
            height: star.size,
            opacity: star.opacity,
          }}
        />
      ))}

      {mediumStars.map((star, i) => (
        <VectorStar key={`med-${i}`} {...star} />
      ))}

      {twinkleStars.map((star, i) => (
        <VectorStar key={`twinkle-${i}`} {...star} />
      ))}
    </div>
  );
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
      className="relative overflow-hidden bg-black pb-16 pt-[68px] lg:pb-24"
    >
      <HeroAurora />
      <HeroStars />

      <div className="container-main relative z-[2]">
        <div className="flex min-h-[calc(100vh-68px)] w-full flex-col items-center justify-center py-10 lg:py-16">
          <div className="flex w-full flex-col items-stretch gap-10 lg:flex-row lg:items-stretch lg:gap-12 xl:gap-16">
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

              <h1 className="mt-6 text-[36px] font-medium leading-[1.15] tracking-[-1px] sm:text-[48px] lg:text-[56px] xl:text-[64px]">
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
                {/* <button
                  type="button"
                  className="btn-action"
                  onClick={() => {
                    setDeckMessage(true);
                    window.setTimeout(() => setDeckMessage(false), 3200);
                  }}
                >
                  Download Deck
                </button> */}
              </div>
              {/* {deckMessage && (
                <p className="mt-3 text-sm text-skadi-muted" role="status">
                  Deck coming soon — we&apos;ll add the PDF when it&apos;s ready.
                </p>
              )} */}
            </div>

            {/* Right — industry report card */}
            <div className="w-full shrink-0 lg:max-w-[420px] xl:max-w-[460px]">
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
