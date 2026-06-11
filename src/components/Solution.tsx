"use client";

import { CalendarCheck, PhoneCall, UserCheck } from "lucide-react";

const particles = [
  { top: "18%", left: "12%", size: 2, opacity: 0.35 },
  { top: "72%", left: "8%", size: 1, opacity: 0.25 },
  { top: "28%", left: "88%", size: 2, opacity: 0.3 },
  { top: "65%", left: "92%", size: 1, opacity: 0.2 },
  { top: "42%", left: "6%", size: 1, opacity: 0.4 },
  { top: "55%", left: "94%", size: 2, opacity: 0.25 },
  { top: "15%", left: "78%", size: 1, opacity: 0.35 },
  { top: "80%", left: "22%", size: 1, opacity: 0.2 },
];

function IconBadge({ children }: { children: React.ReactNode }) {
  return (
    <span className="mx-0.5 inline-flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-[#5a7342] align-middle shadow-[0_0_8px_rgba(110,150,79,0.15)] sm:mx-1 sm:h-8 sm:w-8 md:mx-1.5 md:h-9 md:w-9">
      {children}
    </span>
  );
}

function GridPattern({ side }: { side: "left" | "right" }) {
  return (
    <div
      className={`pointer-events-none absolute inset-y-0 z-0 w-[min(200px,45%)] sm:w-[min(280px,40%)] md:w-[min(320px,38%)] ${
        side === "left" ? "left-0" : "right-0 hidden sm:block"
      }`}
      style={{
        backgroundImage: `
          linear-gradient(rgba(110,150,79,0.14) 1px, transparent 1px),
          linear-gradient(90deg, rgba(110,150,79,0.14) 1px, transparent 1px)
        `,
        backgroundSize: "40px 40px",
        maskImage:
          side === "left"
            ? "linear-gradient(to right, black 30%, transparent 100%)"
            : "linear-gradient(to left, black 30%, transparent 100%)",
        WebkitMaskImage:
          side === "left"
            ? "linear-gradient(to right, black 30%, transparent 100%)"
            : "linear-gradient(to left, black 30%, transparent 100%)",
      }}
      aria-hidden="true"
    />
  );
}

export default function Solution() {
  return (
    <section
      className="relative overflow-hidden py-14 text-center sm:py-20 md:py-24 lg:py-28"
      style={{
        background:
          "linear-gradient(180deg, rgba(44, 59, 38, 0) 0%, #141614 42%, #08090F 100%)",
      }}
    >
      <GridPattern side="left" />
      <GridPattern side="right" />

      {particles.map((p, i) => (
        <div
          key={i}
          className="pointer-events-none absolute rounded-full bg-white"
          style={{
            top: p.top,
            left: p.left,
            width: p.size,
            height: p.size,
            opacity: p.opacity,
          }}
          aria-hidden="true"
        />
      ))}

      <div className="container-main relative z-[1]">
        <div className="mx-auto max-w-[1120px] py-8 sm:py-14 md:py-16 lg:py-20">
          <div className="mx-auto mb-6 inline-flex max-w-[min(100%,340px)] flex-wrap items-center justify-center gap-x-2 gap-y-1 rounded-full border border-white/10 bg-white/[0.04] px-3.5 py-2 text-[11px] font-light leading-snug text-white/90 backdrop-blur-md sm:mb-8 sm:max-w-none sm:gap-2 sm:px-4 sm:py-1.5 sm:text-xs md:text-[13px]">
            <span className="flex shrink-0 items-center gap-2">
              <span className="h-2 w-2 shrink-0 rounded-full bg-[#6e964f] shadow-[0_0_6px_rgba(110,150,79,0.5)]" />
              <span>Solution · AI Voice Agent</span>
            </span>
            <span className="hidden sm:inline">for Service Businesses</span>
            <span className="w-full text-center sm:hidden">
              for Service Businesses
            </span>
          </div>

          <p className="mx-auto max-w-[980px] px-1 text-[18px] font-medium leading-[1.55] tracking-[-0.01em] sm:px-0 sm:text-[22px] sm:leading-[1.5] md:text-[26px] lg:text-[32px] lg:leading-[1.45] lg:tracking-[-0.02em]">
            <span className="text-white">
              Skadi answers every call,
              <IconBadge>
                <PhoneCall
                  className="h-3.5 w-3.5 text-white sm:h-4 sm:w-4 md:h-[18px] md:w-[18px]"
                  strokeWidth={2}
                />
              </IconBadge>
              qualifies every lead,
              <IconBadge>
                <UserCheck
                  className="h-3.5 w-3.5 text-white sm:h-4 sm:w-4 md:h-[18px] md:w-[18px]"
                  strokeWidth={2}
                />
              </IconBadge>
              and books
              <IconBadge>
                <CalendarCheck
                  className="h-3.5 w-3.5 text-white sm:h-4 sm:w-4 md:h-[18px] md:w-[18px]"
                  strokeWidth={2}
                />
              </IconBadge>
              every opportunity —
            </span>
            <span className="mt-2 block text-white/45 sm:mt-0 sm:inline">
              helping you capture more revenue without hiring more staff.
            </span>
          </p>
        </div>
      </div>
    </section>
  );
}
