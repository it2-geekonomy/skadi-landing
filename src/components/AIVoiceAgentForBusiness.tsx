"use client";

import Image from "next/image";
import { FormEvent, useState } from "react";

const highlights = [
  "Never miss an inbound call",
  "Qualify every lead automatically",
  "Book appointments 24/7",
];

const glassCard =
  "rounded-3xl border border-[#6e964f]/30 bg-[rgba(8,14,7,0.55)] shadow-[0_12px_48px_rgba(0,0,0,0.45),0_0_24px_rgba(110,150,79,0.1)] backdrop-blur-md";

export default function AIVoiceAgentForBusiness() {
  const [phone, setPhone] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">(
    "idle",
  );
  const [message, setMessage] = useState("");

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus("loading");
    setMessage("");

    try {
      const response = await fetch("/api/retell/call", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ phone: phone.trim() }),
      });

      const data = (await response.json()) as {
        error?: string;
        message?: string;
      };

      if (!response.ok) {
        setStatus("error");
        setMessage(data.error ?? "Could not start the call. Please try again.");
        return;
      }

      setStatus("success");
      setMessage(
        data.message ?? "Skadi is calling you now. Please answer your phone.",
      );
    } catch {
      setStatus("error");
      setMessage("Something went wrong. Please try again.");
    }
  }

  return (
    <section
      id="live-demo"
      className="relative overflow-hidden section-pad text-white"
    >
      <div className="pointer-events-none absolute inset-0 bg-black" />
      <div
        className="pointer-events-none absolute inset-0 opacity-25"
        aria-hidden="true"
      >
        <Image src="/images/v96_465.png" alt="" fill className="object-cover" />
      </div>
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse 60% 50% at 50% 40%, rgba(110,150,79,0.14) 0%, transparent 70%)",
        }}
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute inset-x-0 bottom-0 h-40"
        style={{
          background:
            "linear-gradient(180deg, transparent 0%, rgba(8,15,27,0.95) 60%, rgba(0,0,0,1) 100%)",
        }}
        aria-hidden="true"
      />

      <div className="container-main relative z-[1]">
        <div className="mx-auto mb-12 max-w-3xl text-center sm:mb-14">
          <div className="badge mx-auto uppercase tracking-wide">
            <span className="badge-dot" />
            AI Voice Agent for Business · Live 24/7
          </div>
          <h2 className="mt-5 text-[30px] font-normal leading-[1.15] tracking-[-1px] sm:text-[38px] lg:text-[44px]">
            Hear{" "}
            <span className="serif-italic gradient-serif">Skadi in action.</span>
          </h2>
          <p className="mx-auto mt-4 max-w-[560px] text-[15px] leading-relaxed text-skadi-muted sm:text-base">
            Enter your number and our AI call automation agent will ring you in
            seconds — the same experience your customers get, 24/7.
          </p>
        </div>

        <div className="grid items-stretch gap-10 lg:grid-cols-2 lg:gap-12 xl:gap-16">
          <div className={`${glassCard} flex flex-col p-6 sm:p-8 lg:p-10`}>
            <p className="text-[11px] font-semibold uppercase tracking-[0.14em] text-[#abbe9c]">
              Live demo
            </p>
            <h3 className="mt-3 text-[32px] font-bold uppercase leading-none tracking-tight text-[#6e964f] sm:text-[40px]">
              Skadi
            </h3>
            <p className="mt-2 text-xs font-semibold uppercase tracking-[0.2em] text-white/45">
              Always on. Always closing.
            </p>

            <p className="mt-6 text-[15px] leading-relaxed text-white/75 sm:text-base">
              Every inbound call is answered instantly, qualified intelligently,
              and converted into booked appointments, so your team can focus on
              closing, not chasing.
            </p>

            <form
              className="mt-8 flex w-full flex-col gap-3"
              onSubmit={handleSubmit}
            >
              <label
                htmlFor="skadi-demo-phone"
                className="text-xs font-medium uppercase tracking-[0.12em] text-white/50"
              >
                Your US phone number
              </label>
              <div className="flex flex-col gap-3 sm:flex-row sm:items-stretch">
                <div className="flex min-w-0 flex-1 items-stretch overflow-hidden rounded-full border border-white/10 bg-white/5 transition-colors focus-within:border-[#6e964f]">
                  <span className="flex shrink-0 items-center border-r border-white/10 px-4 py-3.5 text-sm text-white/60">
                    +1
                  </span>
                  <input
                    id="skadi-demo-phone"
                    type="tel"
                    placeholder="(555) 123-4567"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    required
                    disabled={status === "loading"}
                    autoComplete="tel-national"
                    className="min-w-0 flex-1 bg-transparent px-4 py-3.5 text-sm text-white placeholder-white/40 outline-none disabled:opacity-60"
                  />
                </div>
                <button
                  type="submit"
                  className="btn-demo shrink-0 px-8 py-3.5 text-sm uppercase tracking-wider disabled:cursor-not-allowed disabled:opacity-60"
                  disabled={status === "loading"}
                >
                  {status === "loading" ? "Calling..." : "Connect"}
                </button>
              </div>
            </form>

            {message && (
              <p
                className={`mt-4 text-sm ${
                  status === "success" ? "text-[#abbe9c]" : "text-red-400"
                }`}
                role={status === "error" ? "alert" : "status"}
              >
                {message}
              </p>
            )}

            <div className="mt-8 border-t border-white/[0.08] pt-8">
              <p className="text-[11px] font-semibold uppercase tracking-[0.14em] text-[#abbe9c]">
                Benefits
              </p>
              <ul className="mt-4 flex flex-col gap-3">
              {highlights.map((item) => (
                <li
                  key={item}
                  className="flex items-start gap-3 text-[14px] leading-snug text-white/70"
                >
                  <span
                    className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[rgba(110,150,79,0.15)]"
                    aria-hidden="true"
                  >
                    <svg
                      viewBox="0 0 12 12"
                      className="h-3 w-3 text-[#abbe9c]"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                    >
                      <path d="M2 6l3 3 5-5" />
                    </svg>
                  </span>
                  {item}
                </li>
              ))}
              </ul>
            </div>
          </div>

          <div className="relative flex min-h-[280px] flex-col justify-center lg:min-h-0">
            <div
              className="pointer-events-none absolute -inset-4 rounded-[32px] opacity-60 blur-2xl sm:-inset-6"
              style={{
                background:
                  "radial-gradient(ellipse 80% 70% at 50% 50%, rgba(110,150,79,0.22) 0%, transparent 72%)",
              }}
              aria-hidden="true"
            />

            <div className="relative overflow-hidden rounded-3xl border border-[#6e964f]/30 shadow-[0_20px_60px_rgba(0,0,0,0.5)]">
              <div className="relative aspect-[16/10] w-full">
                <Image
                  src="/images/skadi-ai-desk-interface.png"
                  alt="Skadi AI voice agent interface on laptop and phone during an active call"
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover object-center"
                  priority={false}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
