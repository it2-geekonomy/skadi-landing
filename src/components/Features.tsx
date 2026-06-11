import Link from "next/link";

const features = [
  {
    title: "Inbound Call Agent",
    desc: "Picks up every call. Qualifies, routes, and books without human intervention. Your number stays the same.",
    icon: (
      <path d="M22 16.9v3a2 2 0 01-2.18 2 19.8 19.8 0 01-8.63-3.07A19.5 19.5 0 013.87 11a19.8 19.8 0 01-3.07-8.67A2 2 0 012.78 0h3a2 2 0 012 1.72c.12.96.36 1.9.71 2.81a2 2 0 01-.45 2.11L6.91 7.77A16 16 0 0014.23 15l1.13-1.13a2 2 0 012.11-.45c.91.35 1.85.59 2.81.71A2 2 0 0122 16.9z" />
    ),
  },
  {
    title: "Outbound Batch Calls",
    desc: "Upload a contact list. Skadi calls at scale for follow-ups, re-engagements, and seasonal campaigns.",
    icon: (
      <path d="M21 15a2 2 0 01-2 2H7l-4 4V5a2 2 0 012-2h14a2 2 0 012 2z" />
    ),
  },
  {
    title: "AI Quality Assurance",
    desc: "Every call scored on tone, accuracy, and resolution. Know exactly how your AI agent is performing.",
    icon: (
      <>
        <path d="M12 22c5.52 0 10-4.48 10-10S17.52 2 12 2 2 6.48 2 12s4.48 10 10 10z" />
        <path d="M9 12l2 2 4-4" />
      </>
    ),
  },
  {
    title: "Sentiment Tracking",
    desc: "Positive, neutral, or negative — understand how every caller feels, and act on it before it becomes a review.",
    icon: (
      <path d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z" />
    ),
  },
  {
    title: "Multi-Language",
    desc: "English, Spanish, and more. Serve every customer in their language without hiring bilingual staff.",
    icon: (
      <>
        <circle cx="12" cy="12" r="10" />
        <path d="M2 12h20M12 2a15.3 15.3 0 014 10 15.3 15.3 0 01-4 10 15.3 15.3 0 01-4-10 15.3 15.3 0 014-10z" />
      </>
    ),
  },
  {
    title: "Live Analytics Dashboard",
    desc: "Call counts, QA scores, booking rates, and latency — all in one view. No spreadsheets required.",
    icon: (
      <>
        <line x1="18" y1="20" x2="18" y2="10" />
        <line x1="12" y1="20" x2="12" y2="4" />
        <line x1="6" y1="20" x2="6" y2="14" />
      </>
    ),
  },
];

function FeatureCard({
  title,
  desc,
  icon,
}: (typeof features)[0]) {
  return (
    <div className="relative">
      <div className="pointer-events-none absolute left-6 top-0 z-10 -translate-y-1/2">
        <div className="relative flex h-11 w-11 items-center justify-center">
          <div
            className="absolute h-14 w-14 rounded-full"
            style={{
              background:
                "radial-gradient(circle, rgba(110,150,79,0.28) 0%, transparent 72%)",
            }}
          />
          <div className="relative flex h-[42px] w-[42px] items-center justify-center rounded-full border border-[#6e964f]/35 bg-[#080e07]">
            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="#91F045"
              strokeWidth="1.5"
              className="h-5 w-5"
            >
              {icon}
            </svg>
          </div>
        </div>
      </div>

      <div className="flex h-[186px] flex-col rounded-2xl border border-[#6e964f]/30 bg-[rgba(8,14,7,0.25)] px-6 pb-5 pt-9">
        <h3 className="mb-2 text-left text-lg font-semibold leading-snug text-white">
          {title}
        </h3>
        <p className="text-left text-[15px] leading-relaxed text-skadi-muted">
          {desc}
        </p>
      </div>
    </div>
  );
}

export default function Features() {
  return (
    <section id="features" className="section-pad">
      <div className="container-main">
        <div className="mb-[60px] flex flex-col items-end justify-between gap-8 lg:flex-row">
          <div>
            <div className="badge">
              <span className="badge-dot" />
              Full Platform
            </div>
            <h2 className="mt-5 max-w-[403px] text-[32px] font-normal leading-tight tracking-[-1px] sm:text-[42px]">
              Everything you need.
              <br />
              <span className="serif-italic gradient-serif">
                Nothing you don&apos;t.
              </span>
            </h2>
          </div>
          <div className="max-w-[550px]">
            <p className="text-base font-light leading-relaxed text-skadi-faint">
              Built for field service businesses in TX and FL. Every feature is
              designed to keep your pipeline full while your team focuses on the
              work.
            </p>
            <Link
              href="#demo"
              className="btn-demo mt-6 inline-flex items-center gap-2"
            >
              Book a Free Demo
              <svg width="14" height="12" viewBox="0 0 14 12" fill="none">
                <path
                  d="M8.5 1L13 6L8.5 11M1 6h12"
                  stroke="white"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </Link>
          </div>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 lg:gap-7">
          {features.map((f) => (
            <FeatureCard key={f.title} {...f} />
          ))}
        </div>
      </div>
    </section>
  );
}
