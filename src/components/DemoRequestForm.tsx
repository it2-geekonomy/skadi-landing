"use client";

import { FormEvent, useState } from "react";
import { useRouter } from "next/navigation";

export default function DemoRequestForm() {
  const router = useRouter();
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [company, setCompany] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus("loading");
    setErrorMessage("");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          firstName,
          lastName,
          email,
          phone,
          company: company.trim() || undefined,
          source: "Skadi Demo Page",
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
      <h3 className="text-[22px] font-medium text-white sm:text-[26px]">
        Book Your 15-Minutes Demo
      </h3>

      <form className="mt-6 sm:mt-8" onSubmit={handleSubmit}>
        <div className="mb-[18px] flex flex-col gap-[18px] sm:flex-row sm:gap-4">
          <div className="form-group relative min-w-0 flex-1">
            <label htmlFor="demo-firstName"></label>
            <input
              id="demo-firstName"
              type="text"
              className="form-input"
              placeholder="First Name"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
              required
              disabled={status === "loading"}
            />
          </div>
          <div className="form-group relative min-w-0 flex-1">
            <label htmlFor="demo-lastName"></label>
            <input
              id="demo-lastName"
              type="text"
              className="form-input"
              placeholder="Last Name"
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
              required
              disabled={status === "loading"}
            />
          </div>
        </div>
        <div className="form-group relative mb-[18px]">
          <label htmlFor="demo-email"></label>
          <input
            id="demo-email"
            type="email"
            className="form-input"
            placeholder="you@company.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            disabled={status === "loading"}
          />
        </div>
        <div className="form-group relative mb-[18px]">
          <label htmlFor="demo-phone"></label>
          <input
            id="demo-phone"
            type="tel"
            className="form-input"
            placeholder="+1 (555) 000-0000"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            required
            disabled={status === "loading"}
          />
        </div>
        <div className="form-group relative mb-2">
          <label htmlFor="demo-company"></label>
          <input
            id="demo-company"
            type="text"
            className="form-input"
            placeholder="Your company"
            value={company}
            onChange={(e) => setCompany(e.target.value)}
            disabled={status === "loading"}
          />
        </div>

        {status === "error" && errorMessage && (
          <p className="mt-3 text-sm text-red-400" role="alert">
            {errorMessage}
          </p>
        )}

        <button
          type="submit"
          className="btn-demo mt-4 w-full py-3.5 sm:py-4 disabled:cursor-not-allowed disabled:opacity-60"
          disabled={status === "loading"}
        >
          {status === "loading" ? "Submitting..." : "Book a Free Demo"}
        </button>
      </form>
    </div>
  );
}
