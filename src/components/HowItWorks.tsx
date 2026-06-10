const steps = [
  {
    step: "Step 1",
    title: "Call Received",
    desc: "Skadi answers every call in under 2 seconds. 24/7",
  },
  {
    step: "Step 2",
    title: "Lead Qualified",
    desc: "Skadi gathers key details and qualifies high-intent leads",
  },
  {
    step: "Step 3",
    title: "Appointment Booked",
    desc: "Qualified leads are booked directly into your calendar",
  },
  {
    step: "Step 4",
    title: "Insights & Analytics",
    desc: "Track performance and revenue with real-time insights",
  },
];

function TimelineDot() {
  return (
    <div className="relative flex h-[22px] w-[22px] items-center justify-center">
      <div
        className="absolute h-10 w-10 rounded-full"
        style={{
          background:
            "radial-gradient(circle, rgba(143,181,106,0.55) 0%, transparent 70%)",
        }}
      />
      <div
        className="relative h-[18px] w-[18px] rounded-full"
        style={{
          background: "#8fb56a",
          boxShadow:
            "0 0 0 2px #080e07, 0 0 0 4px rgba(110,149,79,0.45), 0 0 14px rgba(143,181,106,0.65)",
        }}
      />
    </div>
  );
}

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="section-pad bg-black">
      <div className="container-main">
        <div className="mb-16 text-center lg:mb-[72px]">
          <div className="badge border border-white/[0.06]">
            <span className="badge-dot" />
            How It Works
          </div>
          <h2 className="mx-auto mt-5 max-w-[640px] text-center text-[32px] font-normal leading-tight tracking-[-1px] sm:text-[42px]">
            <span className="block">From missed calls to booked</span>
            <span className="block">
              jobs –{" "}
              <span className="serif-italic gradient-serif">automatically.</span>
            </span>
          </h2>
          <p className="mx-auto mt-3.5 max-w-[636px] text-base text-skadi-muted">
            Skadi answers, qualifies, schedules, and tracks every customer
            conversation so you never miss a revenue opportunity.
          </p>
        </div>

        <div className="relative">
          {/* timeline axis */}
          <div
            className="absolute left-0 right-0 top-[11px] hidden h-px lg:block"
            style={{
              background:
                "linear-gradient(90deg, transparent 0%, rgba(110,150,79,0.4) 8%, rgba(110,150,79,0.4) 92%, transparent 100%)",
            }}
          />

          <div className="grid gap-12 sm:grid-cols-2 lg:grid-cols-4 lg:gap-0">
            {steps.map((item, i) => (
              <div
                key={item.step}
                className={`relative px-0 sm:px-4 lg:px-8 ${
                  i < steps.length - 1
                    ? "lg:border-r lg:border-white/[0.08]"
                    : ""
                }`}
              >
                {/* dot on timeline */}
                <div className="mb-0 flex justify-center lg:justify-start">
                  <TimelineDot />
                </div>

                <div className="mt-10 text-center lg:mt-12 lg:text-left">
                  <span
                    className="mb-[18px] inline-block rounded-md px-3.5 py-2.5 text-base font-medium text-white"
                    style={{
                      background:
                        "linear-gradient(180deg, #3d533b 18%, #000 122%)",
                    }}
                  >
                    {item.step}
                  </span>
                  <h3 className="mb-2.5 text-lg font-medium text-white">
                    {item.title}
                  </h3>
                  <p className="text-sm font-light leading-relaxed text-skadi-faint">
                    {item.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
