const stats = [
  {
    num: "62%",
    label: "Calls Go Unanswered",
    desc: "Many businesses miss valuable opportunities simply because nobody picks up.",
    icon: (
      <path d="M22 16.9v3a2 2 0 01-2.18 2 19.8 19.8 0 01-8.63-3.07A19.5 19.5 0 013.87 11a19.8 19.8 0 01-3.07-8.67A2 2 0 012.78 0h3a2 2 0 012 1.72c.12.96.36 1.9.71 2.81a2 2 0 01-.45 2.11L6.91 7.77A16 16 0 0014.23 15l1.13-1.13a2 2 0 012.11-.45c.91.35 1.85.59 2.81.71A2 2 0 0122 16.9z" />
    ),
  },
  {
    num: "85%",
    label: "Never Call Back",
    desc: "Most callers won't try again after reaching voicemail.",
    icon: (
      <>
        <path d="M1 4v6h6" />
        <path d="M23 20v-6h-6" />
        <path d="M20.49 9A9 9 0 005.64 5.64L1 10m22 4l-4.64 4.36A9 9 0 013.51 15" />
      </>
    ),
  },
  {
    num: "3x",
    label: "More Revenue",
    desc: "Fast responses convert more inquiries into paying customers.",
    icon: (
      <>
        <line x1="18" y1="20" x2="18" y2="10" />
        <line x1="12" y1="20" x2="12" y2="4" />
        <line x1="6" y1="20" x2="6" y2="14" />
      </>
    ),
  },
];

const flowSteps = [
  {
    lines: ["Incoming", "Customer Call"],
    red: true,
    icon: (
      <path d="M22 16.9v3a2 2 0 01-2.18 2 19.8 19.8 0 01-8.63-3.07A19.5 19.5 0 013.87 11a19.8 19.8 0 01-3.07-8.67A2 2 0 012.78 0h3a2 2 0 012 1.72c.12.96.36 1.9.71 2.81a2 2 0 01-.45 2.11L6.91 7.77A16 16 0 0014.23 15l1.13-1.13a2 2 0 012.11-.45c.91.35 1.85.59 2.81.71A2 2 0 0122 16.9z" />
    ),
  },
  {
    lines: ["Goes to", "Voicemail"],
    red: true,
    icon: (
      <>
        <rect x="2" y="4" width="20" height="14" rx="1" />
        <path d="M8 21h8M12 17v4" />
      </>
    ),
  },
  {
    lines: ["Lost", "Leads"],
    red: true,
    icon: (
      <>
        <path d="M16 8v8M8 8v8" />
        <path d="M3 12h3M18 12h3" />
        <line x1="2" y1="2" x2="22" y2="22" />
      </>
    ),
  },
  {
    lines: ["Competitor", "Wins"],
    red: false,
    icon: (
      <>
        <path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2" />
        <circle cx="9" cy="7" r="4" />
        <path d="M23 21v-2a4 4 0 00-3-3.87M16 3.13a4 4 0 010 7.75" />
      </>
    ),
  },
];

function StatCard({
  num,
  label,
  desc,
  icon,
}: (typeof stats)[0]) {
  return (
    <div className="card-gradient h-[319px] w-[221px] shrink-0 rounded-3xl p-[22px_18px]">
      <div className="mb-7 flex h-12 w-12 items-center justify-center rounded-3xl bg-[rgba(37,77,44,0.45)]">
        <svg
          viewBox="0 0 24 24"
          fill="none"
          stroke="#6e964f"
          strokeWidth="1.5"
          className="h-6 w-6"
        >
          {icon}
        </svg>
      </div>
      <p className="text-[46px] font-bold leading-none text-white">{num}</p>
      <p className="mt-2 text-lg text-skadi-green">{label}</p>
      <p className="mt-[18px] text-sm font-light leading-relaxed text-skadi-faint">
        {desc}
      </p>
    </div>
  );
}

const flowGrid =
  "grid grid-cols-[minmax(0,1fr)_auto_minmax(0,1fr)_auto_minmax(0,1fr)_auto_minmax(0,1fr)] gap-x-1";

function FlowArrow() {
  return (
    <span
      className="mt-[42px] w-[1.125rem] shrink-0 text-center text-base text-white/35"
      aria-hidden="true"
    >
      →
    </span>
  );
}

