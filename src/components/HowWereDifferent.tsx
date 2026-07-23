const columns = [
  {
    title: "Traditional Answering Service",
    badge: "The old way",
    points: [
      "Slow pickup and hold times",
      "Expensive per-minute rates",
      "Business hours only",
      "Limited reporting and QA",
    ],
    highlight: false,
  },
  {
    title: "Generic AI Chatbots / IVR",
    badge: "Close, but not enough",
    points: [
      "Robotic, scripted experience",
      "Can't book appointments well",
      "Poor caller trust and completion",
      "Hard to measure quality",
    ],
    highlight: false,
  },
  {
    title: "Skadi",
    badge: "Built for field service",
    points: [
      "Answers 24/7 in seconds",
      "Natural conversation that books",
      "Calendar + CRM sync built in",
      "Full analytics and QA scoring",
    ],
    highlight: true,
  },
];

export default function HowWereDifferent() {
  return (
    <section id="how-were-different" className="section-pad">
      <div className="container-main">
        <div className="mb-12 text-center sm:mb-14">
          <div className="badge mx-auto border border-white/[0.06]">
            <span className="badge-dot" />
            How We&apos;re Different
          </div>
          <h2 className="mt-5 text-[30px] font-normal leading-[1.15] tracking-[-1px] sm:text-[38px] lg:text-[42px]">
            Not another answering service.{" "}
            <span className="serif-italic gradient-serif">Not another chatbot.</span>
          </h2>
          <p className="mx-auto mt-4 max-w-[560px] text-[15px] leading-relaxed text-skadi-muted sm:text-base">
            After you&apos;ve felt the cost of missed calls, here&apos;s why
            Skadi is the right fix — versus people, bots, or doing nothing.
          </p>
        </div>

        <div className="grid gap-4 md:grid-cols-3 md:gap-5 lg:gap-6">
          {columns.map((col) => (
            <div
              key={col.title}
              className={`rounded-2xl border p-6 sm:p-7 ${
                col.highlight
                  ? "border-[#6e964f]/45 bg-[rgba(110,150,79,0.08)]"
                  : "border-white/[0.08] bg-[#0c120a]/50"
              }`}
            >
              <p
                className={`text-[11px] font-semibold uppercase tracking-[0.1em] ${
                  col.highlight ? "text-[#abbe9c]" : "text-white/45"
                }`}
              >
                {col.badge}
              </p>
              <h3
                className={`mt-3 text-[18px] font-medium leading-snug sm:text-[20px] ${
                  col.highlight ? "text-white" : "text-white/85"
                }`}
              >
                {col.title}
              </h3>
              <ul className="mt-6 flex flex-col gap-3.5">
                {col.points.map((point) => (
                  <li
                    key={point}
                    className={`flex items-start gap-2.5 text-[14px] leading-snug sm:text-[15px] ${
                      col.highlight ? "text-white/85" : "text-skadi-muted"
                    }`}
                  >
                    <span
                      className={`mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full ${
                        col.highlight ? "bg-[#6e964f]" : "bg-white/25"
                      }`}
                      aria-hidden
                    />
                    {point}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
