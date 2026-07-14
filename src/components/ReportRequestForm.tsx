"use client";

import { FormEvent, useState } from "react";
import { useRouter } from "next/navigation";

export default function ReportRequestForm() {
  const router = useRouter();
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [jobTitle, setJobTitle] = useState("");
  const [email, setEmail] = useState("");
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
          firstName: firstName.trim(),
          lastName: lastName.trim(),
          email: email.trim(),
          jobTitle: jobTitle.trim(),
          source: "Skadi Industry Report",
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
        Get the full report
      </h3>
      <p className="mt-2 text-[14px] text-skadi-muted sm:text-[15px]">
        Enter your details and we&apos;ll send you the industry report.
      </p>

      <form className="mt-6 sm:mt-8" onSubmit={handleSubmit}>
        <div className="mb-[18px] flex flex-col gap-[18px] sm:flex-row sm:gap-4">
          <div className="form-group relative min-w-0 flex-1">
            <label htmlFor="report-firstName" className="sr-only">
              First Name
            </label>
            <input
              id="report-firstName"
              type="text"
              className="form-input"
              placeholder="John"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
              required
              disabled={status === "loading"}
              autoComplete="given-name"
            />
          </div>
          <div className="form-group relative min-w-0 flex-1">
            <label htmlFor="report-lastName" className="sr-only">
              Last Name
            </label>
            <input
              id="report-lastName"
              type="text"
              className="form-input"
              placeholder="Doe"
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
              required
              disabled={status === "loading"}
              autoComplete="family-name"
            />
          </div>
        </div>

        <div className="form-group relative mb-[18px]">
          <label htmlFor="report-jobTitle" className="sr-only">
            Job Title
          </label>
          <input
            id="report-jobTitle"
            type="text"
            className="form-input"
            placeholder="Operations Manager"
            value={jobTitle}
            onChange={(e) => setJobTitle(e.target.value)}
            required
            disabled={status === "loading"}
            autoComplete="organization-title"
          />
        </div>

        <div className="form-group relative mb-2">
          <label htmlFor="report-email" className="sr-only">
            Work Email
          </label>
          <input
            id="report-email"
            type="email"
            className="form-input"
            placeholder="you@company.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            disabled={status === "loading"}
            autoComplete="email"
          />
        </div>

        <p className="mt-4 text-[12px] leading-relaxed text-skadi-muted">
          We&apos;ll store and process this information to provide you our
          products and services. You may opt out of this at any time.
        </p>

        {status === "error" && errorMessage && (
          <p className="mt-3 text-sm text-red-400" role="alert">
            {errorMessage}
          </p>
        )}

        <button
          type="submit"
          className="btn-demo mt-5 w-full py-3.5 sm:py-4 disabled:cursor-not-allowed disabled:opacity-60"
          disabled={status === "loading"}
        >
          {status === "loading" ? "Submitting..." : "Submit"}
        </button>
      </form>
    </div>
  );
}
