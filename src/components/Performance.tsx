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

function DiamondIcon() {
  return (
    <svg
      viewBox="0 0 10 10"
      fill="none"
      className="mt-1 h-2.5 w-2.5 shrink-0"
      aria-hidden="true"
    >
      <path d="M5 0L9.5 5L5 10L0.5 5L5 0Z" fill="white" />
    </svg>
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
            <div className="flex flex-[1.7] flex-col lg:pr-12">
              <div>
                <div
                  className="badge border border-white/[0.06]"
                  style={{ background: "rgba(255,255,255,0.08)" }}
                >
                  <span className="badge-dot" />
                  Live Performance
                </div>
                <h2 className="mt-5 max-w-[560px] text-[30px] font-normal leading-[1.15] tracking-[-1px] sm:text-[38px] lg:text-[42px]">
                  Real numbers from businesses{" "}
                  <span className="serif-italic gradient-serif">
                    like yours.
                  </span>
                </h2>
                <p className="mt-5 max-w-[498px] text-[15px] leading-relaxed text-skadi-muted">
                  {highlightDesc}
                </p>
              </div>

              <div className="mt-auto pt-14 lg:pt-20">
                <div className="grid grid-cols-2 sm:grid-cols-4">
                  {metrics.map((m, i) => (
                    <div
                      key={m.label}
                      className={`py-1 ${
                        i < metrics.length - 1
                          ? "sm:border-r sm:border-white/[0.12]"
                          : ""
                      } ${i === 0 ? "sm:pr-8" : "sm:px-8"}`}
                    >
                      <p className="text-[36px] font-normal leading-none text-white sm:text-[54px]">
                        {m.value}
                      </p>
                      <p className="mt-3 text-[15px] leading-snug text-skadi-muted">
                        {m.label}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Right — ~35% */}
            <div className="relative mt-12 flex flex-[1] flex-col justify-center gap-10 lg:mt-0 lg:pl-12">
              <div
                className="pointer-events-none absolute bottom-8 left-0 top-8 hidden w-px bg-white/[0.12] lg:block"
                aria-hidden="true"
              />
              {highlights.map((title, i) => (
                <div key={i}>
                  <div className="flex items-start gap-2.5">
                    <DiamondIcon />
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
