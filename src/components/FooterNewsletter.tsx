"use client";

import { FormEvent, useState } from "react";

export default function FooterNewsletter() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "success">("idle");

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (!email.trim()) return;
    setStatus("success");
    setEmail("");
  }

  return (
    <div className="w-full">
      <p className="text-[11px] font-semibold uppercase tracking-[0.12em] text-white">
        Skadi Insights
      </p>
      <p className="mt-1.5 text-[13px] leading-relaxed text-skadi-muted">
        Monthly updates on AI voice for service businesses.
      </p>

      {status === "success" ? (
        <p className="mt-4 text-sm text-[#abbe9c]">
          Thanks — you&apos;re on the list.
        </p>
      ) : (
        <form className="mt-4" onSubmit={handleSubmit}>
          <label htmlFor="footer-email" className="sr-only">
            Email
          </label>
          <div className="flex gap-2">
            <input
              id="footer-email"
              type="email"
              required
              placeholder="you@company.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="min-w-0 flex-1 rounded-lg border border-white/[0.1] bg-black/40 px-3.5 py-2.5 text-sm text-white placeholder:text-white/25 outline-none transition focus:border-[#6e964f]/45"
            />
            <button
              type="submit"
              className="btn-demo shrink-0 rounded-lg px-5 py-2.5 text-sm font-semibold"
            >
              Submit
            </button>
          </div>
        </form>
      )}
    </div>
  );
}
