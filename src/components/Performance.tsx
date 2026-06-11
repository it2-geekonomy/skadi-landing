import Image from "next/image";

const metrics = [
  { value: "333+", label: "Calls handled / month" },
  { value: "1.4s", label: "Avg answer latency" },
  { value: "87/100", label: "Avg QA score" },
  { value: "41%", label: "Bookings increase" },
];

const highlights = [
  "No missed calls, ever",
  "No missed calls, ever",
  "No missed calls, ever",
];

const highlightDesc =
  "Positive, neutral, or negative — understand how every caller feels, and act on it before it becomes a review.";

function HighlightIcon() {
  return (
    <Image
      src="/images/Vector.svg"
      alt=""
      width={11}
      height={11}
      className="mt-0.5 h-[11px] w-[11px] shrink-0"
      aria-hidden
    />
  );
}

function MetricCell({
  value,
  label,
  className = "",
}: {
  value: string;
  label: string;
  className?: string;
}) {
  return (
    <div className={`min-w-0 ${className}`}>
      <p className="text-[36px] font-normal leading-none tracking-[-0.5px] text-white sm:text-[40px] lg:text-[30px] xl:text-[34px] 2xl:text-[50px]">
        {value}
      </p>
      <p className="mt-2 text-[12px] leading-snug text-skadi-muted sm:mt-3 sm:text-[14px] lg:mt-3 2xl:mt-4">
        {label}
      </p>
    </div>
  );
}

function MetricsMobileGrid() {
  return (
    <div className="grid grid-cols-2 gap-x-6 gap-y-12">
      {metrics.map((m) => (
        <MetricCell key={m.label} value={m.value} label={m.label} />
      ))}
    </div>
  );
}

function MetricsFlexRow() {
  return (
    <div className="flex w-full min-w-0 items-stretch">
      {metrics.flatMap((m, i) => {
        const widthClass =
          i === 2 ? "flex-[1.35]" : i === 3 ? "flex-[0.85]" : "flex-1";

        const cell = (
          <MetricCell
            key={m.label}
            value={m.value}
            label={m.label}
            className={`${widthClass} ${
              i === 0
                ? "pr-1 sm:pr-3 lg:pr-2 xl:pr-4 2xl:pr-5"
                : i === metrics.length - 1
                  ? "pl-1 sm:pl-3 lg:pl-2 xl:pl-4 2xl:pl-5"
                  : "px-1 sm:px-3 lg:px-2 xl:px-4 2xl:px-5"
            }`}
          />
        );

        if (i < metrics.length - 1) {
          return [
            cell,
            <div
              key={`divider-${m.label}`}
              className="mx-1 w-px shrink-0 self-stretch bg-white/[0.1] sm:mx-2 lg:mx-2 xl:mx-4 2xl:mx-5"
              aria-hidden="true"
            />,
          ];
        }

        return [cell];
      })}
    </div>
  );
}

export default function Performance() {
  return (
    <section className="section-pad">
      <div className="container-main">
        <div
          className="relative overflow-hidden rounded-3xl px-6 py-10 sm:px-10 sm:py-12 lg:px-14 lg:py-14"
          style={{
            background:
              "linear-gradient(180deg, rgba(12,18,10,1) 0%, rgba(0,0,0,1) 100%)",
            border: "1px solid rgba(110,150,79,0.18)",
          }}
        >
          {/* bottom-center green glow */}
          <div
            className="pointer-events-none absolute inset-x-0 bottom-0 h-[70%]"
            style={{
              background:
                "radial-gradient(ellipse 80% 60% at 35% 100%, rgba(110,150,79,0.28) 0%, rgba(46,97,7,0.08) 45%, transparent 75%)",
            }}
          />

          {/* top-right grid */}
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

          <div className="relative z-[1] flex flex-col lg:min-h-[420px] lg:flex-row">
            {/* Left — ~65% */}
            <div className="flex min-w-0 flex-[1.7] flex-col lg:pr-12">
              <div>
                <div
                  className="badge border border-white/[0.06]"
                  style={{ background: "rgba(255,255,255,0.08)" }}
                >
                  <span className="badge-dot" />
                  Live Performance
                </div>
                <h2 className="mt-5 text-[30px] font-normal leading-[1.15] tracking-[-1px] sm:text-[38px] lg:text-[42px] 2xl:whitespace-nowrap">
                  Real numbers from businesses{" "}
                  <span className="serif-italic gradient-serif">like yours.</span>
                </h2>
                <p className="mt-5 max-w-[498px] text-[15px] leading-relaxed text-skadi-muted">
                  {highlightDesc}
                </p>
              </div>

              {/* Mobile */}
              <div className="mt-auto w-full pt-14 sm:hidden">
                <MetricsMobileGrid />
              </div>

              {/* Tablet, laptop & desktop — metrics inside left column */}
              <div className="mt-auto hidden w-full pt-14 sm:block lg:pt-16 2xl:pt-20">
                <MetricsFlexRow />
              </div>
            </div>

            {/* Right — ~35% */}
            <div className="relative mt-12 flex min-w-0 flex-[1] flex-col justify-center gap-10 lg:mt-0 lg:pl-12">
              <div
                className="pointer-events-none absolute bottom-8 left-0 top-8 hidden w-px bg-white/[0.12] lg:block"
                aria-hidden="true"
              />
              {highlights.map((title, i) => (
                <div key={i}>
                  <div className="flex items-start gap-2.5">
                    <HighlightIcon />
                    <p className="text-[15px] font-normal leading-snug text-white">
                      {title}
                    </p>
                  </div>
                  <p className="mt-2.5 pl-5 text-[15px] leading-relaxed text-skadi-muted">
                    {highlightDesc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
