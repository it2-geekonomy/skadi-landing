"use client";

import { FormEvent, useState } from "react";
import Link from "next/link";

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
      <h3 className="text-[20px] font-medium tracking-[-0.3px] text-white sm:text-[22px]">
        Stay Updated
      </h3>
      <p className="mt-2 text-[14px] leading-relaxed text-skadi-muted sm:text-[15px]">
        Get product updates, AI insights, and new feature announcements.
      </p>

      {status === "success" ? (
        <p className="mt-5 text-sm text-[#abbe9c]">
          Thanks — you&apos;re on the list.
        </p>
      ) : (
        <form className="mt-5 w-full" onSubmit={handleSubmit}>
          <label htmlFor="footer-email" className="sr-only">
            Work Email
          </label>
          <div className="flex w-full flex-col gap-3">
            <input
              id="footer-email"
              type="email"
              required
              placeholder="Work Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full rounded-lg border border-white/[0.1] bg-black/40 px-4 py-3 text-[15px] text-white placeholder:text-white/30 outline-none transition focus:border-[#6e964f]/45"
            />
            <button
              type="submit"
              className="btn-demo w-full rounded-lg px-5 py-3 text-sm font-semibold sm:w-auto sm:self-start"
            >
              Subscribe
            </button>
          </div>
        </form>
      )}

      <div className="mt-8 border-t border-white/[0.06] pt-6">
        <p className="text-[14px] text-skadi-muted">Ready to automate your calls?</p>
        <Link
          href="/demo"
          className="mt-2 inline-flex items-center gap-1 text-[15px] font-medium text-white transition-all duration-200 hover:translate-x-0.5 hover:text-[#6e964f]"
        >
          Book a Demo
          <span aria-hidden>→</span>
        </Link>
      </div>
    </div>
  );
}
