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
    <span className="mx-1 inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[#6e964f] align-middle shadow-[0_0_20px_rgba(110,150,79,0.45)] sm:mx-1.5 sm:h-9 sm:w-9">
      {children}
    </span>
  );
}

function GridPattern({ side }: { side: "left" | "right" }) {
  return (
    <div
      className={`pointer-events-none absolute inset-y-0 z-0 w-[min(320px,38%)] ${
        side === "left" ? "left-0" : "right-0"
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
    <section className="relative overflow-hidden bg-black py-20 text-center sm:py-24 lg:py-28">
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
        <div className="mx-auto max-w-[1120px] px-6 py-14 sm:px-10 sm:py-16 lg:px-14 lg:py-20">
          <div className="mb-8 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.04] px-4 py-1.5 text-xs font-light text-white/90 backdrop-blur-md sm:text-[13px]">
            <span className="h-2 w-2 shrink-0 rounded-full bg-[#6e964f] shadow-[0_0_8px_rgba(110,150,79,0.8)]" />
            Solution · AI Voice Agent for Service Businesses
          </div>

          <p className="mx-auto max-w-[980px] text-[22px] font-medium leading-[1.45] tracking-[-0.02em] sm:text-[26px] lg:text-[32px]">
            <span className="text-white">
              Skadi answers every call,
              <IconBadge>
                <PhoneCall
                  className="h-4 w-4 text-white sm:h-[18px] sm:w-[18px]"
                  strokeWidth={2}
                />
              </IconBadge>
              qualifies every lead,
              <IconBadge>
                <UserCheck
                  className="h-4 w-4 text-white sm:h-[18px] sm:w-[18px]"
                  strokeWidth={2}
                />
              </IconBadge>
              and books
              <IconBadge>
                <CalendarCheck
                  className="h-4 w-4 text-white sm:h-[18px] sm:w-[18px]"
                  strokeWidth={2}
                />
              </IconBadge>
              every opportunity —
            </span>
            <span className="text-white/45">
              {" "}
              helping you capture more revenue without hiring more staff.
            </span>
          </p>
        </div>
      </div>
    </section>
  );
}
