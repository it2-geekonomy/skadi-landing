import Image from "next/image";
import Link from "next/link";

const features = [
  {
    title: "Built for Your Business",
    desc: "No generic scripts. Skadi is trained on your business, your services, your pricing, your tone.",
    icon: "/images/chart-histogram (1) 1.svg",
  },
  {
    title: "Inbound Call Agent",
    desc: "Picks up every call. Qualifies, routes, and books without human intervention. Your number stays the same.",
    icon: "/images/Phone.svg",
  },
  {
    title: "AI Quality Assurance",
    desc: "Every call scored on tone, accuracy, and resolution. Know exactly how your AI agent is performing.",
    icon: "/images/AI Quality.svg",
  },
  {
    title: "Sentiment Tracking",
    desc: "Positive, neutral, or negative — understand how every caller feels, and act on it before it becomes a review.",
    icon: "/images/Sentiment .svg",
  },
  {
    title: "Multi-Language",
    desc: "English, Spanish, and more. Serve every customer in their language without hiring bilingual staff.",
    icon: "/images/Language.svg",
  },
  {
    title: "Live Analytics Dashboard",
    desc: "Call counts, QA scores, booking rates, and latency — all in one view. No spreadsheets required.",
    icon: "/images/Analytics .svg",
  },
];

function FeatureCard({
  title,
  desc,
  icon,
}: (typeof features)[0]) {
  return (
    <div className="relative">
      <div className="relative z-0 flex h-[186px] flex-col rounded-2xl border border-[#6e964f]/30 bg-[rgba(8,14,7,0.25)] px-6 pb-5 pt-9">
        <h3 className="mb-2 text-left text-lg font-semibold leading-snug text-white">
          {title}
        </h3>
        <p className="text-left text-[15px] leading-relaxed text-skadi-muted">
          {desc}
        </p>
      </div>

      <div className="pointer-events-none absolute left-6 top-0 z-20 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full bg-[#080e07]">
        <Image
          src={icon}
          alt=""
          width={56}
          height={56}
          className="h-11 w-11"
          aria-hidden
        />
      </div>
    </div>
  );
}

export default function Features() {
  return (
    <section id="features" className="section-pad">
      <div className="container-main">
        <div className="mb-12 flex flex-col items-start justify-between gap-8 sm:mb-[60px] lg:flex-row lg:items-end">
          <div className="w-full lg:max-w-[403px]">
            <div className="badge">
              <span className="badge-dot" />
              Full Platform
            </div>
            <h2 className="mt-5 text-[28px] font-normal leading-[1.2] tracking-[-0.5px] sm:text-[36px] sm:leading-tight sm:tracking-[-1px] lg:text-[42px]">
              Everything you need.
              <br />
              <span className="serif-italic gradient-serif">
                Nothing you don&apos;t.
              </span>
            </h2>
          </div>
          <div className="w-full max-w-[550px] lg:w-auto">
            <p className="text-xl sm:text-2xl font-light leading-relaxed text-skadi-faint">
              Ready to stop losing calls?
            </p>
            <Link
              href="/demo"
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
