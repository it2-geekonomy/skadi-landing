"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";

const steps = [
  {
    title: "AI Answers Instantly",
    desc: "Never miss a customer call with AI voice agents available 24/7.",
    image: "/images/Let AI Handle Every Customer Conversation/Let AI Handle image1.png",
  },
  {
    title: "Appointment Scheduling",
    desc: "Qualified leads are booked directly into your calendar without human intervention.",
    image: "/images/Let AI Handle Every Customer Conversation/Let AI Handle image2.png",
  },
  {
    title: "Live Transcripts",
    desc: "Every conversation is transcribed in real time for review and compliance.",
    image: "/images/Let AI Handle Every Customer Conversation/Let AI Handle image3.png",
  },
  {
    title: "CRM Automation",
    desc: "Call data, lead info, and outcomes sync automatically to your CRM.",
    image: "/images/Let AI Handle Every Customer Conversation/Let AI Handle image4.png",
  },
  {
    title: "Performance Analytics",
    desc: "Track call quality, booking rates, and agent performance in one dashboard.",
    image: "/images/Let AI Handle Every Customer Conversation/Let AI Handle image5.png",
  },
];

const AUTO_ADVANCE_MS = 2000;

export default function AIFeatures() {
  const [active, setActive] = useState(0);
  const [imgVisible, setImgVisible] = useState(true);
  // 0→1 fill progress for the line below the active dot
  const [fillProgress, setFillProgress] = useState(0);
  const [inView, setInView] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);
  const rafRef = useRef<number | null>(null);
  const startRef = useRef<number | null>(null);

  // IntersectionObserver to only animate when in viewport
  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        setInView(entry.isIntersecting);
      },
      { threshold: 0.15 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  // rAF loop: fills the active line from 0 → 1 over AUTO_ADVANCE_MS
  const startFill = () => {
    if (rafRef.current) cancelAnimationFrame(rafRef.current);
    startRef.current = null;

    const tick = (now: number) => {
      if (!startRef.current) startRef.current = now;
      const p = Math.min((now - startRef.current) / AUTO_ADVANCE_MS, 1);
      setFillProgress(p);
      if (p < 1) {
        rafRef.current = requestAnimationFrame(tick);
      } else {
        // advance step when fill completes
        setActive((prev) => (prev + 1) % steps.length);
      }
    };

    rafRef.current = requestAnimationFrame(tick);
  };

  // Kick off fill when in view and active changes
  useEffect(() => {
    if (!inView) {
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
      setFillProgress(0);
      return;
    }
    setFillProgress(0);
    startFill();
    return () => {
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [active, inView]);

  // Crossfade image on step change
  useEffect(() => {
    setImgVisible(false);
    const t = setTimeout(() => setImgVisible(true), 150);
    return () => clearTimeout(t);
  }, [active]);

  const handleStepClick = (i: number) => {
    if (rafRef.current) cancelAnimationFrame(rafRef.current);
    setActive(i);
  };

  return (
    <section ref={sectionRef} id="ai-features" className="section-pad bg-black">
      <div className="container-main flex flex-col items-center gap-10 sm:gap-14 lg:gap-[80px]">
        {/* Header */}
        <div className="w-full text-center">
          <h2 style={{ fontSize: "clamp(20px, 3vw, 42px)" }} className="font-normal leading-tight tracking-[-0.5px]">
            Let AI Handle Every{" "}
            <span className="serif-italic gradient-serif">
              Customer Conversation
            </span>
          </h2>
          <p className="mx-auto mt-3 max-w-[520px] text-sm text-skadi-muted sm:text-base">
            Subheading explaining the value proposition
          </p>
        </div>

        {/* Main layout */}
        <div className="flex w-full flex-col gap-8 sm:flex-row sm:items-center sm:gap-8 lg:gap-16">
          {/* Left — headline + step timeline */}
          <div className="flex min-w-0 flex-1 flex-col">
            <h3 style={{ fontSize: "clamp(22px, 3.2vw, 44px)", marginBottom: "clamp(24px, 3vw, 40px)" }} className="font-normal leading-snug tracking-[-0.5px] text-white">
              Every Call. Every Lead.
              <br />
              Every Opportunity.
            </h3>

            <ol className="relative flex flex-col">
              {steps.map((step, i) => {
                const isActive = i === active;
                const isPast = i < active;

                return (
                  <li key={step.title} className="relative flex gap-4">
                    {/* Dot + connecting line column */}
                    <div className="flex flex-col items-center">
                      {/* Dot */}
                      <button
                        type="button"
                        onClick={() => handleStepClick(i)}
                        aria-label={`Go to step: ${step.title}`}
                        className="relative z-10 mt-1 flex h-[22px] w-[22px] shrink-0 items-center justify-center rounded-full border transition-all duration-300 focus:outline-none"
                        style={{
                          borderColor: isActive || isPast
                            ? "#6e964f"
                            : "rgba(255,255,255,0.2)",
                          background: isActive
                            ? "#6e964f"
                            : isPast
                              ? "rgba(110,150,79,0.35)"
                              : "transparent",
                          boxShadow: isActive
                            ? "0 0 10px rgba(110,150,79,0.6)"
                            : "none",
                        }}
                      >
                        {isActive && (
                          <span className="h-2 w-2 rounded-full bg-white" />
                        )}
                      </button>

                      {/* Connecting line */}
                      {i < steps.length - 1 && (
                        <div
                          className="relative mt-1 flex-1"
                          style={{
                            width: "2px",
                            minHeight: isActive ? "60px" : "36px",
                          }}
                        >
                          {/* Grey dashed track — full height */}
                          <div
                            className="absolute inset-0"
                            style={{
                              borderLeft: "2px dashed rgba(255,255,255,0.15)",
                            }}
                          />
                          {/* Green dashed fill — grows from top */}
                          <div
                            className="absolute left-0 top-0 overflow-hidden"
                            style={{
                              height: isPast
                                ? "100%"
                                : isActive
                                  ? `${fillProgress * 100}%`
                                  : "0%",
                              width: "2px",
                            }}
                          >
                            <div
                              style={{
                                borderLeft: "2px dashed #6e964f",
                                height: isActive ? `${(1 / fillProgress) * 100}%` : "100%",
                                minHeight: "60px",
                              }}
                            />
                          </div>
                        </div>
                      )}
                    </div>

                    {/* Step text */}
                    <div
                      className={`pb-5 transition-all duration-300 ${i < steps.length - 1 ? "" : "pb-0"
                        }`}
                    >
                      <button
                        type="button"
                        onClick={() => handleStepClick(i)}
                        className="text-left focus:outline-none"
                      >
                         <p
                          style={{ fontSize: "clamp(13px, 1.3vw, 17px)" }}
                          className={`font-medium leading-snug transition-colors duration-300 ${isActive ? "text-white" : "text-white/40"}
                            }`}
                        >
                          {step.title}
                        </p>
                      </button>

                      {/* Description — expands only for active */}
                      <div
                        className="overflow-hidden"
                        style={{
                          maxHeight: isActive ? "80px" : "0px",
                          opacity: isActive ? 1 : 0,
                          transition:
                            "max-height 0.35s ease, opacity 0.35s ease",
                        }}
                      >
                        <p style={{ fontSize: "clamp(12px, 1.1vw, 15px)" }} className="mt-2 max-w-[320px] leading-relaxed text-skadi-muted">
                          {step.desc}
                        </p>
                      </div>
                    </div>
                  </li>
                );
              })}
            </ol>
          </div>

          {/* Right — image inside dark padded frame */}
          <div className="mx-auto w-full max-w-[520px] sm:mx-0 sm:flex-1 sm:max-w-[580px] md:max-w-[620px] lg:max-w-[640px] xl:max-w-[720px]">
            {/* Outer dark frame */}
            <div
              style={{
                background: "rgba(20,24,20,0.95)",
                boxShadow: "0 32px 80px rgba(0,0,0,0.6)",
                padding: "clamp(12px, 2.5vw, 48px)",
                borderRadius: "clamp(16px, 2vw, 24px)",
              }}
            >
              {/* Inner image with its own rounded corners */}
              <div
                className="relative overflow-hidden rounded-2xl"
                style={{
                  opacity: imgVisible ? 1 : 0,
                  transition: "opacity 0.3s ease",
                }}
              >
                <div className="relative aspect-[16/10] w-full">
                  <Image
                    src={steps[active].image}
                    alt={steps[active].title}
                    fill
                    className="object-cover"
                    priority={active === 0}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
