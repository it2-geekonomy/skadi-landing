import Image from "next/image";

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
    image: "/images/incomingcall.png",
  },
  {
    lines: ["Goes to", "Voicemail"],
    image: "/images/voicemail.png",
  },
  {
    lines: ["Lost", "Leads"],
    image: "/images/lostleades.png",
  },
  {
    lines: ["Competitor", "Wins"],
    image: "/images/Competitor.png",
  },
];

const glassCard =
  "rounded-3xl border border-[#6e964f]/30 bg-[rgba(8,14,7,0.55)] shadow-[0_12px_48px_rgba(0,0,0,0.45),0_0_24px_rgba(110,150,79,0.1)] backdrop-blur-md";

const flowGrid =
  "grid grid-cols-[minmax(0,1fr)_auto_minmax(0,1fr)_auto_minmax(0,1fr)_auto_minmax(0,1fr)] gap-x-1";
function SectionGlow() {
  return (
    <div
      className="pointer-events-none absolute inset-0 z-0 overflow-hidden"
      aria-hidden="true"
    >
      <div
        className="absolute left-1/2 top-[38%] h-[min(520px,58vh)] w-[min(1400px,96vw)] -translate-x-1/2 -translate-y-1/2 rounded-full blur-[120px]"
        style={{
          background:
            "radial-gradient(ellipse 125% 50% at 50% 50%, rgba(110,150,79,0.38) 0%, rgba(46,97,7,0.16) 40%, transparent 72%)",
        }}
      />
      <div
        className="absolute left-1/2 top-[42%] h-[min(380px,45vh)] w-[min(1000px,80vw)] -translate-x-1/2 -translate-y-1/2 rounded-full blur-[90px]"
        style={{
          background:
            "radial-gradient(ellipse 110% 45% at 50% 50%, rgba(110,150,79,0.28) 0%, rgba(46,97,7,0.1) 48%, transparent 78%)",
        }}
      />
    </div>
  );
}

