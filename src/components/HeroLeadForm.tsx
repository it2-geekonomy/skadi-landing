"use client";

import { FormEvent, useState } from "react";
import { useRouter } from "next/navigation";

export default function HeroLeadForm() {
  const router = useRouter();
  const [step, setStep] = useState<1 | 2>(1);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [company, setCompany] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");

  function handleStepOne(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setErrorMessage("");

    if (!name.trim() || !email.trim()) {
      setErrorMessage("Please enter your name and work email.");
      return;
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim())) {
      setErrorMessage("Please enter a valid work email.");
      return;
    }

    setStep(2);
  }

  async function handleStepTwo(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus("loading");
    setErrorMessage("");

    if (!phone.trim()) {
      setStatus("error");
      setErrorMessage("Please enter the best number to reach you.");
      return;
    }

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: name.trim(),
          email: email.trim(),
          phone: phone.trim(),
          company: company.trim() || undefined,
          source: "Skadi Hero Form",
        }),
      });

      const data = (await response.json()) as { error?: string };

      if (!response.ok) {
        setStatus("error");
        setErrorMessage(data.error ?? "Something went wrong. Please try again.");
        return;
      }

      router.push("/thank-you");
    } catch {
      setStatus("error");
      setErrorMessage("Something went wrong. Please try again.");
    }
  }

  return (
    <div className="w-full rounded-[18px] border border-white/10 bg-[#0a0a0a]/80 p-6 backdrop-blur-sm sm:p-8">
      {step === 1 ? (
        <>
          <h3 className="text-left text-[20px] font-medium text-white sm:text-[22px]">
            Get started
          </h3>
          <p className="mt-1.5 text-left text-[14px] text-skadi-muted">
            Name and work email — takes under 30 seconds.
          </p>

          <form className="mt-6" onSubmit={handleStepOne}>
            <div className="form-group relative mb-[18px]">
              <label htmlFor="hero-name"></label>
              <input
                id="hero-name"
                type="text"
                className="form-input"
                placeholder="Jane Doe"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
                autoComplete="name"
              />
            </div>
            <div className="form-group relative mb-2">
              <label htmlFor="hero-email"></label>
              <input
                id="hero-email"
                type="email"
                className="form-input"
                placeholder="you@company.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                autoComplete="email"
              />
            </div>

            {errorMessage && (
              <p className="mt-3 text-left text-sm text-red-400" role="alert">
                {errorMessage}
              </p>
            )}

            <button type="submit" className="btn-demo mt-4 w-full py-3.5">
              Continue
            </button>
          </form>
        </>
      ) : (
        <>
          <h3 className="text-left text-[20px] font-medium text-white sm:text-[22px]">
            Great — what&apos;s the best number to reach you?
          </h3>
          <p className="mt-1.5 text-left text-[14px] text-skadi-muted">
            We&apos;ll use this to schedule your demo.
          </p>

          <form className="mt-6" onSubmit={handleStepTwo}>
            <div className="form-group relative mb-[18px]">
              <label htmlFor="hero-phone">Phone Number</label>
              <input
                id="hero-phone"
                type="tel"
                className="form-input"
                placeholder="+1 (555) 000-0000"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                required
                disabled={status === "loading"}
                autoComplete="tel"
              />
            </div>
            <div className="form-group relative mb-2">
              <label htmlFor="hero-company">Company Name</label>
              <input
                id="hero-company"
                type="text"
                className="form-input"
                placeholder="Your company"
                value={company}
                onChange={(e) => setCompany(e.target.value)}
                disabled={status === "loading"}
                autoComplete="organization"
              />
            </div>

            {status === "error" && errorMessage && (
              <p className="mt-3 text-left text-sm text-red-400" role="alert">
                {errorMessage}
              </p>
            )}

            <button
              type="submit"
              className="btn-demo mt-4 w-full py-3.5 disabled:cursor-not-allowed disabled:opacity-60"
              disabled={status === "loading"}
            >
              {status === "loading" ? "Submitting..." : "Book My Demo"}
            </button>

            <button
              type="button"
              className="mt-3 w-full text-sm text-skadi-muted transition hover:text-white"
              onClick={() => {
                setStep(1);
                setStatus("idle");
                setErrorMessage("");
              }}
              disabled={status === "loading"}
            >
              ← Back
            </button>
          </form>
        </>
      )}
    </div>
  );
}
