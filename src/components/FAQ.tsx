"use client";

import { useState } from "react";

const faqs = [
  {
    question: "What is Skadi?",
    answer:
      "Skadi is an AI voice agent built for service businesses. It answers inbound calls, qualifies leads, books appointments, and handles common customer questions — 24/7, without hold times or missed calls.",
  },
  {
    question: "Does Skadi offer a free trial?",
    answer:
      "We start with a free 15-minute live demo tailored to your business. You'll see Skadi handle real call scenarios in your industry, then get a clear setup plan. Most teams go live within 48 hours after onboarding.",
  },
  {
    question: "We already have a front desk. Why use Skadi?",
    answer:
      "Skadi doesn't replace your team — it covers the gaps. After-hours calls, overflow during busy seasons, lunch breaks, and repetitive qualification calls get handled automatically so your staff can focus on in-person customers and complex jobs.",
  },
  {
    question: "Is Skadi secure and compliant?",
    answer:
      "Yes. Skadi is built with enterprise-grade security practices, encrypted data handling, and compliance-ready workflows. We work with you to meet your industry's requirements for call data and customer information.",
  },
  {
    question: "Can Skadi integrate with our current tools?",
    answer:
      "Skadi connects with the tools service businesses already use — CRMs, calendars, dispatch systems, and automation platforms. During onboarding we map your stack and wire up the integrations you need.",
  },
  {
    question: "What if the AI says something off-brand?",
    answer:
      "Every call is scored with AI quality assurance. You set approved scripts, guardrails, and escalation rules upfront. If something goes outside bounds, Skadi can transfer to a human or flag the call for review.",
  },
  {
    question: "What happens if the AI gets stuck?",
    answer:
      "Skadi is designed to recover gracefully. It can ask clarifying questions, offer to take a message, or warm-transfer to your team. You define fallback rules so callers are never left hanging.",
  },
];

function PlusMinusIcon({ open }: { open: boolean }) {
  return (
    <span
      className="relative flex h-5 w-5 shrink-0 items-center justify-center text-[#6e964f] transition-transform duration-300"
      aria-hidden
    >
      <span className="absolute h-0.5 w-3.5 rounded-full bg-current" />
      <span
        className={`absolute h-3.5 w-0.5 rounded-full bg-current transition-all duration-300 ${
          open ? "scale-y-0 opacity-0" : "opacity-100"
        }`}
      />
    </span>
  );
}

function FaqItem({
  question,
  answer,
  isOpen,
  onToggle,
}: {
  question: string;
  answer: string;
  isOpen: boolean;
  onToggle: () => void;
}) {
  return (
    <div
      className={`rounded-2xl border transition-colors duration-200 ${
        isOpen
          ? "border-[#6e964f]/35 bg-[#0c120a]/80"
          : "border-white/[0.08] bg-[#0a0a0a]/40 hover:border-white/[0.14] hover:bg-[#0c120a]/50"
      }`}
    >
      <button
        type="button"
        onClick={onToggle}
        aria-expanded={isOpen}
        className="flex w-full items-center justify-between gap-4 px-5 py-5 text-left sm:px-6 sm:py-[22px]"
      >
        <span
          className={`text-[15px] font-medium leading-snug transition-colors duration-200 sm:text-[16px] ${
            isOpen ? "text-white" : "text-white/90"
          }`}
        >
          {question}
        </span>
        <PlusMinusIcon open={isOpen} />
      </button>

      <div
        className={`grid transition-[grid-template-rows] duration-300 ease-in-out ${
          isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
        }`}
      >
        <div className="overflow-hidden">
          <div className="border-t border-white/[0.06] px-5 pb-5 pt-4 sm:px-6 sm:pb-6 sm:pt-4">
            <p className="text-[14px] leading-relaxed text-skadi-muted sm:text-[15px]">
              {answer}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="faq" className="section-pad bg-black">
      <div className="container-main">
        <div className="flex flex-col gap-12 lg:flex-row lg:gap-16 xl:gap-24">
          {/* Left — intro */}
          <div className="shrink-0 lg:max-w-[420px] lg:pt-2 xl:max-w-[460px]">
            <div className="badge border border-white/[0.06]">
              <span className="badge-dot" />
              FAQ
            </div>
            <h2 className="mt-5 text-[30px] font-normal leading-[1.15] tracking-[-1px] sm:text-[38px] lg:text-[42px]">
              Everything You&apos;re Wondering{" "}
              <span className="serif-italic gradient-serif">
                Before You Switch
              </span>
            </h2>
            <p className="mt-5 text-[15px] leading-relaxed text-skadi-muted sm:text-base">
              Everything founders and CXOs ask before rolling out an AI voice
              agent — security, integrations, and what happens on every call.
            </p>
          </div>

          {/* Right — accordion */}
          <div className="min-w-0 flex-1">
            <div className="flex flex-col gap-3">
              {faqs.map((faq, index) => (
                <FaqItem
                  key={faq.question}
                  question={faq.question}
                  answer={faq.answer}
                  isOpen={openIndex === index}
                  onToggle={() =>
                    setOpenIndex((current) =>
                      current === index ? null : index,
                    )
                  }
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