function StatCard({
  num,
  label,
  desc,
  icon,
}: (typeof stats)[0]) {
  return (
    <div className={`${glassCard} h-[319px] w-[221px] shrink-0 p-[22px_18px]`}>
      <div className="mb-7 flex h-12 w-12 items-center justify-center rounded-3xl border border-[#6e964f]/20 bg-[rgba(37,77,44,0.35)] shadow-[0_0_16px_rgba(110,150,79,0.12)]">
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

function FlowStepCell({
  lines,
  image,
  compact = false,
}: {
  lines: string[];
  image: string;
  compact?: boolean;
}) {
  const iconSize = compact ? 64 : 98;
  return (
    <div className="flex flex-col items-center">
      <Image
        src={image}
        alt={lines.join(" ")}
        width={iconSize}
        height={iconSize}
        className={`shrink-0 ${compact ? "h-16 w-16" : "h-[98px] w-[98px]"}`}
      />
      <p
        className={`mt-2 text-center font-medium leading-snug text-white ${
          compact ? "text-[13px]" : "mt-3 text-base"
        }`}
      >
        {lines[0]}
        <br />
        {lines[1]}
      </p>
    </div>
  );
}

function FlowArrow({
  vertical = false,
  compact = false,
}: {
  vertical?: boolean;
  compact?: boolean;
}) {
  return (
    <span
      className={`shrink-0 text-center text-white/35 ${
        vertical
          ? "py-1 text-sm"
          : compact
            ? "self-center pt-6 text-sm"
            : "mt-[42px] w-[1.125rem] text-base"
      }`}
      aria-hidden="true"
    >
      {vertical ? "↓" : "→"}
    </span>
  );
}

function FlowMobile() {
  return (
    <div className="flex flex-col gap-4 sm:hidden">
      <div className="grid grid-cols-[1fr_auto_1fr] items-start gap-x-2">
        <FlowStepCell {...flowSteps[0]} compact />
        <FlowArrow compact />
        <FlowStepCell {...flowSteps[1]} compact />
      </div>
      <div className="flex justify-center">
        <FlowArrow vertical />
      </div>
      <div className="grid grid-cols-[1fr_auto_1fr] items-start gap-x-2">
        <FlowStepCell {...flowSteps[2]} compact />
        <FlowArrow compact />
        <FlowStepCell {...flowSteps[3]} compact />
      </div>
    </div>
  );
}

function FlowDesktop() {
  return (
    <>
      <div className={`${flowGrid} hidden flex-1 content-start sm:grid`}>
        {flowSteps.flatMap((step, i) => {
          const stepCell = (
            <FlowStepCell
              key={step.lines.join(" ")}
              lines={step.lines}
              image={step.image}
            />
          );

          if (i < flowSteps.length - 1) {
            return [stepCell, <FlowArrow key={`arrow-${i}`} />];
          }

          return [stepCell];
        })}
      </div>
      <div className="hidden sm:block">
        <FlowConnector />
      </div>
    </>
  );
}

function FlowConnector() {
  const arrow = 2.1;
  const col = (100 - 3 * arrow) / 4;
  const xs = [
    col / 2,
    col * 1.5 + arrow,
    col * 2.5 + arrow * 2,
    col * 3.5 + arrow * 3,
  ];

  const yStart = 10;
  const yRail = 34;
  const cr = 5;

  const pathD = [
    `M ${xs[0]} ${yStart}`,
    `V ${yRail - cr}`,
    `Q ${xs[0]} ${yRail} ${xs[0] + cr} ${yRail}`,
    `H ${xs[1] - cr}`,
    `Q ${xs[1]} ${yRail} ${xs[1]} ${yRail - cr}`,
    `V ${yStart}`,

    `M ${xs[1]} ${yStart}`,
    `V ${yRail - cr}`,
    `Q ${xs[1]} ${yRail} ${xs[1] + cr} ${yRail}`,
    `H ${xs[2] - cr}`,
    `Q ${xs[2]} ${yRail} ${xs[2]} ${yRail - cr}`,
    `V ${yStart}`,

    `M ${xs[2]} ${yStart}`,
    `V ${yRail - cr}`,
    `Q ${xs[2]} ${yRail} ${xs[2] + cr} ${yRail}`,
    `H ${xs[3] - cr}`,
    `Q ${xs[3]} ${yRail} ${xs[3]} ${yRail - cr}`,
    `V ${yStart}`,
  ].join(" ");

  return (
    <div className="relative mt-2 h-10 w-full" aria-hidden="true">
      {xs.map((x) => (
        <span
          key={x}
          className="absolute top-0 -translate-x-1/2"
          style={{ left: `${x}%` }}
        >
          <span className="absolute left-1/2 top-1/2 h-3 w-3 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#ff3b3b]/25 blur-[1px]" />
          <span className="relative block h-[5px] w-[10px] rounded-full bg-[#ff3b3b] shadow-[0_0_6px_rgba(255,59,59,0.55)]" />
        </span>
      ))}
      <svg
        className="absolute inset-0 h-full w-full"
        viewBox="0 0 100 40"
        preserveAspectRatio="none"
      >
        <path
          d={pathD}
          fill="none"
          stroke="#f34543"
          strokeWidth={1.5}
          strokeDasharray="4 3"
          strokeLinecap="round"
          strokeLinejoin="round"
          vectorEffect="non-scaling-stroke"
        />
      </svg>
    </div>
  );
}

export default function MissedCalls() {
  return (
    <section
      id="missed"
      className="relative overflow-x-hidden bg-black section-pad"
    >
      <SectionGlow />

      <div className="container-main relative z-[3]">
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

        <div className="relative z-[2] flex flex-col items-center gap-[18px] lg:flex-row lg:items-stretch lg:justify-center">
          <div className="flex flex-col gap-[18px] sm:flex-row">
            {stats.map((s) => (
              <StatCard key={s.label} {...s} />
            ))}
          </div>

          <div
            className={`${glassCard} flex w-full min-w-0 flex-1 flex-col px-5 py-8 sm:h-[319px] sm:px-8 sm:py-10 lg:max-w-[962px]`}
          >
            <FlowMobile />
            <FlowDesktop />
          </div>
        </div>
      </div>
    </section>
  );
}