function FlowConnector() {
  // Match flowGrid: [1fr auto 1fr auto 1fr auto 1fr] — auto ≈ 2.1% of width
  const arrow = 2.1;
  const col = (100 - 3 * arrow) / 4;
  const xs = [
    col / 2,
    col * 1.5 + arrow,
    col * 2.5 + arrow * 2,
    col * 3.5 + arrow * 3,
  ];
  const [x1, x2, x3, x4] = xs;

  const yDot = 6;
  const yRail = 20;
  const cr = 4.5;

  const pathD = [
    `M ${x1} ${yDot}`,
    `V ${yRail - cr}`,
    `Q ${x1} ${yRail} ${x1 + cr} ${yRail}`,
    `H ${x2 - cr}`,
    `Q ${x2} ${yRail} ${x2} ${yRail - cr}`,
    `V ${yDot}`,
    `V ${yRail - cr}`,
    `Q ${x2} ${yRail} ${x2 + cr} ${yRail}`,
    `H ${x3 - cr}`,
    `Q ${x3} ${yRail} ${x3} ${yRail - cr}`,
    `V ${yDot}`,
    `V ${yRail - cr}`,
    `Q ${x3} ${yRail} ${x3 + cr} ${yRail}`,
    `H ${x4 - cr}`,
    `Q ${x4} ${yRail} ${x4} ${yRail - cr}`,
    `V ${yDot}`,
  ].join(" ");

  return (
    <svg
      className="mt-6 w-full"
      viewBox="0 0 100 24"
      height={24}
      preserveAspectRatio="none"
      aria-hidden="true"
    >
      {xs.map((x) => (
        <circle key={x} cx={x} cy={4} r={2} fill="#ff2525" />
      ))}
      <path
        d={pathD}
        fill="none"
        stroke="#f34543"
        strokeWidth={1.5}
        strokeDasharray="3 3"
        strokeLinecap="round"
        strokeLinejoin="round"
        vectorEffect="non-scaling-stroke"
      />
    </svg>
  );
}

export default function MissedCalls() {
  return (
    <section id="missed" className="bg-black section-pad">
      <div className="container-main">
        <div className="mb-14 text-center lg:mb-16">
          <div className="badge border border-white/[0.06]">
            <span className="badge-dot" />
            The Cost of Missed Calls
          </div>
          <h2 className="mt-5 text-[32px] font-normal leading-tight tracking-[-1px] sm:text-[42px]">
            Every Missed Call Is{" "}
            <span className="serif-italic gradient-serif">Lost Revenue.</span>
          </h2>
          <p className="mx-auto mt-3 max-w-[678px] text-base text-skadi-muted">
            When customers need help, they don&apos;t wait. If nobody answers,
            they call the next business.
          </p>
        </div>

        {/* 3 stat cards + 1 wide flow card — single row on desktop */}
        <div className="flex flex-col items-center gap-[18px] lg:flex-row lg:items-stretch lg:justify-center">
          <div className="flex flex-col gap-[18px] sm:flex-row">
            {stats.map((s) => (
              <StatCard key={s.label} {...s} />
            ))}
          </div>

          <div className="card-gradient flex h-[319px] w-full min-w-0 flex-1 flex-col rounded-3xl px-8 py-10 lg:max-w-[962px]">
            <div className={`${flowGrid} flex-1 content-start`}>
              {flowSteps.flatMap((step, i) => {
                const stepCell = (
                  <div
                    key={step.lines.join(" ")}
                    className="flex flex-col items-center"
                  >
                    <div
                      className={`flex h-[98px] w-[98px] items-center justify-center rounded-full ${
                        step.red
                          ? "border-[1.5px] border-[#f34543] bg-[#2a1210]"
                          : "border-[1.5px] border-[#1e3722] bg-[#0b1405]"
                      }`}
                    >
                      <svg
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke={step.red ? "#f34543" : "#6e964f"}
                        strokeWidth="1.5"
                        className="h-9 w-9"
                      >
                        {step.icon}
                      </svg>
                    </div>
                    <p className="mt-3 text-center text-base font-medium leading-snug text-white">
                      {step.lines[0]}
                      <br />
                      {step.lines[1]}
                    </p>
                  </div>
                );

                if (i < flowSteps.length - 1) {
                  return [stepCell, <FlowArrow key={`arrow-${i}`} />];
                }

                return [stepCell];
              })}
            </div>

            <FlowConnector />
          </div>
        </div>
      </div>
    </section>
  );
}
