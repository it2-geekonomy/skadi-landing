"use client";

import { useEffect, useRef, useState } from "react";

type Metric = {
  label: string;
  end: number;
  suffix?: string;
  fraction?: string;
  decimals?: number;
};

const metrics: Metric[] = [
  { label: "Calls handled / month", end: 333, suffix: "+" },
  { label: "Avg answer latency", end: 1.4, suffix: "s", decimals: 1 },
  { label: "Avg QA score", end: 87, fraction: "/100" },
  { label: "Bookings increase", end: 41, suffix: "%" },
  { label: "Industries served", end: 12, suffix: "+" },
  { label: "Clients", end: 85, suffix: "+" },
];



const DURATION_MS = 1600;

function easeOutCubic(t: number) {
  return 1 - Math.pow(1 - t, 3);
}

function formatMetricValue(metric: Metric, progress: number) {
  const value = metric.end * easeOutCubic(progress);
  const formatted =
    metric.decimals && metric.decimals > 0
      ? value.toFixed(metric.decimals)
      : String(Math.round(value));

  if (metric.fraction) return `${formatted}${metric.fraction}`;
  return `${formatted}${metric.suffix ?? ""}`;
}

function useMetricsAnimation() {
  const ref = useRef<HTMLDivElement>(null);
  const [progress, setProgress] = useState(0);
  const [hasAnimated, setHasAnimated] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el || hasAnimated) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;

        setHasAnimated(true);
        observer.disconnect();

        const start = performance.now();
        const tick = (now: number) => {
          const t = Math.min((now - start) / DURATION_MS, 1);
          setProgress(t);
          if (t < 1) requestAnimationFrame(tick);
        };
        requestAnimationFrame(tick);
      },
      { threshold: 0.2 },
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [hasAnimated]);

  return { ref, progress, hasAnimated };
}



function MetricCell({
  metric,
  progress,
}: {
  metric: Metric;
  progress: number;
}) {
  const display = formatMetricValue(metric, progress);

  return (
    <div className="min-w-0">
      <p
        className="text-[28px] font-normal leading-none tracking-[-0.5px] text-white sm:text-[40px] lg:text-[42px] xl:text-[48px] 2xl:text-[56px]"
        aria-label={`${metric.end}${metric.suffix ?? metric.fraction ?? ""}`}
      >
        {display}
      </p>
      <p className="mt-2.5 text-[13px] leading-snug text-skadi-muted sm:mt-3 sm:text-[14px] xl:text-[15px]">
        {metric.label}
      </p>
    </div>
  );
}

function MetricsGrid({ progress }: { progress: number }) {
  return (
    <div className="grid w-full grid-cols-2 gap-y-10 sm:grid-cols-3 sm:gap-y-12 lg:gap-y-14">
      {metrics.map((m, i) => {
        const mobileDivider = i % 2 === 1;
        const desktopDivider = i % 3 !== 0;

        return (
          <div
            key={m.label}
            className={`min-w-0 ${mobileDivider
              ? "border-l border-white/[0.1] pl-5 sm:pl-0"
              : ""
              } ${desktopDivider
                ? "sm:border-l sm:border-white/[0.1] sm:pl-6 lg:pl-8 xl:pl-10"
                : "sm:border-l-0"
              }`}
          >
            <MetricCell metric={m} progress={progress} />
          </div>
        );
      })}
    </div>
  );
}

export default function Performance() {
  const { ref, progress } = useMetricsAnimation();

  return (
    <section id="performance" className="section-pad">
      <div className="container-main">
        <div
          ref={ref}
          className="relative overflow-hidden rounded-3xl px-6 py-10 sm:px-10 sm:py-12 lg:px-14 lg:py-14"
          style={{
            background:
              "linear-gradient(180deg, rgba(12,18,10,1) 0%, rgba(0,0,0,1) 100%)",
            border: "1px solid rgba(110,150,79,0.18)",
          }}
        >
          <div
            className="pointer-events-none absolute inset-x-0 bottom-0 h-[70%]"
            style={{
              background:
                "radial-gradient(ellipse 80% 60% at 35% 100%, rgba(110,150,79,0.28) 0%, rgba(46,97,7,0.08) 45%, transparent 75%)",
            }}
          />

          <div
            className="pointer-events-none absolute right-0 top-0 h-[280px] w-[45%] opacity-[0.18]"
            style={{
              backgroundImage:
                "linear-gradient(rgba(255,255,255,0.14) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.14) 1px, transparent 1px)",
              backgroundSize: "32px 32px",
              maskImage:
                "linear-gradient(225deg, rgba(0,0,0,1) 15%, rgba(0,0,0,0.4) 50%, transparent 85%)",
              WebkitMaskImage:
                "linear-gradient(225deg, rgba(0,0,0,1) 15%, rgba(0,0,0,0.4) 50%, transparent 85%)",
            }}
          />

          <div className="relative z-[1] flex flex-col">
            <div>
              <div
                className="badge border border-white/[0.06]"
                style={{ background: "rgba(255,255,255,0.08)" }}
              >
                <span className="badge-dot" />
                Live Performance
              </div>
              <h2 className="mt-5 text-[30px] font-normal leading-[1.15] tracking-[-1px] sm:text-[38px] lg:text-[42px]">
                Real numbers from businesses{" "}
                <span className="serif-italic gradient-serif">like yours.</span>
              </h2>
              <p className="mt-5 max-w-[560px] text-[15px] leading-relaxed text-skadi-muted">
                From answer speed to booking rate, see exactly how Skadi
                performs for businesses like yours.
              </p>
            </div>

            <div className="mt-10 w-full sm:mt-12 lg:mt-14">
              <MetricsGrid progress={progress} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
